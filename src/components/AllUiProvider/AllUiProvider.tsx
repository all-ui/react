import * as React from "react";
import { Theme, SetTheme, AllUiProviderProps } from "./AllUiProvider.types";

let defaultTheme: Theme = {
  colors: {
    primary: "black",
    secondary: "white",
  },
  background: "primary",
};

const AllUiContext =
  React.createContext<{ theme: Theme; setTheme: SetTheme } | undefined>(
    undefined
  );

const AllUiProvider = ({ children, myTheme }: AllUiProviderProps) => {
  const context = React.useContext(AllUiContext);
  if (context) {
    defaultTheme = context?.theme;
  }
  const [theme, updateTheme] = React.useState({ ...defaultTheme, ...myTheme });

  const setTheme = (myTheme: Theme) => {
    updateTheme({ ...theme, ...myTheme });
  };
  // NOTE: you *might* need to memoize this value
  const value = { theme, setTheme };
  return (
    <AllUiContext.Provider value={value}>{children}</AllUiContext.Provider>
  );
};

function useTheme() {
  const context = React.useContext(AllUiContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return [context.theme, context.setTheme];
}

export { AllUiProvider, useTheme, AllUiContext };
