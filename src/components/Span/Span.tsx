import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { SpanProps } from "./Span.types";
import * as Utils from "../Utils";

const SpanTag = styled.span`
  ${(props) => Utils.Common(props)}
`;

const Span: FC<SpanProps> = forwardRef((props: any, ref: any) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  return (
    <SpanTag
      {...props}
      theme={theme}
      className={`${props.className ? props.className : ""}`}
    >
      {props.children}
    </SpanTag>
  );
});

export default AllUiCssHOC(Span);
