export interface PropsBase {
  [key: string]: any;
}

export interface HeadingProps extends PropsBase {
  children: React.ReactNode;
  className?: string;
  style?: Object;
  background?: { type: "gradient" | "color"; which: string };
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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
