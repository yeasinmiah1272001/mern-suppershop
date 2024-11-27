import axios from "axios";
import { useEffect, useState } from "react";
import { serverUrl } from "../../Config";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import ProductCard from "../Components/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const itemsPerPage = 12;
  const pagesPerGroup = 6;

  // Fetch products and filter based on category
  const handleGetProduct = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/products/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      if (data.success) {
        setProducts(data.product);
        setFilteredProducts(data.product); // Set initial filtered products to all products
      } else {
        alert.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Filter products based on selected category
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "") {
      setFilteredProducts(products); // If "All Categories" is selected, show all products
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1); // Reset to first page after category change
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  // Total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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
    <Container>
      <SectionTitle title={"Continue your shopping"} />
      <div className="flex flex-col w-1/3">
        <label htmlFor="category" className="mb-2">
          Category
        </label>
        <select
          id="category"
          className="p-2 border rounded"
          value={selectedCategory}
          onChange={handleCategoryChange} // Handle category change
        >
          <option value="">All Categories</option>
          <option value="Pet Care">Pet Care</option>
          <option value="Pharmacy">Pharmacy</option>
          <option value="Electronics">Electronics</option>
          <option value="Exclusive Products">Exclusive Products</option>
          <option value="Computer Accessories">Computer Accessories</option>
          <option value="Trending Products">Trending Products</option>
          <option value="Baby & Mother">Baby & Mother</option>
          <option value="Skin Care">Skin Care</option>
          <option value="Food & Grocery">Food & Grocery</option>
          <option value="Women's Care">Women's Care</option>
          <option value="Featured products">Featured products</option>
          <option value="Organic Food">Organic Food</option>
          <option value="Islamic Items">Islamic Items</option>
          <option value="Popular Categories">Popular Categories</option>
          <option value="Weekday Deals">Weekday Deals</option>
        </select>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10">
        {currentItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
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
    </Container>
  );
};

export default ProductPage;
