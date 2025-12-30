import React from "react";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";
import { Github, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top section */}
        <div className="grid gap-10 grid-cols-2 place-items-center">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Portfolio Admin
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Building modern web experiences with performance and scalability
              in mind.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm text-center font-semibold uppercase tracking-wide text-white">
              Follow me
            </h4>
            <div className="mt-4 flex space-x-4">
              <li
                className="list-none hover:cursor-pointer hover:scale-125 duration-150 ease-in transition-all"
                onClick={() => navigate("https://github.com/Subhas6033")}
              >
                <Github />
              </li>
              <li
                className="list-none hover:cursor-pointer hover:scale-125 duration-150 ease-in transition-all"
                onClick={() =>
                  navigate("https://www.facebook.com/subhas.mondal.110244/")
                }
              >
                <Facebook />
              </li>
              <li
                className="list-none hover:cursor-pointer hover:scale-125 duration-150 ease-in transition-all"
                onClick={() =>
                  navigate("https://www.linkedin.com/in/subhas6033/")
                }
              >
                <Linkedin />
              </li>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          &copy; {year} Portfolio Admin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition"
  >
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {children}
    </svg>
  </a>
);

export default Footer;
