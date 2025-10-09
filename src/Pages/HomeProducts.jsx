import React from "react";
import down from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { Link } from "react-router";
const HomeProducts = ({ products }) => {
  // console.log(products);
  const { id, image, title, ratingAvg, downloads } = products;

  return (
    <Link to={`/apps/${id}`} className="hover:scale-105 transition ease-in-out">
      <div className="card bg-base-100  shadow-md border border-gray-100">
        <figure className="px-6 pt-6">
          <img
            src={image} 
            alt="Forest App"
            className="rounded-xl w-40  object-contain"
          />
        </figure>

        <div className="card-body text-center">
          <h2 className="card-title text-lg font-semibold">{title}</h2>

          <div className="flex justify-between items-center mt-2 px-0">
            {/* download */}
            <div className="flex items-center gap-1 bg-[#E3F9E5] p-2 rounded-md text-green-600 text-sm">
              <img className="w-3" src={down} alt="" />
              <span>{downloads} M</span>
            </div>

            {/* Ratig */}
            <div className="flex items-center gap-1 bg-[#FFECE3] p-2 rounded-md text-orange-400 text-sm">
              <img className="w-3" src={star} alt="" />
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeProducts;

//  "id": 9,
//   "image": "https://picsum.photos/seed/app9/300/300",
//   "title": "TravelGo",
//   "companyName": "SkyBound",
//   "description": "Plan trips, explore destinations, and find budget deals.",
//   "size": 70,
//   "reviews": 3100,
//   "ratingAvg": 4.6,
//   "downloads": 400000,
//   "ratings": [
//     { "name": "1 star", "count": 130 },
//     { "name": "2 star", "count": 180 },
//     { "name": "3 star", "count": 320 },
//     { "name": "4 star", "count": 960 },
//     { "name": "5 star", "count": 1510 }
//   ]
// },
