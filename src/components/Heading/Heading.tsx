import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { HeadingProps } from "./Heading.types";
import { AllUiContext } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiCssHOC";

const Heading: FC<HeadingProps> = forwardRef((props) => {
  const { children, className, style, as, background, fontColor } = props;
  const context = useContext(AllUiContext);
  let theme: Theme = context?.theme || defaultTheme;

  let heading = styled.h1;

  if (as === "h2") heading = styled.h2;
  if (as === "h3") heading = styled.h3;
  if (as === "h4") heading = styled.h4;
  if (as === "h5") heading = styled.h5;
  if (as === "h6") heading = styled.h6;

  const getCommonStyles = (which: string) => {
    let kebab: string = _.kebabCase(which);
    let camel: string = _.camelCase(which);

    let prop: any = props[camel];

    let final: string = camel !== "fontSize" ? `${kebab}: ${theme[camel]}` : "";
    if (theme.headings[as][camel]) {
      final = `${kebab}: ${theme.headings[as][camel]}`;
    }
    if (prop) final = `${kebab}: ${prop}`;

    return final;
  };

  // ---------FONT COLOR------------------//
  let fontColorFinal: string = `color: ${
    theme.colors[theme.fontColor] || theme.fontColor
  }`;

  if (theme.headings[as].fontColor) {
    fontColorFinal = `color: ${
      theme.colors[theme.headings[as].fontColor] || theme.headings[as].fontColor
    }`;
  }
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

  const HeadingTag = heading`
    ${getCommonStyles("font family") || null};
    ${getCommonStyles("font size") || null};
    ${getCommonStyles("font weight") || null};
    ${getCommonStyles("line height") || null};
    ${getCommonStyles("letter spacing") || null};
    ${fontColorFinal ? fontColorFinal : null};
    ${backgroundFinal ? backgroundFinal : null};
  `;
  let propsCopy = JSON.parse(JSON.stringify(props));
  delete propsCopy.as;

  return (
    <HeadingTag
      {...propsCopy}
      className={`${className ? className : ""}`}
      style={style || {}}
    >
      {children}
    </HeadingTag>
  );
});

export default AllUiCssHOC(Heading);
