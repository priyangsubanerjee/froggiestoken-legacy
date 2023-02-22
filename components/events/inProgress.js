/* eslint-disable @next/next/no-img-element */
import React from "react";

function InProgress({ name, date }) {
  return (
    <div>
      <div className="flex items-center space-x-4 px-4">
        <div className="shrink-0">
          <img src="/images/yellowCheck.png" className="h-5 shrink-0" alt="" />
        </div>
        <div>
          <h1 className="font-poppins text-white  text-xs lg:text-base">
            {name}
          </h1>
          <p className="text-[10px] hidden lg:text-sm text-secondaryGrey">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InProgress;
