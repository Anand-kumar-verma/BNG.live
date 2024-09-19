import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { bgdarkgray, bglightgray, zubgshadow, zubgtext } from "../../../../Shared/color";
import pr0 from "../../../../assets/images/0.png";
import pr11 from "../../../../assets/images/11.png";
import pr22 from "../../../../assets/images/22.png";
import pr33 from "../../../../assets/images/33.png";
import pr4 from "../../../../assets/images/4.png";
import pr5 from "../../../../assets/images/5.png";
import pr6 from "../../../../assets/images/6.png";
import pr7 from "../../../../assets/images/7.png";
import pr8 from "../../../../assets/images/8.png";
import pr9 from "../../../../assets/images/9.png";
import ApplyBetDialogBox from "../ApplyBetDialogBox";
import Chart from "./Chart";
import GameHistory from "./GameHistory";
import MyHistory from "./MyHistory";
import OneMinCountDown from "./OneMinCountDown";
import { useSelector } from "react-redux";
import theme from "../../../../utils/theme";

function WinOneMin({ gid }) {
  const [TabTwo, setTabTwo] = useState(1);
  const [apply_bit_dialog_box, setapply_bit_dialog_box] = React.useState(false);
  const [dialog_type, setdialog_type] = React.useState(0);
  const [timing, setBetNumber] = useState(100);
  const [value, setValue] = useState(1);
  const net_wallet_amount = useSelector(
    (state) => state.aviator.net_wallet_amount
  );

  const initialValues = {
    openTimerDialogBoxOneMin: false,
    show_this_one_min_time: 0,
  };

  const fk = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log(fk.values);
    },
  });
  const generateRandomType = () => {
    const randomType = Math.floor(Math.random() * 10); // Random number between 0 to 9
    setdialog_type(randomType);
    setapply_bit_dialog_box(true);
  };
  // React.useEffect(() => {
  //   if (gid === "1") {
  //     if (Number(timing) <= 10) {setapply_bit_dialog_box(false)
  //       fk.handleReset()
  //     };
  //   }
  // }, [timing]);

  return (
    <Box className="mainBox">
      {React.useMemo(() => {
        return <OneMinCountDown fk={fk} setBetNumber={setBetNumber} />;
      }, [])}
      {React.useMemo(() => {
        return (
          <Box
            sx={{
              width: "95%",
              marginLeft: "2.5%",
              mt: "20px",
              background: bglightgray,
              padding: "10px",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            {fk.values.openTimerDialogBoxOneMin && (
              <div className="!w-full !z-50 !h-full  !absolute px-5 flex justify-center items-center">
                <div
                  className="flex gap-2 justify-cente !bg-opacity-5"
                  sx={{ width: "100%" }}
                >
                  <div
                    style={{
                      borderRadius: 20,
                      width: 120,
                      height: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: zubgtext,
                      color: "white !important",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontSize: 95, fontWeight: 800 }}
                    >
                      {String(fk?.values?.show_this_one_min_time)
                        ?.padStart(2, "0")
                        ?.substring(0, 1)}
                    </Typography>
                  </div>
                  <div
                    style={{
                      borderRadius: 20,
                      width: 120,
                      height: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: zubgtext,
                      color: "white !important",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontSize: 95, fontWeight: 800 }}
                    >
                      {String(fk?.values?.show_this_one_min_time)
                        ?.padStart(2, "0")
                        ?.substring(1, 2)}
                    </Typography>
                  </div>
                </div>
              </div>
            )}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "20px",
                "&>button": { width: "32%", padding: "10px 10px " },
              }}
            >
              <Button
                className="greembtn"
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type("green");
                }}
              >
                Green
              </Button>
              <Button
                className="greemviolet"
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type("voilet");
                }}
              >
                Violet
              </Button>
              <Button
                className="greemred"
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type("red");
                }}
              >
                Red
              </Button>
            </Box>
            {/* pridictcolor */}
            <Box
              sx={{ padding: "10px", background: bgdarkgray, borderRadius: "10px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "20px",

                  "&>img": { width: "15%" },
                }}
              >
                {[
                  { no: 0, img: pr0 },
                  { no: 1, img: pr11 },
                  { no: 2, img: pr22 },
                  { no: 3, img: pr33 },
                  { no: 4, img: pr4 },
                ]?.map((i) => {
                  return (
                    <img
                      className="!cursor-pointer "
                      src={i?.img}
                      onClick={() => {
                        setapply_bit_dialog_box(true);
                        setdialog_type(i.no);
                      }}
                      alt="button"
                    />
                  );
                })}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",

                  "&>img": { width: "15%" },
                }}
              >
                {[
                  { no: 5, img: pr5 },
                  { no: 6, img: pr6 },
                  { no: 7, img: pr7 },
                  { no: 8, img: pr8 },
                  { no: 9, img: pr9 },
                ]?.map((i) => {
                  return (
                    <img
                      className="!cursor-pointer"
                      src={i?.img}
                      onClick={() => {
                        setapply_bit_dialog_box(true);
                        setdialog_type(i.no);
                      }}
                      alt="button"
                    />
                  );
                })}
              </Box>
            </Box>
            <Box
              sx={{
                my: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button variant="outlined" color="primary" onClick={generateRandomType}>
                Random
              </Button>
              {[1, 5, 10, 20, 50, 100]?.map((i) => (
                <IconButton
                  key={i}
                  color="primary"
                  className={`icobtn ${value === i ? "bg-green-600" : "bg-green-400"} cursor-pointer text-white`}
                  onClick={() => setValue(i)}
                >
                  {i}X
                </IconButton>
              ))}

            </Box>

            <div className="!w-full !grid grid-cols-2  !mt-2">
              <Button
                sx={{ py: "10px", borderRadius: '20px 0px 0px 20px' }}
                className="!bg-[#FEAA57] !text-white"
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type("big");
                }}
              >
                Big
              </Button>
              <Button
                sx={{ py: "10px", borderRadius: '0px 20px 20px 0px' }}
                className="!bg-[#6DA7F4] !text-white"
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type("small");
                }}
              >
                small
              </Button>
            </div>
          </Box>
        );
      }, [fk])}

      <Box className="tableBox_wingo">
        {React.useMemo(() => {
          return (
            <>
              <Box sx={{ borderRadius: "10px", overflow: 'hidden', mt: 2 }}>
                <Stack direction="row" justifyContent='space-between'>
                  <Box sx={{ width: '31%' }}>
                    <Box
                      component={NavLink}
                      onClick={() => setTabTwo(1)}
                      className={
                        TabTwo === 1 ? "activewinNavtwo Winnavtow" : "Winnavtow"
                      }
                    >
                      <Typography variant="h3" color="initial">
                        Game History
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: '31%' }}>
                    <Box
                      component={NavLink}
                      onClick={() => setTabTwo(2)}
                      className={
                        TabTwo === 2 ? "activewinNavtwo Winnavtow" : "Winnavtow"
                      }
                    >
                      <Typography variant="h3" color="initial">
                        Chart
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: '31%' }}>
                    <Box
                      component={NavLink}
                      onClick={() => setTabTwo(3)}
                      className={
                        TabTwo === 3 ? "activewinNavtwo Winnavtow" : "Winnavtow"
                      }
                    >
                      <Typography variant="h3" color="initial">
                        My History
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box >
            </>
          );
        }, [TabTwo])}
        {TabTwo === 1 && <GameHistory gid={gid} />}
        {TabTwo === 2 && <Chart gid={gid} />}
        {TabTwo === 3 && <MyHistory gid={gid} />}
      </Box>
      {
        apply_bit_dialog_box && Number(timing) >= 10 && (
          <ApplyBetDialogBox
            apply_bit_dialog_box={apply_bit_dialog_box}
            setapply_bit_dialog_box={setapply_bit_dialog_box}
            type={dialog_type}
            gid={gid}
            net_wallet_amount={net_wallet_amount}
            random={value}
          />
        )
      }
    </Box >
  );
}

export default WinOneMin;
