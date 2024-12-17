import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../Container";

const BottomHeader = () => {
  const navigate = useNavigate();
  const navigation = [
    { title: "All Category", path: "/" },
    { title: "Home", path: "/" },
    { title: "Product", path: "/productpage" },
    { title: "Download App", path: "/" },
    { title: "Help", path: "/" },
  ];

  const adminToken = localStorage.getItem("adminToken");
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Remove token
    navigate("/adminLogin"); // Redirect to login page
  };

  // user token
  const userToken = localStorage.getItem("user-token");
  console.log("user", userToken);
  const userHandleLogout = () => {
    localStorage.removeItem("user-token");
    navigate("/userLogin");
  };
  return (
    <div className="bg-[#FE9931] p-0.5 border-t-2 border-orange-500">
      <Container className="flex justify-between items-center mx-auto">
        <div className="flex space-x-8 cursor-pointer">
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-black font-semibold transition duration-300 
              `}
            >
              {item.title}
            </Link>
          ))}
          {adminToken && (
            <div className="flex gap-4 items-center">
              <p onClick={handleLogout} className="text-xl font-semibold">
                Admin LogOut
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-black font-semibold hover:text-white transition duration-300"
          >
            Become a Seller
          </Link>
          <Link
            to="/"
            className="text-black font-semibold hover:text-white transition duration-300"
          >
            Track Your Order
          </Link>
          <span className="text-black font-semibold">BDT</span>
          {userToken ? (
            <span
              onClick={userHandleLogout}
              className="text-red-700 font-semibold cursor-pointer"
            >
              userLogout
            </span>
          ) : (
            <Link
              to="/userLogin"
              className="text-red-700 font-semibold animate-bounce cursor-pointer"
            >
              PleaceLogin
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
