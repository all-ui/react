import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { IconProps } from "./Icon.types";

const Icon: FC<IconProps> = forwardRef((props: IconProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  const IconTag = styled.i;
  return (
    <AllUiLOC
      {...props}
      tag={IconTag}
      theme={theme}
      setTheme={setTheme}
    ></AllUiLOC>
  );
});

export default AllUiCssHOC(Icon);
