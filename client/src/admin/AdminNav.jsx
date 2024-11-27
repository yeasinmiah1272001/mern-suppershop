import { Link } from "react-router-dom";
import Container from "../Components/Container";

const AdminNav = () => {
  return (
    <div className="border-b sticky top-0  border-gray-300 shadow-md bg-white ">
      <Container className="flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide">
              <span className="text-red-500 hover:text-yellow-500 transition duration-300 ease-in-out">
                Supper
              </span>
              <span className="text-blue-500 hover:text-purple-500 transition duration-300 ease-in-out">
                Shop
              </span>
            </h1>
            <p className="text-gray-500 text-sm font-semibold">Admin Panel</p>
          </div>
        </Link>
        <button className="bg-gray-700 text-white hover:bg-gray-900 transition duration-300 px-6 py-2 rounded-lg shadow-md">
          Logout
        </button>
      </Container>
    </div>
  );
};

export default AdminNav;
