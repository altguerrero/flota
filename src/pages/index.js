import * as React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import MenuCategories from "../components/menuCategories";
import Posts from "../components/posts";

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <MenuCategories />
        <Posts />
        <div className="h-screen"></div>
      </main>
    </>
  );
};

export default IndexPage;
