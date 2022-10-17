import _ from "lodash";
import { Theme } from "./AllUiProvider/AllUiProvider.types";

export const getBackground = (which: string, background: any, theme: Theme) => {
  let backgroundFinal: string = "";

  if (background && background.type === "color") {
    backgroundFinal = `${which}: ${
      theme[background.type + "s"][background.which] || background.which
    }`;
  }

  if (background && background.type === "gradient") {
    let gradient: any = theme[background.type + "s"][background.which];
    let colors: string = "";
    gradient.colors.map(
      (color: { which: string; op: string }, index: number) => {
        colors += `${theme.colors[color.which] || color.which} ${color.op}${
          index === gradient.colors.length - 1 ? "" : ", "
        }`;
      }
    );
    backgroundFinal = `background-image: ${gradient.type}-gradient(${gradient.deg}deg, ${colors})`;
  }
  return backgroundFinal;
};

export const getCommonStyles = (which: string, prop: any, theme: Theme) => {
  let final: string = "";
  if (prop) final = `${which}: ${prop}`;

  return final;
};

export const getInheritableStyles = (
  which: string,
  prop: any,
  theme: Theme
) => {
  return `${which}: ${prop || theme[_.camelCase(which)]}`;
};

export const getFontColor = (fontColor: any, theme: Theme) => {
  let fontColorFinal: string = `color: ${
    theme.colors[theme.fontColor] || theme.fontColor
  }`;

  if (fontColor)
    fontColorFinal = `color: ${theme.colors[fontColor] || fontColor}`;

  return fontColorFinal;
};

export const getShadow = (shadow: any, theme: Theme) => {
  return theme.shadows[shadow];
};

export const getTransition = (transition: any, theme: Theme) => {
  return theme.transitions[transition];
};

export const getAnimation = (animation: any, theme: Theme) => {
  if (animation && animation.length > 0) {
    let animations: any = animation.split(" ");

    let finalAnimation: string = "animation: ";
    console.log("animations", animations);
    animations.map((a: any, index: number) => {
      finalAnimation +=
        index !== animations.length - 1
          ? `${theme.animations[a]}, `
          : `${theme.animations[a]}`;
    });
    return finalAnimation;
  }
};

export const getHoverOrFocus = (which: string, prop: any, theme: Theme) => {
  let styleFinal: string = "";

  if (prop && !_.isEmpty(prop)) {
    styleFinal = `&:${which} {`;
    if (prop.background) {
      styleFinal += `${getBackground("background", prop.background, theme)}; `;
    }
    if (prop.shadow) {
      styleFinal += `${getShadow(prop.shadow, theme)}; `;
    }
    _.keys(prop).map((key: string) => {
      if (!["background", "shadow"].includes(key)) {
        styleFinal += `${getCommonStyles(
          _.kebabCase(key),
          prop[key],
          theme
        )}; `;
      }
    });
    styleFinal += " }";
  }
  return styleFinal;
};

export const Common = (props: any) => {
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
    innerRef,
  } = props;
  return `
  ${fontFamily ? getInheritableStyles("font-family", fontFamily, theme) : ""};
  
  ${fontWeight ? getInheritableStyles("font-weight", fontWeight, theme) : ""};
  ${lineHeight ? getInheritableStyles("line-height", lineHeight, theme) : ""};
  ${
    letterSpacing
      ? getInheritableStyles("letter-spacing", letterSpacing, theme)
      : ""
  };
  ${fontColor ? getFontColor(fontColor, theme) : ""};

  ${width ? getCommonStyles("width", width, theme) : ""};
  ${height ? getCommonStyles("height", height, theme) : ""};
  ${padding ? getCommonStyles("padding", padding, theme) : ""};
  ${fontSize ? getCommonStyles("font-size", fontSize, theme) : ""};
  ${border ? getCommonStyles("border", border, theme) : ""};

  ${borderTop ? getCommonStyles("border-top", borderTop, theme) : ""};
  ${borderBottom ? getCommonStyles("border-bottom", borderBottom, theme) : ""};
  ${borderLeft ? getCommonStyles("border-left", borderLeft, theme) : ""};
  ${borderRight ? getCommonStyles("border-right", borderRight, theme) : ""};
  ${borderRadius ? getCommonStyles("border-radius", borderRadius, theme) : ""};
  ${shadow ? getShadow(shadow, theme) : ""};
  ${transition ? getTransition(transition, theme) : ""};
  ${animation ? getAnimation(animation, theme) : ""};

  ${background ? getBackground("background", background, theme) : ""};
  ${
    backgroundColor
      ? getBackground("background-color", backgroundColor, theme)
      : ""
  };
  ${hover ? getHoverOrFocus("hover", hover, theme) : ""};
  ${focus ? getHoverOrFocus("focus", focus, theme) : ""};
`;
};
