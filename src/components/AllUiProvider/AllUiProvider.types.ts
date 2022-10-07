export type ThemePropValueType =
  | string
  | number
  | boolean
  | {
      [key: string]: string | { [key: string]: any } | any[] | number | boolean;
    }
  | object[]
  | string[]
  | number[]
  | undefined;

export interface BaseTheme {
  colors?: ThemePropValueType;
  background?: ThemePropValueType;
  fontFamily?: ThemePropValueType;
  fontColor?: ThemePropValueType;
  fontSize?: ThemePropValueType;
  fontWeight?: ThemePropValueType;
  lineHeight?: ThemePropValueType;
  letterSpacing?: ThemePropValueType;
  headings?: ThemePropValueType;
  gradients?: ThemePropValueType;
  shadows?: ThemePropValueType;
  transitions?: ThemePropValueType;
}

export interface Theme extends BaseTheme {
  colors: { [key: string]: string };
  background: { type: "color" | "gradient"; which: string };
  fontFamily: string[];
  fontColor: string;
  fontSize: string;
  fontWeight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800";
  lineHeight: string;
  letterSpacing: string;
  headings: {
    [key in "h1" | "h2" | "h3" | "h4" | "h5" | "h6"]: {
      [key: string]: string;
    };
  };
  gradients: {
    [key: string]: {
      [key in "type" | "deg" | "colors"]:
        | string
        | { which: string; op: string }[];
    };
  };
  shadows: { [key: string]: string };
  transitions: { [key: string]: string };
}

export type SetTheme = (theme: BaseTheme) => void;

export type AllUiProviderProps = {
  children: React.ReactNode;
  myTheme?: BaseTheme | undefined;
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
