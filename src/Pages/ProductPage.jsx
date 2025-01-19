import React from "react";
import FeaturedProducts from "../Components/FeaturedProducts";
import LatestProducts from "../Components/LatestProducts";
import TrendingProducts from "../Components/TrendingProducts";

const ProductPage = () => {
  return (
    <>
      <FeaturedProducts />
      <LatestProducts />
      <TrendingProducts />
    </>
  );
};

export default ProductPage;
