import React, { useEffect } from "react";
import image1 from "../assets/latest_product/image1.png";
import image2 from "../assets/latest_product/image2.png";
import image3 from "../assets/latest_product/image3.png";
import image4 from "../assets/latest_product/image4.png";
import image5 from "../assets/latest_product/image5.png";
import image6 from "../assets/latest_product/image6.png";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouriteProduct,
  removeFavouriteProduct,
} from "../Store/Slices/fvt";
import { addToCart, removeFromCart } from "../Store/Slices/cart";
import { selectSearchQuery } from "../Store/Slices/SearchProduct";

const LatestProducts = () => {
  const fvtsProducts = useSelector((state) => state.favourite.favourites);
  const cartProducts = useSelector((state) => state.cart.cart);
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();
  const latestProducts = [
    {
      image: image1,
      discount: "-30%",
      title: "Minimalist Armchair",
      price: 140,
      description:
        "A sleek and stylish armchair that blends minimalist design with comfort, perfect for modern living spaces.",
    },
    {
      image: image2,
      discount: "-20%",
      title: "Vintage Wooden Chair",
      price: 100,
      description:
        "Add a touch of nostalgia with this vintage wooden chair, offering classic design and durability for any room.",
    },
    {
      image: image3,
      discount: "-50%",
      title: "Premium Swivel Chair",
      price: 180,
      description:
        "A high-quality swivel chair designed for both comfort and style, ideal for office or home use with adjustable features.",
    },
    {
      image: image4,
      discount: "-25%",
      title: "Scandinavian Lounge Chair",
      price: 150,
      description:
        "Featuring a clean Scandinavian design, this lounge chair provides ultimate relaxation with a simple yet elegant look.",
    },
    {
      image: image5,
      discount: "-10%",
      title: "Foldable Beach Chair",
      price: 75,
      description:
        "A lightweight and foldable beach chair, perfect for outdoor relaxation, offering comfort and portability.",
    },
    {
      image: image6,
      discount: "-40%",
      title: "Leather Executive Chair",
      price: 200,
      description:
        "A luxurious leather executive chair that offers superior comfort and style, designed for a professional office environment.",
    },
  ];

  const filteredProducts = latestProducts.filter(
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
        Latest Products
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
