import * as React from "react";
import _ from "lodash";
import {
  Theme,
  UserTheme,
  SetTheme,
  AllUiProviderProps,
  defaultTheme,
} from "./AllUiProvider.types";

const AllUiContext =
  React.createContext<{ theme: Theme; setTheme: SetTheme } | undefined>(
    undefined
  );

const AllUiProvider = ({ children, myTheme }: AllUiProviderProps) => {
  let defaultThemeCopy = JSON.parse(JSON.stringify(defaultTheme));
  const context = React.useContext(AllUiContext);
  if (context) {
    defaultThemeCopy = context?.theme;
  }
  // const [theme, updateTheme] = React.useState({
  //   ...defaultThemeCopy,
  //   ...myTheme,
  // });

  const [theme, updateTheme] = React.useState(
    _.merge(defaultThemeCopy, myTheme)
  );

  const setTheme: SetTheme = (myTheme: UserTheme) => {
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
