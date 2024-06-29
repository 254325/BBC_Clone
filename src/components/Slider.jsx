import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import MainDivider from "./MainDivider";
import NewsCard1 from "./NewsCard1";
import NewsCard2 from "./NewsCard2";
import NewsCard3 from "./NewsCard3";
import NewsCard4 from "./NewsCard4";
import NewsCard5 from "./NewsCard5";
import NewsCard6 from "./NewsCard6";
import NewsCard7 from "./NewsCard7";
import NewsCard8 from "./NewsCard8";
import NewsCard9 from "./NewsCard9";
import NewsCard10 from "./NewsCard10";

const Slider = () => {
  const slides = [
    { component: <NewsCard1 /> },
    { component: <NewsCard2 /> },
    { component: <NewsCard3 /> },
    { component: <NewsCard4 /> },
    { component: <NewsCard5 /> },
    { component: <NewsCard6 /> },
    { component: <NewsCard7 /> },
    { component: <NewsCard8 /> },
  ];



  return (
    <div className="w-full">
      <div className="flex h-full justify-between items-center text-white mb-6 mt-3">
        <div className="font-extrabold">
          <h1>Must watch</h1>
        </div>
        <div className="flex gap-5">
          <div className="text-white text-xl cursor-pointer p-1 hover:bg-slate-500" >
            <SlArrowLeft />
          </div>
          <div className="text-white text-xl cursor-pointer p-1 hover:bg-slate-500" >
            <SlArrowRight />
          </div>
        </div>
      </div>

      <div className="flex space-x-3 overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`flex-shrink-0 w-[270px] overflow-x-hidden ${index === 4 ? "opacity-50" : ""
          }`}
          >
            {slide.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;