import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../../../../Shared/SocketContext";
import countdownfirst from "../../../../assets/countdownfirst.mp3";
import countdownlast from "../../../../assets/countdownlast.mp3";
import circle from "../../../../assets/images/circle-arrow.png";
import howToPlay from "../../../../assets/images/user-guide.png";
import { dummycounterFun, 
  net_wallet_amount_function,
   trx_game_image_index_function,
   trx_game_history_data_function,
    updateNextCounter, 
    trx_my_history_data_function} from "../../../../redux/slices/counterSlice";
import { endpoint } from "../../../../services/urls";
import Policy from "../policy/Policy";
import ShowImages from "./ShowImages";
import { zubgtext } from "../../../../Shared/color";
import { My_All_TRX_HistoryFn, My_All_TRX_HistoryFnTemp, walletamount } from "../../../../services/apicalling";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const OneMinCountDown = ({ fk, setBetNumber }) => {
  const socket = useSocket();
  const client = useQueryClient();
  const [one_min_time, setOne_min_time] = useState(0);
  const show_this_one_min_time = String(one_min_time).padStart(2, "0");
  const audioRefMusic = React.useRef(null);
  const audioRefMusiclast = React.useRef(null);
  const next_step = useSelector((state) => state.aviator.next_step);
  const dispatch = useDispatch();

  const [poicy, setpoicy] = React.useState(false);
  const handleClickOpenpoicy = () => {
    setpoicy(true);
  };
  const handleClosepolicy = () => {
    setpoicy(false);
  };

  React.useEffect(() => {
    const handleOneMin = (onemin) => {
      setOne_min_time(onemin);
      setBetNumber(onemin)
      fk.setFieldValue("show_this_one_min_time", onemin);
      if (onemin === 5 || onemin === 4 || onemin === 3 || onemin === 2) {
      }
      
      if (onemin <= 10) {
        fk.setFieldValue("openTimerDialogBoxOneMin", true);
      }
      if (onemin === 58) {
        client.refetchQueries("walletamount");
      }
      if (onemin === 0) {
        fk.setFieldValue("openTimerDialogBoxOneMin", false);
      }
      if (onemin === 57) {
        client.refetchQueries("trx_gamehistory_1");
        // client.refetchQueries("my_trx_history_1");
        client.refetchQueries("my_trx_history_1_temp");
        dispatch(dummycounterFun());
      }
    };
    socket.on("onemintrx", handleOneMin);
    return () => {
      socket.off("onemintrx", handleOneMin);
    };
  }, []);
  const { isLoading: myhistory_loding, data: my_history_old } = useQuery(
    ["my_trx_history_1"],
    () => My_All_TRX_HistoryFn(1),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const {data: my_history } = useQuery(
    ["my_trx_history_1_temp"],
    () => My_All_TRX_HistoryFnTemp(1),
    {
      refetchOnMount: false,
    }
  );

  const { isLoading, data: game_history } = useQuery(
    ["trx_gamehistory_1"],
    () => GameHistoryFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const GameHistoryFn = async () => {
    try {
      const response = await axios.get(`${endpoint.trx_game_history}?gameid=1&limit=500`);
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  React.useEffect(() => {
    dispatch(
      updateNextCounter(
        game_history?.data?.result
          ? Number(game_history?.data?.result?.[0]?.tr_transaction_id) + 1
          : 1
      )
    );
    const tr_digit =
      game_history?.data?.result && game_history?.data?.result?.[0]?.tr_digits;
    let array = [];
    for (let i = 0; i < tr_digit?.length; i++) {
      if (/[a-zA-Z]/.test(tr_digit[i])) {
        array.push(tr_digit[i].toUpperCase());
      } else {
        array.push(tr_digit[i]);
      }
    }
    dispatch(trx_game_history_data_function(game_history?.data?.result));
    dispatch(trx_game_image_index_function(array));
  }, [game_history?.data?.result]);

  React.useEffect(()=>{
    const allEarnings = my_history_old?.data?.data;
    const newEarnings = my_history?.data?.data;
    if (Array.isArray(newEarnings) && newEarnings.length > 0) {
      if (Array.isArray(allEarnings)) {
        dispatch(trx_my_history_data_function([...newEarnings, ...allEarnings]));
      } else {
        dispatch(trx_my_history_data_function(newEarnings));
      }
    } else if (Array.isArray(allEarnings)) {
      dispatch(trx_my_history_data_function(allEarnings));
    }
    // (one_min_time>=58 ||one_min_time===0) &&  dispatch(dummycounterFun());
  },[my_history?.data?.data,my_history_old?.data?.data])

  const { isLoading: amount_loder, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });

  React.useEffect(()=>{
    dispatch(net_wallet_amount_function(data?.data?.data))
  },[Number(data?.data?.data?.wallet),Number(data?.data?.data?.winning)])


  return (
    <Box
      className="countdownbgtrx"
      sx={{ background: zubgtext }}
    >
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
              <>
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
                <Typography
                  variant="body1"
                  color="initial"
                  className="!ml-2 !text-lg"
                >
                  TRX 1 Min
                </Typography>
              </>
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
        </Box>
        <Box>
          <Typography variant="h3" color="initial" className="winTextone">
            Time remaining
          </Typography>
          {React.useMemo(() => {
            return (
              <Stack direction="row">
                <Box className="timerBoxone">0</Box>
                <Box className="timerBox">0</Box>
                <Box className={"!text-white !font-bold !text-lg"}>:</Box>
                <Box className="timerBox">
                  {show_this_one_min_time?.substring(0, 1)}
                </Box>
                <Box className="timerBoxfour">
                  {show_this_one_min_time?.substring(1, 2)}
                </Box>
              </Stack>
            );
          }, [show_this_one_min_time])}
          <Typography variant="h3" color="initial" className="winTexttwo">
            {Number(next_step)?.toString()?.padStart(7, "0")}
          </Typography>
        </Box>
      </Box>
      {React.useMemo(() => {
        return <ShowImages />
      }, [])}
    </Box>
  );
};

export default OneMinCountDown;
