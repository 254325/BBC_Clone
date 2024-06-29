import React from 'react';
import { data } from "../content/NewsInfo";

const NewsCard2 = () => {
  return (
    <div>
      {/* Card Image */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-[12px] max-w-[24rem] -z-10 bg-tra text-gray-700">
        <div className="overflow-hidden bg-white text-gray-700">
          <img className="z-10" src="https://ichef.bbci.co.uk/news/480/cpsprodpb/bcd4/live/72635f20-2b39-11ef-90be-b75b34b0bbb2.jpg.webp" alt="ui/ux review check" />
        </div>

        {/* Card Details */}
        <div className="grid gap-y-2">
          <div>
            <h2 className="font-semibold text-lg text-white">
              {data.NewsTitle}
            </h2>
            <p className="hidden mt-3 sm:block font-sans text-sm text-white">
              {data.NewsDetails}
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-200">
            <p>{data.NewsDate}</p>
            <p className="font-bold">{data.NewsLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard2;
