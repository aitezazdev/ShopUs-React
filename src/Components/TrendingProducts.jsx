import React from "react";
import image1 from "../assets/trending_product/image1.png";
import image2 from "../assets/trending_product/image2.png";
import image3 from "../assets/trending_product/image3.png";
import image4 from "../assets/trending_product/image 4.png";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouriteProduct,
  removeFavouriteProduct,
} from "../Store/Slices/fvt";
import { addToCart, removeFromCart } from "../Store/Slices/cart";
import { selectSearchQuery } from "../Store/Slices/SearchProduct";

const TrendingProducts = () => {
  const fvtsProducts = useSelector((state) => state.favourite.favourites);
  const cartProducts = useSelector((state) => state.cart.cart);
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const trendingProducts = [
    {
      image: image1,
      discount: "-20%",
      title: "Compact Study Chair",
      price: 90,
      description:
        "A compact and ergonomic chair designed for study or work, offering comfort without taking up space.",
    },
    {
      image: image2,
      discount: "-35%",
      title: "Elegant Accent Chair",
      price: 130,
      description:
        "An elegant accent chair that enhances any room's decor with its stylish design and comfortable seating.",
    },
    {
      image: image3,
      discount: "-50%",
      title: "Classic Rocking Chair",
      price: 110,
      description:
        "A timeless rocking chair combining comfort and nostalgia, perfect for relaxing and unwinding.",
    },
    {
      image: image4,
      discount: "-15%",
      title: "Comfy Recliner Chair",
      price: 200,
      description:
        "A luxurious recliner chair designed for ultimate comfort, ideal for lounging after a long day.",
    },
  ];

  const filteredProducts = trendingProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isFavourite = (product) =>
    fvtsProducts.some((p) => p.title === product.title);

  const isInCart = (product) =>
    cartProducts.some((p) => p.title === product.title);

  const handleFavouriteClick = (product) => {
    if (!isFavourite(product)) {
      dispatch(addFavouriteProduct(product));
    } else {
      dispatch(removeFavouriteProduct(product));
    }
  };

  const handleCartClick = (product) => {
    if (!isInCart(product)) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product));
    }
  };

  const ProductCard = ({ product }) => (
    <div className="w-[320px] p-4">
      <div className="relative bg-gray-200 rounded-lg shadow hover:shadow-xl transition-all duration-300">
        <div className="w-full h-56 object-cover rounded-t-lg p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <span className="font-semibold text-white bg-red-500 py-0.5 text-sm rounded px-3 absolute top-4 left-4">
            {product.discount}
          </span>
          {isFavourite(product) ? (
            <IoMdHeart
              onClick={() => handleFavouriteClick(product)}
              className="text-2xl cursor-pointer absolute top-4 right-4 text-red-600"
            />
          ) : (
            <IoMdHeartEmpty
              onClick={() => handleFavouriteClick(product)}
              className="text-2xl cursor-pointer absolute top-4 right-4 hover:text-red-600"
            />
          )}
          {isInCart(product) ? (
            <IoCartOutline
              onClick={() => handleCartClick(product)}
              className="text-2xl cursor-pointer absolute top-14 right-4 text-green-600"
            />
          ) : (
            <IoCartOutline
              onClick={() => handleCartClick(product)}
              className="text-2xl cursor-pointer absolute top-14 right-4 hover:text-red-500"
            />
          )}
          <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
          <p className="font-semibold text-red-500">
            ${product.price}{" "}
            <del className="text-gray-500 mx-2 text-sm">
              ${product.price + 100}
            </del>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-14">
      <h2 className="text-4xl font-semibold text-center my-5">
        Trending Products
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
