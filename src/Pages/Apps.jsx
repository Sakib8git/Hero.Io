import React, { useEffect, useState } from "react";
import AllApps from "./AllApps";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router";
import noApp from "../assets/App-Error.png";
import { DNA } from "react-loader-spinner";
const Apps = () => {
  const { apps, loading, error } = useProducts();

  // Search logic
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((product) => product.title.toLowerCase().includes(term))
    : apps;

  // Spinner logic
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  useEffect(() => {
    setLoadingSpinner(true);
    const delay = setTimeout(() => {
      setLoadingSpinner(false);
    }, 500);
    return () => clearTimeout(delay);
  }, [search]);

  // Fallbacks
  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading app</p>;

  return (
    <div>
      {/* Header */}
      <div className="text-center space-y-4 mt-20 mb-10">
        <h1 className="font-bold text-5xl">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search + Count */}
      <div className="mb-5 container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap px-5 md:px-3">
        <p className="text-2xl font-semibold text-center md:text-left">
          ({searchedApps.length}) Apps Found
        </p>

        <label className="input w-full md:w-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
            className="w-full md:w-64"
          />
        </label>
      </div>

      {/*React spinner Spinner add korlam */}
      {loadingSpinner ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <DNA
            // visible={true}
            // height={80}
            // width={80}
            // ariaLabel="dna-loading"
            // wrapperStyle={{}}
            // wrapperClass="dna-wrapper"
          />
        </div>
      ) : searchedApps.length === 0 ? (
        //! No  Found----------
        <div className="flex flex-col items-center justify-center my-10 space-y-6">
          <img src={noApp} alt="No App Found" className="w-72 md:w-96" />
          <h2 className="text-2xl font-bold">OPPS!! APP NOT FOUND</h2>
          <p className="text-gray-500 text-center max-w-md">
            The App you are requesting is not found on our system. Please try
            another app.
          </p>
          <Link
            to="/"
            className="bg-[#743DE7] hover:bg-[#5b2bbf] text-white font-semibold py-2 px-6 rounded"
          >
            Go Back!
          </Link>
        </div>
      ) : (
        //! ________All app e patailam____________
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto mb-6 px-3">
          {searchedApps.map((products, i) => (
            <AllApps key={i} products={products} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
