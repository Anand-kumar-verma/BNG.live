import { Avatar } from "@mui/material";
import React from "react";

const AvatarCmp = () => {
  return (
    <div className="w-[250px] !flex !flex-wrap !gap-5">
      {[
        { src: "https://mui.com/static/images/avatar/1.jpg" },
        {
          src: "https://mui.com/static/images/avatar/2.jpg",
        },
        {
          src: "https://mui.com/static/images/avatar/3.jpg",
        },
        {
          src: "https://mui.com/static/images/avatar/4.jpg",
        },
      ]?.map((i) => {
        return (
          <Avatar
            src={i?.src}
            onClick={() => {
              localStorage.setItem("Aviator_avtar", i?.src);
            }}
          />
        );
      })}
    </div>
  );
};

export default AvatarCmp;
