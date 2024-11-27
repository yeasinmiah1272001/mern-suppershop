import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { SocialLink } from "./SocialLink";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 px-5 mt-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Call us 24/7</p>
          <div className="flex items-center gap-2 my-2">
            <FaWhatsapp />
            <p>WhatsApp: 01910255376</p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <FaPhone />
            <p>
              213, 214 Confidence Center Shopping Mall, Lalbag, Dhaka,
              Bangladesh
            </p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <FaEnvelope />
            <p>yeasinmiah1272001@gmail.com</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Business Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Business</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">
                Stores
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Login Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Register an Account
              </a>
            </li>
          </ul>
        </div>
        <SocialLink />
      </div>
      <div className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Diptoo. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
