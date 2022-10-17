import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { DivProps } from "./Div.types";
import * as Utils from "../Utils";

const DivTag = styled.div`
  ${(props) => Utils.Common(props)}
`;

const Div: FC<DivProps> = forwardRef((props: any, ref: any) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  return (
    <DivTag
      {...props}
      theme={theme}
      className={`${props.className ? props.className : ""}`}
    >
      {props.children}
    </DivTag>
  );
});

export default AllUiCssHOC(Div);
