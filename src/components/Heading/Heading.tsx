import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { HeadingProps } from "./Heading.types";
import { AllUiContext } from "../AllUiProvider";
import { defaultTheme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiCssHOC";

const Heading: FC<HeadingProps> = forwardRef((props) => {
  const { children, className, style, as } = props;
  const context = useContext(AllUiContext);
  const theme: any = context?.theme;

  let heading = styled.h1;

  if (as === "h2") heading = styled.h2;
  if (as === "h3") heading = styled.h3;
  if (as === "h4") heading = styled.h4;
  if (as === "h5") heading = styled.h5;
  if (as === "h6") heading = styled.h6;

  const HeadingTag = heading`
    background-color: ${
      theme
        ? theme.colors[theme.background] || theme.background
        : defaultTheme.colors[defaultTheme.background] ||
          defaultTheme.background
    };
    color: ${
      theme
        ? theme.colors[theme.fontColor] || theme.fontColor
        : defaultTheme.colors[defaultTheme.fontColor] || defaultTheme.fontColor
    };
  `;

  let propsCopy = JSON.parse(JSON.stringify(props));
  delete propsCopy.as;

  return (
    <HeadingTag
      {...propsCopy}
      className={`${className ? "btn " + className : "btn"}`}
      style={style || {}}
    >
      {children}
    </HeadingTag>
  );
});

export default AllUiCssHOC(Heading);
