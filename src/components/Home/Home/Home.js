import React from "react";
import Banner from "../Banner/Banner";
import MostPopular from "../MostPopular/MostPopular/MostPopular";
import MostRead from "../MostRead/MostRead/MostRead";
import Trends from "../Trends/Trends";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Trends></Trends>
      <MostRead></MostRead>
      <MostPopular></MostPopular>
    </div>
  );
};

export default Home;
