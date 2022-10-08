import _ from "lodash";
import { Theme } from "./AllUiProvider/AllUiProvider.types";

export const getBackground = (background: any, theme: Theme) => {
  let backgroundFinal: string = "";

  if (background && background.type === "color") {
    backgroundFinal = `background: ${
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

export const getShadow = (shadow: string, theme: Theme) => {
  return theme.shadows[shadow];
};

export const getTransition = (transition: any, theme: Theme) => {
  return theme.transitions[transition];
};

export const getHoverOrFocus = (which: string, prop: any, theme: Theme) => {
  let styleFinal: string = "";

  if (prop && !_.isEmpty(prop)) {
    styleFinal = `&:${which} {`;
    if (prop.background) {
      styleFinal += `${getBackground(prop.background, theme)}; `;
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
