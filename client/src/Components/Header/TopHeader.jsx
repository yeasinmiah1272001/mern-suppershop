import React, { useState } from "react";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopHeader = () => {
  const { cart, favourite } = useSelector((state) => state.name);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#FE9931]">
      <Container className="flex items-center justify-between p-2 shadow-lg">
        {/* Logo Section */}
        <div>
          <Link to="/" className="text-3xl font-extrabold tracking-wide">
            <span className="text-red-700 transition duration-300 ease-in-out">
              Supper
            </span>
            <span className="text-blue-500 hover:text-purple-500 transition duration-300 ease-in-out">
              Shop
            </span>
          </Link>
        </div>

        {/* Search Bar Section */}
        <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-1 w-1/2">
          <button className="text-gray-700 font-semibold">All</button>
          <input
            type="text"
            placeholder="Search products..."
            className="flex-grow outline-none text-gray-700 px-2 w-1/2"
          />
          <button
            type="submit"
            className="text-white bg-[#FE9931] rounded-full p-2 hover:bg-orange-600 transition"
          >
            🔍
          </button>
        </div>

        {/* Icon Section */}
        <div className="flex items-center space-x-4 text-white">
          <div className="relative">
            <Link to={"/cartpage"}>
              <FaShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
                {cart.length > 0 ? cart.length : "0"}
              </span>
            </Link>
          </div>
          <div className="relative">
            <Link to={"/favourite"}>
              <FaHeart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
                {favourite.length > 0 ? favourite.length : "0"}
              </span>
            </Link>
          </div>

          {/* User Icon with Dropdown */}
          <div className="relative">
            <FaUser
              size={20}
              onClick={toggleDropdown}
              className="cursor-pointer"
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48">
                <Link
                  to={"/adminLogin"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Admin Login
                </Link>
                <Link
                  to={"/userLogin"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  User Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
