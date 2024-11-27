import React, { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const pagesPerGroup = 6; // Number of pagination buttons to show at once

  const handleGetProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products/list",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if (data.success) {
        setProducts(data.product); // Assuming there are 120 products here
      } else {
        alert.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (_id) => {
    try {
      // setIsLoading(true);
      const response = await axios.post(
        `http://localhost:5000/api/products/remove`,
        {
          _id,
        }
      );
      const data = response.data;
      console.log("data", data);
      if (data.success) {
        toast.success("product deleted successfully");
        handleGetProduct();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Delete product error:", error);
      toast.error("Error: " + error.message);
    }
  };
  useEffect(() => {
    handleGetProduct();
  }, []);

  // Calculate the current items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  // Total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Pages to display based on the current page group
  const startPage =
    Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center">
        <SectionTitle title="Product List Page" />
        <p>{products.length}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-200 w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Offer</th>
              <th className="border border-gray-300 px-4 py-2">SKU</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    className="w-20 h-20 object-cover"
                    src={item.image[0]}
                    alt={item.title}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.offer ? "sold" : "soldOut"}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.SKU}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleDelete(item._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Display Pagination Buttons (6 at a time) */}
        {[...Array(endPage - startPage + 1)].map((_, index) => (
          <button
            key={startPage + index}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === startPage + index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handlePageClick(startPage + index)}
          >
            {startPage + index}
          </button>
        ))}

        <button
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
