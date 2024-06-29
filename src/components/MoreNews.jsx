import React from "react";
import MainDivider from "./MainDivider";
import NewsCardMain from "./NewsCardMain";
import NewsCard from "./NewsCard";
import { data } from "../content/NewsInfo";

const MoreNews = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <div>
        <MainDivider />
      </div>
      <h2 className="font-bold text-[18px] mb-4">More news</h2>
      <div className="grid sm:grid-cols-[3fr_1fr] grid-rows-2 gap-7">

        {/* First Article */}
        <div className="grid sm:grid-cols-[45%_55%] border-b">
          <div className="flex flex-col justify-center gap-4 mr-4 order-2 sm:order-1">
            <h1 className="text-[28px] font-bold">{data.NewsTitle}</h1>
            <p>{data.NewsDetails}</p>
            <div className="flex">
              <p>{data.NewsDate}</p>
              <p>{data.NewsCountry}</p>
            </div>
          </div>
          <div className="grid order-none sm:order-1">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="News"></img>
          </div>
        </div>

        {/* Second Article */}
        <div className="grid border-b">
          <NewsCardMain />
        </div>

        {/* Third Article */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <NewsCardMain />
          </div>
          <div>
            <NewsCardMain />
          </div>
          <div>
            <NewsCardMain />
          </div>
        </div>

        {/* Fourth Article */}
        <div className="grid gap-4 sm:grid-rows-2">
          <div className="grid border-b sm:border-none gap-4 sm:gap-0">
            <h4 className="font-semibold">{data.NewsTitle}</h4>
            <p>{data.NewsDetails}</p>
            <div className="flex items-center gap-2">
              <p>{data.NewsDate}</p>
              <p>{data.NewsLabel}</p>
              <p>{data.NewsCountry}</p>
            </div>
          </div>
          <div className="grid border-none sm:border-b gap-4 sm:gap-0">
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
    </div>
  );
};

export default MoreNews;
