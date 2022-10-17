import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { ContainerFluidProps } from "./ContainerFluid.types";
import * as Utils from "../Utils";

const Div = styled.div`
  ${(props) => Utils.Common(props)}
`;

const ContainerFluid: FC<ContainerFluidProps> = forwardRef(
  (props: any, ref: any) => {
    const { theme: themeOrg, setTheme } = useTheme();
    let theme: Theme = themeOrg || defaultTheme;

    return (
      <Div
        {...props}
        theme={theme}
        className={`${
          props.className
            ? "container-fluid " + props.className
            : "container-fluid"
        }`}
      >
        {props.children}
      </Div>
    );
  }
);

export default AllUiCssHOC(ContainerFluid);
