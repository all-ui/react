import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { DivProps } from "./Div.types";

const Div: FC<DivProps> = forwardRef((props: DivProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const DivTag = styled.div;
  return (
    <AllUiLOC
      {...props}
      tag={DivTag}
      theme={theme}
      setTheme={setTheme}
    ></AllUiLOC>
  );
});

export default AllUiCssHOC(Div);
