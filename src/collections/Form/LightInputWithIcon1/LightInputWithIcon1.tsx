import React, { useEffect } from "react";
import LightInputWithIcon1Theme from "./LightInputWithIcon1Theme";
import { AllUiProvider, useTheme, Input, Icon } from "../../../components";

const LightInputWithIcon1 = (props: { [key: string]: any }) => {
  const { theme, setTheme } = useTheme();
  console.log("theme in", theme);
  return (
    <AllUiProvider myTheme={LightInputWithIcon1Theme}>
      <Input
        {...props}
        background={{ type: "color", which: "one" }}
        fontColor="two"
        letterSpacing="1px"
        border="1px solid #ccc"
        hover={{
          shadow: "two",
        }}
        focus={{
          shadow: "one",
        }}
        transition="one"
        borderRadius="1rem"
        padding="0.5rem 1rem 0.5rem 2.5rem"
      />
    </AllUiProvider>
  );
};

export default LightInputWithIcon1;
