import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="carousel">
        <div className="relative">
          <h1 className="underHover underHoverCenterBanner font-poppins text-[1.5rem]  lg:text-[3rem]  absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            Hello Blog
          </h1>
          <p className="hidden lg:block underHover underHoverLeftToRight  absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            Look new post or create a article{" "}
          </p>
          <img
            className=""
            src="https://img.freepik.com/premium-photo/woman-works-office-blue-background-concept-workspace-working-computer-freelance-banner_164357-1144.jpg?w=2000"
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
