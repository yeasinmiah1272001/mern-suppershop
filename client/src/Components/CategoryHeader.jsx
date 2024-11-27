import React from "react";

const CategoryHeader = ({ title, categories }) => {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-md shadow-md mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
      <div className="flex gap-6 items-center">
        {categories.map((category, index) => (
          <p
            key={index}
            className="text-gray-600 hover:text-gray-900 cursor-pointer transition duration-200"
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoryHeader;
