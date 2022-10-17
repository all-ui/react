import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { IconProps } from "./Icon.types";
import * as Utils from "../Utils";

const IconTag = styled.i`
  ${(props) => Utils.Common(props)}
`;

const Icon: FC<IconProps> = forwardRef((props: any, ref: any) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  return (
    <IconTag
      {...props}
      theme={theme}
      className={`${props.className ? props.className : ""}`}
    />
  );
});

export default AllUiCssHOC(Icon);
