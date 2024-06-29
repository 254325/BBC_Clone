import React from "react";
import { data } from "../content/NewsInfo";

const NewsCardMain = () => {
  return (
    <div className="grid bg-white text-gray-700 max-w-auto -z-10">
      {/* Card Image */}
      <div className="overflow-hidden bg-transparent text-gray-700">
        <img
          className="w-full h-auto"
          src={data.NewsImage}
          alt="ui/ux review check"
        />
      </div>

      {/* Card Headline and Details */}
      <div className="mt-4">
        <h2 className="font-semibold text-lg leading-snug text-blue-gray-900">
          {data.NewsTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          {data.NewsDetails}
        </p>
      </div>

      {/* Card Date and Label */}
      <div className="flex gap-x-2 items-center mt-4">
        <div className="border-r pr-2">
          <p className="text-base font-normal">{data.NewsLabel}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-bold">{data.NewsLabel}</p>
          <p className="text-xs">{data.NewsCountry}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCardMain;
