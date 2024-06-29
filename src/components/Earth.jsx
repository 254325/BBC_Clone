import React from "react";
import MainDivider from "./MainDivider";
import TextLeftArticle from "./TextLeftArticle";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { data } from "../content/NewsInfo";

const Earth = () => {
  return (
    <div className="max-w-[1280px] h-screen mx-auto p-4">
      <div>
        <MainDivider />
      </div>
      <span className="flex items-center w-[70px] justify-between mt-3 mb-6">
        <h1 className="font-extrabold">Earth</h1>
        <SlArrowRight />
      </span>
      <div><TextLeftArticle /></div>
    </div>
  );
};

export default Earth;
