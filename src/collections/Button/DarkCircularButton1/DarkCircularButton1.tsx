import React, { useEffect } from "react";
import DarkCircularButton1Theme from "./DarkCircularButton1Theme";
import { AllUiProvider, useTheme, ButtonRaw, Div } from "../../../components";

const DarkCircularButton1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={DarkCircularButton1Theme}>
      <ButtonRaw
        {...props}
        padding="0.3rem"
        borderRadius="50%"
        background={{ type: "color", which: "three" }}
      >
        {props.children}
      </ButtonRaw>
    </AllUiProvider>
  );
};

export default DarkCircularButton1;
