import React, { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import TrendCard from "./TrendCard/TrendCard";

import "./Trends.css";

const Trends = () => {
  const [trends, setTrends] = useState([]);
  // console.log("ok");
  useEffect(() => {
    fetch("trends.json")
      .then((res) => res.json())
      .then((data) => setTrends(data));
  }, []);
  // console.log(trends);
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-16">
        <div className="flex justify-between mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trends.map((trendItem) => (
            <TrendCard key={trendItem.id} trend={trendItem}></TrendCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;
