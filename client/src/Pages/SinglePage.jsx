import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { serverUrl } from "../../Config";
import { useEffect, useState } from "react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import PriceContainer from "../Components/PriceContainer";
import { SiWebmoney } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import { FaSimCard } from "react-icons/fa6";
import { SiClickhouse } from "react-icons/si";
import { SocialLink } from "../Components/SocialLink";
import QuantityBtn from "../Components/QuantityBtn";
import AddToCartBtn from "../Components/AddToCartBtn";

const SinglePage = () => {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();

  const handleGetProduct = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/api/products/single?_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if (data.success) {
        setProducts(data.product);
      } else {
        alert.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments((prev) => [...prev, newComment]);
    setNewComment("");
  };

  const navigate = useNavigate();

  const userToken = localStorage.getItem("user-token");
  useEffect(() => {
    if (!userToken) {
      navigate("/userLogin");
    }
  }, [userToken]);

  return (
    <Container>
      <SectionTitle title="Product Details" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden  bg-white">
          <img
            src={products.image}
            alt={products.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-gray-800">{products.title}</h1>
          <PriceContainer
            className="text-2xl font-semibold text-green-600"
            item={products}
          />
          <p className="text-gray-700">{products.description}</p>
          <h3 className="text-gray-600 font-medium">SKU: {products.SKU}</h3>
          <p className="text-gray-600 font-medium">
            Category: {products.category}
          </p>

          {/* Quantity & Add to Cart */}
          <AddToCartBtn item={products} />
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 p-6 rounded-lg h-72 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <SiWebmoney className="text-green-600 text-xl" />
            <span className="text-gray-700 font-medium">
              Shipping worldwide
            </span>
          </div>
          <div className="flex items-center gap-3">
            <SiClickhouse className="text-blue-500 text-xl" />
            <span className="text-gray-700 font-medium">
              Free 7-day return if eligible, so easy
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaSimCard className="text-yellow-500 text-xl" />
            <span className="text-gray-700 font-medium">
              Supplier gives bills for this product
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CiCreditCard1 className="text-indigo-600 text-xl" />
            <span className="text-gray-700 font-medium">
              100% secure payment. Cash on delivery (COD)
            </span>
          </div>
          <SocialLink />
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-12 space-y-6">
        <SectionTitle title="Comments" />
        <div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            className="w-full h-24 border border-gray-300 rounded-lg p-4 resize-none focus:outline-none focus:ring focus:ring-blue-500"
          ></textarea>
          <button
            onClick={handleAddComment}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Comment
          </button>
        </div>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-sm border"
            >
              <p className="text-gray-700">{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SinglePage;
