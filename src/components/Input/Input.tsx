import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { InputProps } from "./Input.types";
import { AllUiContext, useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";

const Input: FC<InputProps> = forwardRef((props) => {
  const {
    children,
    className,
    style,
    type,
    background,
    hover,
    focus,
    fontColor,
    withIcon,
  } = props;
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const getCommonStyles = (which: string) => {
    let kebab: string = _.kebabCase(which);
    let camel: string = _.camelCase(which);

    let prop: any = props[camel];

    let final: string = "";
    if (prop) final = `${kebab}: ${prop}`;

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

  const getHoverOrFocus = (which: string, prop: any) => {
    let styleFinal: string = "";

    if (prop && !_.isEmpty(prop)) {
      styleFinal = `&:${which} {`;
      if (prop.background) {
        styleFinal += `${getBackground(prop.background)}; `;
      }
      if (prop.shadow) {
        styleFinal += `${theme.shadows[prop.shadow]}; `;
      }
      styleFinal += " }";
    }
    return styleFinal;
  };

  // ---------FONT COLOR------------------//
  let fontColorFinal: string = "";

  if (fontColor)
    fontColorFinal = `color: ${theme.colors[fontColor] || fontColor}`;

  console.log("hoverFinal", getHoverOrFocus("focus", focus), theme);

  const InputTag = styled.input`
    ${getCommonStyles("font family") || null};
    ${getCommonStyles("font size") || null};
    ${getCommonStyles("font weight") || null};
    ${getCommonStyles("line height") || null};
    ${getCommonStyles("letter spacing") || null};

    ${getCommonStyles("padding") || null};
    ${getCommonStyles("border") || null};
    ${getCommonStyles("border radius") || null};
    ${getCommonStyles("transition") || null};

    ${getBackground(background) || null};
    ${getHoverOrFocus("hover", hover) || null};
    ${getHoverOrFocus("focus", focus) || null};

    ${fontColorFinal ? fontColorFinal : null};
  `;

  if (withIcon) {
    return (
      <div className="input-with-icon full-width">
        <InputTag
          {...props}
          type={type}
          className={`${className ? "input " + className : " input"}`}
          style={style || {}}
        ></InputTag>
        <span className="">{withIcon}</span>
      </div>
    );
  }

  return (
    <InputTag
      {...props}
      type={type}
      className={`${className ? "input " + className : " input"}`}
      style={style || {}}
    ></InputTag>
  );
});

export default AllUiCssHOC(Input);
