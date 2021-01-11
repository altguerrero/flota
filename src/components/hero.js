import React from "react";
import styled from "styled-components";

import Background from "../components/backgroundImage";

const Hero = () => (
  <StyleHero>
    <Background name="hero_main">
      <div className="w-full h-full absolute bg-black opacity-75 top-0"></div>
      <div className="container flex flex-col items-center text-white z-10 absolute">
        <div className="">
          <h1 className="text-8xl font-bold mb-4 text-center block w-2/3 mx-auto">
            El Origen de la Diversión virtual
          </h1>
          <div className="my-8 text-center">
            <p className="leading-relaxed text-xl">
              Viaja al pasado y sumérgete en el universo de los videojuegos
              retro.
            </p>
            <p className="leading-relaxed text-xl">
              Anímate y haz parte de de él con la variedad de consolas que te
              ofrecemos.
            </p>
          </div>
          <button className="block mx-auto w-48 bg-red-500 text-white px-4 py-3 font-bold text-2xl mt-5 rounded">
            ¡Vamos!
          </button>
        </div>
        <div></div>
      </div>
    </Background>
  </StyleHero>
);

export default Hero;

const StyleHero = styled.div`
  position: relative;
  & > div {
    height: 664px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
