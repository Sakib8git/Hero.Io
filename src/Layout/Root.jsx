import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='   py-4 md:py-8 lg:py-12 flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
