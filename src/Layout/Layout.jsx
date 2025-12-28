import React from "react";
import { Navbar, Footer } from "../Components/index";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="min-h-[calc(100vh-128px)] px-6 py-4">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
