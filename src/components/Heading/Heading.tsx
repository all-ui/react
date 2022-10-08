import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { HeadingProps } from "./Heading.types";

const Heading: FC<HeadingProps> = forwardRef((props: HeadingProps) => {
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;

  let HeadingTag = styled.h1;

  if (props.as === "h2") HeadingTag = styled.h2;
  if (props.as === "h3") HeadingTag = styled.h3;
  if (props.as === "h4") HeadingTag = styled.h4;
  if (props.as === "h5") HeadingTag = styled.h5;
  if (props.as === "h6") HeadingTag = styled.h6;
  return (
    <AllUiLOC
      {...props}
      tag={HeadingTag}
      theme={theme}
      setTheme={setTheme}
    ></AllUiLOC>
  );
});

export default AllUiCssHOC(Heading);
