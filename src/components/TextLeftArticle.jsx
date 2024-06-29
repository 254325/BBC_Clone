import React from "react";
import { data } from "../content/NewsInfo";

export const TextLeftArticle = () => {
  return (
    <div>
       <div className="grid sm:grid-cols-[35%_65%]">
          <div className="flex flex-col justify-center gap-4 mr-4 order-2 sm:order-1">
            <h1 className="text-[28px] font-bold">{data.NewsTitle}</h1>
            <p>{data.NewsDetails}</p>
            {/* Button */}
            <div>
            <button className="border-2 border-black w-[98px] h-[42px] font-bold hover:bg-[#3a3c3e] hover:border-[#3a3c3e] hover:text-white">See more</button>
            </div>
          </div>
          <div className="grid order-none sm:order-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="News"
            ></img>
          </div>
        </div>
    </div>
  );
};

export default TextLeftArticle;
