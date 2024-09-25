import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import copy from "clipboard-copy";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import {
  bgdarkgray,
  bggrad,
  bglightgray,
  bgtan,
  zubgmid,
  zubgshadow,
  zubgtext,
} from "../../../Shared/color";
import audiovoice from "../../../assets/bankvoice.mp3";
import user from "../../../assets/check.png";
import dot from "../../../assets/images/circle-arrow.png";
import logo1 from "../../../assets/images/logotred.png";
import balance from "../../../assets/images/send.png";
import upipayment from "../../../assets/images/upi.jpg";
import usdt from "../../../assets/images/usdt.png";
import pay from "../../../assets/images/wallet.png";
import bg from "../../../assets/img/download.png";
import Layout from "../../../component/Layout/Layout";
import { getQraddress } from "../../../services/apicalling";
import { endpoint } from "../../../services/urls";
import theme from "../../../utils/theme";

function DepositeUsdtrecharge() {
  const location = useLocation();
  const key_type = location?.state?.key;
  const [receipt, setReceipt] = React.useState();
  const deposit_amount = localStorage.getItem("amount_set");
  const audioRefMusic = React.useRef(null);
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const [loding, setloding] = React.useState(false);
  const [amount, setAmount] = React.useState({
    wallet: 0,
    winning: 0,
    cricket_wallet: 0,
  });
  const initialValue = {
    deposit_type: key_type || "",
    req_amount: "",
    bank_upi_table_id: "",
    receipt_image: "",
    utr_no: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      const reqBody = {
        userid: user_id,
        deposit_type: fk.values.deposit_type,
        req_amount: fk.values.req_amount,
        bank_upi_table_id: fk.values.deposit_type,
        receipt_image: receipt,
        utr_no: fk.values.utr_no,
      };
      insertFundFn(reqBody);
    },
  });
  async function insertFundFn(reqBody) {
    setloding(true);
    try {
      const res = await axios.post(endpoint?.payment_deposite, reqBody);
      toast(res?.data?.msg);
      setloding(false);
      if ("Request Successfully Done" === res?.data?.msg) {
        fk.handleReset();
        setReceipt(null);
      }
    } catch (e) {
      console.log(e);
    }
    // client.refetchQueries("wallet_amount");
    // client.refetchQueries("withdrawl_history");
  }
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    handlePlaySound();
  }, []);

  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      console.error("Error during play:", error);
    }
  };

  const walletamountFn = async () => {
    try {
      const response = await axios.get(
        `${endpoint.userwallet}?userid=${user_id}`
      );

      setAmount(response?.data?.data);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  React.useEffect(() => {
    walletamountFn();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReceipt(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const functionTOCopy = (value) => {
    copy(value);
    toast.success("Copied to clipboard!");
  };
  const { data } = useQuery(["qr"], () => getQraddress(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  const res = data?.data?.data || 0;

  const selectedUPIDetails = Array.isArray(res)
    ? res.find((item) => item?.id === fk.values.deposit_type)
    : null;

  const audio = React.useMemo(() => {
    return (
      <audio ref={audioRefMusic} hidden>
        <source src={`${audiovoice}`} type="audio/mp3" />
      </audio>
    );
  }, []);

  const rechargeInstruction = React.useMemo(() => {
    return (
      <Box
        sx={{
          padding: "10px",
          width: "95%",
          margin: "auto",
          mt: "20px",
          background: theme.palette.primary.main,
          borderRadius: "10px",
          mb: 8,
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={user} width={30}></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "15px ", color: "white !important", ml: "10px" }}
          >
            {" "}
            Recharge instructions
          </Typography>
        </Stack>
        <Box
          sx={{
            border: "1px solid white",
            padding: 2,
            borderRadius: "10px",
          }}
        >
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box
              component="img"
              src={dot}
              width={15}
              sx={{ filter: "brightness(0.5)" }}
            ></Box>
            <Typography
              variant="body1"
              sx={{ color: "white !important", fontSize: "12px" }}
            >
              If the transfer time is up, please fill out the deposit form
              again.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box
              component="img"
              src={dot}
              width={15}
              sx={{ filter: "brightness(0.5)" }}
            ></Box>
            <Typography
              variant="body1"
              sx={{ color: "white !important", fontSize: "12px" }}
            >
              The transfer amount must match the order you created, otherwise
              the money cannot be credited successfully.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box
              component="img"
              src={dot}
              width={15}
              sx={{ filter: "brightness(0.5)" }}
            ></Box>
            <Typography
              variant="body1"
              sx={{ color: "white !important", fontSize: "12px" }}
            >
              If you transfer the wrong amount, our company will not be
              responsible for the lost amount!
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box
              component="img"
              src={dot}
              width={15}
              sx={{ filter: "brightness(0.5)" }}
            ></Box>
            <Typography
              variant="body1"
              sx={{ color: "white !important", fontSize: "12px" }}
            >
              Note: do not cancel the deposit order after the money has been
              transferred.
            </Typography>
          </Stack>
        </Box>
      </Box>
    );
  }, []);
  const payment_button2 = React.useMemo(() => {
    return (
      <>
        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={pay} width={30} sx={{}}></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "15px ", color: "white", ml: "10px" }}
          >
            Select amount of USDT
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mt: "10px",
          }}
        >
          <Button
            sx={style.paytmbtn}
            onClick={() => fk.setFieldValue("req_amount", 10)}
          >
            {" "}
            $ 10
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => fk.setFieldValue("req_amount", 50)}
          >
            {" "}
            $ 50
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => fk.setFieldValue("req_amount", 100)}
          >
            {" "}
            $ 100
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => fk.setFieldValue("req_amount", 500)}
          >
            {" "}
            $ 500
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => fk.setFieldValue("req_amount", 1000)}
          >
            {" "}
            $ 1K
          </Button>
          <Button
            sx={style.paytmbtn}
            onClick={() => fk.setFieldValue("req_amount", 5000)}
          >
            $ 5K
          </Button>
        </Stack>
      </>
    );
  }, []);
  return (
    <Layout header={false}>
      {audio}
      <Container
        className="no-scrollbar"
        sx={{
          background: bgdarkgray,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 4,
        }}
      >
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Deposit
          </Typography>
          <Box component={NavLink} to="/depositusdt">
            <HistoryIcon />
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            padding: "15px 15px",
            width: "95%",
            margin: "auto",
            background: "#d9ac4f6e",
            position: "relative",
            backgroundImage: `url(${bg})`,
            backgroundSize: "100% 100%",
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box
              component="img"
              src={balance}
              width={50}
              sx={{
                position: "relative",
                zIndex: 10,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "16px ",
                fontWeight: 500,
                color: "white",
                ml: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {" "}
              Balance
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              mt: "10px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "30px ",
                fontWeight: "600",
                color: "white",
                mr: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {" "}
              ₹{" "}
              {deposit_amount
                ? Number(amount?.cricket_wallet || 0)?.toFixed(2)
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
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%", padding: "10px 0px 0px 0px" }}
          >
            <div class="visa_info">
              <img
                style={{ width: "50px" }}
                src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                alt=""
              />
            </div>
            <div class="visa_logo">
              <Box component={"img"} src={logo1} sx={{ width: "90px" }}></Box>
            </div>
          </Stack>
        </Box>
        <Box className="fccsb w95" mt={2}>
          <Box
            sx={{ width: "48%", background: "#FFFFFF", borderRadius: "5px" }}
            className="fccc"
            onClick={() => navigate("/wallet/Recharge")}
          >
            <Box
              component="img"
              src={upipayment}
              sx={{
                width: "100%",
                height: "55px",
                borderRadius: "10px",
                pt: 1,
                px: 1,
              }}
            ></Box>
            <Typography
              className="fp13 "
              sx={{
                fontWeight: "bolder",
                borderRadius: "0px 0px  5px 5px",
                background: bggrad,
                width: "100%",
                py: 1,
                textAlign: "center",
                fontFamily: "roboto !important",
              }}
              mt={1}
            >
              UPI
            </Typography>
          </Box>
          <Box
            sx={{ width: "48%", background: "#FFFFFF", borderRadius: "5px" }}
            className="fccc"
          >
            <Box
              component="img"
              src={usdt}
              sx={{
                width: "100%",
                height: "55px",
                borderRadius: "10px",
                pt: 1,
                px: 1,
              }}
            ></Box>
            <Typography
              className="fp13 "
              sx={{
                fontWeight: "bolder",
                borderRadius: "0px 0px  5px 5px",
                background: bggrad,
                width: "100%",
                py: 1,
                textAlign: "center",
                fontFamily: "roboto !important",
              }}
              mt={1}
            >
              USDT
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: "20px",
              background: bglightgray,
              borderRadius: "10px",
              mb: 2,
            }}
          >
            {payment_button2}
            <FormControl fullWidth sx={{ my: "10px" }}>
              <Stack direction="row" className="loginlabel">
                <Typography variant="h3" sx={{ color: "white" }}>
                  Select Network
                </Typography>
              </Stack>
              <TextField
                id="deposit_type"
                name="deposit_type"
                value={fk.values.deposit_type}
                onChange={fk.handleChange}
                placeholder="Select UPI"
                className="!w-[100%] !bg-[#D9AC4F] !text-[#8f5206] !mt-5"
                select
                size="small"
              >
                {Array.isArray(res) &&
                  res.map((i) => (
                    <MenuItem
                      className="!text-[#8f5206] "
                      key={i.id}
                      value={i.id}
                    >
                      {i.usdt_type}
                    </MenuItem>
                  ))}
              </TextField>
              {selectedUPIDetails && (
                <div className="col-span-2 !h-full !w-full flex items-center mt-10 flex-col">
                  <div className="w-72">
                    <img src={selectedUPIDetails?.qr_code} alt="" />
                  </div>
                  <div className="pt-4 gap-2">
                    <p className="!bg-white !text-xs font-bold px-1 !text-[#8f5206]">
                      {selectedUPIDetails?.usdt_address}
                    </p>
                    <div className="w-full flex justify-center mt-5">
                      <Button
                        size="small !py-1"
                        className="!bg-[#0ee6ac]  !text-white place-items-center"
                        onClick={() =>
                          functionTOCopy(selectedUPIDetails.m37_value)
                        }
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </FormControl>
            <span className="!text-white !text-lg ">Receipt*</span>
            <input
              type="file"
              id="file"
              name="file"
              className="!text-xl !my-2 !text-[#8f5206]"
              onChange={handleFileChange}
              required
            />
            <span className="text-white text-lg !mt-5">UTR Number</span>
            <TextField
              id="utr_no"
              name="utr_no"
              value={fk.values.utr_no}
              onChange={fk.handleChange}
              placeholder="Enter UTR NO"
              className="!w-[100%] !bg-[#D9AC4F] !text-[#8f5206] !mt-2"
              size="small"
            ></TextField>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mt: "10px",
              }}
            >
              <OutlinedInput
                fullWidth
                placeholder="Enter USDT "
                className="wallet-textfield"
                type="number"
                id="req_amount"
                name="req_amount"
                value={fk.values.req_amount}
                onChange={fk.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <div style={{ display: "flex", alignItems: "right" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          mr: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        USDT
                      </Typography>
                      <IconButton edge="end">
                        <CloseIcon style={{ color: "white" }} />
                      </IconButton>
                    </div>
                  </InputAdornment>
                }
              />
              <OutlinedInput
                fullWidth
                placeholder="Enter Amount "
                className="wallet-textfield   mt-4"
                type="number"
                id="req_amount"
                name="req_amount"
                value={Number(fk.values.req_amount || 0) * 92}
                endAdornment={
                  <InputAdornment position="end">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          mr: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        INR
                      </Typography>
                      <IconButton edge="end">
                        <CloseIcon style={{ color: "white" }} />
                      </IconButton>
                    </div>
                  </InputAdornment>
                }
              />
              <Button sx={style.paytmbtntwo} onClick={fk.handleSubmit}>
                Deposit
              </Button>
            </Stack>
          </Box>
          {rechargeInstruction}
        </Box>
        <CustomCircularProgress isLoading={loding} />
      </Container>
    </Layout>
  );
}

export default DepositeUsdtrecharge;

const style = {
  header: {
    padding: "10px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 3,
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: bgtan,
    },
    "& > a > svg": {
      color: bgtan,
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
    height: "auto",
    background: zubgtext,
    boxShadow: zubgshadow,
    padding: "10px 0px",
    borderRadius: "10px",
    "&>p": {
      color: "white",
      fontSize: "12px",
      fontWeight: "500",
      textAlign: "center",
      mt: "5px",
    },
  },
  paymentBoxOuter: {
    my: "20px",
  },
  paytmbtn: {
    mb: 2,
    background: bggrad,
    color: bgtan,
    width: "31%",
    padding: "10px",
    "&:hover": { background: theme.palette.primary.dark },
  },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: bggrad,
    color: bgtan,
    width: "100%",
    mt: "20px",
    // border: "1px solid white",
    padding: "10px",
    "&:hover": { background: theme.palette.secondary.dark },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": {
      marginLeft: "10px",
      color: zubgtext,
      fontSize: "12px",
    },
  },
};
