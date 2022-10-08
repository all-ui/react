import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { ContainerFluidProps } from "./ContainerFluid.types";

const ContainerFluid: FC<ContainerFluidProps> = forwardRef(
  (props: ContainerFluidProps) => {
    const { theme: themeOrg, setTheme } = useTheme();
    let theme: Theme = themeOrg || defaultTheme;

    const Div = styled.div;
    return (
      <AllUiLOC
        {...props}
        tag={Div}
        theme={theme}
        setTheme={setTheme}
      ></AllUiLOC>
    );
  }
);

export default AllUiCssHOC(ContainerFluid);
