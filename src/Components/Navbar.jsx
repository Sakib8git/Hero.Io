import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl flex items-center gap-2"
          >
            <img src={logo} alt="logo" className="h-6 w-6" />
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                    : ""
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                    : ""
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
  href="https://github.com/Sakib8git?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="btn text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 border-none gap-2"
>
  <Github className="w-5 h-5"
></Github>
  Contribute
</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
