import React, { useState } from "react";

import AllApps from "./AllApps";
import useProducts from "../hooks/useProducts";

const Apps = () => {
  // const appsData = useLoaderData();
  // console.log(appsData);
  const appsDataHook = useProducts();
  const appsData = appsDataHook.apps;
  console.log(appsData);
  const {  loading, error } = useProducts();
  // !--------------search part
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? appsData.filter((product) => product.title.toLowerCase().includes(term))
    : appsData;

  // !--------------------
  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading app</p>;

  return (
    <div>
      <div className="text-center space-y-4 mt-20 mb-10">
        <h1 className="font-bold text-5xl">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="mb-5 container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap px-5 md:px-3">
        <p className="text-2xl font-semibold text-center md:text-left">
          ({searchedApps.length}) Apps Found
        </p>

        {/* -------search box start */}
        <label className="input w-full md:w-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
            className="w-full md:w-64 "
          />
        </label>
        {/* -------search box end */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto mb-6 px-3">
        {searchedApps.map((products, i) => (
          <AllApps key={i} products={products}></AllApps>
        ))}
      </div>
    </div>
  );
};

export default Apps;
