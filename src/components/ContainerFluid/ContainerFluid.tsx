import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { ContainerFluidProps } from "./ContainerFluid.types";
import { AllUiContext } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiCssHOC";

const ContainerFluid: FC<ContainerFluidProps> = forwardRef((props) => {
  const { children, className, style } = props;
  const context = useContext(AllUiContext);
  let theme: Theme = context?.theme || defaultTheme;
  let background: string = "#fff";
  if (theme.background.type === "gradient") {
    let gradient: any =
      theme[theme.background.type + "s"][theme.background.which];
    let colors: string = "";
    gradient.colors.map(
      (color: { which: string; op: string }, index: number) => {
        colors += `${theme.colors[color.which] || color.which} ${color.op}${
          index === gradient.colors.length - 1 ? "" : ", "
        }`;
      }
    );
    background = `${gradient.type}-gradient(${gradient.deg}deg, ${colors})`;
  } else {
    background = theme[theme.background.type + "s"][theme.background.which];
  }
  const Div = styled.div`
    font-family: ${theme.fontFamily.join(",")};
    color: ${theme.colors[theme.fontColor] || theme.fontColor};
    font-weight: ${theme.fontWeight};
    font-size: ${theme.fontSize};
    line-height: ${theme.lineHeight};
    background: ${background};
    letter-spacing: ${theme.letterSpacing};
  `;
  return (
    <Div
      {...props}
      className={`${
        className ? "container-fluid " + className : "container-fluid"
      }`}
      style={style || {}}
    >
      {children}
    </Div>
  );
});

export default AllUiCssHOC(ContainerFluid);
