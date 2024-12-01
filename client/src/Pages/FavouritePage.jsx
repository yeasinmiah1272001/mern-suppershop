import React, { useEffect } from "react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import PriceContainer from "../Components/PriceContainer";
import QuantityBtn from "../Components/QuantityBtn";
import { FaTimes } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import AddToCartBtn from "../Components/AddToCartBtn";
import { deteleFavourite } from "../redux/supperShopSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FavouritePage = () => {
  const { favourite } = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContinueShopping = () => {
    navigate("/productpage"); // Navigate to the home page
  };

  const userToken = localStorage.getItem("user-token");
  useEffect(() => {
    if (!userToken) {
      navigate("/userLogin");
    }
  }, [userToken]);

  return (
    <Container>
      <SectionTitle title={"Your Favourite Items"} />
      {favourite.length === 0 ? (
        <div className="mt-8 text-center text-lg font-semibold text-gray-700">
          <p>No available products, please continue your shopping!</p>
          <button
            onClick={handleContinueShopping}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {favourite.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.title.slice(0, 18)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <AddToCartBtn item={item} />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <PriceContainer item={item} />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() =>
                        dispatch(
                          deteleFavourite(item._id),
                          toast.success("Removed your favourite products")
                        )
                      }
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
};

export default FavouritePage;
