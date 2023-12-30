// import React from "react";
import { useSelector } from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import { selectTheme } from "../store/theme-slice";

const darkSpringGreen = "bg-[#33783f]  ease-in-out duration-500";
const canonicalAubergine = "bg-[#4d002b]  ease-in-out duration-500";

const Hero = () => {
  const selectedTheme = useSelector(selectTheme);
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p
          className={
            selectedTheme === canonicalAubergine
              ? "text-[#ff7c44] font-bold p-2"
              : selectedTheme === darkSpringGreen
              ? "text-[#fae4d2] font-bold p-2"
              : "text-[#00df9a] font-bold p-2 "
          }
        >
          GROWING WITH DATA ANALYICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
            <Typewriter
              words={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              deleteSpeed={140}
              loop
            />
          </span>
        </div>
        <p className="md:text-3xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platform
        </p>
        <button
          className={
            selectedTheme === canonicalAubergine
              ? "bg-[#ff7c44] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
              : selectedTheme === darkSpringGreen
              ? "bg-[#fae4d2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#33783f]"
              : "bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          }
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;