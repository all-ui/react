export interface Theme {
  colors?: any;
  background?: any;
  fontColor?: any;
}

export type SetTheme = (theme: Theme) => void;

export type AllUiProviderProps = {
  children: React.ReactNode;
  myTheme?: Theme | undefined;
};

export const defaultTheme: Theme = {
  colors: {
    primary: "black",
    secondary: "white",
  },
  background: "primary",
  fontColor: "primary",
};
