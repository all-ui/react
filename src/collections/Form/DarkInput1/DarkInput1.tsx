import React, { useEffect } from "react";
import DarkInput1Theme from "./DarkInput1Theme";
import { AllUiProvider, useTheme, Input, Icon } from "../../../components";

const DarkInput1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={DarkInput1Theme}>
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
        padding="0.5rem 1.5rem"
      />
    </AllUiProvider>
  );
};

export default DarkInput1;
