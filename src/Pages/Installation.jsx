import React, { useEffect, useState } from "react";
import down from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { toast, ToastContainer } from "react-toastify";
const Installation = () => {
  const [installList, setInstallList] = useState([]);
  // console.log(installList);
  const [sortOrder, setSortOrder] = useState("none");

  // --------apps from localStorage---------------
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedApps"));
    if (savedList) setInstallList(savedList);
  }, []);
  // --------------------------
  // Sort logic
  const sortedItem = (() => {
    if (sortOrder === "downloads-asc") {
      return [...installList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-desc") {
      return [...installList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installList;
    }
  })();

  // !-------------------------------------

  // !-----------remove srom Local----------------

  const handleRemoveInstallation = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installedApps"));
    if (!existingList) return;

    const updatedList = existingList.filter((app) => app.id !== id);

    localStorage.setItem("installedApps", JSON.stringify(updatedList));
    setInstallList(updatedList); // UI update
    toast.success("🧹 App has been successfully uninstalled");
  };

  // !-------------------------------------
  // !-------------------------------------
  return (
    <div className="px-6">
      <div className="text-center space-y-4 mt-20 mb-10">
        <h1 className="font-bold text-5xl">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {/* note:---------Sort--------------------- */}
      <div className="flex justify-between items-center mb-6 px-3">
        <p className="text-xl font-semibold">{installList.length} Apps Found</p>

        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by Downloads</option>
          <option value="downloads-asc">Low - High</option>
          <option value="downloads-desc">High - Low</option>
        </select>
      </div>

      {/* Note:------Install App-------- */}

      {sortedItem.length === 0 ? (
        <div className="text-center text-gray-500 text-lg my-20">
          <h1 className="text-4xl font-bold ">No Installed App  Found!</h1>
        </div>
      ) : (
        sortedItem.map((ap) => (
          <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 mb-5  ">
            {/* Left: App Info */}
            <div className="flex items-center gap-4">
              {/* App Icon Placeholder */}
              <div className="w-16 h-16 bg-gray-200 rounded-md">
                <img src={ap.image} alt="" />
              </div>

              {/* App Details */}
              <div className="">
                <h2 className="text-lg font-semibold text-gray-800">
                  {ap.title}
                </h2>
                <div className="flex gap-4 text-sm mt-1">
                  <div className="flex items-center gap-1 text-green-600">
                    <img src={down} alt="downloads" className="w-4 h-4" />
                    <span> {ap.downloads}M</span>
                  </div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <img src={star} alt="rating" className="w-4 h-4" />
                    <span>{ap.ratingAvg}</span>
                  </div>
                  <div className="text-gray-500">{ap.size} MB</div>
                </div>
              </div>
            </div>

            {/* Right: Action */}

            <button
              onClick={() => handleRemoveInstallation(ap.id)}
              className="bg-[#00D390] hover:bg-[#019b6a] text-white font-semibold px-4 py-2 rounded"
            >
              Uninstall
            </button>
          </div>
        ))
      )}

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
