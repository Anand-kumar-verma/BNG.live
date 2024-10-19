import { Divider } from "@mui/material";
import React from "react";
import { rupees } from "../../services/urls";

const GameLimits = () => {
  return (
    <div className="w-[400px] border-2 border-gray-500 p-2 rounded-md ">
      <div className="flex justify-between items-center">
        <p className="text-[13px]">Minimum bet(INR):</p>
        <span className="border-2 border-white rounded-full text-white bg-green-800 px-3 text-[12px]">
          10 {rupees}
        </span>
      </div>
      <Divider className="!bg-gray-500 !my-2"/>

      <div className="flex justify-between items-center">
        <p className="text-[13px]">Maximum bet(INR):</p>
        <span className="border-2 border-white rounded-full text-white bg-green-800 px-3 text-[12px]">
          800 {rupees}
        </span>
      </div>
      <Divider className="!bg-gray-500 !my-2"/>

      <div className="flex justify-between items-center">
        <p className="text-[13px]">Maximum win for one bet(INR):</p>
        <span className="border-2 border-white rounded-full text-white bg-green-800 px-3 text-[12px]">
          800000 {rupees}
        </span>
      </div>
      <Divider className="!bg-gray-500 !my-2"/>

    </div>
  );
};

export default GameLimits;
