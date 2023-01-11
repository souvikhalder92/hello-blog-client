import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { modeChangeContext } from "../../../../context/ModeContext";

const TrendCard = ({ trend }) => {
  const { theme } = useContext(modeChangeContext);
  const { category, title, image, authorName, date } = trend;

  return (
    <div className="">
      <figure>
        <img
          className="w-full h-64 transform hover:scale-105  duration-500 ease-out"
          src={image}
          alt={category}
        />
      </figure>
      <div className="">
        <Link to="/business">
          <p
            className={` ${
              theme === "light" ? "text-accent" : " text-accent"
            } font-poppins my-3 underHoverTrend underHoverLeftToRightTrend bg-slate-200 inline-block px-2`}
          >
            {category}
          </p>
        </Link>
        <h2 className="font-poppins text-lg mb-2 font-semibold">{title}</h2>
        <p className="text-sm">
          By{" "}
          <Link className="text-sky-500 underHoverTrend underHoverCenterTrend">
            {authorName}
          </Link>{" "}
          - <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default TrendCard;
