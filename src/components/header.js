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
    <header className="w-full h-20 flex justify-center items-center shadow bg-transparent absolute top-0 z-50">
      {children}
    </header>
  );
};

const Container = ({ children }) => {
  return (
    <div className="container w-full h-full flex justify-between text-white">
      {children}
    </div>
  );
};
