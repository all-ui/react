import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { ButtonRawProps } from "./ButtonRaw.types";
import { AllUiContext } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import _ from "lodash";

const ButtonRaw: FC<ButtonRawProps> = forwardRef((props) => {
  const { children, className, style, fontColor, background } = props;
  const context = useContext(AllUiContext);
  let theme: Theme = context?.theme || defaultTheme;

  const getCommonStyles = (which: string) => {
    let kebab: string = _.kebabCase(which);
    let camel: string = _.camelCase(which);

    let prop: any = props[camel];

    let final: string = camel !== "fontSize" ? `${kebab}: ${theme[camel]}` : "";
    if (prop) final = `${kebab}: ${prop}`;

    return final;
  };

  // ---------FONT COLOR------------------//
  let fontColorFinal: string = `color: ${
    theme.colors[theme.fontColor] || theme.fontColor
  }`;

  if (fontColor)
    fontColorFinal = `color: ${theme.colors[fontColor] || fontColor}`;

  // ---------BACKGROUND------------------//
  let backgroundFinal: string = "#fff";
  if (theme.background.type === "gradient") {
    let gradient: any =
      theme[theme.background.type + "s"][theme.background.which];
    let colors: string = "";
    gradient.colors.map(
      (color: { which: string; op: string }, index: number) => {
        colors += `${theme.colors[color.which] || color.which} ${color.op}${
          index === gradient.colors.length - 1 ? "" : ", "
        }`;
      }
    );
    backgroundFinal = `background-image: ${gradient.type}-gradient(${gradient.deg}deg, ${colors})`;
  } else {
    backgroundFinal =
      theme[theme.background.type + "s"][theme.background.which];
  }

  if (theme.background.type === "color") {
    backgroundFinal = `background: ${
      theme[theme.background.type + "s"][theme.background.which] ||
      theme.background.which
    }`;
  }

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

  const Button = styled.button`
    ${getCommonStyles("font family") || null};
    ${getCommonStyles("font size") || null};
    ${getCommonStyles("font weight") || null};
    ${getCommonStyles("line height") || null};
    ${getCommonStyles("letter spacing") || null};
    ${fontColorFinal ? fontColorFinal : null};
    ${backgroundFinal ? backgroundFinal : null};
  `;
  return (
    <Button
      {...props}
      className={`${className ? "btn " + className : "btn"}`}
      style={style || {}}
    >
      {children}
    </Button>
  );
});

export default AllUiCssHOC(ButtonRaw);
