import React, { useEffect } from "react";
import DarkButton2Theme from "./DarkButton2Theme";
import { AllUiProvider, useTheme, ButtonRaw, Div } from "../../../components";

const DarkButton1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={DarkButton2Theme}>
      <ButtonRaw
        {...props}
        background={{ type: "gradient", which: "one" }}
        borderRadius="1rem"
        padding="2px"
      >
        <Div
          padding="0.2rem 1.5rem"
          borderRadius="1rem"
          background={{ type: "color", which: "three" }}
          fontColor="two"
          letterSpacing="1px"
          hover={{
            shadow: "one",
            background: { type: "color", which: "one" },
          }}
          transition="one"
        >
          {props.children}
        </Div>
      </ButtonRaw>
    </AllUiProvider>
  );
};

export default DarkButton1;
