import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  return (
    <div className="!bg-white h-screen w-screen flex justify-center !items-center">
      <div className="!flex !flex-col !items-center gap-2">
        <h1 className="!font-bold !text-[20px]">Comming Soon</h1>
        <Button onClick={() => navigate(-1)} className="!bg-blue-900">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Test;

// L20 100
//     L0 400
