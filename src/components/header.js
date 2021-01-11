import React from "react";
import { Logo } from "../styles/components";
import Menu from "./menu";

const Header = () => (
  <HeaderContainer className="header-container">
    <Container>
      {/* Logo */}
      <Logo />
      {/* Navigation */}
      <Menu />
    </Container>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = ({ children }) => {
  return (
    <header className="w-full  h-16 flex justify-center items-center shadow">
      {children}
    </header>
  );
};

const Container = ({ children }) => {
  return (
    <div className="container bg-blue-5300 w-full h-full flex justify-between">
      {children}
    </div>
  );
};
