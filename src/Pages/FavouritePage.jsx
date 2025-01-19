import React from "react";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFavouriteProduct } from "../Store/Slices/fvt";
import { addToCart, removeFromCart } from "../Store/Slices/cart";

const FavouritePage = () => {
  const fvtProducts = useSelector((state) => state.favourite.favourites);
  const cartProducts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const isInCart = (product) =>
    cartProducts.some((p) => p.title === product.title);

  const handleCartClick = (product) => {
    if (!isInCart(product)) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product));
    }
  };

  if (!fvtProducts.length) {
    return <h1 className="text-center text-3xl mt-20 font-bold">No favourite products found.</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {fvtProducts.map((product, index) => (
        <div className="mb-6 last:mb-0 md:mx-20" key={index}>
          <div className="flex flex-col md:flex-row bg-gray-200 rounded-lg shadow hover:shadow-xl transition-all duration-300">
            <div className="w-full md:w-1/3 p-4 md:p-8">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 md:h-64 object-contain mx-auto"
              />
            </div>

            <div className="p-4 md:p-8 w-full md:w-2/3 flex flex-col justify-center gap-3 md:gap-5">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800 line-clamp-2">
                {product.title}
              </h3>

              <p className="font-semibold text-red-500 text-lg md:text-xl">
                ${product.price}
                <del className="text-gray-500 mx-2 text-sm">
                  ${product.price + 100}
                </del>
              </p>
              
              <p className="text-sm md:text-base line-clamp-3 md:line-clamp-none">
                {product.description}
              </p>
              
              <div className="flex gap-5 mt-2">
                <IoMdHeart 
                  onClick={() => dispatch(removeFavouriteProduct(product))} 
                  className="text-2xl cursor-pointer text-red-600 hover:scale-110 transition-transform" 
                />
                {isInCart(product) ? (
                  <IoCartOutline 
                    onClick={() => handleCartClick(product)}
                    className="text-2xl cursor-pointer text-green-600 hover:scale-110 transition-transform" 
                  />
                ) : (
                  <IoCartOutline 
                    onClick={() => handleCartClick(product)}
                    className="text-2xl cursor-pointer hover:text-red-500 hover:scale-110 transition-transform" 
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouritePage;
