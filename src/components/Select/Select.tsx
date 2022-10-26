import React, { FC, forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { SelectProps } from "./Select.types";
import Div from "../Div";
import Input from "../Input";
import Li from "../Li";
import Icon from "../Icon";

const Select: FC<SelectProps> = forwardRef((props: SelectProps, ref: any) => {
  const {
    children,
    className,
    style,
    type,
    background,
    backgroundColor,
    hover,
    focus,
    fontColor,
    transition,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    width,
    height,
    padding,
    border,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    borderRadius,
    as,
    tag,
    baseClassNames,
    animation,
    shadow,
    inputStyles,
    dropdownStyles,
    listItemStyles,
    options,
    placeholder,
    onChange,
    value,
  } = props;
  const { theme: themeOrg, setTheme } = useTheme();
  let theme: Theme = themeOrg || defaultTheme;
  const [active, setActive] = useState(false);
  const [inpValue, setInpValue] = useState(value || "");
  const [optionsFilt, setOptionsFilt] = useState([]);

  useEffect(() => {
    setOptionsFilt(options);
  }, []);

  const search = (term: any) => {
    let optionsFiltInit =
      term && term.length > 0
        ? options.filter((option: any) =>
            option.label.toLowerCase().includes(term.toLowerCase())
          )
        : options;
    setOptionsFilt(optionsFiltInit);
    setInpValue(term);
  };

  return (
    <Div {...props} className="select-box">
      <Div className="selected-box">
        <Input
          {...inputStyles}
          withIcon={props.withIcon}
          className="input"
          onFocus={() => setActive(!active)}
          //onBlur={() => setActive(false)}
          placeholder={placeholder}
          value={inpValue}
          onChange={(e: any) => search(e.target.value)}
          ref={ref}
          readOnly={props.search ? false : true}
          style={{ cursor: "pointer" }}
        />
        <div className="select-chevron">
          <Icon
            className={active ? `ai ai-chevron-up` : `ai ai-chevron-down`}
            fontColor="nine"
            padding="0.5rem .4rem"
            fontSize="1rem"
          />
        </div>
      </Div>

      {active && (
        <Div
          {...dropdownStyles}
          className={`${
            active
              ? "select-dropdown select-dropdown-active"
              : "select-dropdown"
          }`}
        >
          {optionsFilt.map((option: any, index: any) => {
            return (
              <Li
                {...listItemStyles}
                className="select-dropdown-list-item"
                key={`item-${index}`}
                onClick={(e: any) => {
                  onChange(option.label);
                  setInpValue(option.label);
                  setActive(false);
                }}
              >
                {option.label}
              </Li>
            );
          })}
        </Div>
      )}
    </Div>
  );
});

export default AllUiCssHOC(Select);
