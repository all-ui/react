import React, { FC, useContext, forwardRef, useEffect } from "react";
import styled from "styled-components";
import { RowProps } from "./Row.types";
import { AllUiContext, useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import _ from "lodash";

const Row: FC<RowProps> = forwardRef((props) => {
  const { children, className, style, background } = props;

  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;
  useEffect(() => {
    if (background) {
      //setTheme({ background });
    }
  }, []);
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

  const Div = styled.div`
    ${backgroundFinal ? backgroundFinal : null};
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
