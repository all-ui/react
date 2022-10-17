import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { ButtonRawProps } from "./ButtonRaw.types";
import * as Utils from "../Utils";

const ButtonTag = styled.button`
  ${(props) => Utils.Common(props)}
`;

const ButtonRaw: FC<ButtonRawProps> = forwardRef((props: any, ref: any) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  return (
    <ButtonTag
      {...props}
      theme={theme}
      className={`${props.className ? "btn " + props.className : "btn"}`}
    >
      {props.children}
    </ButtonTag>
  );
});

export default AllUiCssHOC(ButtonRaw);
