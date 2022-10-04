import React, { FC, useContext, forwardRef } from "react";
import styled from "styled-components";
import { ButtonRawProps } from "./ButtonRaw.types";
import { AllUiContext } from "../AllUiProvider";
import { defaultTheme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiCssHOC";

const ButtonRaw: FC<ButtonRawProps> = forwardRef((props) => {
  const { children, className, style } = props;
  const context = useContext(AllUiContext);
  const theme: any = context?.theme;

  const Button = styled.button`
    background-color: ${theme
      ? theme.colors[theme.background] || theme.background
      : defaultTheme.colors[defaultTheme.background] ||
        defaultTheme.background};
    color: ${theme
      ? theme.colors[theme.fontColor] || theme.fontColor
      : defaultTheme.colors[defaultTheme.fontColor] || defaultTheme.fontColor};
  `;
  return (
    <Button
      {...props}
      className={`${className ? "btn " + className : "btn"}`}
      style={style || {}}
    >
      {children}
    </Button>
  );
});

export default AllUiCssHOC(ButtonRaw);
