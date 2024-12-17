import { useDispatch, useSelector } from "react-redux";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import AddToCartBtn from "../Components/AddToCartBtn";
import PriceContainer from "../Components/PriceContainer";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { deteleproduct } from "../redux/supperShopSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import CartSummary from "../Components/CartSummary";

const CartPage = () => {
  const { cart } = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userToken = localStorage.getItem("user-token");
  useEffect(() => {
    if (!userToken) {
      navigate("/userLogin");
    }
  }, [userToken]);

  return (
    <Container>
      <SectionTitle title={"Cart Page"} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Cart Items */}
        <div className="md:col-span-2">
          {cart.length === 0 ? (
            <div className="mt-8 text-center text-lg font-semibold text-gray-700">
              <p>No available products, please continue your shopping!</p>
              <Link
                to="/productpage"
                className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <h1 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <AddToCartBtn item={item} />
                  <PriceContainer item={item} />
                  <button
                    className="text-red-500 hover:text-red-700 transition-colors"
                    onClick={() => {
                      /* handle item removal */
                    }}
                  >
                    <FaTimes
                      onClick={() =>
                        dispatch(
                          deteleproduct(item._id),
                          toast.success("product deleted success")
                        )
                      }
                      className="text-xl"
                    />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Section: Payment Card */}
        <CartSummary cart={cart} />
      </div>
    </Container>
  );
};

export default CartPage;
