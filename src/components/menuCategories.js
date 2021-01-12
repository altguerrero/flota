import * as React from "react";
import Image from "../components/backgroundImage";
import styled from "styled-components";

// markup
const MenuCategories = () => {
  return (
    <Container>
      <Item title="Consolas Arcade" image="arcade_main" />
      <Item title="Consolas de Sobremesa" image="sobremesa_main" />
      <Item title="Consolas Portatiles" image="portatil_main" />
    </Container>
  );
};

export default MenuCategories;

const ImageContainer = styled.div`
  padding: 0.5rem;
  & > div {
    width: auto;
    height: 100%;
    &::after {
      background-size: contain;
      background-position: center;
    }
  }
`;

const Container = ({ children }) => {
  return (
    <section className="container grid grid-cols-3 gap-4 mt-8">
      {children}
    </section>
  );
};

const Item = ({ title, image }) => {
  return (
    <div className="h-40 bg-white hover:bg-gray-200 cursor-pointer transition-all duration-200 shadow-lg rounded grid grid-cols-2">
      <div className="flex flex-col justify-between items-center text-center py-4 px-4">
        <h2 className="inline-block w-40 font-bold text-gray-700 text-2xl">
          {title}
        </h2>
        <button className="bg-red-500 inline-block w-44 text-xl py-2 text-white font-bold rounded ">
          ¡Descubre más!
        </button>
      </div>
      <ImageContainer>
        <Image name={image} />
      </ImageContainer>
    </div>
  );
};
