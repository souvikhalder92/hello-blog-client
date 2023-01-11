import React, { useContext } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { modeChangeContext } from "../../../../context/ModeContext";
import MostPopularCard from "../MostPopularCard/MostPopularCard";

const MostPopular = () => {
  const { theme } = useContext(modeChangeContext);
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-16">
        <div className="flex justify-between mb-8">
          <h3 className="underHoverTrend underHoverCenter text-2xl font-poppins font-semibold">
            Most Popular
          </h3>
          <div>
            <div className=" underHoverTrend underHoverLeftToRightTrend relative  ">
              <Link className="flex justify-center items-center">
                <p className="font-semibold font-poppins">View all</p>
                <BsArrowRightCircle className="ml-2 text-secondary"></BsArrowRightCircle>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p>left</p>
            <div className="">
              <figure>
                <img
                  className=""
                  src="https://jellywp.com/wp/wesper1/wp-content/uploads/sites/13/2022/10/riding-a-bike-at-dusk-scaled-1-1400x1050-1-1100x750.jpg"
                  alt="Inspiration"
                />
              </figure>
              <div className="">
                <Link to="/business">
                  <p
                    className={` ${
                      theme === "light" ? "text-accent" : " text-accent"
                    } font-poppins mt-2 underHover underHoverButton  relative inline-block py-1`}
                  >
                    Inspiration
                  </p>
                </Link>
                <h2 className="font-poppins text-3xl my-2 font-semibold">
                  How Did Healing Ourselves Get So Exhausting?
                </h2>
                <p
                  className={`${
                    theme === "light" ? "text-gray-600" : " text-accent"
                  }`}
                >
                  Mauris mattis auctor cursus. Phasellus tellus tellus,
                  imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus
                  nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate
                  porttitor condimentum. Proin viverra orci...
                </p>
                <p className="text-sm mt-3">
                  By{" "}
                  <Link className="text-sky-500 underHoverTrend underHoverCenterTrend">
                    Aniba Golana
                  </Link>
                  - <span>JUNE 28, 2022</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>right</p>
            <MostPopularCard></MostPopularCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
