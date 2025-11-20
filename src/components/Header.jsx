import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
