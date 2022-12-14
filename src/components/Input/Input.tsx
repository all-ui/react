import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import Div from "../Div";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { InputProps } from "./Input.types";
import * as Utils from "../Utils";

const InputTag = styled.input`
  ${(props) => Utils.Common(props)}
`;

const Input: FC<InputProps> = forwardRef((props: any, ref: any) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  if (props.withIcon) {
    return (
      <Div
        className="input-with-icon full-width"
        //animation={props.animation || null}
      >
        <InputTag
          {...props}
          theme={theme}
          className={`${
            props.className ? "input " + props.className : "input"
          }`}
          ref={ref}
        >
          {props.children}
        </InputTag>

        <span>{props.withIcon}</span>
        <span>
          {props.errorProps &&
            props.errorProps.errorMsg &&
            props.errorProps.errorMsg.length > 0 &&
            props.errorProps.errorIcon}
        </span>
        {props.errorProps &&
          props.errorProps.errorMsg &&
          props.errorProps.errorMsg.length > 0 && (
            <span className="input-error-msg">{props.errorProps.errorMsg}</span>
          )}
      </Div>
    );
  }
  return (
    <InputTag
      {...props}
      theme={theme}
      className={`${props.className ? "input " + props.className : "input"}`}
      innerRef={ref}
    >
      {props.children}
    </InputTag>
  );
});

export default AllUiCssHOC(Input);
