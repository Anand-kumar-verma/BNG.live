import CachedIcon from "@mui/icons-material/Cached";
import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
  Dialog,
  FormControl,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import {
  bglightgray,
  bgtan,
  zubgback,
  zubgbackgrad,
  zubgmid,
  zubgtext,
} from "../../Shared/color";
import payment from "../../assets/check.png";
import cip from "../../assets/cip.png";
import balance from "../../assets/images/send.png";
import audiovoice from "../../assets/images/withdrawol_voice.mp3";
import bg from "../../assets/img/download.png";
import Layout from "../../component/Layout/Layout";
import { AddressListDetails, NeedToBet } from "../../services/apicalling";
import { endpoint, rupees } from "../../services/urls";
import theme from "../../utils/theme";

function WithdrawalUsdt() {
  const location = useLocation();
  // const dispatch = useDispatch();
  // const aviator_login_data = useSelector(
  //   (state) => state.aviator.aviator_login_data
  // );
  const { type } = location.state || {};
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const [amount, setAmount] = React.useState({
    wallet: 0,
    winning: 0,
    cricket_wallet: 0,
  });
  const [lodint, setloding] = React.useState(false);
  const audioRefMusic = React.useRef(null);
  const [openDialogBox, setOpenDialogBox] = React.useState(false);
  const [msg, setMsg] = React.useState(
    "Your withdrawl amount will be add in your bank account within 24 Hrs."
  );

  // React.useEffect(() => {
  //   !aviator_login_data && get_user_data_fn(dispatch);
  // }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const walletamountFn = async () => {
    try {
      const response = await axios.get(
        `${endpoint.userwallet}?userid=${user_id}`
      );

      setAmount(response?.data?.data);
      // console.log(response,"response")
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  React.useEffect(() => {
    walletamountFn();
  }, []);
  const { isLoading, data } = useQuery(
    ["address_list_details"],
    () => AddressListDetails(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const result = React.useMemo(() => data?.data?.data, [data]);

  const initialValues = {
    request_amount: "",
    req_type: "",
  };

  const fk = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: () => {
      const reqbody = {
        u_user_id: user_id,
        req_type: fk.values.req_type === "USDT.BEP20" ? "1" : "2",
        request_amount: fk.values.request_amount,
      };
      // console.log(reqbody)
      withdraw_payment_Function(reqbody);
    },
  });
  const withdraw_payment_Function = async (reqbody) => {
    setloding(true);
    try {
      const response = await axios.post(
        `${endpoint.withdrawal_request_usdt}`,
        reqbody
      );
      if (response?.data?.msg === "Record save successfully") {
        walletamountFn();
        fk.handleReset();
        setOpenDialogBox(true);
      } else {
        fk.handleReset();
        setOpenDialogBox(true);
        setMsg(response?.data?.msg);
      }
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setloding(false);
  };
  const { isLoading: loding, data: need_to_bet } = useQuery(
    ["need_to_bet"],
    () => NeedToBet(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Layout header={false}>
      {React.useMemo(() => {
        return (
          <audio ref={audioRefMusic} hidden>
            <source src={`${audiovoice}`} type="audio/mp3" />
          </audio>
        );
      }, [])}

      <Container
        className="no-scrollbar"
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 4,
        }}
      >
        <CustomCircularProgress isLoading={isLoading || lodint} />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1">Withdrawal</Typography>
          <Box component={NavLink} to="/Withdrawalusdthistory">
            <HistoryIcon />
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            padding: "30px 20px",
            width: "95%",
            margin: "auto",
            position: "relative",
            background: "#d9ac4f8f",
            mt: 3,
            backgroundImage: `url(${bg})`,
            backgroundSize: "100% 100%",
          }}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Box component="img" src={balance} width={50}></Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px ",
                fontWeight: 500,
                color: "white",
                ml: "10px",
              }}
            >
              {" "}
              Balance
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center", mt: "10px" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "30px ",
                fontWeight: "600",
                color: "white",
                mr: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
              ₹{" "}
              {type
                ? Number(amount?.cricket_wallet || 0).toFixed(2)
                : Number(
                    Number(amount?.wallet || 0) + Number(amount?.winning || 0)
                  )?.toFixed(2)}
            </Typography>
            <CachedIcon
              sx={{
                color: "white",
                position: "relative",
                zIndex: 10,
              }}
            />
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mt: "20px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Box
              component="img"
              src={cip}
              width={50}
              sx={{
                position: "relative",
                zIndex: 10,
              }}
            ></Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px ",
                color: "white",
                ml: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
              **** **** **** ****
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: "20px",
              background: theme.palette.secondary.light,
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Box mt={2}>
              <div className="  my-2 mb-4">
                <p
                  style={{ color: theme.palette.primary.main }}
                  className="!text-center !p-4  cursor-pointer  border border-dashed border-gray-400"
                  onClick={() => navigate("/addadressusdt")}
                >
                  {" "}
                  + Add Address
                </p>
              </div>
              <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
                <Box component="img" src={payment} width={30}></Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "15px ", color: "white", ml: "10px" }}
                >
                  Select Amount of USDT
                </Typography>
              </Stack>

              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: "white" }}>
                    Select Address{" "}
                    <span className="!text-red-600">*</span>
                  </Typography>
                </Stack>
                <TextField
                  select
                  id="req_type"
                  name="req_type"
                  value={fk.values.req_type}
                  onChange={fk.handleChange}
                  className="withdrawalfield2"
                  placeholder="Select address / Network"
                  sx={{
                    background: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "0px",
                  }}
                  InputProps={{
                    style: {
                      borderWidth: "1px",
                      color: "black",
                      borderRadius: "10px",
                      border: "none",
                      padding: "10px !important",
                      "&>div": { padding: "0px !important" },
                    },
                  }}
                >
                  <MenuItem value={"Select Address"}>Select Address</MenuItem>
                  {result?.map((i, index) => {
                    return (
                      <MenuItem key={index} value={i?.usdt_type}>
                        {i?.usdt_address}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </FormControl>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: "white" }}>
                    Enter USDT <span className="!text-red-600">*</span>
                  </Typography>
                </Stack>
                <TextField
                  id="request_amount"
                  name="request_amount"
                  type="number"
                  value={fk.values.request_amount}
                  onChange={fk.handleChange}
                  placeholder="Enter amount *"
                  className="withdrawalfield2"
                  //   onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: "white" }}>
                    INR <span className="!text-red-600">*</span>
                  </Typography>
                </Stack>
                <TextField
                  type="number"
                  value={Number(Number(fk.values.request_amount) * 92)?.toFixed(
                    4
                  )}
                  placeholder=" 00000 "
                  className="withdrawalfield2"
                />
              </FormControl>

              <Button
                sx={style.paytmbtntwo}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  fk.handleSubmit();
                }}
              >
                Withdrawal{" "}
              </Button>
            </Box>
          </Box>
          <Box
            mt={3}
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: "16px",
              background: bglightgray,
              borderRadius: "10px",
              mb: 8,
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white" }}
              className="!text-xs"
            >
              * Need to play Amount{" "}
              <span className="!text-green-500">
                {rupees}{" "}
                {need_to_bet?.data?.data <= 0 ? 0 : need_to_bet?.data?.data}
              </span>{" "}
              for withdrawl from winning wallet.
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              mt={1}
              className="!text-bold !text-xl"
            >
              <Typography
                variant="body1"
                className="!text-xs"
                sx={{ color: "white" }}
              >
                * Withdraw time{" "}
              </Typography>
              <Typography
                className=" !text-xs"
                variant="body1"
                sx={{
                  mx: 0.5,
                  color: "#62B90E !important",
                }}
              >
                00:00-23:50.{" "}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              mt={1}
              className="!text-bold !text-xl"
            >
              <Typography
                variant="body1"
                sx={{ color: "white" }}
                className="!text-xs"
              >
                * Withdraw Amount
              </Typography>
              <Typography
                className=" !text-xs"
                variant="body1"
                sx={{
                  color: "#62B90E !important",
                  mx: 0.5,
                }}
              >
                $10.00 - $500.00 .{" "}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" mt={1}>
              <Typography
                variant="body1"
                sx={{ color: "white" }}
                className="!text-xs"
              >
                * Please confirm your beneficial account information before
                withdrawing.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" mt={1}>
              <Typography
                variant="body1"
                sx={{ color: "white" }}
                className="!text-xs"
              >
                * If your information is incorrect, our company will not be
                liable for the amount of loss .{" "}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              mt={1}
              className="!text-bold "
            >
              <Typography
                variant="body1"
                sx={{ color: "white" }}
                className="!text-xs"
              >
                * If your beneficial information is incorrect, please contact
                customer service.
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Dialog open={openDialogBox}>
          <div className="!p-5 !max-w-[300px]">
            <p className="!font-bold text-center flex-col">
              <span className="!text-lg">{msg}</span>
              <p className="!text-green-500">Thank You!</p>
              <Button
                onClick={() => setOpenDialogBox(false)}
                className="!mt-1"
                variant="contained"
              >
                OK
              </Button>
            </p>
          </div>
        </Dialog>
      </Container>
    </Layout>
  );
}

export default WithdrawalUsdt;

const style = {
  header: {
    padding: "15px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
    "& > a > svg": {
      color: "white",
      fontSize: "35px",
    },
  },
  wthui: {
    textAlign: "center",
    width: "32%",
    minHeight: "15vh",
    background: zubgmid,
    borderRadius: "10px",
    mb: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div>p": { color: "white" },
  },
  paymentlink: {
    width: "32%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "15vh",
    background: zubgmid,
    borderRadius: "10px",
    mb: "10px",
    "&>p": {
      color: "white",
      fontSize: "12px",
      fontWeight: "500",
      textAlign: "center",
      mt: "5px",
    },
  },
  paymentBoxOuter: {
    width: "95%",
    margin: "auto",
    my: "10px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paytmbtn: {
    mb: 2,
    background: zubgback,
    color: "white !important",
    width: "31%",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgtext,
    color: bgtan,
    width: "100%",
    mt: "20px",
    padding: "10px",
    "&:hover": { background: zubgtext, border: "1px solid transparent" },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};
