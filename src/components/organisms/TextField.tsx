import * as React from "react";
import { Field } from "redux-form";

import InputField from "../molecules/InputField";
import * as Validate from "../../utils/Validate";

interface Props {
  onClick: Function;
  reset: Function;
  value: any;
}

const TextField: React.FC<Props> = ({ onClick, reset, value }) => {
  const handleClick = (): void => {
    if (value.values.todoForm) {
      onClick(value.values.todoForm);
      reset();
    }
  };
  return (
    <Field name="todoForm" type="text" onClick={handleClick} validate={[Validate.required]} component={InputField} />
  );
};

export default TextField;
