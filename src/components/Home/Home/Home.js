import React from "react";
import Banner from "../Banner/Banner";
import MostRead from "../MostRead/MostRead/MostRead";
import Trends from "../Trends/Trends";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Trends></Trends>
      <MostRead></MostRead>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
