import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import axios from "axios";
import { serverUrl } from "../../Config";
import toast from "react-hot-toast";

const AddUsers = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleAddUser = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    const formData = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${serverUrl}/api/users/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.data;
      console.log("res", data);

      if (data.success) {
        toast.success("User registered successfully!");
        e.target.reset(); // Clears the form fields
        navigate("/admin/userList"); // Navigate to the user list page
      } else {
        toast.error(data.message || "User registration failed.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error.message);
    }
  };

  return (
    <Container>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 mx-auto">
        <form onSubmit={handleAddUser} action="" className="space-y-6">
          <SectionTitle title={"Add User"} />
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-medium text-gray-700">
              User Name
            </label>
            <input
              className="p-3 rounded-md bg-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-medium text-gray-700">
              User Email
            </label>
            <input
              className="p-3 rounded-md bg-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="font-medium text-gray-700">
              User Password
            </label>
            <input
              className="p-3 rounded-md bg-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex-1 w-full">
            <button
              type="submit"
              className="py-2 px-6 w-full rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddUsers;
