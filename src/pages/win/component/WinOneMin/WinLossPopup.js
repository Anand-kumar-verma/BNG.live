import { Box, Typography } from "@mui/material";
import CryptoJS from "crypto-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import CustomCircularProgress from "../../../../Shared/CustomCircularProgress";
import Loss from "../../../../assets/images/loss.png";
import win from "../../../../assets/images/winnner.png";
import zero from "../../../../assets/trximage/0.png";
import one from "../../../../assets/trximage/1.png";
import two from "../../../../assets/trximage/2.png";
import three from "../../../../assets/trximage/3.png";
import four from "../../../../assets/trximage/4.png";
import five from "../../../../assets/trximage/5.png";
import six from "../../../../assets/trximage/6.png";
import seven from "../../../../assets/trximage/7.png";
import eight from "../../../../assets/trximage/8.png";
import nine from "../../../../assets/trximage/9.png";
const WinLossPopup = ({ gid }) => {
  let array = [zero, one, two, three, four, five, six, seven, eight, nine];
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = login_data && JSON.parse(login_data).UserID;
  const [loding, setloding] = useState(false);
  const [status, setstatus] = useState("");
  const [newstatus, setstatusNew] = useState("");
  const [all_result, setall_result] = useState();
  const my_history_data = useSelector(
    (state) => state.aviator.trx_my_history_data
  );
  const MyHistoryFn = async () => {
    setloding(true);
    try {
      // const response = await axios.get(
      //   `${endpoint.my_history_all}?userid=${user_id}&limit=0&gameid=${gid}`
      // );
      const firstId = my_history_data?.[0]?.gamesno;
      const winAmnt =
        my_history_data
          ?.filter((i) => i?.gamesno === firstId)
          ?.reduce((a, b) => a + Number(b?.win || 0), 0) || 0;
      const amntAmnt =
        my_history_data
          ?.filter((i) => i?.gamesno === firstId)
          ?.reduce((a, b) => a + Number(b?.amount || 0), 0) || 0;
      setall_result(my_history_data?.[0]);

      if (winAmnt) {
        setstatus({
          status: "1",
          amount: winAmnt,
        });
      } else {
        setstatus({
          status: "2",
          amount: amntAmnt,
        });
        // toast("Your Loss");
      }
      // setstatus(response?.data?.data?.[0]);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setloding(false);
  };

  useEffect(() => {
    MyHistoryFn();
  }, []);

  useEffect(() => {
    setstatusNew(status);
  }, [status]);

  // if (status?.status === "2") {
  //   return null;
  // }
  if (loding) return <CustomCircularProgress isLoading={loding} />;
  return (
    <Box
      sx={{
        width: "300px",
        height: "400px",
        margin: "auto",
        backgroundImage: `url(${
          (status?.status === "1" && win) || (status?.status === "2" && Loss)
        })`,
        // backgroundImage: `url(${win})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {!loding && newstatus && (
        <>
          <Typography
            variant="body1"
            color="initial"
            className="crlg !text-center"
          >
            {(status?.status === "1" && "Win") ||
              (status?.status === "2" && "Loss")}
          </Typography>

          {/* <Box className="winerpoint">
        <Typography variant="body1" color="initial">
          Game Results{" "}
        </Typography>
        <Typography variant="body1" color="initial">
          green
        </Typography>
        <Box component="img" src={pr0} width={30} sx={{ mr: "5px" }}></Box>
        <Typography variant="body1" color="initial">
          small
        </Typography>
      </Box> */}
          <Typography
            variant="body1"
            color="initial"
            className={`bonustext ${
              status?.status === "1" ? "!text-green" : "!text-red"
            }
            !mr-0
            `}
          >
            {(status?.status === "1" && (
              <>
                <div className="!text-sm !ml-7 !flex !items-center !gap-2">
                  <span>Results: </span>
                  <span
                    className={`${
                      [1, 3, 7, 9]?.includes(Number(all_result?.result))
                        ? "!bg-green-500"
                        : "!bg-red-500"
                    }
                  ${
                    String(Number(all_result?.result)) === String(0) &&
                    "!bg-gradient-to-r from-red-500 to-purple-500"
                  }
                  ${
                    String(Number(all_result?.result)) === String(5) &&
                    "!bg-gradient-to-r from-green-500 to-purple-500"
                  }
                  !text-center !p-2 !rounded-md
                  `}
                  >
                    {(String(Number(all_result?.result)) === String(0) &&
                      "Red Purple") ||
                    (String(Number(all_result?.result)) === String(5) &&
                      "Green Purple") ||
                    [1, 3, 7, 9]?.includes(Number(all_result?.result))
                      ? "Green"
                      : "Red"}
                  </span>
                  <img
                    className="!h-[10%] !w-[10%]"
                    src={array[Number(all_result?.result)]}
                  />
                  <span
                    className={`${
                      [1, 3, 7, 9]?.includes(Number(all_result?.result))
                        ? "!bg-green-500"
                        : "!bg-red-500"
                    }
                  ${
                    String(Number(all_result?.result)) === String(0) &&
                    "!bg-gradient-to-r from-red-500 to-purple-500"
                  }
                  ${
                    String(Number(all_result?.result)) === String(5) &&
                    "!bg-gradient-to-r from-green-500 to-purple-500"
                  }
                  !text-center !p-2 !rounded-md
                  `}
                  >
                    {Number(all_result?.result) <= 4 ? "Small" : "Big"}
                  </span>
                </div>
                <div className="!text-[20px] !mt-4">Bonus</div>
              </>
            )) ||
              (status?.status === "2" && "Loss Amount")}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={`bonusamt  ${
              status?.status === "1" ? "!text-green-500" : "!text-red-300"
            }`}
          >
            ₹ {Number(status?.amount || 0)?.toFixed(2) || 0}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={`bonuspr ${
              status?.status === "1" ? "!text-white" : "!text-black"
            }`}
          >
            Period min :{all_result?.gamesno}
            {/* {(status?.gameid === "1" && "One") ||
              (status?.gameid === "3" && "Three") ||
              (status?.gameid === "5" && "Five")}{" "} */}
          </Typography>
          <Typography variant="body1" color="initial" className="bonuscl">
            Auto Close in 5 sec{" "}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default WinLossPopup;
