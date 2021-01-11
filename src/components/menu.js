import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Down, Portatil, Arcade, Sobremesa } from "../utils/icons";
import Image from "../components/image";

const Menu = () => (
  <Contaienr>
    <List>
      <Item>
        <Redirection to="/" row="true">
          Tipos
        </Redirection>
        <Drop>
          <DropItem>
            <DropIcon>
              <Arcade />
            </DropIcon>
            <DropInfo
              title="Cosolas Arcade"
              description="Nuestra misión es darte el poder para alcanzar tus sueños a través de la educación"
            />
          </DropItem>
          <DropItem>
            <DropIcon>
              <Sobremesa />
            </DropIcon>
            <DropInfo
              title="Cosolas de Sobremesa"
              description="Nuestra misión es darte el poder para alcanzar tus sueños a través de la educación"
            />
          </DropItem>
          <DropItem>
            <DropIcon>
              <Portatil />
            </DropIcon>
            <DropInfo
              title="Consolas Portatiles"
              description="Trolo lo lol olo lolo lo sdfsdf  asdjklas kjlasdj"
            />
          </DropItem>
        </Drop>
      </Item>
      <Item>
        <Redirection
          to="/"
          className="dropmenu-link text-sm font-semibold px-2 py-3"
        >
          Accesorios
        </Redirection>
      </Item>
      <Item>
        <Redirection to="/" className="text-sm font-semibold px-1 py-3">
          Para Fanaticos
        </Redirection>
      </Item>
      <Item>
        <Redirection to="/" className="text-sm font-semibold px-1 py-3">
          Contacto
        </Redirection>
      </Item>
    </List>
  </Contaienr>
);

export default Menu;

const Contaienr = ({ children }) => {
  return <nav>{children}</nav>;
};

const StyleList = styled.ul`
  &:hover > li {
    opacity: 0.5;
  }
  & > li:hover {
    opacity: 1;
  }
`;

const List = ({ children }) => {
  return <StyleList className="flex h-full items-center">{children}</StyleList>;
};

const StyleItem = styled.li`
  &:hover {
    opacity: 1 !important;

    & > a > svg {
      transform: rotate(-180deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1rem;
    bottom: -1rem;
  }

  & section {
    width: 37.5rem;
    max-width: 600px;
    margin-top: -0.5rem;
    transform: translateY(1rem);
    top: 100%;
    visibility: hidden;
    opacity: 0;
  }

  &:hover > section {
    opacity: 1;
    transform: translateY(0);
    z-index: 100;
    opacity: 1;
    visibility: visible;
  }

  & > section:hover a {
    opacity: 0.5;
    transition: all 0.25s;
  }
  & > section a:hover {
    opacity: 1;
  }
`;

const Item = ({ children }) => {
  return (
    <StyleItem className="relative text-gray-600 h-full m-0 transition-all duration-200">
      {children}
    </StyleItem>
  );
};

const Redirection = ({ children, to, row }) => {
  return (
    <Link
      to={to}
      className="h-full text-base font-semibold flex justify-center items-center px-4"
    >
      {children}
      {row ? (
        <Down className="block ml-2 mt-1 w-auto h-3 transition-all duration-200" />
      ) : null}
    </Link>
  );
};

const Drop = ({ children }) => {
  return (
    <section className="dropmenu-container rounded bg-white shadow grid grid-cols-2 gap-6 p-4 w-full absolute right-0 transition-all duration-200">
      {children}
    </section>
  );
};

const DropItem = ({ children, to }) => {
  return (
    <Link to={to} className="grid grid-cols-5 gap-4">
      {children}
    </Link>
  );
};

const DropInfo = ({ title, description }) => {
  return (
    <div className="col-span-4">
      <p className="font-semibold text-gray-700 text-sm">{title}</p>
      <p className="text-sm mb-0 text-gray-600">{description}</p>
    </div>
  );
};

const DropIcon = styled.div`
  display: flex;
  justify-content: center;
  & > svg {
    height: 45px;
    width: 45px;
    margin-top: 0.25rem;
  }
`;
