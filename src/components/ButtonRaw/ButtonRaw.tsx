import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { ButtonRawProps } from "./ButtonRaw.types";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import _ from "lodash";
import * as Utils from "../Utils";

const ButtonRaw: FC<ButtonRawProps> = forwardRef((props) => {
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

  const Button = styled.button`
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
