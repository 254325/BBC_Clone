import React from 'react';
import { data } from '../content/NewsInfo';

const NewsCard8 = () => {
  return (
    <div>
      {/* Card Image */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-[12px] max-w-[24rem] bg-transparent">
        <div className="overflow-hidden">
          <img
            className="z-10"
            src="https://ichef.bbci.co.uk/images/ic/480x270/p0j38z9x.jpg.webp"
            alt="BBC News Thumbnail"
          />
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

export default NewsCard8;
