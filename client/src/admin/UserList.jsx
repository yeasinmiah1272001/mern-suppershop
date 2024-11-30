import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import axios from "axios";
import { serverUrl } from "../../Config";
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";
import toast from "react-hot-toast";

const UserList = () => {
  const [userList, setUserList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  console.log("token", token);

  // Fetch users from the server
  const handleGetUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${serverUrl}/api/users/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      setUserList(data.user);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch user list.");
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const handleDeleteUser = async (_id) => {
    const response = await axios.post(`${serverUrl}/api/users/remove`, {
      _id,
    });
    const data = response.data;
    if (data.success) {
      toast.success("user deleted success");
      handleGetUser();
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Container>
      <SectionTitle title={"All User List"} />

      {loading ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Loading users...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
        </div>
      ) : userList?.length > 0 ? (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">
                  Name
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">
                  Email
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">
                  Role
                </th>
                <th className="border border-gray-200 px-4 py-2 text-center font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr
                  key={user._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">
                    {user.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">
                    {user.email}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">
                    {user.isAdmin ? "Admin" : "Pending"}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    <div className="flex items-center justify-center space-x-6">
                      <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No users found.</p>
        </div>
      )}
    </Container>
  );
};

export default UserList;
