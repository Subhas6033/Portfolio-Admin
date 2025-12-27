import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "Update Projects", slug: "/update-projects" },
  ];

  const handleNavigate = (slug) => {
    navigate(slug);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => handleNavigate("/")}
          className="text-xl font-bold tracking-wide cursor-pointer text-slate-800"
        >
          Portfolio Admin
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li
              key={item.slug}
              onClick={() => handleNavigate(item.slug)}
              className={`cursor-pointer font-medium transition-colors
                ${
                  location.pathname === item.slug
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-500"
                }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col justify-center py-4">
            {navItems.map((item) => (
              <li
                key={item.slug}
                onClick={() => handleNavigate(item.slug)}
                className={`px-6 py-3 cursor-pointer transition-colors
                  ${
                    location.pathname === item.slug
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
