import { Link, useLocation } from "react-router-dom";
import Container from "../Container";

const BottomHeader = () => {
  const navigation = [
    { title: "All Category", path: "/" },
    { title: "Home", path: "/" },
    { title: "Product", path: "/productpage" },
    { title: "Download App", path: "/" },
    { title: "Help", path: "/" },
  ];

  return (
    <div className="bg-[#FE9931] p-0.5 border-t-2 border-orange-500">
      <Container className="flex justify-between items-center mx-auto">
        <div className="flex space-x-8">
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
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
