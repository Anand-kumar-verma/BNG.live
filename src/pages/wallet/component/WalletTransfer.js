import { Visibility, VisibilityOff } from '@mui/icons-material';
import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
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
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import {
  zubgbackgrad,
  zubgmid,
  zubgshadow,
  zubgtext
} from "../../../Shared/color";
import audiovoice from "../../../assets/bankvoice.mp3";
import Layout from "../../../component/Layout/Layout";
import { get_user_data_fn } from "../../../services/apicalling";
import { endpoint } from "../../../services/urls";
import theme from "../../../utils/theme";

function WalletTransfer() {
  const dispatch = useDispatch();
  const aviator_login_data = useSelector(
    (state) => state.aviator.aviator_login_data
  );
  const [showoldPassword, setShowoldPassword] = React.useState(false);
  const handleClickShowoldPassword = () => setShowoldPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    working_wallet: 0,
  });

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    handlePlaySound();

  }, []);

  React.useEffect(() => {
    !aviator_login_data && get_user_data_fn(dispatch);
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

  const initialValues = {
    amount: amount || 0,
    password: "",
  };

  const fk = useFormik({
    initialValues: initialValues,
    onSubmit: () => {

      const reqbody = {
        userid: user_id,
        amount: fk.values.amount,
        password: fk.values.password,
      }
      walletTransfer(reqbody)
    },
  });
  async function walletTransfer(reqbody, amnt) {
    try {
      setloding(true)
      const res = await axios.post(`${endpoint.tranfer_wallet}`, reqbody);
      toast(res?.data?.msg)
      if (res?.data?.msg === "Transaction successfully completed.")
        navigate("/account")
      setloding(false);
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }
  const audio = React.useMemo(() => {
    return (
      <audio ref={audioRefMusic} hidden>
        <source src={`${audiovoice}`} type="audio/mp3" />
      </audio>
    );
  }, []);

  return (
    <Layout header={false}>
      {audio}
      <Container
        className="no-scrollbar"
        sx={{
          background: theme.palette.secondary.main,
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
            Main  Wallet  Transfer
          </Typography>
          <Box component={NavLink} to="/depositHistory">
            <HistoryIcon />
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: "20px",
              background: theme.palette.secondary.light,
              // boxShadow: zubgshadow,
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mt: "10px",
              }}
            >
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Enter amount <span className="!text-red-600">*</span>
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
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                />

              </FormControl>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Password <span className="!text-red-600">*</span>
                  </Typography>
                </Stack>
                <OutlinedInput
                  id="password"
                  name="password"
                  className="withdrawalfield2"
                  value={fk.values.password}
                  onChange={fk.handleChange}
                  placeholder="Enter password"
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  sx={{ width: '100%', background: 'white', borderRadius: '5px', color: 'black', py: 0, '&>input': { padding: '10px' }, }}
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
                          <VisibilityOff sx={{ color: zubgtext, fontSize: "25px !important" }} />
                        ) : (
                          <Visibility sx={{ color: zubgtext, fontSize: "25px !important" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />

              </FormControl>
              <Button sx={style.paytmbtntwo} onClick={fk.handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Box>

        </Box>


        <CustomCircularProgress isLoading={loding} />
      </Container>
    </Layout>
  );
}

export default WalletTransfer;

const style = {
  header: {
    padding: "15px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 3,
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
    background: zubgtext,
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
    background: theme.palette.primary.main,
    color: "white !important",
    width: "100%",
    mt: "20px",
    // border: "1px solid white",
    padding: "10px",
    "&:hover": { background: theme.palette.primary.light, },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": {
      marginLeft: "10px",
      color: zubgtext,
      fontSize: "14px",
    },
  },
};
