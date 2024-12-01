import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  dececressQuantity,
  incressQuantity,
} from "../redux/supperShopSlice";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const AddToCartBtn = ({ item, className }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.name);

  const [existingProduct, setExistingProduct] = useState(null);

  useEffect(() => {
    if (item) {
      const availableProduct = cart.find(
        (cartItem) => cartItem._id === item._id
      );
      setExistingProduct(availableProduct);
    }
  }, [cart, item]);

  const handleAddToCart = () => {
    if (item) {
      dispatch(addProduct(item));
      toast.success(`${item.title.slice(0, 18)} added successfully`);
    }
  };

  const handleIncreaseQuantity = () => {
    dispatch(dispatch(incressQuantity(item._id)));
    toast.success(`Increased quantity for ${item.title}`);
  };

  const handleDecreaseQuantity = () => {
    dispatch(dececressQuantity(item._id));
    toast.success(`Decreased quantity for ${item.title}`);
  };

  return (
    <div>
      {existingProduct ? (
        <div className="flex items-center space-x-2">
          <button
            className="px-4 py-2 text-gray-600 hover:bg-gray-200"
            onClick={handleDecreaseQuantity}
          >
            <FiMinus />
          </button>
          <span className="px-6 py-2 bg-gray-100">
            {existingProduct.quantity || 0}
          </span>
          <button
            className="px-4 py-2 text-gray-600 hover:bg-gray-200"
            onClick={handleIncreaseQuantity}
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            "h-10 w-36 rounded-md bg-gray-500 text-center items-center justify-center  text-white hover:bg-[#FE9931] duration-300",
            className
          )}
        >
          <IoMdCart
            className=" text-center items-center justify-center mx-auto"
            size={30}
          />
        </button>
      )}
    </div>
  );
};

export default AddToCartBtn;
