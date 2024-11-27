import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [formData, setFormData] = useState({ image1: null, image2: null });

  const handleImageChange = (event) => {
    const { id, files } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files[0],
    }));
  };

  const handleAdd = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data from the form fields
    const title = e.target.title.value;
    const price = e.target.price.value;
    const oldprice = e.target.oldprice.value;
    const SKU = e.target.SKU.value;
    const category = e.target.category.value;
    const offer = e.target.offer.checked; // Checkbox value
    const rating = e.target.rating.value;
    const author = e.target.author.value;
    const description = e.target.description.value;

    const data = new FormData();

    // Append form fields to FormData
    data.append("title", title);
    data.append("price", price);
    data.append("oldprice", oldprice);
    data.append("SKU", SKU);
    data.append("category", category);
    data.append("offer", offer);
    data.append("rating", rating);
    data.append("author", author);
    data.append("description", description);

    // Append image files to FormData
    if (formData.image1) data.append("image1", formData.image1);
    if (formData.image2) data.append("image2", formData.image2);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/add",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product added:", response.data);
      toast.success("product added success");
    } catch (error) {
      console.error("Error adding product:", error.message);
      toast.error("no added product");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <SectionTitle title="Add Product Page" />
      <form
        onSubmit={handleAdd}
        className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter product title"
              className="mt-2 p-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="mt-2 p-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Old Price */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Old Price</label>
            <input
              type="number"
              name="oldprice"
              placeholder="Enter old price"
              className="mt-2 p-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              className="mt-2 p-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* SKU */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">SKU</label>
            <input
              type="text"
              name="SKU"
              placeholder="Enter SKU"
              className="mt-2 p-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="Enter rating (1-5)"
              className="mt-2 p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Offer */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="offer"
              id="offer"
              className="h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
            />
            <label htmlFor="offer" className="font-medium text-gray-700">
              Offer
            </label>
          </div>

          {/* Author */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Enter author name"
              className="mt-2 p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              placeholder="Enter product description"
              className="mt-2 p-2 border rounded-md focus:ring focus:ring-blue-300"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="font-medium text-gray-700">Product Images</label>
            <div className="flex gap-4 mt-4">
              {["image1", "image2"].map((imageId) => (
                <label htmlFor={imageId} key={imageId}>
                  <div className="border border-dashed border-gray-400 p-4 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
                    {formData[imageId] ? (
                      <img
                        className="w-16 h-16 object-cover rounded"
                        src={URL.createObjectURL(formData[imageId])}
                        alt="Uploaded preview"
                      />
                    ) : (
                      <FaCloudUploadAlt className="text-5xl text-gray-400" />
                    )}
                    <input
                      type="file"
                      hidden
                      id={imageId}
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      {formData[imageId] ? "Change" : "Upload"}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
