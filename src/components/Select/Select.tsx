import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { SelectProps } from "./Select.types";

const Select: FC<SelectProps> = forwardRef((props: SelectProps) => {
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
    baseClassNames,
    animation,
    shadow,
  } = props;
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  return (
    <div className="select-box">
      <div className="selected-box">Select</div>
      <div className="dropdown"></div>
    </div>
  );
});

export default AllUiCssHOC(Select);
