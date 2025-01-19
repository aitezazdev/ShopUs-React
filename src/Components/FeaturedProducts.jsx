import React, { useEffect } from "react";
import image1 from "../assets/featured_product/image1.png";
import image2 from "../assets/featured_product/image2.png";
import image3 from "../assets/featured_product/image3.png";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouriteProduct,
  removeFavouriteProduct,
} from "../Store/Slices/fvt";
import { addToCart, removeFromCart } from "../Store/Slices/cart";
import { selectSearchQuery, setFilteredProducts } from "../Store/Slices/SearchProduct";

const FeaturedProducts = () => {
  const fvtsProducts = useSelector((state) => state.favourite.favourites);
  const cartProducts = useSelector((state) => state.cart.cart);
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const featuredProducts = [
    {
      image: image1,
      discount: "-30%",
      title: "Ergonomic Office Chair",
      price: 120,
      description:
        "Designed for long hours of comfort, this ergonomic chair offers adjustable features and lumbar support to ensure proper posture and reduce back pain, making it perfect for both home and office use.",
    },
    {
      image: image2,
      discount: "-25%",
      title: "Modern Dining Chair",
      price: 80,
      description:
        "This sleek, modern dining chair combines style and durability with its minimalist design and sturdy construction, adding a touch of elegance to any dining room while providing comfort for meals and gatherings.",
    },
    {
      image: image3,
      discount: "-50%",
      title: "Luxury Lounge Chair",
      price: 150,
      description:
        "Relax in style with this luxury lounge chair, offering plush cushions and a sophisticated design. Perfect for unwinding after a long day or adding comfort to your living space.",
    },
  ];

  useEffect(() => {
    const filtered = featuredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    dispatch(setFilteredProducts(filtered));
  }, [searchQuery, dispatch]);

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

  const displayProducts = searchQuery ? 
    featuredProducts.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) : featuredProducts;

  return (
    <div className="my-14">
      <h2 className="text-4xl font-semibold text-center my-5">
        Featured Products
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        {displayProducts.map((product, index) => (
          <div className="w-[320px] p-4" key={index}>
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
                <h3 className="text-lg font-bold text-gray-800">
                  {product.title}
                </h3>
                <p className="font-semibold text-red-500">
                  ${product.price}{" "}
                  <del className="text-gray-500 mx-2 text-sm">
                    ${product.price + 100}
                  </del>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;