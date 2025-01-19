import React from "react";
import { IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Store/Slices/cart";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const calculateTotal = () => {
    return cartProducts.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="my-14 px-4 sm:px-8 md:px-16">
      {cartProducts.length === 0 ? (
        <p className="text-center text-3xl font-semibold">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div className="flex flex-col gap-2 md:mx-20">
                  <h3 className="font-semibold text-lg text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="font-semibold text-red-500">${product.price}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <IoMdTrash
                  onClick={() => handleRemoveFromCart(product)}
                  className="text-3xl text-red-600 cursor-pointer hover:text-red-800"
                />
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
            <span className="font-bold text-xl">Total:</span>
            <span className="font-semibold text-lg text-red-500">${calculateTotal()}</span>
          </div>

          <div className="mt-6 text-center">
            <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
