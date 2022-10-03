import React, { FC } from "react";
import { TestProps } from "./Test.types";
import "../../../node_modules/@allui/css/dist/allui.css";

const Test: FC<TestProps> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Test;
