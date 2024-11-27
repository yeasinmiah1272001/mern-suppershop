import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <div className=" overflow-hidden">
      <div class="flex flex-col items-center justify-center  ">
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">
            Welcome to the Admin Panel
          </h1>
          <p class="text-gray-600 mb-6">
            Manage your website's content, users, settings, and more. Use the
            tools provided in the menu to get started and take control of your
            admin tasks efficiently.
          </p>
          <button class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>

      <main className="bg-gray-50 min-h-screen w-full">
        <>
          <div className="flex w-full">
            {/* Sidebar (fixed and below Navbar) */}
            <div className="w-[18%] fixed top-[5.5rem] left-0 min-h-screen bg-white shadow-md border-r border-gray-300 z-10">
              <Sidebar />
            </div>

            {/* Main content */}
            <div className="flex-1 ml-[18%] px-8 py-6">
              <Outlet />
            </div>
          </div>
        </>
      </main>
    </div>
  );
};

export default Admin;
