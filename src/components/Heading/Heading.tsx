import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { HeadingProps } from "./Heading.types";
import { AllUiContext } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiCssHOC";

const Heading: FC<HeadingProps> = forwardRef((props) => {
  const {
    children,
    className,
    style,
    as,
    background,
    lineHeight,
    fontColor,
    fontFamily,
    fontSize,
    fontWeight,
  } = props;
  const context = useContext(AllUiContext);
  let theme: Theme = context?.theme || defaultTheme;

  let heading = styled.h1;

  if (as === "h2") heading = styled.h2;
  if (as === "h3") heading = styled.h3;
  if (as === "h4") heading = styled.h4;
  if (as === "h5") heading = styled.h5;
  if (as === "h6") heading = styled.h6;

  // ---------BACKGROUND------------------//
  // let background: string = "#fff";
  // if (theme.background.type === "gradient") {
  //   let gradient: any =
  //     theme[theme.background.type + "s"][theme.background.which];
  //   let colors: string = "";
  //   gradient.colors.map(
  //     (color: { which: string; op: string }, index: number) => {
  //       colors += `${theme.colors[color.which] || color.which} ${color.op}${
  //         index === gradient.colors.length - 1 ? "" : ", "
  //       }`;
  //     }
  //   );
  //   background = `${gradient.type}-gradient(${gradient.deg}deg, ${colors})`;
  // } else {
  //   background = theme[theme.background.type + "s"][theme.background.which];
  // }

  // ---------FONT FAMILY------------------//

  const HeadingTag = heading`
    ${
      theme.headings[as].fontFamily
        ? "font-family:" + theme.headings[as].fontFamily
        : null
    };
    color: ${theme.colors[theme.fontColor] || theme.fontColor};
    font-weight: ${theme.headings[as].fontWeight};
    
    line-height: ${theme.headings[as].lineHeight};
    ${
      theme.headings[as].letterSpacing
        ? "letter-spacing:" + theme.headings[as].letterSpacing
        : null
    };
    background-image: ${background};
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
