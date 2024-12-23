import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from '../../assets/images/Logo.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const navigate = useNavigate();

  // Handles scroll-to-top visibility
  window.addEventListener("scroll", () => {
    setIsVisible(window.scrollY > 200);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handles dropdown for language selection
  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  // Toggles the menu for mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="p-3 max-w-screen-xl mx-auto drop">
      {/* Scroll-to-top Button */}
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "block" : "hidden"
        } fixed bottom-6 right-6 bg-rose-500 text-white p-2 rounded-full text-xl shadow-lg transition duration-300 hover:bg-rose-600 z-[1]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={img1} // Replace with your logo path
              alt="Logo"
              className="h-[5rem] w-[12rem] ml-3 mt-2"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-6 text-lg text-[#39182a] font-semibold">
          <Link
            to="/"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            Home
          </Link>
          <Link
            to="/findpartner"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            Find Partner
          </Link>
          <Link
            to="/guide"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            Guide
          </Link>
         
          <Link
            to="/faq"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            Contact
          </Link>
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
