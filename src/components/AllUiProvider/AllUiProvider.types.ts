export interface BaseTheme {
  [key: string]: any;
}

export interface Theme extends BaseTheme {
  colors: { [key: string]: string };
  background: { type: string; which: string };
  fontFamily: string[];
  fontColor: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  headings: { [key: string]: { [key: string]: string } };
  gradients: {
    [key: string]: { [key: string]: string | { which: string; op: string }[] };
  };
}

export interface UserTheme extends BaseTheme {
  colors?: { [key: string]: string };
  background?: { type: string; which: string };
  fontFamily?: string[];
  fontColor?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  headings?: { [key: string]: { [key: string]: string } };
  gradients?: {
    [key: string]: { [key: string]: string | { which: string; op: string }[] };
  };
}

export type SetTheme = (theme: UserTheme) => void;

export type AllUiProviderProps = {
  children: React.ReactNode;
  myTheme?: UserTheme | undefined;
};

export const defaultTheme: Theme = {
  colors: {
    one: "black",
    two: "white",
  },
  background: { type: "color", which: "one" },
  fontFamily: [
    "system-ui",
    "-apple-system",
    "Roboto",
    "Segoe UI",
    "Helvetica Neue",
    "Noto Sans",
    "Liberation Sans",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  fontColor: "one",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  letterSpacing: "normal",
  headings: {
    h1: {
      fontWeight: "500",
      lineHeight: "1.2",
    },
    h2: {
      fontWeight: "500",
      lineHeight: "1.2",
    },
    h3: {
      fontWeight: "500",
      lineHeight: "1.2",
    },
    h4: {
      fontWeight: "500",
      lineHeight: "1.2",
    },
    h5: {
      fontWeight: "500",
      lineHeight: "1.2",
    },
    h6: {
      fontWeight: "500",
      lineHeight: "1.2",
    },
  },
  gradients: {
    one: {
      type: "linear",
      deg: "90",
      colors: [
        { which: "one", op: "0" },
        { which: "two", op: "100%" },
      ],
    },
  },
  shadows: {
    one: "box-shadow: 0 0 0 0.2rem rgb(59 59 59 / 40%)",
    two: "box-shadow: 0 0 0 0.2rem rgb(59 59 59 / 15%)",
  },
  transitions: {
    one: "transition: background 0.23s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius .7s ease-in-out",
    two: "transition: all .5s",
  },
};
