import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { RowProps } from "./Row.types";

const Row: FC<RowProps> = forwardRef((props: RowProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const RowTag = styled.div;
  return (
    <AllUiLOC
      {...props}
      tag={RowTag}
      theme={theme}
      setTheme={setTheme}
      baseClassNames="row"
    ></AllUiLOC>
  );
});

export default AllUiCssHOC(Row);
