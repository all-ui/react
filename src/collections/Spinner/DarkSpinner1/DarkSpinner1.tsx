import React, { useEffect } from "react";
import DarkSpinner1Theme from "./DarkSpinner1Theme";
import { AllUiProvider, useTheme, ButtonRaw, Div } from "../../../components";

const DarkSpinner1 = (props: { [key: string]: any }) => {
  return (
    <AllUiProvider myTheme={DarkSpinner1Theme}>
      <div className="spinner-2"></div>
    </AllUiProvider>
  );
};

export default DarkSpinner1;
