import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { LinkProps } from "./Link.types";

const Span: FC<LinkProps> = forwardRef((props: LinkProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const LinkTag = styled.a;
  return (
    <AllUiLOC
      {...props}
      tag={LinkTag}
      theme={theme}
      setTheme={setTheme}
    ></AllUiLOC>
  );
});

export default AllUiCssHOC(Span);
