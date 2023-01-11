import React, { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import MostReadCard from "./MostReadCard/MostReadCard";
const MostRead = () => {
  const [mostRead, setMostRead] = useState([]);
  // console.log("ok");
  useEffect(() => {
    fetch("most.json")
      .then((res) => res.json())
      .then((data) => setMostRead(data));
  }, []);
  //   console.log(mostRead);

  return (
    <div className="w-11/12 mx-auto">
      <div className="my-16">
        <div className="flex justify-between mb-8">
          <h3 className="underHoverTrend underHoverCenter text-2xl font-poppins font-semibold">
            Most Read
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mostRead.map((mostReadItem) => (
            <MostReadCard
              key={mostReadItem.id}
              most={mostReadItem}
            ></MostReadCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostRead;
