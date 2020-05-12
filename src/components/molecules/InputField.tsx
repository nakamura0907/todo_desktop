import * as React from "react";
import styled from "styled-components";

import ButtonIcon from "../atoms/ButtonIcon";
import Input from "../atoms/Input";

interface Meta {
  error: undefined;
  touched: boolean;
}

interface Props {
  input: object;
  name: string;
  type: string;
  meta: Meta;
  onClick: Function;
}

const InputField: React.FC<Props> = ({ onClick, input, name, type, meta: { touched, error } }) => {
  return (
    <>
      <ErrorMessage>{touched ? error : ""}</ErrorMessage>
      <LFlex>
        <Input input={input} name={name} type={type} placeholder="テキストを入力してください。" />
        <ButtonIcon color="white" background="#28a745" iconClass="fas fa-plus" onClick={onClick} />
      </LFlex>
    </>
  );
};

const ErrorMessage = styled.span`
  color: red;
  display: block;
  min-height: 35px;
`;

const LFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default InputField;
