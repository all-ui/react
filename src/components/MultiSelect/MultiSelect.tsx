import React, { FC, forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../AllUiProvider";
import { defaultTheme, Theme } from "../AllUiProvider/AllUiProvider.types";
import AllUiCssHOC from "../AllUiHOC";
import AllUiLOC from "../AllUiLOC";
import { MultiSelectProps } from "./MultiSelect.types";
import Div from "../Div";
import Input from "../Input";
import Li from "../Li";
import Icon from "../Icon";

const MultiSelect: FC<MultiSelectProps> = forwardRef(
  (props: MultiSelectProps, ref: any) => {
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
    const [inpValue, setInpValue] = useState("");
    const [selValue, setSelValue] = useState(value || []);
    const [optionsFilt, setOptionsFilt] = useState([]);
    const [inputStyle, setInputStyle] = useState({ cursor: "pointer" });
    const selectedBaluesRef = useRef(null);

    useEffect(() => {
      setOptionsFilt(options);
    }, []);

    useEffect(() => {
      console.log(
        "selectedBaluesRef",
        selectedBaluesRef.current?.offsetWidth,
        selectedBaluesRef.current?.offsetHeight
      );
      // if (selValue.length > 0)
      //   setInputStyle({
      //     ...inputStyle,
      //     paddingLeft: `${selectedBaluesRef.current?.offsetWidth + 50}px`,
      //   });
    }, [selValue]);

    const search = (term: any) => {
      let optionsFiltCopy: any = [];
      if (term && term.length > 0) {
        options.map((option: any) => {
          let filt = selValue.filter((op: any) => op.value === option.value);
          if (
            filt.length === 0 &&
            option.label.toLowerCase().includes(term.toLowerCase())
          )
            optionsFiltCopy.push(option);
        });
        setOptionsFilt(optionsFiltCopy);
      }
      setInpValue(term);
    };

    const onSelect = (option: any) => {
      let selValueCopy = JSON.parse(JSON.stringify(selValue));
      let optionsFiltCopy: any = [];
      let filt = selValueCopy.filter((op: any) => op.value === option.value);
      if (filt.length > 0)
        selValueCopy = selValueCopy.filter(
          (op: any) => op.value !== option.value
        );
      else selValueCopy.push(option);
      options.map((option: any) => {
        let filt = selValueCopy.filter((op: any) => op.value === option.value);
        if (filt.length === 0) optionsFiltCopy.push(option);
      });
      onChange(selValueCopy, option);
      setSelValue(selValueCopy);
      setOptionsFilt(optionsFiltCopy);
      setInpValue("");
      //setActive(false);
    };

    return (
      <Div {...props} className="select-box">
        <Div
          className="multi-selected-box"
          {...inputStyles}
          onClick={() => setActive(!active)}
        >
          {/* <Input
            {...inputStyles}
            withIcon={props.withIcon}
            className="input"
            onFocus={() => setActive(!active)}
            //onBlur={() => setActive(false)}
            placeholder={selValue.length > 0 ? "" : placeholder}
            value={inpValue}
            onChange={(e: any) => search(e.target.value)}
            ref={ref}
            readOnly={props.search ? false : true}
            style={inputStyle}
          /> */}
          {props.withIcon}
          {selValue.length > 0 && (
            <div className="multi-selected-values" ref={selectedBaluesRef}>
              {selValue.map((val: any) => {
                return (
                  <div
                    className="multi-selected-value"
                    onClick={() => onSelect(val)}
                  >
                    <span>{val.label}</span>
                    <span>
                      <Icon
                        className="ai ai-x"
                        fontColor="nine"
                        //padding="0.5rem .4rem"
                        fontSize="1rem"
                      />
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          <div style={{ display: "flex", flex: "1 0 auto", height: "100%" }}>
            <input
              style={{
                //background: "transparent",
                border: "none",
                padding: "0",
                display: "flex",
                //maxWidth: "max-content",
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          {selValue.length > 0 && (
            <>
              <Icon
                className="ai ai-x-circle-fill"
                fontColor="nine"
                padding="0.5rem .4rem"
                fontSize=".8rem"
                onClick={() => setSelValue([])}
                style={{ cursor: "pointer", fontWeight: "100" }}
              />
              <span
                style={{ color: "grey", fontSize: "25px", fontWeight: "100" }}
              >
                |
              </span>
            </>
          )}

          <Icon
            className={active ? `ai ai-chevron-up` : `ai ai-chevron-down`}
            fontColor="nine"
            padding="0.5rem .4rem"
            fontSize="1rem"
          />
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
                  onClick={() => onSelect(option)}
                >
                  {option.label}
                </Li>
              );
            })}
          </Div>
        )}
      </Div>
    );
  }
);

export default AllUiCssHOC(MultiSelect);
