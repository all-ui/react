import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { InputProps } from "./Input.types";
import { AllUiContext, useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import * as Utils from "../Utils";

const Input: FC<InputProps> = forwardRef((props) => {
  const {
    className,
    style,
    type,
    background,
    hover,
    focus,
    fontColor,
    withIcon,
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

  const InputTag = styled.input`
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
  console.log("theme", theme);
  if (withIcon) {
    return (
      <div className="input-with-icon full-width">
        <InputTag
          {...props}
          type={type}
          className={`${className ? "input " + className : " input"}`}
          style={style || {}}
        ></InputTag>
        <span className="">{withIcon}</span>
      </div>
    );
  }

  return (
    <InputTag
      {...props}
      type={type}
      className={`${className ? "input " + className : " input"}`}
      style={style || {}}
    />
  );
});

export default AllUiCssHOC(Input);
