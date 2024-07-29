import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>Dashboard</HeaderTitle>
    <nav>
      <a
        href="#"
        style={{ color: "white", textDecoration: "none", marginRight: "15px" }}
      >
        Home
      </a>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>
        Settings
      </a>
    </nav>
  </HeaderContainer>
);

export default Header;
