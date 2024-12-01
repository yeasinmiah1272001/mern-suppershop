import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { FaHeart } from "react-icons/fa"; // Importing the favorite icon
import { IoMdCart } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

import PriceContainer from "./PriceContainer";
import { addFavourite, deteleFavourite } from "../redux/supperShopSlice";

const ProductCard = ({ item }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {}, [item]);

  const handleAddFavourite = () => {
    if (isFavorited) {
      // If the item is already in favorites, remove it
      dispatch(deteleFavourite(item._id));
      setIsFavorited(false);
      toast.success("Removed from favorites");
    } else {
      // If the item is not favorited, add it to the favorites
      dispatch(addFavourite(item));
      setIsFavorited(true);
      toast.success("Added to favorites");
    }
  };

  return (
    <div className="w-48 h-56 overflow-hidden border border-gray-600  rounded-lg shadow-lg group relative bg-white">
      <Link to={`/single/${item._id}`}>
        <img
          src={item.image[0]}
          alt={item.title}
          className="w-full h-28 object-cover p-1 relative"
        />
        <p className="absolute top-2 right-2 bg-teal-400 text-white p-1 px-3 rounded-md text-xs font-semibold">
          {item.offer ? "Sale" : "Sold Out"}
        </p>
      </Link>
      <div className="absolute inset-x-0 bottom-24 translate-y-full opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 flex justify-center space-x-2 pb-3">
        <button
          onClick={handleAddFavourite}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all duration-200"
          aria-label="Add to favorites"
        >
          <FaHeart
            className={`${isFavorited ? "text-red-500" : "text-gray-600"}`}
            size={18}
          />
        </button>
        <button
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all duration-200"
          aria-label="Add to wishlist"
        >
          <IoMdCart className="text-gray-600" size={18} />
        </button>
        <button
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all duration-200"
          aria-label="Compare"
        >
          <Link to={`/single/${item._id}`}>
            <CiEdit className="text-gray-600" size={18} />
          </Link>
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-700 mb-1 truncate">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-1">${item.price}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
