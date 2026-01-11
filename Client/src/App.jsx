import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import { Outlet } from "react-router-dom";
import { Loader } from "./Components/index";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <Loader text="applications" />
      </div>
    );
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
