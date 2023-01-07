import React, { useContext } from "react";
import { modeChangeContext } from "../../../../context/ModeContext";

const TrendCard = ({ trend }) => {
  const { theme } = useContext(modeChangeContext);
  const { category, title, image, authorName, date } = trend;

  return (
    <div className="w-[300px] lg:w-[270px]">
      <figure>
        <img
          className=" w-11/12 h-[210px] lg:w-[270px]  lg:h-[200px]"
          src={image}
          alt={category}
        />
      </figure>
      <div className="">
        <p className="text-left font-poppins my-1">{category}</p>
        <h2 className="card-title text-left font-poppins">{title}</h2>
        <p className="text-left text-sm font-Merriweather">
          By <span>{authorName}</span> - <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default TrendCard;
