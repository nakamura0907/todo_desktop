import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import ButtonIcon from "../../web/src/components/atoms/ButtonIcon";

test("isButtonIcon", () => {
  const props = {
    background: "blue",
    color: "white",
    iconClass: "far fa-check",
    onClick: () => {},
  };
  const element = <ButtonIcon {...props} />;
  expect(ReactTestUtils.isElement(element)).toBe(true);
});

test("onClick", () => {
  const props = {
    background: "blue",
    color: "white",
    iconClass: "far fa-check",
    onClick: jest.fn(),
  };
  const subject = mount(<ButtonIcon {...props} />);
  subject.find("button").simulate("click");

  expect(props.onClick).toBeCalled();
});
