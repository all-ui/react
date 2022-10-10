import React, { useEffect } from "react";
import LightButton1Theme from "./LightButton1Theme";
import { AllUiProvider, useTheme, ButtonRaw, Div } from "../../../components";

const DarkButton1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={LightButton1Theme}>
      <ButtonRaw
        {...props}
        background={{ type: "color", which: "four" }}
        borderRadius="1rem"
        padding="0.3rem 1.5rem"
        fontColor="six"
        letterSpacing="1px"
        //shadow="one"
        hover={{
          shadow: "one",
          background: { type: "color", which: "five" },
        }}
        transition="one"
      >
        {props.children}
      </ButtonRaw>
    </AllUiProvider>
  );
};

export default DarkButton1;
