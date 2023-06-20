import React from "react";
import Slide from "./Slide";
import ProductDetail from "./ProductDetail";
const Home = () => {
  return (
    <div className="home">
      <Slide />
      <ProductDetail type={"Feature"} />
      <ProductDetail type={"Trending"} />
    </div>
  );
};

export default Home;
