import React from "react";
import { data } from "../content/NewsInfo";

const NewsCard = () => {
  return (
    <div>
      {/* Card Image */}
      <div class="grid grid-cols-2 sm:grid-cols-1 gap-[12px] max-w-[24rem] -z-10 bg-white text-gray-700">
        <div class="overflow-hidden bg-white text-gray-700">
          <img className="z-10" src={data.NewsImage} alt="ui/ux review check" />
        </div>

        {/* Card Details */}
        <div className="grid gap-y-2">
          <div>
            <h2 class="font-semibold text-lg text-blue-gray-900">
              {data.NewsTitle}
            </h2>
            <p class="hidden mt-3 sm:block font-sans text-sm text-gray-700">
              {data.NewsDetails}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p class="">{data.NewsDate}</p>
            <p className="font-bold">{data.NewsLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
