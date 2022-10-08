import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { ButtonRawProps } from "./ButtonRaw.types";

const ButtonRaw: FC<ButtonRawProps> = forwardRef((props: ButtonRawProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const ButtonTag = styled.button;
  return (
    <AllUiLOC
      {...props}
      tag={ButtonTag}
      theme={theme}
      setTheme={setTheme}
      baseClassNames="btn"
    ></AllUiLOC>
  );
});

export default AllUiCssHOC(ButtonRaw);
