import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { RowProps } from "./Row.types";
import { AllUiContext } from "../AllUiProvider";
import { defaultTheme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiCssHOC";

const Row: FC<RowProps> = forwardRef((props) => {
  const { children, className, style } = props;
  const context = useContext(AllUiContext);
  const theme: any = context?.theme;

  const Div = styled.div`
    background-color: ${theme
      ? theme.colors[theme.background] || theme.background
      : defaultTheme.colors[defaultTheme.background] ||
        defaultTheme.background};
    color: ${theme
      ? theme.colors[theme.fontColor] || theme.fontColor
      : defaultTheme.colors[defaultTheme.fontColor] || defaultTheme.fontColor};
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
