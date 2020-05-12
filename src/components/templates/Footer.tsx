import * as React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Copyright>
        &copy;ToDoList <time>2020/04/01</time>
      </Copyright>
    </FooterStyled>
  );
};

const Copyright = styled.small`
  font-size: 1.3rem;
  font-family: "Amatic SC", cursive;
`;

const FooterStyled = styled.footer`
  margin-top: auto;
  padding-top: 50px;
`;

export default Footer;
