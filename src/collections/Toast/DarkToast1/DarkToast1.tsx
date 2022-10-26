import React, { useEffect, useState } from "react";
import DarkToast1Theme from "./DarkToast1Theme";
import {
  AllUiProvider,
  useTheme,
  ButtonRaw,
  Div,
  Icon,
  Span,
} from "../../../components";

const DarkToast1 = (props: { [key: string]: any }) => {
  const [close, setClose] = useState(false);
  return (
    <AllUiProvider myTheme={DarkToast1Theme}>
      <Div
        className="toast flex al-it-ct gap-3"
        animation={props.show ? (close ? "six" : "five") : ""}
        width="300px"
        height="70px"
        borderRadius="1rem"
        padding="0 .4rem 0 1rem"
        background={{
          type: "gradient",
          which: props.type === "success" ? "one" : "two",
        }}
      >
        <Icon
          className={
            props.type === "success"
              ? "ai ai-check-circle-fill"
              : "ai ai-x-circle-fill"
          }
          fontColor={props.type === "success" ? "one" : "five"}
          fontSize="1.5rem"
        />
        <Div className="flex-col gap-0">
          <Span fontColor={props.type === "success" ? "one" : "seven"}>
            {props.errorHeading}
          </Span>
          <Span fontColor="four" fontSize=".8rem">
            {props.errorMsg}
          </Span>
        </Div>
        <Icon
          className="ai ai-x"
          fontColor={props.type === "success" ? "one" : "five"}
          fontSize="1.1rem"
          style={{
            alignSelf: "flex-start",
            marginLeft: "auto",
            cursor: "pointer",
          }}
          onClick={() => setClose(true)}
        />
      </Div>
    </AllUiProvider>
  );
};

export default DarkToast1;
