import React, { FC, useContext } from "react";
import styled from "styled-components";
import { TestProps } from "./Test.types";
import { AllUiContext } from "../AllUiProvider";
import "../../../node_modules/@allui/css/dist/allui.css";

const Test: FC<TestProps> = ({ text }) => {
  const context = useContext(AllUiContext);
  const theme: any = context?.theme;
  const Heading = styled.h1`
    background-color: ${theme.colors[theme.background]};
  `;

  console.log("context 2", theme);
  return <Heading>{text}</Heading>;
};

export default Test;
