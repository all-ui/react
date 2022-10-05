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
  React.createContext<{ theme: Theme; updateTheme: SetTheme } | undefined>(
    undefined
  );

const AllUiProvider = ({ children, myTheme }: AllUiProviderProps) => {
  let defaultThemeCopy = JSON.parse(JSON.stringify(defaultTheme));
  const context = React.useContext(AllUiContext);

  if (context) {
    defaultThemeCopy = context?.theme;
  }

  const [theme, setTheme] = React.useState(_.merge(defaultThemeCopy, myTheme));

  const updateTheme: SetTheme = (myTheme: UserTheme) => {
    setTheme({ ...theme, ..._.merge(theme, myTheme) });
  };
  // NOTE: you *might* need to memoize this value
  const value = { theme, updateTheme };
  return (
    <AllUiContext.Provider value={value}>{children}</AllUiContext.Provider>
  );
};

function useTheme() {
  const context = React.useContext(AllUiContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return { theme: context.theme, setTheme: context.updateTheme };
}

export { AllUiProvider, useTheme, AllUiContext };
