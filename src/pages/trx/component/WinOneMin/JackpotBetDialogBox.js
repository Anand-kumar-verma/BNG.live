import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  DialogContentText,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slide from "@mui/material/Slide";
import axios from "axios";
import CryptoJS from "crypto-js";
import * as React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import CustomCircularProgress from "../../../../Shared/CustomCircularProgress";
import { get_user_data_fn } from "../../../../services/apicalling";
import { endpoint } from "../../../../services/urls";
import Policy from "../policy/Policy";
import { zubgtext } from "../../../../Shared/color";
import { JoinFull } from "@mui/icons-material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const JackpotBetDialogBox = ({
  jackpot_bit_dialog_box,
  setjackpot_bit_dialog_box,
  type,
  gid,
  net_wallet_amount,
}) => {

  const next_step = useSelector((state) => state.aviator.next_step);
  const client = useQueryClient();
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  // const login_data_ = localStorage.getItem("aviator_data");
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const [value, setValue] = useState(1);
  const [Rules, setRules] = useState(false);
  const [calculated_value, setcalculated_value] = useState(1);
  const [loding, setLoding] = useState(false);

  const handleClickValue = (value) => {
    if (value === 0) {
      return setValue(1);
    }
    setValue(value);
  };

  const handleClickOpenRules = () => {
    setRules(true);
  };
  const handleCloseRules = () => {
    setRules(false);
  };
  async function betFunctionStart() {
    setLoding(true);
    console.log("FUnction called apply bit");
    const reqBody = {
      userid: String(user_id),
      amount: String(value ||0),
      number:
        (type?.split("_")?.[0] === "green" && `100${type?.split("_")?.[1]}`) ||
        (type?.split("_")?.[0] === "voilet" && `200${type?.split("_")?.[1]}`) ||
        (type?.split("_")?.[0] === "red" && `300${type?.split("_")?.[1]}`) ||
        type?.split("_")?.[0],
      gameid: Number(4),
    };
    try {
      if (
        reqBody.amount >
        Number(
          Number(net_wallet_amount?.wallet) + Number(net_wallet_amount?.winning)
        )
      ) {
        setLoding(false);
        return toast("Your Wallet Amount is low.");
      }
   
      const response = await axios.post(`${endpoint.place_bid_jackpod}`, reqBody);
      if (response?.data?.msg === "Bid placed Successfully") {
        toast.success(response?.data?.msg);
        setjackpot_bit_dialog_box(false);
        localStorage.setItem("betApplied", `${4}_true`);
      } else {
        toast(response?.data?.msg);
      }
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    client.refetchQueries("walletamount");
    // client.refetchQueries("jackpod_gamehistory");
    client.refetchQueries("my_jackpod_history");
    setLoding(false);
  }

  return (
    <Dialog
      open={jackpot_bit_dialog_box}
      TransitionComponent={Transition} 
      keepMountedonClose={() => setjackpot_bit_dialog_box(false)}
      className="dialogsmall"
    >
      <Box>
        <Stack
          className={`${
            ((type?.split("_")?.[0] === "green") &&
              "!bg-[#30b539]") ||
            ((type?.split("_")?.[0] === "red") &&
              "!bg-[#FE0000]") ||
            ((type?.split("_")?.[0] === "voilet") &&
              "!bg-[#710193]") 
          } 
            dialog-header `}
        >
          <Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "white !important",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              { (type?.split("_")?.[0] === "green" && `Green ${type?.split("_")?.[1]}`) ||
                (type?.split("_")?.[0] === "voilet" && `Voilet ${type?.split("_")?.[1]}`) ||
                (type?.split("_")?.[0] === "red" &&`Red ${type?.split("_")?.[1]}`) ||
                type?.split("_")?.[0]}
            </Typography>
          </Box>
          <IconButton
            onClick={() => setjackpot_bit_dialog_box(false)}
            sx={{ "&>svg>path": { color: "white" } }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box className="dialogsmallbat">
        <Typography variant="body1" sx={{ color: zubgtext }}>
          Contract Money
        </Typography>
        <Box
          className={`
            addbtnbox  !w-full !grid !grid-cols-4 !gap-1`}
        >
          {[1, 10, , 100, 1000]?.map((i) => {
            return (
              <Button
                onClick={() => {
                  handleClickValue(i);
                  setcalculated_value(i);
                }}
                className={`${
                  ((type?.split("_")?.[0] === "green") &&
                    "!bg-[#30b539]") ||
                  ((type?.split("_")?.[0] === "red") &&
                    "!bg-[#FE0000]") ||
                  ((type?.split("_")?.[0] === "voilet") &&
                    "!bg-[#710193]") 
                } 
            `}
              >
                {i}
              </Button>
            );
          })}
        </Box>
        <Typography variant="body1" color="initial" sx={{ color: zubgtext }}>
          small
        </Typography>
      </Box>
      <Stack direction="row" className="bat-price-input-box">
        <IconButton onClick={() => handleClickValue(value - 1)}>
          <RemoveIcon />
        </IconButton>
        <TextField
          placeholder="Enter value"
          value={value}
          variant="outlined"
          type="number"
          onChange={(e) => handleClickValue(parseInt(e.target.value))}
        />
        <IconButton onClick={() => handleClickValue(value + 1 || 1)}>
          <AddIcon />
        </IconButton>
      </Stack>
      <Box className=" !grid !grid-cols-6 lg:gap-1 gap-[1px] !pt-8 lg:px-2 px-1">
        {[1, 5, 10, 20, 50, 100]?.map((i) => {
          return (
            <div
              onClick={() => {
                handleClickValue(value * i);
                // setcalculated_value(value)
              }}
              className={`${
                ((type?.split("_")?.[0] === "green" ||
                  type?.split("_")?.[0] === 1 ||
                  type?.split("_")?.[0] === 3 ||
                  type?.split("_")?.[0] === 7 ||
                  type?.split("_")?.[0] === 9) &&
                  "!bg-[#30b539]") ||
                ((type?.split("_")?.[0] === "red" ||
                  type?.split("_")?.[0] === 2 ||
                  type?.split("_")?.[0] === 6 ||
                  type?.split("_")?.[0] === 4 ||
                  type?.split("_")?.[0] === 8) &&
                  "!bg-[#FE0000]") ||
                ((type?.split("_")?.[0] === "voilet" || type?.split("_")?.[0] === 0 || type?.split("_")?.[0] === 5) &&
                  "!bg-[#710193]") ||
                (type?.split("_")?.[0] === "small" && "!bg-[#EE1285]") ||
                (type?.split("_")?.[0] === "big" && "!bg-[#FBB13B]")
              } 
             !px-3 !py-2 rounded-md  !text-center !text-[#fff]
            `}
            >
              {i}x
            </div>
          );
        })}
      </Box>
      <Stack direction="row" className="total-money-box">
        <Typography variant="body1" color="initial" sx={{ color: zubgtext }}>
          Total contract money is ₹{" "}
        </Typography>
        <Typography variant="body1" color="initial" sx={{ color: zubgtext }}>
          {value || "0"}
        </Typography>
      </Stack>
      <Stack direction="row" className="agree-btn">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I Agree"
        />
        <Button onClick={() => handleClickOpenRules()} sx={{ color: zubgtext }}>
          Personal Rules
        </Button>
        <Dialog
          open={Rules}
          onClose={handleCloseRules}
          className="dialog-rules"
        >
          <DialogContentText id="alert-dialog-description">
            <Stack direction="row" className="personal-rules-header">
              <Typography>Presale Rule</Typography>
              <CloseIcon onClick={() => handleCloseRules()} />
            </Stack>
            <Policy />
          </DialogContentText>
        </Dialog>
      </Stack>
      <Stack direction="row" className="agree-btn-two">
        <Button
          className="!text-white"
          variant="text"
          color="primary"
          onClick={() => {
            betFunctionStart()
          }}
          loding={true}
        >
          Confirm
        </Button>
        <Button variant="text" onClick={() => setjackpot_bit_dialog_box(false)}>
          Cancel
        </Button>
      </Stack>

      <CustomCircularProgress isLoading={loding} />
    </Dialog>
  );
};

export default JackpotBetDialogBox;
