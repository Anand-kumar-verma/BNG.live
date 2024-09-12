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
import {useSelector } from "react-redux";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { endpoint } from "../../../services/urls";
import Policy from "./policy/Policy";
import { zubgtext } from "../../../Shared/color";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ApplyBetDialogBox = ({
  apply_bit_dialog_box,
  setapply_bit_dialog_box,
  type,
  gid,
  random,
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
  // const first_rechange =
  //   aviator_login_data && JSON.parse(aviator_login_data)?.first_recharge;
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const [value, setValue] = useState(random || 1);
  const [Rules, setRules] = useState(false);
  const [calculated_value, setcalculated_value] = useState(1);
  const [loding, setLoding] = useState(false);
  // React.useEffect(() => {
  //   !aviator_login_data && get_user_data_fn(dispatch);
  // }, []);

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
      userid: user_id,
      amount: value | 0,
      number:
        (type === "green" && 10) ||
        (type === "red" && 30) ||
        (type === "voilet" && 20) ||
        (type === "big" && 40) ||
        (type === "small" && 50) ||
        type,
      gameid: Number(gid),
      gamesnio: Number(next_step),
    };
    try {
      const response = await axios.post(`${endpoint.trx_game_bet}`, reqBody);
      if (response?.data?.error === "200") {
        toast.success(response?.data?.msg);
        setapply_bit_dialog_box(false);
        localStorage.setItem("betApplied", `${gid}_true`);
      } else {
        toast(response?.data?.msg);
      }
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    client.refetchQueries("walletamount");
    client.refetchQueries(`my_trx_history_${gid}_temp`);
    setLoding(false);
  }

  return (
    <Dialog
      open={apply_bit_dialog_box}
      TransitionComponent={Transition}
      keepMountedonClose={() => setapply_bit_dialog_box(false)}
      className="dialogsmall"
    >
      <Box>
        <Stack
          className={`${
            ((type === "green" ||
              type === 1 ||
              type === 3 ||
              type === 7 ||
              type === 9) &&
              "!bg-[#30b539]") ||
            ((type === "red" ||
              type === 2 ||
              type === 6 ||
              type === 4 ||
              type === 8) &&
              "!bg-[#FE0000]") ||
            ((type === "voilet" || type === 0 || type === 5) &&
              "!bg-[#710193]") ||
            (type === "small" && "!bg-[#EE1285]") ||
            (type === "big" && "!bg-[#FBB13B]")
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
              {(type === "green" && "Join Green") ||
                (type === "voilet" && "Join Voilet") ||
                (type === "red" && "Join Red") ||
                type}
            </Typography>
          </Box>
          <IconButton
            onClick={() => setapply_bit_dialog_box(false)}
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
          {[1, 10, 100, 1000]?.map((i) => {
            return (
              <Button
                onClick={() => {
                  handleClickValue(i);
                  setcalculated_value(i);
                }}
                className={`${
                  ((type === "green" ||
                    type === 1 ||
                    type === 3 ||
                    type === 7 ||
                    type === 9) &&
                    "!bg-[#30b539]") ||
                  ((type === "red" ||
                    type === 2 ||
                    type === 6 ||
                    type === 4 ||
                    type === 8) &&
                    "!bg-[#FE0000]") ||
                  ((type === "voilet" || type === 0 || type === 5) &&
                    "!bg-[#710193]") ||
                  (type === "small" && "!bg-[#EE1285]") ||
                  (type === "big" && "!bg-[#FBB13B]")
                } 
            `}
              >
                {i}
              </Button>
            );
          })}
        </Box>
        {/* <Typography variant="body1" color="initial" sx={{ color: zubgtext }}>
          small
        </Typography> */}
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
                ((type === "green" ||
                  type === 1 ||
                  type === 3 ||
                  type === 7 ||
                  type === 9) &&
                  "!bg-[#30b539]") ||
                ((type === "red" ||
                  type === 2 ||
                  type === 6 ||
                  type === 4 ||
                  type === 8) &&
                  "!bg-[#FE0000]") ||
                ((type === "voilet" || type === 0 || type === 5) &&
                  "!bg-[#710193]") ||
                (type === "small" && "!bg-[#EE1285]") ||
                (type === "big" && "!bg-[#FBB13B]")
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
        <Button variant="text" onClick={() => setapply_bit_dialog_box(false)}>
          Cancel
        </Button>
      </Stack>

      <CustomCircularProgress isLoading={loding} />
    </Dialog>
  );
};

export default ApplyBetDialogBox;
