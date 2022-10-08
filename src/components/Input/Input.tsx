import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = forwardRef((props: InputProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const InputTag = styled.input;
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
