import React from "react";
import down from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { Link } from "react-router";
const AllApps = ({ products }) => {
  const {id, image, title, ratingAvg, downloads } = products;
  // console.log(products);
  return (
    <div>
      <Link to={`/apps/${id}`}>
       <div className="hover:scale-105 transition ease-in-out">
        <div className="card bg-base-100  shadow-md border border-gray-100">
          <figure className="px-6 pt-6">
            <img
              src={image} // replace with your actual image path
              alt="Forest App"
              className="rounded-xl  object-contain"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg font-semibold">{title}</h2>

            <div className="flex gap-4 mt-2">
              {/* Downloads */}
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <img className="w-3" src={down} alt="" />
                <span>{downloads} M</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-orange-400 text-sm">
                <img className="w-3" src={star} alt="" />
                <span>{ratingAvg}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </Link>
     
    </div>
  );
};

export default AllApps;
