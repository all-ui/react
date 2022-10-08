import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import {
  defaultTheme,
  Theme,
  ComponentProps,
} from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiCommon from "../AllUiCommon";

const ContainerFluid: FC<ComponentProps> = forwardRef(
  (props: ComponentProps) => {
    const { theme: themeOrg, setTheme } = useTheme();
    let theme: Theme = themeOrg || defaultTheme;

    const Div = styled.div;
    return (
      <AllUiCommon
        {...props}
        tag={Div}
        theme={theme}
        setTheme={setTheme}
      ></AllUiCommon>
    );
  }
);

export default AllUiCssHOC(ContainerFluid);
