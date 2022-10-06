import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { ContainerFluidProps } from "./ContainerFluid.types";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";

const ContainerFluid: FC<ContainerFluidProps> = forwardRef((props) => {
  const { children, className, style, background } = props;
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  // ---------BACKGROUND------------------//
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
  console.log("backgroundFinal", backgroundFinal);
  const Div = styled.div`
    ${backgroundFinal ? backgroundFinal : null};
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
