export interface ContainerFluidProps {
  children: React.ReactNode;
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
