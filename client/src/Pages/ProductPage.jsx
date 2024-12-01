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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(""); // New state for offer filter
  const itemsPerPage = 12;

  // Fetch products from the API
  const handleGetProduct = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/products/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data); // Log the response to check the structure
      const data = response.data;
      if (data.success) {
        setProducts(data.product);
        setFilteredProducts(data.product); // Set initial filtered products
      } else {
        alert.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Filter products based on selected filters
  const filterProducts = () => {
    let filtered = products;

    // Category Filter
    if (selectedCategory) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Price Range Filter
    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.split("-").map(Number);
      filtered = filtered.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    // Rating Filter
    if (selectedRating) {
      filtered = filtered.filter((product) => product.rating >= selectedRating);
    }

    // Offer Filter (corrected)
    if (selectedOffer !== "") {
      const isOffer = selectedOffer === "true"; // Convert to boolean
      filtered = filtered.filter((product) => product.offer === isOffer);
    }

    setFilteredProducts(filtered);
  };

  // Trigger filter whenever filter values change
  useEffect(() => {
    filterProducts();
    handleGetProduct();
  }, [selectedCategory, selectedPrice, selectedRating, selectedOffer]);

  // Get products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <Container>
      <SectionTitle title={"Shop By Category"} />

      <div className="flex gap-8">
        {/* Left Side: Filter Options */}
        <div className="w-1/4 p-4 bg-gray-100 rounded shadow">
          <div className="mb-6">
            <label htmlFor="category" className="block mb-2 font-medium">
              Category
            </label>
            <select
              id="category"
              className="w-full p-2 border rounded"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Pet Care">Pet Care</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Electronics">Electronics</option>
              <option value="Exclusive Products">Exclusive Products</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="price" className="block mb-2 font-medium">
              Price Range
            </label>
            <select
              id="price"
              className="w-full p-2 border rounded"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="0-50">Under $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-200">$100 - $200</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="rating" className="block mb-2 font-medium">
              Minimum Rating
            </label>
            <select
              id="rating"
              className="w-full p-2 border rounded"
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
            >
              <option value="">All Ratings</option>
              <option value="1">1 Star & Above</option>
              <option value="2">2 Stars & Above</option>
              <option value="3">3 Stars & Above</option>
              <option value="4">4 Stars & Above</option>
            </select>
          </div>

          {/* Offer Filter */}
          <div className="mb-6">
            <label htmlFor="offer" className="block mb-2 font-medium">
              Offer
            </label>
            <select
              id="offer"
              className="w-full p-2 border rounded"
              value={selectedOffer}
              onChange={(e) => setSelectedOffer(e.target.value)}
            >
              <option value="">All Offers</option>
              <option value="true">On Offer</option>
              <option value="false">Not On Offer</option>
            </select>
          </div>
        </div>

        {/* Right Side: Product Content */}
        <div className="w-3/4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              className="px-4 py-2 bg-gray-300 rounded-l"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                } rounded`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-gray-300 rounded-r"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
