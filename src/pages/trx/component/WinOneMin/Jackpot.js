import { Box, Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  bgdarkgray,
  bglightgray,
  zubgback,
  zubgtext
} from "../../../../Shared/color";
import g5 from "../../../../assets/Green_coin (1).png";
import g0 from "../../../../assets/Green_coin (2).png";
import g2 from "../../../../assets/Green_coin.png";
import v1 from "../../../../assets/Red_coin__1_-removebg-preview.png";
import r3 from "../../../../assets/a3.png";
import g4 from "../../../../assets/a4.png";
import g6 from "../../../../assets/a6-removebg-preview.png";
import r7 from "../../../../assets/a7-removebg-preview.png";
import g8 from "../../../../assets/a8-removebg-preview.png";
import r9 from "../../../../assets/a9-removebg-preview.png";
import r1 from "../../../../assets/i.png";
import pr11 from "../../../../assets/images/11.png";
import pr22 from "../../../../assets/images/22.png";
import pr33 from "../../../../assets/images/33.png";
import pr4 from "../../../../assets/images/4.png";
import pr6 from "../../../../assets/images/6.png";
import pr7 from "../../../../assets/images/7.png";
import pr8 from "../../../../assets/images/8.png";
import pr9 from "../../../../assets/images/9.png";
import r5 from "../../../../assets/images/num5.png";
import r0 from "../../../../assets/n2-c2913607.png";
import v2 from "../../../../assets/voilet_coin-removebg-preview.png";
import v3 from "../../../../assets/voilet_coin__1_-removebg-preview.png";
import v4 from "../../../../assets/voilet_coin__2_-removebg-preview.png";
import v5 from "../../../../assets/voilet_coin__3_-removebg-preview.png";
import v6 from "../../../../assets/voilet_coin__4_-removebg-preview.png";
import v7 from "../../../../assets/voilet_coin__5_-removebg-preview.png";
import v8 from "../../../../assets/voilet_coin__6_-removebg-preview.png";
import v9 from "../../../../assets/voilet_coin__7_-removebg-preview.png";
import v0 from "../../../../assets/voilet_coin__8_-removebg-preview.png";
import JackpotBetDialogBox from "./JackpotBetDialogBox";
import JackpotCountdown from "./JackpotCountdown";
import JackpotGameHistory from "./JackpotGameHistory";
import Jackpotmyhistory from "./Jackpotmyhistory";

function Jackpot({ gid }) {
  const [TabTwo, setTabTwo] = useState(1);
  const [jackpot_bit_dialog_box, setjackpot_bit_dialog_box] =
    React.useState(false);
  const [dialog_type, setdialog_type] = React.useState("green_0");
  const [timing, setBetNumber] = useState(100);
  const net_wallet_amount = useSelector(
    (state) => state.aviator.net_wallet_amount
  );
  const initialValues = {
    openTimerDialogBoxOneMin: false,
    show_this_one_min_time: "0_0",
  };

  const fk = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log(fk.values);
    },
  });

  return (
    <Box className="mainBox">
      {React.useMemo(() => {
        return <JackpotCountdown fk={fk} setBetNumber={setBetNumber} />;
      }, [])}
      {React.useMemo(() => {
        return (
          <Box
            sx={{
              width: "95%",
              marginLeft: "2.5%",
              my: "20px",
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
                      fontSize: 200,
                      borderRadius: 20,
                      fontWeight: 700,
                      width: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: zubgtext,
                      color: "white !important",
                    }}
                  >
                    {String(fk.values.show_this_one_min_time?.split("_")?.[1])
                      ?.padStart(2, "0")
                      ?.substring(0, 1)}
                  </div>
                  <div
                    style={{
                      fontSize: 200,
                      borderRadius: 20,
                      fontWeight: 700,
                      width: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: zubgtext,
                      color: "white !important",
                    }}
                  >
                    {String(fk.values.show_this_one_min_time?.split("_")?.[1])
                      ?.padStart(2, "0")
                      ?.substring(1, 2)}
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
              <Button className="greembtn">Green</Button>
              <Button className="greemviolet">Violet</Button>
              <Button className="greemred">Red</Button>
            </Box>
            {/* pridictcolor */}

            <Box
              sx={{
                width: "100%",
                mt: "20px",
                background: bgdarkgray,
                borderRadius: "10px",
                position: "relative",
                padding: "10px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            // className=" grid grid-cols-3 "
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "33%",

                }}
                className=""
              >
                <div style={{}}>
                  {[
                    { nogreen: 0, img: g0 },
                    { nogreen: 1, img: pr11 },
                    { nogreen: 2, img: g2 },
                    { nogreen: 3, img: pr33 },
                    { nogreen: 4, img: g4 },
                  ]?.map((i) => {
                    return (
                      <div className="">
                        <img
                          style={{ width: '40px', marginBottom: '10px', }}
                          className="!cursor-pointer  object-cover"
                          src={i?.img}
                          onClick={() => {
                            setjackpot_bit_dialog_box(true);
                            setdialog_type(`green_${i.nogreen}`);
                          }}
                          alt="button"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  {[
                    { nogreen: 5, img: g5 },
                    { nogreen: 6, img: g6 },
                    { nogreen: 7, img: pr7 },
                    { nogreen: 8, img: g8 },
                    { nogreen: 9, img: pr9 },
                  ]?.map((i) => {
                    return (
                      <div className="">
                        <img
                          style={{ width: '40px', marginBottom: '10px', }}
                          className="!cursor-pointer object-cover"
                          src={i?.img}
                          onClick={() => {
                            setjackpot_bit_dialog_box(true);
                            setdialog_type(`green_${i.nogreen}`);
                          }}
                          alt="button"
                        />
                      </div>
                    );
                  })}
                </div>
              </Box>
              <Box
                //violet
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "33%",

                }}
                className=""
              >
                <div >
                  {[
                    { noviolet: 0, img: v0 },
                    { noviolet: 1, img: v1 },
                    { noviolet: 2, img: v2 },
                    { noviolet: 3, img: v3 },
                    { noviolet: 4, img: v4 },
                  ]?.map((i) => {
                    return (
                      <div className="">
                        <img
                          style={{ width: '40px', marginBottom: '10px', }}
                          className="!cursor-pointer  object-cover"
                          src={i?.img}
                          onClick={() => {
                            setjackpot_bit_dialog_box(true);
                            setdialog_type(`voilet_${i.noviolet}`);
                          }}
                          alt="button"
                        />
                      </div>
                    );
                  })}
                </div>
                <div >
                  {[
                    { noviolet: 5, img: v5 },
                    { noviolet: 6, img: v6 },
                    { noviolet: 7, img: v7 },
                    { noviolet: 8, img: v8 },
                    { noviolet: 9, img: v9 },
                  ]?.map((i) => {
                    return (
                      <div className="">
                        <img
                          style={{ width: '40px', marginBottom: '10px', }}
                          className="!cursor-pointer  object-cover"
                          src={i?.img}
                          onClick={() => {
                            setjackpot_bit_dialog_box(true);
                            setdialog_type(`voilet_${i.noviolet}`);
                          }}
                          alt="button"
                        />
                      </div>
                    );
                  })}
                </div>
              </Box>
              <Box
                //red
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "33%",

                }}
                className=""
              >
                <div >
                  {[
                    { nored: 0, img: r0 },
                    { nored: 1, img: r1 },
                    { nored: 2, img: pr22 },
                    { nored: 3, img: r3 },
                    { nored: 4, img: pr4 },
                  ]?.map((i) => {
                    return (
                      <div className="">
                        <img
                          style={{ width: '40px', marginBottom: '10px', }}
                          className="!cursor-pointer  object-cover"
                          src={i?.img}
                          onClick={() => {
                            setjackpot_bit_dialog_box(true);
                            setdialog_type(`red_${i.nored}`);
                          }}
                          alt="button"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  {[
                    { nored: 5, img: r5 },
                    { nored: 6, img: pr6 },
                    { nored: 7, img: r7 },
                    { nored: 8, img: pr8 },
                    { nored: 9, img: r9 },
                  ]?.map((i) => {
                    return (
                      <div className="">
                        <img
                          style={{ width: '40px', marginBottom: '10px', }}
                          className="!cursor-pointer  object-cover"
                          src={i?.img}
                          onClick={() => {
                            setjackpot_bit_dialog_box(true);
                            setdialog_type(`red_${i.nored}`);
                          }}
                          alt="button"
                        />
                      </div>
                    );
                  })}
                </div>
              </Box>
            </Box>
          </Box>
        );
      }, [fk])}

      <Box className="tableBox_wingo">
        {React.useMemo(() => {
          return (
            <>
              <Box sx={{ background: zubgback, borderRadius: "10px" }}>
                <Stack direction="row">
                  <Box
                    component={NavLink}
                    onClick={() => setTabTwo(1)}
                    sx={{ borderRadius: '10px 0px 0px 10px' }}
                    className={
                      TabTwo === 1 ? "activewinNavtwo Winnavtow" : "Winnavtow"
                    }
                  >
                    <Typography variant="h3" color="initial">
                      Game History
                    </Typography>
                  </Box>
                  {/* <Box
                                        component={NavLink}
                                        onClick={() => setTabTwo(2)}
                                        className={
                                            TabTwo === 2 ? "activewinNavtwo Winnavtow" : "Winnavtow"
                                        }
                                    >
                                        <Typography variant="h3" color="initial">
                                            Chart
                                        </Typography>
                                    </Box> */}
                  <Box
                    sx={{ borderRadius: '0px 10px 10px 0px' }}
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
                </Stack>
              </Box>
            </>
          );
        }, [TabTwo])}
        {TabTwo === 1 && <JackpotGameHistory gid={gid} />}
        {/* {TabTwo === 2 && <Chart gid={gid} />} */}
        {TabTwo === 3 && <Jackpotmyhistory gid={gid} />}
      </Box>
      {jackpot_bit_dialog_box &&
        Number(
          `${String(timing)?.split("_")?.[0]}.${String(timing)
            ?.split("_")?.[1]
            ?.padStart(2, "0")}`
        ) > 0.1 && (
          <JackpotBetDialogBox
            jackpot_bit_dialog_box={jackpot_bit_dialog_box}
            setjackpot_bit_dialog_box={setjackpot_bit_dialog_box}
            type={dialog_type}
            gid={gid}
            net_wallet_amount={net_wallet_amount}
          />
        )}
    </Box>
  );
}

export default Jackpot;
