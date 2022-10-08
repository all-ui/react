import React, { FC, forwardRef } from "react";
import "@allui/css/dist/allui.css";
import { AllUiHOCProps } from "./AllUiHOC.types";

import styled, { css } from "styled-components";
import { useTheme } from "./AllUiProvider";
import {
  defaultTheme,
  Theme,
  CommonComponentProps,
} from "./AllUiProvider/AllUiProvider.types";
import * as Utils from "./Utils";

const AllUiCommon: FC<CommonComponentProps> = (props: CommonComponentProps) => {
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
    tag,
    theme,
    setTheme,
  } = props;

  const Tag = tag`
    ${Utils.getInheritableStyles("font-family", fontFamily, theme) || null};
    ${Utils.getInheritableStyles("font-size", fontFamily, theme) || null};
    ${Utils.getInheritableStyles("font-weight", fontWeight, theme) || null};
    ${Utils.getInheritableStyles("line-height", lineHeight, theme) || null};
    ${
      Utils.getInheritableStyles("letter-spacing", letterSpacing, theme) || null
    };

    ${Utils.getCommonStyles("padding", padding, theme) || null};
    ${Utils.getCommonStyles("border", border, theme) || null};
    ${Utils.getCommonStyles("border-radius", borderRadius, theme) || null};
    ${Utils.getTransition(transition, theme) || null};

    ${Utils.getBackground(background, theme) || null};
    ${Utils.getHoverOrFocus("hover", hover, theme) || null};
    ${Utils.getHoverOrFocus("focus", focus, theme) || null};
    ${Utils.getFontColor(fontColor, theme) || null};
  `;

  return (
    <Tag
      {...props}
      className={`${
        className ? "container-fluid " + className : "container-fluid"
      }`}
      style={style || {}}
    >
      {children}
    </Tag>
  );
};

export default AllUiCommon;
