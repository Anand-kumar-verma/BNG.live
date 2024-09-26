import { Visibility, VisibilityOff } from "@mui/icons-material";
import CachedIcon from "@mui/icons-material/Cached";
import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
  Dialog,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
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
import { withdraw_amount_validation_schema } from "../../Shared/Validation";
import {
  bggrad,
  bglightgray,
  zubgback,
  zubgbackgrad,
  zubgmid,
  zubgtext,
} from "../../Shared/color";
import cip from "../../assets/images/cash2.png";
import logo1 from "../../assets/images/logotwhite.png";
import balance from "../../assets/images/send.png";
import payment from "../../assets/images/wallet.png";
import audiovoice from "../../assets/images/withdrawol_voice.mp3";
import bg from "../../assets/img/download.png";
// import usdt from "../../assets/payNameIcon1.png";
import BEP20 from "../../assets/images/bep20.jpg";
import Layout from "../../component/Layout/Layout";
import { BankListDetails, NeedToBet } from "../../services/apicalling";
import { endpoint, rupees } from "../../services/urls";
import theme from "../../utils/theme";

function Withdrawl() {
  const location = useLocation();
  const [showoldPassword, setShowoldPassword] = React.useState(false);
  const handleClickShowoldPassword = () => setShowoldPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  React.useEffect(() => {
    walletamountFn();
  }, []);

  const { isLoading: loding, data: need_to_bet } = useQuery(
    ["need_to_bet"],
    () => NeedToBet(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const { isLoading, data } = useQuery(
    ["bank_list_details"],
    () => BankListDetails(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const result = React.useMemo(() => data?.data?.data, [data]);

  
  const initialValues = {
    amount: "",
    password: "",
    bank_id: "",
  };

  const fk = useFormik({
    initialValues: initialValues,
    validationSchema: withdraw_amount_validation_schema,
    onSubmit: () => {
      // if (type) {
      //   if (Number(amount?.cricket_wallet || 0) < Number(fk.values.amount || 0))
      //     return toast("Your Wallet Amount is low");
      // } else {
      //   if (amount?.winning < fk.values.amount)
      //     return toast("Your winning amount is low.");
      // }
      if (Number(fk.values.amount) < 500 && Number(fk.values.amount) > 50000)
        return toast("Amount shoulb be minimum 500 and maximum 50,000");

      const data = result?.[0];

      if (!data) return toast("Bank Not Added.");

      const fd = new FormData();

      fd.append("type", type ? 2 : 1);
      fd.append("Bankid", data?.id);
      fd.append("TransactionID", `${Date.now()}${user_id}`);
      fd.append("Description", fk.values.description);
      fd.append("Amount", fk.values.amount);
      fd.append("Mobile", data?.mobile);
      fd.append("user_id", user_id);
      fd.append("password", fk.values.password);

      withdraw_payment_Function(fd);
    },
  });

  const withdraw_payment_Function = async (fd) => {
    setloding(true);
    try {
      const response = await axios.post(`${endpoint.withdraw_payment}`, fd);

      if (response?.data?.msg === "Successfully Data Found") {
        walletamountFn();
        fk.handleReset();
        setOpenDialogBox(true);
      } else {
        if (response?.data?.msg === "") {
          toast(
            <div>
              {response?.data?.msg} First, you have to place a bet of
              <span className="!text-lg !text-[#FBA343] !font-bold">
                {rupees}
                {response?.data?.remaining_bet && response?.data?.remaining_bet}
              </span>
              rupees before you can withdraw
            </div>
          );
        } else {
          toast(response?.data?.msg);
        }
      }
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setloding(false);
  };

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
          <Box component={NavLink} to="/withdravalHistory">
            <HistoryIcon />
          </Box>
        </Box>
        <Box
          sx={{
            mt: `16px !important`,
            borderRadius: "10px",
            padding: "15px 20px",
            width: "95%",
            margin: "auto",
            position: "relative",
            background: "#d9ac4f87",
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
              <Box component={"img"} src={logo1} sx={{ width: "90px" }}></Box>
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Box className="fccsb w95" mt={2}>
            <Box
              sx={{ width: "48%", background: "#FFFFFF", borderRadius: "5px" }}
              className="fccc"
              component={NavLink}
              onClick={() => navigate("/Withdrawal")}
            >
              <Box
                component="img"
                src={cip}
                sx={{
                  width: "120px",
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
                Bank Card
              </Typography>
            </Box>
            <Box
              sx={{ width: "48%", background: "#1B0E1F", borderRadius: "5px" }}
              className="fccc"
              onClick={() => navigate("/Withdrawalusdt")}
            >
              <Box
                component="img"
                src={BEP20}
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
                USDT BEP 20
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: 2,
              background: bglightgray,
              borderRadius: "10px",
            }}
          >
         {result?.length === 0 ? (
      <div className="my-2 mb-4">
        <p
          style={{ color: theme.palette.primary.main }}
          className="!text-center !p-4 cursor-pointer border border-dashed border-gray-400"
          onClick={() => navigate("/add-bank-details")}
        >
          + Add Bank
        </p>
      </div>
    ) : 
     <>
     <p className="text-white "><span className="!text-black !font-bold">Account No : </span> {result?.[0]?.account}</p>
     <p className="text-white "><span className="!text-black !font-bold">IFSC Code  : </span> {result?.[0]?.ifsc}</p>

     </>
    }
    
            <Stack direction="row" sx={{ alignItems: "end", mb: "20px" }}>
              <Box component="img" src={payment} width={30}></Box>
              <Typography
                variant="body1"
                sx={{ fontSize: "15px ", color: "white", ml: "10px", pt: 3 }}
              >
                Withdrawal amount
              </Typography>
            </Stack>
            <Box mt={2}>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: "white" }}>
                    Enter amount <span className="!text-white-600">*</span>
                  </Typography>
                </Stack>
                <TextField
                  id="amount"
                  name="amount"
                  type="number"
                  value={fk.values.amount}
                  onChange={fk.handleChange}
                  placeholder="Enter amount *"
                  className="withdrawalfield2"
                />
                {fk.touched.amount && fk.errors.amount && (
                  <div className="error">{fk.errors.amount}</div>
                )}
              </FormControl>

              <Box mt={3}>
                <FormControl fullWidth>
                  <Stack direction="row" className="loginlabel">
                    <Typography variant="h3" sx={{ color: "white" }}>
                      Password <span className="!text-white-600">*</span>
                    </Typography>
                  </Stack>
                  <OutlinedInput
                    className="abcd"
                    id="password"
                    name="password"
                    value={fk.values.password}
                    onChange={fk.handleChange}
                    placeholder="Enter password"
                    sx={{
                      width: "100%",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                    }}
                    type={showoldPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowoldPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showoldPassword ? (
                            <VisibilityOff
                              sx={{
                                color: "black",
                                fontSize: "25px !important",
                              }}
                            />
                          ) : (
                            <Visibility
                              sx={{
                                color: "black",
                                fontSize: "25px !important",
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {fk.touched.password && fk.errors.password && (
                  <div className="error">{fk.errors.password}</div>
                )}
              </Box>
              <Button
                sx={style.paytmbtntwo}
                onClick={(e) => {
                  fk.handleSubmit();
                }}
              >
                Withdrawal{" "}
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: 2,
              background: bglightgray,
              borderRadius: "10px",
              mb: 9,
            }}
          >
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
                * Need to play Amount{" "}
                <span className="!text-green-500">
                  {rupees}{" "}
                  {need_to_bet?.data?.data <= 0 ? 0 : need_to_bet?.data?.data}
                </span>{" "}
                for withdrawl from winning wallet.
              </Typography>

              {/* <Typography
                variant="body1"
                sx={{ color: "white" }}
                className="!text-xs"
              >
                * Maximum Amount{" "}
                <span className="!text-green-500">
                  {rupees} {Number(amount?.working_wallet) || 0}
                </span>{" "}
                can be withdrawl from wallet.
              </Typography> */}
            </Stack>
            <Typography
              variant="body1"
              sx={{ color: "white" }}
              className="!text-xs !my-4"
            >
              * Need to play Amount{" "}
              <span className="!text-yellow-500">
                {rupees}{" "}
                {need_to_bet?.data?.data <= 0 ? 0 : need_to_bet?.data?.data}
              </span>{" "}
              for withdrawl from wallet.
            </Typography>

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
                * Withdraw time{" "}
              </Typography>
              <Typography
                className=" !text-xs"
                variant="body1"
                sx={{
                  mx: 0.5,
                  color: theme.palette.primary.main,
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
                  mx: 0.5,
                  color: theme.palette.primary.main,
                }}
              >
                ₹ 500.00 - ₹ 50000.00 .{" "}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" mt={1}>
              <Typography
                variant="body1"
                className="!text-xs"
                sx={{ color: "white" }}
              >
                * Please confirm your beneficial account information before
                withdrawing.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" mt={1}>
              <Typography
                variant="body1"
                className="!text-xs"
                sx={{ color: "white" }}
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
                className="!text-xs"
                sx={{ color: "white" }}
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
              <span className="!text-lg">
                Your withdrawl amount will be add in your bank account within 24
                Hrs.
              </span>
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

export default Withdrawl;

const style = {
  header: {
    padding: "15px 8px",
    background: theme.palette.primary.main,
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
    color: "white !important",
    width: "100%",
    mt: "20px",
    padding: "10px",
    "&:hover": {
      background: theme.palette.secondary.light,
      border: "1px solid transparent",
    },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};
