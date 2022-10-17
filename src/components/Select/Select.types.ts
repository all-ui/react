import { ComponentProps } from "../AllUiProvider/AllUiProvider.types";

export interface SelectProps extends ComponentProps {
  inputStyles?: any;
  dropdownStyles?: any;
  listItemStyles?: any;
  onChange?: any;
  value?: any;
  search?: any;
  options: any;
}
