import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { dececressQuantity, incressQuantity } from "../redux/supperShopSlice";
import AddToCartBtn from "../Components/AddToCartBtn";
import toast from "react-hot-toast";

const QuantityBtn = ({ item }) => {
  const dispatch = useDispatch();
  const [existingProduct, setExistingProduct] = useState(null);
  const { cart } = useSelector((state) => state.name);

  const handleIncreaseQuantity = () => {
    if (item) {
      dispatch(
        incressQuantity(item._id),
        toast.success("product incress success")
      );
    }
  };

  const handleDecreaseQuantity = () => {
    if (item) {
      dispatch(
        dececressQuantity(item._id),
        toast.success("product decress success")
      );
    }
  };

  useEffect(() => {
    if (item) {
      const availableProduct = cart.find(
        (cartItem) => cartItem._id === item._id
      );
      setExistingProduct(availableProduct || null);
    }
  }, [item, cart]);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <button
          className="px-4 py-2 text-gray-600 hover:bg-gray-200"
          onClick={handleDecreaseQuantity}
        >
          <FiMinus />
        </button>
        <span className="px-6 py-2 bg-gray-100">
          {existingProduct?.quantity || 0}
        </span>
        <button
          className="px-4 py-2 text-gray-600 hover:bg-gray-200"
          onClick={handleIncreaseQuantity}
        >
          <FaPlus />
        </button>
      </div>
      <AddToCartBtn item={item} />
    </div>
  );
};

export default QuantityBtn;
