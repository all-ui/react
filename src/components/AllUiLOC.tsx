import React, { FC, forwardRef } from "react";
import "@allui/css/dist/allui.css";

import styled, { css } from "styled-components";
import { useTheme } from "./AllUiProvider";
import { defaultTheme, Theme } from "./AllUiProvider/AllUiProvider.types";
import * as Utils from "./Utils";
import { AllUiLOCProps } from "./AllUiLOC.types";

const AllUiCommon: FC<AllUiLOCProps> = (props: AllUiLOCProps) => {
  const {
    children,
    className,
    style,
    type,
    background,
    backgroundColor,
    hover,
    focus,
    fontColor,
    transition,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    width,
    height,
    padding,
    border,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    borderRadius,
    as,
    tag,
    theme,
    setTheme,
    baseClassNames,
    animation,
    shadow,
  } = props;
  // Font Szie needs to be rethinked over whether to be inherited or common styled
  const Tag = tag`
    ${Utils.getInheritableStyles("font-family", fontFamily, theme) || null};
    
    ${Utils.getInheritableStyles("font-weight", fontWeight, theme) || null};
    ${Utils.getInheritableStyles("line-height", lineHeight, theme) || null};
    ${
      Utils.getInheritableStyles("letter-spacing", letterSpacing, theme) || null
    };
    ${Utils.getFontColor(fontColor, theme) || null};

    ${Utils.getCommonStyles("width", width, theme) || null};
    ${Utils.getCommonStyles("height", height, theme) || null};
    ${Utils.getCommonStyles("padding", padding, theme) || null};
    ${Utils.getCommonStyles("font-size", fontSize, theme) || null};
    ${Utils.getCommonStyles("border", border, theme) || null};
    ${Utils.getCommonStyles("border", border, theme) || null};
    ${Utils.getCommonStyles("border-top", borderTop, theme) || null};
    ${Utils.getCommonStyles("border-bottom", borderBottom, theme) || null};
    ${Utils.getCommonStyles("border-left", borderLeft, theme) || null};
    ${Utils.getCommonStyles("border-right", borderRight, theme) || null};
    ${Utils.getCommonStyles("border-radius", borderRadius, theme) || null};
    ${Utils.getShadow(shadow, theme) || null};
    ${Utils.getTransition(transition, theme) || null};
    ${Utils.getAnimation(animation, theme) || null};

    ${Utils.getBackground("background", background, theme) || null};
    ${Utils.getBackground("background-color", backgroundColor, theme) || null};
    ${Utils.getHoverOrFocus("hover", hover, theme) || null};
    ${Utils.getHoverOrFocus("focus", focus, theme) || null};
    
  `;

  return (
    <Tag
      {...props}
      className={`${
        className
          ? ((baseClassNames || " ") + " " + className).trim()
          : (baseClassNames || " ").trim()
      }`}
      style={style || {}}
    >
      {children}
    </Tag>
  );
};

export default AllUiCommon;
