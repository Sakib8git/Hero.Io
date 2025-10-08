import React from "react";
import banner from "../assets/hero.png";
import gplay from "../assets/google-play.png";
import astore from "../assets/app-store.png";
import { Link } from "react-router";
import AllProducts from "./HomeProducts";
import HomeProducts from "./HomeProducts";
import useProducts from "../hooks/useProducts";
import { DNA } from "react-loader-spinner";
const Home = () => {
  // const appsData = useLoaderData();
  // console.log(appsData);
  const appsDataHook = useProducts();
  console.log(appsDataHook.apps);
  const { loading, error } = useProducts();
  const appsData = appsDataHook.apps;
  const fetureProducts = appsData.slice(0, 8);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <DNA/>
      </div>
    );
  if (error)
    return <p className="text-center text-red-500">Error loading app</p>;

  return (
    <div className="">
      <div className="  px-4 lg:px-20 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-col items-center gap-10 ">
          {/* Text Section */}
          <div className="flex-1 text-center ">
            <h1 className="text-7xl font-bold  mb-4">
              We Build <br />{" "}
              <span className="text-purple-700">Productive</span> Apps
            </h1>
            <p className="text-gray-600 mb-6 text-xl">
              At HERDIO, we craft innovative apps designed to make everyday life
              simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>

            {/* Download Buttons */}
            <div className="flex justify-center gap-4 mb-6 md:mb-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2 shadow-2xl  bg-white text-black border-none rounded-lg flex items-center gap-2 hover:bg-gray-400  "
              >
                <img src={gplay} alt="Google Play" className="h-5 w-5" />
                Google Play
              </a>

              {/* App Store Button */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2 shadow-2xl  bg-white text-black border-none rounded-lg flex items-center gap-2 hover:bg-gray-400 "
              >
                <img src={astore} alt="App Store" className="h-5 w-5" />
                App Store
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src={banner}
              alt="HERDIO Banner"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </div>
      </div>
      {/* ---------------------- */}
      <div>
        <section className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white py-12 px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Trusted By Millions, Built For You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center">
            {/* Total Downloads */}
            <div className="lg:p-6">
              <p className="text-sm opacity-80">Total Downloads</p>
              <h3 className="text-5xl font-bold my-4">29.6M+</h3>
              <p className="text-green-300 mt-2 text-xs">
                21% More Than Last Month
              </p>
            </div>

            {/* Total Reviews */}
            <div className="p-4 lg:p-6">
              <p className="text-sm opacity-80">Total Reviews</p>
              <h3 className="text-5xl font-bold my-4">906K+</h3>
              <p className="text-green-300 mt-2 text-xs">
                46% More Than Last Month
              </p>
            </div>

            {/* Active Apps */}
            <div className="lg:p-6">
              <p className="text-sm opacity-80">Active Apps</p>
              <h3 className="text-5xl font-bold my-4">132+</h3>
              <p className="text-green-300 mt-2 text-xs">31 More Will Launch</p>
            </div>
          </div>
        </section>
      </div>
      {/* ---------------------- */}
      <div>
        <div className="text-center space-y-4 mt-20 mb-10">
          <h1 className="font-bold text-5xl">Trending Apps</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto mb-6 px-3 ">
          {fetureProducts.map((products, i) => (
            <HomeProducts key={i} products={products}></HomeProducts>
          ))}
        </div>
        <div className="flex justify-center mb-5">
          <Link
            to="/apps"
            className="btn w-[145px] text-white bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-800 hover:to-indigo-700 border-none"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
