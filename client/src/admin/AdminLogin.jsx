import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import Container from "../Components/Container";
import axios from "axios";
import toast from "react-hot-toast";
import { serverUrl } from "../../Config";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const formData = { email, password };

    try {
      const response = await axios.post(
        `${serverUrl}/api/users/admin`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      const data = response.data;

      if (data.success) {
        // Save token to localStorage
        localStorage.setItem("adminToken", data.token);
        toast.success("Admin Login successful!");
        navigate("/admin"); // Redirect to the admin dashboard or home page
      } else {
        toast.error(data.message || "Login failed.");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <Container>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-1/2 mx-auto">
        <form onSubmit={handleAdminLogin} className="space-y-6">
          <SectionTitle title={"Admin Login page"} />

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-medium text-gray-700">
              Admin Email
            </label>
            <input
              className="p-3 rounded-md bg-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              defaultValue={"jakir@gmail.com"}
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="font-medium text-gray-700">
              Admin Password
            </label>
            <input
              className="p-3 rounded-md bg-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              defaultValue={"12345678"}
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
              Admin Login
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};
