import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import { mount } from "enzyme";

import Button from "../../web/src/components/atoms/Button";

test("isButton", () => {
  const props = {
    background: "red",
    color: "white",
    text: "hoge",
    onClick: () => {},
  };
  const element = <Button {...props} />;
  expect(ReactTestUtils.isElement(element)).toBe(true);
});

test("onClick", () => {
  const props = {
    background: "red",
    color: "white",
    text: "hoge",
    onClick: jest.fn(),
  };

  const subject = mount(<Button {...props} />);
  subject.find("button").simulate("click");

  expect(props.onClick).toBeCalled();
});
