import { ComponentProps } from "../AllUiProvider/AllUiProvider.types";

export interface InputProps extends ComponentProps {
  withIcon?: React.ReactNode;
  errorIcon?: React.ReactNode;
  errorProps?: any;
}
