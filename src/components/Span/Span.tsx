import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { SpanProps } from "./Span.types";

const Span: FC<SpanProps> = forwardRef((props: SpanProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const SpanTag = styled.span;
  return (
    <AllUiLOC
      {...props}
      tag={SpanTag}
      theme={theme}
      setTheme={setTheme}
    ></AllUiLOC>
  );
});

export default AllUiCssHOC(Span);
