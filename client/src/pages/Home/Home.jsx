import React from "react";
import Slide from "../../components/Slide/Slide";
import ProductFeatures from "../../components/ProductFeatures/ProductFeatures";
import Categories from "../../components/Categories/Categories";
const Home = () => {
  return (
    <div className="home">
      <Slide />
      <ProductFeatures type={"Feature"} />
      <Categories />
      <ProductFeatures type={"Trending"} />
    </div>
  );
};

export default Home;
