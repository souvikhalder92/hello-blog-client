import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { modeChangeContext } from "../../../../../context/ModeContext";

const MostReadCard = ({ most }) => {
  const { theme } = useContext(modeChangeContext);
  const { category, title, image, authorName, date } = most;

  return (
    <div className="flex">
      <div className="mr-4">
        <figure>
          <img
            className="w-full transform hover:scale-105  duration-150 ease-out"
            src={image}
            alt={category}
          />
        </figure>
      </div>
      <div className="">
        <Link to="/business">
          <p
            className={` ${
              theme === "light" ? "text-accent" : " text-accent"
            } font-poppins mb-2 underHoverTrend underHoverLeftToRightTrend inline-block px-2`}
          >
            {category}
          </p>
        </Link>
        <h2 className="font-poppins text-base mb-1 font-semibold hover:underline underline-offset-8 ">
          {title}
        </h2>
        <p className="text-xs">
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default MostReadCard;
