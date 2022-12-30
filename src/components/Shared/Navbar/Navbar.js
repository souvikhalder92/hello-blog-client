import React from "react";
import { Link, NavLink } from "react-router-dom";
import img1 from "../../../img/img1.png";

const Navbar = () => {
  return (
    <div className="w-11/12 m-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Sport
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link>Sport 1</Link>
                  </li>
                  <li>
                    <Link>Sport 2</Link>
                  </li>
                </ul>
              </li>

              <li tabIndex={0}>
                <Link className="justify-between">
                  Technology
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link>Technology 1</Link>
                  </li>
                  <li>
                    <Link>Technology 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Login</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={img1} alt="" className="w-20" />
            <Link className="text-xl flex  justify-center items-center">
              {" "}
              Hello Blog
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">
            <li>
              <NavLink className="bg-white text-gray-800 underline-offset-8 btn-ghost hover:btn-success underline active:underline">
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <Link>
                Sport
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link>sport 1</Link>
                </li>
                <li>
                  <Link>sport 2</Link>
                </li>
              </ul>
            </li>

            <li tabIndex={0}>
              <Link>
                Technology
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link>Technology 1</Link>
                </li>
                <li>
                  <Link>Technology 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Login</Link>
            </li>
          </ul>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="toggle" />
            </label>
          </div>
        </div>
        <div className="navbar-end ">
          <div className="form-control hidden md:block lg:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="hidden md:block lg:block">
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
