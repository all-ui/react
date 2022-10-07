import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { HeadingProps } from "./Heading.types";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import * as Utils from "../Utils";

const Heading: FC<HeadingProps> = forwardRef((props) => {
  const {
    children,
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
    as,
    fontSize,
  } = props;
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  let heading = styled.h1;

  if (as === "h2") heading = styled.h2;
  if (as === "h3") heading = styled.h3;
  if (as === "h4") heading = styled.h4;
  if (as === "h5") heading = styled.h5;
  if (as === "h6") heading = styled.h6;

  // const getCommonStyles = (which: string) => {
  //   let kebab: string = _.kebabCase(which);
  //   let camel: string = _.camelCase(which);

  //   let prop: any = props[camel];

  //   let final: string = camel !== "fontSize" ? `${kebab}: ${theme[camel]}` : "";
  //   if (theme.headings[as][camel]) {
  //     final = `${kebab}: ${theme.headings[as][camel]}`;
  //   }
  //   if (prop) final = `${kebab}: ${prop}`;

  //   return final;
  // };

  const getCommonStyles = (which: string, prop: any) => {
    let final: string = "";
    if (theme.headings[as][_.camelCase(which)]) {
      final = `${which}: ${theme.headings[as][_.camelCase(which)]}`;
    }
    if (prop) final = `${which}: ${prop}`;

    return final;
  };

  const getFontColor = (fontColor: any) => {
    let fontColorFinal: string = `color: ${
      theme.colors[theme.fontColor] || theme.fontColor
    }`;

    if (theme.headings[as].fontColor) {
      fontColorFinal = `color: ${
        theme.colors[theme.headings[as].fontColor] ||
        theme.headings[as].fontColor
      }`;
    }

    if (fontColor)
      fontColorFinal = `color: ${theme.colors[fontColor] || fontColor}`;
    return fontColorFinal;
  };

  const HeadingTag = heading`
    ${getCommonStyles("font-family", fontFamily) || null};
    ${getCommonStyles("font-size", fontSize) || null};
    ${getCommonStyles("font-weight", fontWeight) || null};
    ${getCommonStyles("line-height", lineHeight) || null};
    ${getCommonStyles("letter-spacing", letterSpacing) || null};
    ${getFontColor(fontColor) || null};
    ${Utils.getBackground(background, theme) || null};
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
