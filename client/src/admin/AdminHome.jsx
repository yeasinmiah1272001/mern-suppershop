import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminContent from "./AdminContent";

const Admin = () => {
  return (
    <div className=" overflow-hidden">
      <AdminContent />

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
