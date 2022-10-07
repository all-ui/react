export interface PropsBase {
  [key: string]: any;
}

export interface IconProps extends PropsBase {
  className?: string;
  style?: Object;
  background?: { type: "gradient" | "color"; which: string };
  hover?: { [key: string]: any };
  focus?: { [key: string]: any };
  type: "text" | "email" | "password" | "tel" | "number";
  fontFamily?: string;
  letterSpacing?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontColor?: string;
  fontSize?: string;

  padding?: string;
  border?: string;
  borderRadius?: string;
  transition?: string;
}
