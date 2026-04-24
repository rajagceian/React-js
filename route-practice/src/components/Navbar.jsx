import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/70 backdrop-blur-lg shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">🚀 RouteLab</h1>

      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/">
          <span className="cursor-pointer hover:text-indigo-600 transition">
            Home
          </span>
        </Link>
        <Link to="/about">
          <span className="cursor-pointer hover:text-indigo-600 transition">
            About
          </span>
        </Link>
        <Link to="/projects">
          <span className="cursor-pointer hover:text-indigo-600 transition">
            Projects
          </span>
        </Link>
        <Link to="/contact">
          <span className="cursor-pointer hover:text-indigo-600 transition">
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
