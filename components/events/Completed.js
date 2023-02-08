/* eslint-disable @next/next/no-img-element */
import React from "react";

function Completed({ name, date }) {
  return (
    <div>
      <div className="flex items-center space-x-4 px-4">
        <div>
          <img src="/images/greenCheck.png" alt="" />
        </div>
        <div>
          <h1 className="font-poppins text-white line-through">{name}</h1>
          <p className="text-sm text-secondaryGrey">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Completed;
