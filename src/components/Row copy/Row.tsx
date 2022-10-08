import React, { FC, useContext, forwardRef, useEffect } from "react";
import styled from "styled-components";
import { RowProps } from "./Row.types";
import { AllUiContext, useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import * as Utils from "../Utils";
import _ from "lodash";

const Row: FC<RowProps> = forwardRef((props) => {
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

  const Div = styled.div`
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
    <Div
      {...props}
      className={`${className ? "row " + className : "row"}`}
      style={style || {}}
    >
      {children}
    </Div>
  );
});

export default AllUiCssHOC(Row);
