import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

const PriceContainer = ({ item, className }) => {
  const { cart } = useSelector((state) => state.name);

  const [existingProduct, setExistingProduct] = useState(null);

  useEffect(() => {
    if (item && cart) {
      const availableProduct = cart.find(
        (cartItem) => cartItem._id === item._id
      );
      setExistingProduct(availableProduct);
    }
  }, [cart, item]);
  const regularPrice = existingProduct
    ? existingProduct.quantity * existingProduct.oldprice
    : item?.oldprice;
  const discountPrice = existingProduct
    ? existingProduct.quantity * existingProduct.price
    : item?.price;
  return (
    <div className={twMerge("flex gap-2 items-center ", className)}>
      <p className="font-semibold text-gray-500 line-through">{regularPrice}</p>
      <p className="font-semibold text-gray-900">{discountPrice}$</p>
    </div>
  );
};

export default PriceContainer;
