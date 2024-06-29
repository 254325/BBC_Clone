import React from "react";
import NewsCardMain from "./NewsCardMain";
import Adds from "./Adds";

const OnlyFromBBC = () => {
  return (
    <div className="w-full">
      <div className="grid max-w-[1280px] h-auto mx-auto p-4">
        {/* News */}
        <h2 className="font-bold text-[18px] mb-4 mt-[-30px]">
          Only from the BBC
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <NewsCardMain />
          <NewsCardMain />
        </div>
      </div>
      <div className="my-10">
        {/* Add */}
        <Adds />
      </div>
    </div>
  );
};

export default OnlyFromBBC;
