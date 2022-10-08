import React, { useEffect } from "react";
import DarkButton1Theme from "./DarkButton1Theme";
import { AllUiProvider, useTheme, ButtonRaw, Div } from "../../../components";

const DarkButton1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={DarkButton1Theme}>
      <ButtonRaw
        {...props}
        background={{ type: "gradient", which: "one" }}
        borderRadius="1rem"
        padding="2px"
      >
        <Div
          padding="0.3rem 1.5rem"
          borderRadius="1rem"
          background={{ type: "color", which: "one" }}
          fontColor="two"
          letterSpacing="1px"
          hover={{
            shadow: "one",
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
