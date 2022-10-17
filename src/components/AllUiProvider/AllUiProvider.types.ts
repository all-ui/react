export interface Root {
  [key: string]: any;
}

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

export interface BaseTheme extends Root {
  colors?: ThemePropValueType;
  background?: ThemePropValueType;
  fontFamily?: ThemePropValueType;
  fontColor?: ThemePropValueType;
  fontSize?: ThemePropValueType;
  fontWeight?: ThemePropValueType;
  lineHeight?: ThemePropValueType;
  letterSpacing?: ThemePropValueType;
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
  gradients: {
    [key: string]: {
      [key in "type" | "deg" | "colors"]:
        | string
        | { which: string; op: string }[];
    };
  };
  shadows: { [key: string]: string };
  transitions: { [key: string]: string };
  buttons: any;
  inputs: any;
  headings: any;
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
  animations: {
    one: "c-2-f 1.5s ease forwards 1",
    two: "b-2-o 1.5s ease forwards 1",
    three: "t-2-o 1.5s ease forwards 1",
    four: "c-2-fh .6s ease forwards 1",
  },
  buttons: {},
  inputs: {},
  headings: {},
};

export interface ComponentProps extends Root {
  children?: React.ReactNode;
  className?: string;
  style?: Object;
  background?: { type: "gradient" | "color"; which: string };
  backgroundColor?: { type: "gradient" | "color"; which: string };
  as?: string | Root;

  hover?: { [key: string]: any };
  focus?: { [key: string]: any };
  type?: "text" | "email" | "password" | "tel" | "number";
  fontFamily?: string;
  letterSpacing?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontColor?: string;
  fontSize?: string;

  width?: string;
  height?: string;
  padding?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderRadius?: string;

  shadow?: string;

  transition?: string;
  animation?: string;
  href?: string;
}

export interface LOCProps extends ComponentProps {
  tag: any;
  theme: Theme;
  setTheme: SetTheme;
  baseClassNames?: string;
}
