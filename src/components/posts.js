import * as React from "react";
import styled from "styled-components";

import Image from "./image";

// markup
const Posts = () => {
  return (
    <Container>
      <div className="">
        <div className="bg-white shadow rounded">
          <ImageContainer>
            <Image name="sobremesa_main" description="articulo 1" />
          </ImageContainer>
          <div className="px-4 py-6">
            <h3 className="text-4xl font-bold text-gray-700 mb-4">
              Titulo del articulo
            </h3>
            <p className="leading-relaxed text-gray-700 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              ullam nobis odit! Voluptates commodi dolorum animi recusandae
              omnis sapiente! Laboriosam voluptatum ipsum, aliquid laudantium
              illo blanditiis sunt nam tempore ipsam?
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
    </Container>
  );
};

export default Posts;

const Container = ({ children }) => {
  return (
    <section className="container grid grid-cols-2 gap-4 mt-24">
      {children}
    </section>
  );
};

const ImageContainer = styled.div`
  & > div {
    width: 100%;
    height: 380px;
  }
`;
