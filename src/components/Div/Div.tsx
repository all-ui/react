import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { DivProps } from "./Div.types";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import * as Utils from "../Utils";

const Div: FC<DivProps> = forwardRef((props) => {
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
  } = props;
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const DivTag = styled.div`
    ${Utils.getCommonStyles("font-family", fontFamily, theme) || null};
    ${Utils.getCommonStyles("font-size", fontFamily, theme) || null};
    ${Utils.getCommonStyles("font-weight", fontWeight, theme) || null};
    ${Utils.getCommonStyles("line-height", lineHeight, theme) || null};
    ${Utils.getCommonStyles("letter-spacing", letterSpacing, theme) || null};

    ${Utils.getCommonStyles("padding", padding, theme) || null};
    ${Utils.getCommonStyles("border", border, theme) || null};
    ${Utils.getCommonStyles("border-radius", borderRadius, theme) || null};
    ${Utils.getTransition(transition, theme) || null};

    ${Utils.getBackground(background, theme) || null};
    ${Utils.getHoverOrFocus("hover", hover, theme) || null};
    ${Utils.getHoverOrFocus("focus", focus, theme) || null};
    ${Utils.getFontColor(fontColor, theme) || null}
  `;

  return (
    <DivTag
      {...props}
      className={`${className ? className : ""}`}
      style={style || {}}
    >
      {children}
    </DivTag>
  );
});

export default AllUiCssHOC(Div);
