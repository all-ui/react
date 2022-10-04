import React from "react";
import { storiesOf } from "@storybook/react";

import { Test } from "../components";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <Test text="Hello" />;
});
