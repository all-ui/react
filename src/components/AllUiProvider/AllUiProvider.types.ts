export interface Theme {
  colors?: any;
  background?: any;
}

export type SetTheme = (theme: Theme) => void;

export type AllUiProviderProps = {
  children: React.ReactNode;
  myTheme?: Theme | undefined;
};
