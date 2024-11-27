import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-6 mx-auto w-full">
      <h2 className="text-3xl font-semibold text-gray-800">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-600 text-lg">
        Stay updated with the latest news, deals, and more. Join our mailing
        list!
      </p>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 w-full space-y-4 sm:space-y-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 border rounded-md w-full sm:w-auto flex-1 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md w-full sm:w-auto font-medium hover:bg-blue-600 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
