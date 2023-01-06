import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Trends.css";

const Trends = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="my-16">
        <div className="flex justify-between">
          <h3 className="underHoverTrend underHoverCenter text-2xl font-poppins font-semibold">
            Trending
          </h3>
          <div>
            <div className=" underHoverTrend underHoverLeftToRightTrend relative  ">
              <Link className="flex justify-center items-center  ">
                <p className="font-semibold font-poppins">View all</p>
                <BsArrowRightCircle className="ml-2 text-secondary"></BsArrowRightCircle>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-slate-200 font-poppins">
        Trends A comprehensive guide to the best summer dresses
      </h1>
      <h1 className="bg-slate-200 font-Merriweather">
        Trends A comprehensive guide to the best summer dresses
      </h1>
      <h1 className="bg-slate-200 ">
        Trends A comprehensive guide to the best summer dresses
      </h1>
    </div>
  );
};

export default Trends;
