import React from "react";

const CategorySidebar = ({ categories, onCategorySelect }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
