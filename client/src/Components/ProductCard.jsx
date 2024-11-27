import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { FaHeart } from "react-icons/fa"; // Importing the favorite icon

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
    <div className="group hover:border p-2 border-gray-300 cursor-pointer relative rounded-lg shadow-lg overflow-hidden h-[280px] w-52 bg-white hover:shadow-black transition-shadow duration-300 ease-in-out">
      <Link to={`/single/${item._id}`}>
        <img
          src={item.image}
          alt={item.name}
          className="h-40 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </Link>

      {/* Offer Badge */}
      <p className="absolute top-2 right-2 bg-teal-400 text-white p-1 px-3 rounded-md text-xs font-semibold">
        {item.offer ? "Sale" : "Sold Out"}
      </p>

      {/* Favorite Icon at the top-left corner */}
      <button
        onClick={handleAddFavourite}
        className={`absolute top-2 left-2 p-1 rounded-full transition duration-300 ${
          isFavorited ? "text-red-500" : "text-teal-500"
        }`}
      >
        <FaHeart size={24} />
      </button>

      {/* Sidebar that appears when hovering the image */}

      <div className="p-4">
        <PriceContainer item={item} />
        <p className="text-sm font-medium text-gray-700 truncate">
          {item.title}
        </p>
        <p className="text-sm font-medium text-yellow-500">{item.rating}</p>
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1 w-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCard;
