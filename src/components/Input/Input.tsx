import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import Div from "../Div";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = forwardRef((props: InputProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const InputTag = styled.input;
  if (props.withIcon) {
    return (
      <Div
        className="input-with-icon full-width"
        //animation={props.animation || null}
      >
        <AllUiLOC
          {...props}
          tag={InputTag}
          theme={theme}
          setTheme={setTheme}
          baseClassNames="input"
        ></AllUiLOC>
        <span className="">{props.withIcon}</span>
      </Div>
    );
  }
  return (
    <AllUiLOC
      {...props}
      tag={InputTag}
      theme={theme}
      setTheme={setTheme}
      baseClassNames="input"
    ></AllUiLOC>
  );
});

export default AllUiCssHOC(Input);
