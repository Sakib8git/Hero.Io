import React, { useState } from "react";

import AllApps from "./AllApps";
import useProducts from "../hooks/useProducts";

const Apps = () => {
  // const appsData = useLoaderData();
  // console.log(appsData);
  const appsDataHook = useProducts();
  const appsData = appsDataHook.apps;
  console.log(appsData);
// !--------------search part
const [search, setSearch] = useState('');
  const term = search.trim().toLowerCase();
  const searchedApps = term ? appsData.filter(product=>product.title.toLowerCase().includes(term) ) : appsData;


  // !--------------------
  return (
    <div>
      <div className="text-center space-y-4 mt-20 mb-10">
        <h1 className="font-bold text-5xl">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mb-5 container mx-auto">
        <p className="text-2xl font-semibold">({searchedApps.length}) Apps Found</p>

        {/* -------search bxo stary */}

        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>

        {/* -------search box end */}

        {/* <button className="btn">Search</button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto mb-6 ">
        {searchedApps.map((products, i) => (
          <AllApps key={i} products={products}></AllApps>
        ))}
      </div>
    </div>
  );
};

export default Apps;
