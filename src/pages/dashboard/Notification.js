import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { lightblue, zubgbackgrad } from "../../Shared/color";

const Notification = ({ handleClosepolicy }) => {
  return (
    <Box sx={{ "&>p": { textAlign: "center", color: "red" } }}>
      <p>⭐️ Welcome Dear Member ⭐️</p>
      <Box
        className=""
        sx={{ "&>p": { color: "white", fontSize: "12px" } }}
      >
        <p className=" pl-10 !text-red-600">
          ⭐️ BNG Game Operating 5 Years+
        </p>
        <p className=" pl-10 !text-red-600">⭐️ High Quality Agent Benefits</p>
        <p className=" pl-10 !text-red-600">⭐️ No.1 Game Platform</p>
      </Box>
      <Box
        className="mt-1"
        sx={{ "&>p": { color: "white", fontSize: "12px" } }}
      >
        <p className=" pl-10 !text-red-600">
          🔥 Local Bank Deposit 2% Bonus 🔥
        </p>
        <p className=" pl-10 !text-red-600">
          🔥USDT 3% Bonus & TRX 2% Bonus 🔥
        </p>
      </Box>
      <Box
        className="mt-1"
        sx={{ "&>p": { color: "red", fontSize: "15px", textAlign: "center" } }}
      >
        <p className="mt-3 ">🎁 More Bonus - Click EVENT 🎁</p>
      </Box>
      <Box
        className="mt-1"
        sx={{ "&>p": { color: "red", fontSize: "15px", textAlign: "center" } }}
      >
        <p className="!text-red-600  text-center">
          💎Click Promote - Become Agent💎
        </p>
      </Box>
      <p className="mt-1 !text-red-600 font-bold text-center">
        Get income every day
      </p>
      <div className="w-full mt-3 ">
        <Button
          onClick={() => handleClosepolicy()}
          style={{ width: "100%", background: lightblue, color: 'white' }}
          variant="contained"
        >
          Confirm
        </Button>
      </div>
    </Box>
  );
};

export default Notification;
