import * as React from "react";
import styled from "styled-components";

interface Props {
  input: object;
  name: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<Props> = ({ input, name, type, placeholder }) => {
  return <InputStyled {...input} name={name} type={type} placeholder={placeholder} />;
};

const InputStyled = styled.input`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  height: 36px;
  width: 100%;
  &:focus {
    box-shadow: 0 8px 7px 0 rgba(17, 148, 246, 0.11);
  }
`;

export default Input;
