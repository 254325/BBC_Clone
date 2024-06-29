import React from "react";
import MediaCard from "./NewsCard";
import NewsCardMain from "./NewsCardMain";
import { data } from "../content/NewsInfo";
import MainDivider from "./MainDivider";

const LatestNews = () => {
  return (
    <div className="grid max-w-[1280px] h-auto mx-auto mt-[24px] p-4">
      <div className="grid lg:grid-cols-[3fr_1fr] lg:gap-4 gap-6 sm:grid-cols-1">
        {/* Left and Middle Section */}
        <div className="grid sm:grid-cols-[1fr_2fr] gap-4 lg:grid-cols-[1fr_2fr]">
          {/* order-2: This sets the order of this div to 2 by default (which is for smaller screens).*/}
          <div className="grid grid-rows-2 gap-4 order-2 sm:order-none">
            <div className="grid border-b">
              <MediaCard />
            </div>
            <div className="border-b">
              <MediaCard />
            </div>
          </div>
          <div>
            <NewsCardMain />
          </div>
        </div>

        {/* Right Section */}
        <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-1 lg:grid-rows-4 order-3 sm:order-3">
          <div className="grid border-b lg:border-b sm:border-b-0">
            <h4 className="font-semibold">{data.NewsTitle}</h4>
            <p>{data.NewsDetails}</p>
            <div className="flex items-center gap-2">
              <p>{data.NewsDate}</p>
              <p>{data.NewsLabel}</p>
              <p>{data.NewsCountry}</p>
            </div>
          </div>
          <div className="grid border-b lg:border-b sm:border-b-0">
            <h4 className="font-semibold">{data.NewsTitle}</h4>
            <p>{data.NewsDetails}</p>
            <div className="flex items-center gap-2">
              <p>{data.NewsDate}</p>
              <p>{data.NewsLabel}</p>
              <p>{data.NewsCountry}</p>
            </div>
          </div>
          <div className="grid border-b lg:border-b sm:border-b-0">
            <h4 className="font-semibold">{data.NewsTitle}</h4>
            <p>{data.NewsDetails}</p>
            <div className="flex items-center gap-2">
              <p>{data.NewsDate}</p>
              <p>{data.NewsLabel}</p>
              <p>{data.NewsCountry}</p>
            </div>
          </div>
          <div className="grid">
            <h4 className="font-semibold">{data.NewsTitle}</h4>
            <p>{data.NewsDetails}</p>
            <div className="flex items-center gap-2">
              <p>{data.NewsDate}</p>
              <p>{data.NewsLabel}</p>
              <p>{data.NewsCountry}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <MainDivider />
      </div>
    </div>
  );
};

export default LatestNews;
