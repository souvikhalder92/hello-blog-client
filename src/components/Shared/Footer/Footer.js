import React, { useContext } from "react";
import { modeChangeContext } from "../../../context/ModeContext";
import { FaFacebook, FaTwitch, FaTwitter, FaYoutube, IconName } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(modeChangeContext);
  return (
    <footer className={`${
      theme === "light" ? "bg-white text-accent" : "bg-accent text-white"
    } footer p-10  text-base-content`}>

    <div>
      <h1 className="font-poppins font-bold text-xl">ABOUT US</h1> 
      <span>Hello Blog is one of the most useful for blog lovers. Here anyone can<br/> find different categories of blogs and can write their own blogs easily.</span>
      <div className="lg:flex mt-2 ml-32">
      <FaFacebook></FaFacebook>
      <FaTwitter className="ml-3"></FaTwitter>
      <FaYoutube className="ml-3"></FaYoutube>
      <FaTwitch className="ml-3"></FaTwitch>
      </div>
    </div> 
    <div>
    <h1 className="font-poppins font-bold text-xl">USEFUL LINKS</h1>  
      <a className="link link-hover">About us</a> 
      <a className="link link-hover">Contact</a> 
  
    </div> 
    <div>
    <h1 className="font-poppins font-bold text-xl">LEGAL</h1>  
      <a className="link link-hover">Terms of use</a> 
      <a className="link link-hover">Privacy policy</a> 
      <a className="link link-hover">Cookie policy</a>
    </div> 
    <div>
    <h1 className="font-poppins font-bold text-xl">SUBSCRIBE NOW</h1>  
    <span>Subscribe to our mailing list to receives daily <br/> updates direct to your inbox!</span>
      <div className="form-control w-80">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label> 
        <div className="relative">
          <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
          <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
