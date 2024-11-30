import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

import Header from "../Components/Header/Header";

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate("/adminLogin");
    }
  }, [navigate]);

  if (!isAuthenticated) return null;

  return (
    <main className="bg-gray-50 min-h-screen w-full">
      <Header />
      <div className="flex w-full">
        {/* Sidebar (fixed and below Navbar) */}
        <div className="w-[18%] fixed top-[5.5rem] left-0 min-h-screen bg-white shadow-md border-r border-gray-300 z-10">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 ml-[18%] px-8 py-6">
          <Outlet /> {/* Outlet to render nested routes */}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
