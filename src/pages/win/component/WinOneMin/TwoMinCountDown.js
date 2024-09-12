import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import * as React from "react";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../../../../Shared/SocketContext";
import { zubgmid } from "../../../../Shared/color";
import countdownfirst from "../../../../assets/countdownfirst.mp3";
import countdownlast from "../../../../assets/countdownlast.mp3";
import pr0 from "../../../../assets/images/0.png";
import pr11 from "../../../../assets/images/11.png";
import pr22 from "../../../../assets/images/22.png";
import pr33 from "../../../../assets/images/33.png";
import pr4 from "../../../../assets/images/4.png";
import pr5 from "../../../../assets/images/5.png";
import pr6 from "../../../../assets/images/6.png";
import pr7 from "../../../../assets/images/7.png";
import pr8 from "../../../../assets/images/8.png";
import winback from "../../../../assets/images/winbackbanner.03270574b912ee2ea784.png";
import pr9 from "../../../../assets/images/9.png";
import circle from "../../../../assets/images/circle-arrow.png";
import howToPlay from "../../../../assets/images/user-guide.png";
import { dummycounterFun, net_wallet_amount_function, trx_game_history_data_function, trx_my_history_data_function, updateNextCounter } from "../../../../redux/slices/counterSlice";
import { My_All_HistoryFn, walletamount } from "../../../../services/apicalling";
import { changeImages } from "../../../../services/schedular";
import Policy from "../policy/Policy";
import axios from "axios";
import { endpoint } from "../../../../services/urls";
import toast from "react-hot-toast";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const TwoMinCountDown = ({ fk, setBetNumber }) => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const client = useQueryClient();
  const [three_min_time, setThree_min_time] = useState("0_0");
  const [isImageChange, setIsImageChange] = useState("1_2_3_4_5");
  const [poicy, setpoicy] = React.useState(false);

  const img1 = Number(isImageChange?.split("_")[0]);
  const img2 = Number(isImageChange?.split("_")[1]);
  const img3 = Number(isImageChange?.split("_")[2]);
  const img4 = Number(isImageChange?.split("_")[3]);
  const img5 = Number(isImageChange?.split("_")[4]);
  const image_array = [pr0, pr11, pr22, pr33, pr4, pr5, pr6, pr7, pr8, pr9];

  React.useEffect(() => {
    setIsImageChange(changeImages());
  }, []);
  const next_step = useSelector((state) => state.aviator.next_step);

  const show_this_three_min_time_sec = React.useMemo(
    () => String(three_min_time?.split("_")?.[1]).padStart(2, "0"),
    [three_min_time]
  );

  const show_this_three_min_time_min = React.useMemo(
    () => String(three_min_time?.split("_")?.[0]).padStart(2, "0"),
    [three_min_time]
  );

  const handleClickOpenpoicy = () => {
    setpoicy(true);
  };
  const handleClosepolicy = () => {
    setpoicy(false);
  };

  React.useEffect(() => {
    const handleThreeMin = (threemin) => {
      setThree_min_time(threemin);
      setBetNumber(threemin)
      fk.setFieldValue("show_this_one_min_time", threemin);
      if (
        Number(threemin?.split("_")?.[1]) <= 10 && // 1 index means second
        threemin?.split("_")?.[0] === "0" // 0 index means min
      ) {
        fk.setFieldValue("openTimerDialogBoxOneMin", true);
      }
      if (threemin?.split("_")?.[1] === "59") {
        fk.setFieldValue("openTimerDialogBoxOneMin", false);
      }
      if (
        threemin?.split("_")?.[1] === "0" &&
        threemin?.split("_")?.[0] === "0"
      ) {
        client.refetchQueries("gamehistory_wingo_2");
        client.refetchQueries("walletamount");
        client.refetchQueries("myAllhistory_2");
        // dispatch(dummycounterFun());
      }
    };

    socket.on("threemin", handleThreeMin);

    return () => {
      socket.off("threemin", handleThreeMin);
    };
  }, []);

  const audioRefMusic = React.useRef(null);
  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };
  const audioRefMusiclast = React.useRef(null);
  const handlePlaySoundLast = async () => {
    try {
      if (audioRefMusiclast?.current?.pause) {
        await audioRefMusiclast?.current?.play();
      } else {
        await audioRefMusiclast?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };

  const { data: my_history } = useQuery(
    ["myAllhistory_2"],
    () => My_All_HistoryFn(2),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const { data: game_history } = useQuery(
    ["gamehistory_wingo_2"],
    () => GameHistoryFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const GameHistoryFn = async () => {
    try {
      const response = await axios.get(
        `${endpoint.game_history}?limit=500&offset=0&gameid=2`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  React.useEffect(() => {
    dispatch(
      updateNextCounter(
        game_history?.data?.data
          ? Number(game_history?.data?.data?.[0]?.gamesno) + 1
          : 1
      )
    );
    dispatch(trx_game_history_data_function(game_history?.data?.data));
  }, [game_history?.data?.data]);

  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    dispatch(trx_my_history_data_function(my_history?.data?.data));
    (Number(show_this_three_min_time_sec) >= 58 || Number(show_this_three_min_time_sec) === 0) && Number(show_this_three_min_time_min) === 0 && dispatch(dummycounterFun());
  }, [my_history?.data?.data])

  React.useEffect(() => {
    dispatch(net_wallet_amount_function(data?.data?.data))
  }, [Number(data?.data?.data?.wallet), Number(data?.data?.data?.winning)])


  return (
    <Box className="countdownbg" sx={{
      backgroundImage: `url(${winback})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }}>
      {React.useMemo(() => {
        return (
          <>
            <audio ref={audioRefMusic} hidden>
              <source src={`${countdownfirst}`} type="audio/mp3" />
            </audio>
            <audio ref={audioRefMusiclast} hidden>
              <source src={`${countdownlast}`} type="audio/mp3" />
            </audio>
          </>
        );
      }, [audioRefMusic, audioRefMusiclast])}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "50%",
            borderRight: "1px dashed white",
            paddingRight: "2%",
          }}
          className="win-banner"
        >
          {React.useMemo(() => {
            return (
              <Box onClick={() => handleClickOpenpoicy()}>
                <Box
                  component="img"
                  src={howToPlay}
                  sx={{ width: "25px !important", height: "25px !important" }}
                ></Box>
                <Typography variant="body1" color="initial">
                  How to play
                </Typography>
                <Box
                  component="img"
                  src={circle}
                  sx={{ width: "15px !important", height: "15px !important" }}
                ></Box>
              </Box>
            );
          }, [])}
          {poicy && (
            <Dialog
              open={poicy}
              TransitionComponent={Transition}
              onClose={handleClosepolicy}
              className="dialogsmall"
            >
              <Box>
                <Stack className="dialog-header-policy">
                  <Box>
                    <Typography variant="body1" color="initial">
                      Policy
                    </Typography>
                  </Box>
                  <IconButton onClick={handleClosepolicy}>
                    <CloseIcon />
                  </IconButton>
                </Stack>
              </Box>
              <Policy />
            </Dialog>
          )}
          {React.useMemo(() => {
            return (
              <>
                <Typography variant="body1" color="initial">
                  Win Go 1Min
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box component="img" src={image_array[Number(img1)]}></Box>
                  <Box component="img" src={image_array[Number(img2)]}></Box>
                  <Box component="img" src={image_array[Number(img3)]}></Box>
                  <Box component="img" src={image_array[Number(img4)]}></Box>
                  <Box component="img" src={image_array[Number(img5)]}></Box>
                </Stack>
              </>
            );
          }, [img1, img2, img3, img4, img5])}
        </Box>
        <Box>
          <Typography variant="h3" color="initial" className="winTextone">
            Time remaining
          </Typography>
          <Stack direction="row">
            {React.useMemo(() => {
              return (
                <>
                  <Box className="timerBoxone">
                    {show_this_three_min_time_min?.substring(0, 1)}
                  </Box>
                  <Box className="timerBox">
                    {show_this_three_min_time_min?.substring(1, 2)}
                  </Box>
                </>
              );
            }, [show_this_three_min_time_min])}
            <Box className={"!text-white !font-bold !text-lg"}>:</Box>
            {React.useMemo(() => {
              return (
                <>
                  <Box className="timerBox">
                    {show_this_three_min_time_sec?.substring(0, 1)}
                  </Box>
                  <Box className="timerBoxfour">
                    {show_this_three_min_time_sec?.substring(1, 2)}
                  </Box>
                </>
              );
            }, [show_this_three_min_time_sec])}
          </Stack>
          <Typography variant="h3" color="initial" className="winTexttwo">
            {Number(next_step)?.toString()?.padStart(7, "0")}
          </Typography>
        </Box>
      </Box>
      {/* {fk.values.openTimerDialogBox && (
        <Dialog
          open={fk.values.openTimerDialogBox}
          TransitionComponent={Transition}
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <div className="flex gap-2 justify-cente !bg-black !bg-opacity-5">
            <div
              style={{
                fontSize: 200,
                borderRadius: 20,
                background: "rgb(73, 57, 193)",
                fontWeight: 700,
                width: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              {show_this_three_min_time_sec?.substring(0, 1)}
            </div>
            <div
              style={{
                fontSize: 200,
                borderRadius: 20,
                background: "rgb(73, 57, 193)",
                fontWeight: 700,
                width: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              {show_this_three_min_time_sec?.substring(1, 2)}
            </div>
          </div>
        </Dialog>
      )} */}
    </Box>
  );
};

export default TwoMinCountDown;
