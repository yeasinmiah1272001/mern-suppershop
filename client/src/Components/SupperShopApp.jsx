import Container from "./Container";
import img1 from "../assets/dek.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const SupperShopApp = () => {
  return (
    <Container className="bg-gray-100 mt-6 p-12 flex items-center justify-center space-x-8 rounded-lg shadow-lg">
      <div>
        <img className="w-[550px] rounded-lg" src={img1} alt="App preview" />
      </div>
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Download Diptoo App Now!
        </h1>
        <p className="text-gray-600 text-lg">
          Shop faster and more easily with our app. Get a link to download the
          app on your phone.
        </p>
        <div className="flex items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border rounded-md w-64 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Subscribe
          </button>
        </div>
        <div className="flex space-x-4 pt-4">
          <a
            href="#"
            className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaGooglePlay className="text-xl" />
            <span>Play Store</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaApple className="text-xl" />
            <span>App Store</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default SupperShopApp;
