import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { InputProps } from "./Input.types";
import { AllUiContext, useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";

const Input: FC<InputProps> = forwardRef((props) => {
  const { children, className, style, type, background, fontColor } = props;
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

  // ---------FONT COLOR------------------//
  let fontColorFinal: string = "";

  if (fontColor)
    fontColorFinal = `color: ${theme.colors[fontColor] || fontColor}`;

  // ---------BACKGROUND------------------//
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

    ${fontColorFinal ? fontColorFinal : null};
    ${backgroundFinal ? backgroundFinal : null};
  `;

  return (
    <InputTag
      {...props}
      type={type}
      className={`${className ? "input " + className : " input"}`}
      style={style || {}}
    >
      {children}
    </InputTag>
  );
});

export default AllUiCssHOC(Input);
