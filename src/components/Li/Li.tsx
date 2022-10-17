import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { LiProps } from "./Li.types";
import * as Utils from "../Utils";

const LiTag = styled.li`
  ${(props) => Utils.Common(props)}
`;

const Li: FC<LiProps> = forwardRef((props: any, ref: any) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  return (
    <LiTag {...props} theme={theme} innerRef={ref}>
      {props.children}
    </LiTag>
  );
});

export default AllUiCssHOC(Li);
