import React, { useEffect } from "react";
import DarkInputWithIcon1Theme from "./DarkInputWithIcon1Theme";
import { AllUiProvider, useTheme, Input, Icon } from "../../../components";

const DarkInputWithIcon1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={DarkInputWithIcon1Theme}>
      <Input
        {...props}
        background={{ type: "color", which: "one" }}
        fontColor="two"
        letterSpacing="1px"
        hover={{
          background: { type: "color", which: "three" },
          borderRadius: "3rem",
          shadow: "two",
        }}
        focus={{
          background: { type: "color", which: "three" },
          shadow: "one",
          borderRadius: "3rem",
        }}
        transition="one"
        borderRadius=".8rem"
        padding="0.5rem 1rem 0.5rem 2.5rem"
      />
    </AllUiProvider>
  );
};

export default DarkInputWithIcon1;
