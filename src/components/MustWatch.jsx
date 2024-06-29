import React, { useState } from "react";
import MainDivider from "./MainDivider";
import NewsCard from "./NewsCard";
import NewsCard2 from "./NewsCard2";
import Adds from "./Adds";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import NewsCard3 from "./NewsCard3";
import Slider from "./Slider";

const MustWatch = () => {
  return (
    <div className="w-full bg-black mt-20">
      <div className="mx-auto max-w-[1280px] py-[24px] p-4">
        <div>
          <MainDivider />
          <Slider />
        </div>
      </div>
      <div className="my-10">
        <Adds />     
      </div>
    </div>
  );
};

export default MustWatch;
