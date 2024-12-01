import React, { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import Container from "../Components/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../Config";
import toast from "react-hot-toast";

const UserRegister = () => {
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // error cheack
  const [userNameError, setUserNameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");

  // useEffect(() => {
  //   if (token) {
  //     navigate("/");
  //   }
  // }, [token]);

  const handleName = (e) => {
    setUserName(e.target.value);
    setUserNameError("");
  };

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
    setUserEmailError("");
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
    setUserPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    let valid = true;

    if (!userName) {
      setUserNameError("Enter your user name");
      valid = false;
    }
    if (!userEmail) {
      setUserEmailError("Enter your email");
      valid = false;
    }
    if (!userPassword) {
      setUserPasswordError("Enter your password");
      valid = false;
    } else if (userPassword.length < 8) {
      setUserPasswordError("Password must be at least 8 characters long");
      valid = false;
    }

    if (!valid) return; // Prevent further execution if validation fails

    // Backend submission
    try {
      setLoading(true);
      const response = await axios.post(`${serverUrl}/api/users/register`, {
        name: userName,
        email: userEmail,
        password: userPassword,
      });

      const data = response.data;
      if (data.success) {
        toast.success("User Registration successful");
        navigate("/userLogin");
      }
    } catch (error) {
      if (error.response && error.response) {
        // Handle "User already exists" error
        toast.error("User already exists. Please login.");
      } else {
        // Handle other errors
        toast.error("Registration failed. Please try again.");
      }
      console.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="bg-gray-100  p-8 rounded-lg shadow-md w-1/3 mx-auto">
        <form className="space-y-2">
          <SectionTitle title={"User Register"} />

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-medium text-gray-700">
              User Name
            </label>
            <input
              className="p-3 rounded-md bg-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              onChange={handleName}
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
            {userNameError && <p className="text-red-500">{userNameError}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-medium text-gray-700">
              User Email
            </label>
            <input
              className="p-3 rounded-md bg-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              onChange={handleEmail}
              id="email"
              placeholder="Enter your email"
              required
            />
            {userEmailError && <p className="text-red-500">{userEmailError}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="font-medium text-gray-700">
              User Password
            </label>
            <input
              className="p-3 rounded-md bg-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              onChange={handlePassword}
              id="password"
              placeholder="Enter your password"
              required
            />
            {userPasswordError && (
              <p className="text-red-500">{userPasswordError}</p>
            )}
          </div>

          <div onClick={handleSubmit} className="flex-1 w-full">
            <button
              type="submit"
              className="py-2 px-6 w-full rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              User Register
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          already have an account?{" "}
          <Link
            to="/userLogin"
            className="text-indigo-600 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default UserRegister;
