import React, { useState } from "react";
import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import down from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import like from "../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
// !bar chart--------
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// !bar chart--------
const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const { apps, loading, error } = useProducts();

  const detailsOfApp = apps.find((ap) => ap.id === appId);
  // *Note:--- for btn-----
  const [installed, setInstalled] = useState(false);
  // *Note:--- for btn-----

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading app</p>;
  if (!detailsOfApp)
    return <p className="text-center text-gray-500">App not found</p>;

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = detailsOfApp;

  const handleInstall = () => {
    // console.log(`Installing ${title}`);
    setInstalled(true);

    toast(`Installing ${title}`);
    // Optional: localStorage logic or toast
  };

  return (
    <div className="px-5 py-5 md:px-16 md:py-10">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-white rounded-lg shadow-md p-6">
        {/* Left Image */}
        <img
          src={image}
          alt={title}
          className="w-full md:w-64 h-64 object-cover rounded-md"
        />

        {/* Right Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500">
            Developed by <span className="text-[#743DE7]">{companyName}</span>
          </p>
          <div className="border-t border-gray-300 mt-6"></div>
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center mt-5 max-w-[500px]">
            <div className="flex flex-col items-center p-4">
              <img src={down} alt="Downloads" className="w-10 h-10 mb-2" />
              <p className="text-sm text-gray-500">Downloads</p>
              <h2 className="text-2xl font-bold text-green-600">
                {downloads}M
              </h2>
            </div>

            <div className="flex flex-col items-center p-4">
              <img
                src={star}
                alt="Average Ratings"
                className="w-10 h-10 mb-2"
              />
              <p className="text-sm text-gray-500">Average Ratings</p>
              <h2 className="text-2xl font-bold text-orange-500">
                {ratingAvg}
              </h2>
            </div>

            <div className="flex flex-col items-center p-4">
              <img src={like} alt="Total Reviews" className="w-10 h-10 mb-2" />
              <p className="text-sm text-gray-500">Total Reviews</p>
              <h2 className="text-2xl font-bold text-purple-600">{reviews}K</h2>
            </div>
          </div>

          <button
            onClick={handleInstall}
            // disabled={installed}
            className={`${
              installed ? "bg-[#047d007c] " : "bg-[#00D390] hover:bg-[#019b6a]"
            } text-white font-semibold py-2 px-6 rounded ml-5`}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-6"></div>
      {/* app details */}
      {/* ---------------------------------------------- */}

      {/* barChart */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-center">Ratings</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            layout="vertical"
            data={ratings}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 12 }}
              width={80}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316">
              {" "}
              <LabelList dataKey="count" position="right" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* barChart */}
      {/* ---------------------------------------------- */}

      {/* Descrip */}
      <div>
        <h3 className="mt-10 text-2xl font-semibold">Description</h3>
        <p className="mt-6 text-gray-700 leading-relaxed">{description}</p>
      </div>
      {/* ---------------------------------------------- */}
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
