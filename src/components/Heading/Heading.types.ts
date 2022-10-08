import { ComponentProps, Root } from "../AllUiProvider/AllUiProvider.types";

export interface HeadingProps extends ComponentProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
