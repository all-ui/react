import React, { useEffect } from "react";
import DarkInput1Theme from "./DarkInput1Theme";
import { AllUiProvider, useTheme, Input, Icon } from "../../../components";

const DarkInput1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={DarkInput1Theme}>
      <Input
        {...props}
        background={{ type: "color", which: "two" }}
        fontColor="seven"
        letterSpacing="1px"
        hover={{
          background: { type: "color", which: "eight" },
          borderRadius: "3rem",
          shadow: "two",
        }}
        focus={{
          background: { type: "color", which: "eight" },
          shadow: "one",
          borderRadius: "3rem",
        }}
        transition="one"
        borderRadius=".8rem"
        padding="0.5rem 1rem 0.5rem 2.5rem"
        withIcon={
          <Icon
            className="ai ai-lock-fill input-icon"
            fontColor="nine"
            padding="0.5rem .65rem"
            fontSize="1rem"
            borderRadius=".8rem 0 0 .8rem"
          />
        }
      />
    </AllUiProvider>
  );
};

export default DarkInput1;
