import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../index";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Update Achievements", slug: "/update-about" },
    { name: "Update Resume Link", slug: "/update-image" },
    { name: "Update Projects", slug: "/update-projects" },
    { name: "Login", slug: "/login" },
  ];

  const handleNavigate = (slug) => {
    navigate(slug);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-slate-100 backdrop-blur-lg border-b-2 border-slate-700 mb-5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => handleNavigate("/")}
          className="text-lg md:text-xl font-semibold tracking-tight cursor-pointer text-white hover:text-indigo-400 transition-colors"
        >
          Portfolio Admin
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.slug;

            return (
              <li
                key={item.slug}
                onClick={() => handleNavigate(item.slug)}
                className={`relative cursor-pointer text-md font-medium transition-colors
                  ${isActive ? "text-indigo-400" : "text-slate-300 hover:text-white"}
                `}
              >
                {item.name}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-indigo-400 rounded-full" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all ease-in duration-500 absolute z-50 top-16 w-full
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="bg-slate-900 shadow-lg border-t border-slate-700 text-lg">
          {navItems.map((item) => (
            <li
              key={item.slug}
              onClick={() => handleNavigate(item.slug)}
              className={`px-6 py-4 font-medium cursor-pointer transition-all duration-200
                ${
                  location.pathname === item.slug
                    ? "bg-indigo-800 text-indigo-400 border-l-4 border-indigo-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
