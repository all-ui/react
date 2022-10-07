import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { IconProps } from "./Icon.types";
import { AllUiContext, useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";

const Icon: FC<IconProps> = forwardRef((props) => {
  const {
    className,
    style,
    type,
    background,
    hover,
    focus,
    fontColor,
    transition,
    fontFamily,
    fontWeight,
    lineHeight,
    letterSpacing,
    padding,
    border,
    borderRadius,
  } = props;
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const getCommonStyles = (which: string, prop: any) => {
    let final: string = "";
    if (prop) final = `${which}: ${prop}`;

    return final;
  };

  const getBackground = (background: any) => {
    let backgroundFinal: string = "";

    if (background && background.type === "color") {
      backgroundFinal = `background: ${
        theme[background.type + "s"][background.which] || background.which
      }`;
    }

    if (background && background.type === "gradient") {
      let gradient: any = theme[background.type + "s"][background.which];
      let colors: string = "";
      gradient.colors.map(
        (color: { which: string; op: string }, index: number) => {
          colors += `${theme.colors[color.which] || color.which} ${color.op}${
            index === gradient.colors.length - 1 ? "" : ", "
          }`;
        }
      );
      backgroundFinal = `background-image: ${gradient.type}-gradient(${gradient.deg}deg, ${colors})`;
    }
    return backgroundFinal;
  };

  const getShadow = (shadow: string) => {
    return theme.shadows[shadow];
  };

  const getTransition = (transition: any) => {
    return theme.transitions[transition];
  };

  const getFontColor = (fontColor: any) => {
    let fontColorFinal: string = "";

    if (fontColor)
      fontColorFinal = `color: ${theme.colors[fontColor] || fontColor}`;

    return fontColorFinal;
  };

  const getHoverOrFocus = (which: string, prop: any) => {
    let styleFinal: string = "";

    if (prop && !_.isEmpty(prop)) {
      styleFinal = `&:${which} {`;
      if (prop.background) {
        styleFinal += `${getBackground(prop.background)}; `;
      }
      if (prop.shadow) {
        styleFinal += `${getShadow(prop.shadow)}; `;
      }
      _.keys(prop).map((key: string) => {
        if (!["background", "shadow"].includes(key)) {
          styleFinal += `${getCommonStyles(_.kebabCase(key), prop[key])}; `;
        }
      });
      styleFinal += " }";
    }
    return styleFinal;
  };

  const IconTag = styled.i`
    ${getCommonStyles("font-family", fontFamily) || null};
    ${getCommonStyles("font-size", fontFamily) || null};
    ${getCommonStyles("font-weight", fontWeight) || null};
    ${getCommonStyles("line-height", lineHeight) || null};
    ${getCommonStyles("letter-spacing", letterSpacing) || null};

    ${getCommonStyles("padding", padding) || null};
    ${getCommonStyles("border", border) || null};
    ${getCommonStyles("border-radius", borderRadius) || null};
    ${getTransition(transition) || null};

    ${getBackground(background) || null};
    ${getHoverOrFocus("hover", hover) || null};
    ${getHoverOrFocus("focus", focus) || null};
    ${getFontColor(fontColor) || null}
  `;

  return (
    <IconTag
      {...props}
      className={`${className ? className : ""}`}
      style={style || {}}
    />
  );
});

export default AllUiCssHOC(Icon);
