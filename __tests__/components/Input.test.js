import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import Input from "../../web/src/components/atoms/Input";

test("isInput", () => {
  const props = {
    // input: "object"
    name: "todoForm",
    placeholder: "sample",
    type: "text",
  };
  const element = <Input {...props} />;
  expect(ReactTestUtils.isElement(element)).toBe(true);
});
