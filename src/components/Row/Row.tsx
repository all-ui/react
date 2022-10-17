import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { RowProps } from "./Row.types";
import * as Utils from "../Utils";

const RowTag = styled.div`
  ${(props) => Utils.Common(props)}
`;

const Row: FC<RowProps> = forwardRef((props: any, ref: any) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  return (
    <RowTag
      {...props}
      theme={theme}
      className={`${props.className ? "row " + props.className : ""}`}
    >
      {props.children}
    </RowTag>
  );
});

export default AllUiCssHOC(Row);
