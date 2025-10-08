import React from "react";
import { Link } from "react-router";
import errorPg from "../assets/error-404.png";

const ErrorPg = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 space-y-6 bg-gray-50">
      <img src={errorPg} alt="404 Error" className="w-72 md:w-96" />

      <h1 className="text-3xl font-bold text-[#743DE7]">Oops, page not found!</h1>
      <p className="text-gray-500 text-center max-w-md">
        The page you are looking for is not available.
      </p>

      <Link
        to="/"
        className="bg-[#743DE7] hover:bg-[#5b2bbf] text-white font-semibold py-2 px-6 rounded"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPg;