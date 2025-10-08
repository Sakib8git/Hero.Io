import React from "react";
import { useLoaderData } from "react-router";
import AllApps from "./AllApps";
import useProducts from "../hooks/useProducts";

const Apps = () => {
  // const appsData = useLoaderData();
  // console.log(appsData);
  const appsDataHook = useProducts();
  const appsData= appsDataHook.apps
  return (
    <div>
      <div className="text-center space-y-4 mt-20 mb-10">
        <h1 className="font-bold text-5xl">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      
        <div className="flex justify-between items-center mb-5 container mx-auto">
            <p className="text-2xl font-semibold">({appsData.length}) Apps Found</p>
            <button className="btn">Search</button>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto mb-6 ">
        {appsData.map((products, i) => (
          <AllApps key={i} products={products}></AllApps>
        ))}
      </div>
    </div>
  );
};

export default Apps;
