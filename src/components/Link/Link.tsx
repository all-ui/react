import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { LinkProps } from "./Link.types";
import * as Utils from "../Utils";

const LinkTag = styled.a`
  ${(props) => Utils.Common(props)}
`;

const Link: FC<LinkProps> = forwardRef((props: any, ref: any) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  return (
    <LinkTag
      {...props}
      theme={theme}
      className={`${props.className ? props.className : ""}`}
    >
      {props.children}
    </LinkTag>
  );
});

export default AllUiCssHOC(Link);
