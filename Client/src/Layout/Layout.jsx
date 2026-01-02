import React from "react";
import { Navbar, Footer } from "../Components/index";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />

      <main className="min-h-[calc(100vh-128px)] p-4">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
