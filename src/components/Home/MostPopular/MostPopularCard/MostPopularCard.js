import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { modeChangeContext } from "../../../../context/ModeContext";

const MostPopularCard = ({ popular }) => {
  const { theme } = useContext(modeChangeContext);
  const { category, title, image, authorName, date } = popular;
  return (
    <div className="">
      <figure>
        <img
          className="w-full h-52 transform hover:scale-105  duration-500 ease-out"
          src={image}
          alt={category}
        />
      </figure>
      <div className="">
        <Link to="/business">
          <p
            className={` ${
              theme === "light" ? "text-accent" : " text-accent"
            } font-poppins mt-2 underHover underHoverButton  relative inline-block py-1`}
          >
            {category}
          </p>
        </Link>
        <h2 className="font-poppins text-lg mb-1 font-semibold">{title}</h2>
        <p className="text-sm">
          By{" "}
          <Link className="text-sky-500 underHoverTrend underHoverCenterTrend">
            {authorName}
          </Link>{" "}
          - <span>{date}</span>
        </p>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default MostPopularCard;
