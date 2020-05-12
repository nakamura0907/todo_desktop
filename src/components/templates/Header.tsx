import * as React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => {
  return (
    <>
      <HeaderStyled>
        <Heading>{text}</Heading>
      </HeaderStyled>
    </>
  );
};

const HeaderStyled = styled.header`
  color: #e85a61;
  font-size: 1.8rem;
  margin: 15px 0 50px 0;
`;

const Heading = styled.h1`
  font-family: "Amatic SC", cursive;
`;

export default Header;
