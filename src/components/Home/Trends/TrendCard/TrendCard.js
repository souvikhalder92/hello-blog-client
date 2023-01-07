import React, { useContext } from "react";
import { modeChangeContext } from "../../../../context/ModeContext";

const TrendCard = ({ trend }) => {
  const { theme } = useContext(modeChangeContext);
  const { title, authorName } = trend;

  return (
    <div>
      <h1
        className={`${
          theme === "light" ? "bg-white text-accent" : "bg-accent text-white"
        } text-accent underHover underHoverCenter  hover:text-secondary hover:font-semibold hover:translate-y-1 `}
      >
        {title}
      </h1>
    </div>
  );
};

export default TrendCard;
