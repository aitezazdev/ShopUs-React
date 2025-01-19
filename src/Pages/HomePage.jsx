import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedProducts from "../Components/FeaturedProducts";
import LatestProducts from "../Components/LatestProducts";
import TrendingProducts from "../Components/TrendingProducts";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <TrendingProducts />
    </>
  );
};

export default HomePage;
