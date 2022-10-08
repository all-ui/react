import React, { useEffect } from "react";
import DarkButton1Theme from "./DarkButton1Theme";
import { AllUiProvider, useTheme, ButtonRaw, Div } from "../../../components";

const DarkButton1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={DarkButton1Theme}>
      <ButtonRaw
        {...props}
        background={{ type: "color", which: "three" }}
        fontColor="two"
        letterSpacing="1px"
        hover={{
          background: { type: "color", which: "one" },
          borderRadius: "3rem",
          shadow: "one",
        }}
        transition="one"
        borderRadius=".8rem"
        padding="0.5rem 1.5rem"
      >
        {props.children}
      </ButtonRaw>
    </AllUiProvider>
  );
};

export default DarkButton1;
