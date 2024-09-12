import { Lock, SupportAgent } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import CryptoJS from "crypto-js";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import flag from "../../../assets/img/flag.png";
import logo from "../../../assets/img/logo.png";
import Layout from "../../../component/Layout/Layout";
import { bgcolorlight, bgcolorlight2, bggold, bggray, } from "../../../Shared/color";
import { flexbetween, flexcenter, flexcoloumcenter, } from "../../../Shared/Commom";
import theme from "../../../utils/theme";
import LoginWithEmail from "../login/LoginWithEmail";
import LoginWithMobile from "../login/LoginWithMobile";


function Login() {


  const navigate = useNavigate();

  const logindata =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;


  useEffect(() => {
    logindata && navigate("/dashboard");
  }, []);

  const [value, setValue] = React.useState("one");


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <Layout header={false} footer={false}>
      <Box sx={style.authheader}>
        <Container>
          <Box sx={{ ...flexbetween, background: bgcolorlight, px: 1, py: 1 }}>
            <Box component={NavLink} sx={{ width: "20%" }}>
              <ArrowBackIosIcon sx={style.icon1} />
            </Box>
            <Box sx={{ width: "60%" }}>
              <Box component="img" src={logo} sx={style.logocss}></Box>
            </Box>
            <Box component={NavLink} sx={{ width: "20%" }}>
              <Box sx={{ ...flexcenter, float: "right" }}>
                <Box component="img" src={flag} sx={style.flagcss}></Box>
                <Typography variant="body1" ml={1} sx={{ color: "white" }}>
                  EN
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: 1, background: bgcolorlight2 }}>
            <Typography
              sx={{ color: "white", mb: 1 }}
              variant="h6"
              className="funp15"
            >
              {" "}
              Log in{" "}
            </Typography>
            <Typography sx={{ color: "white", mb: "2px" }} className="funp11">
              Please log in with your phone number or email
            </Typography>
            <Typography sx={{ color: "white" }} className="funp11" mb={2}>
              If you forget your password, please contact customer service
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
          }}
        >
          <Box sx={style.authform} component="form">
            <Box sx={{ width: "100%", py: 1 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                <Tab
                  value="one"
                  sx={{ width: "50% !important" }}
                  label={
                    <Box sx={{ ...flexcoloumcenter, ...style.tabs }}>
                      <PhoneAndroidIcon
                        sx={{ color: value === "one" ? bggold : bggray }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: value === "one" ? bggold : bggray }}
                        className="funp15"
                      >
                        Log in with phone
                      </Typography>
                    </Box>
                  }
                />

                <Tab
                  value="two"
                  sx={{ width: "50% !important" }}
                  label={
                    <Box sx={{ ...flexcoloumcenter, ...style.tabs }}>
                      <MarkEmailReadIcon
                        sx={{ color: value === "two" ? bggold : bggray }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: value === "two" ? bggold : bggray }}
                        className="funp15"
                      >
                        Log in with email
                      </Typography>
                    </Box>
                  }
                />
              </Tabs>
            </Box>
            {value == "one" && <LoginWithMobile />}
            {value == "two" && <LoginWithEmail />}
          </Box>
        </Box>
        <Stack direction='row' justifyContent={'space-between'} mt={3}>
          <Box
            sx={{ ...flexcoloumcenter, width: "80%", margin: "auto", mt: 3 }}
            component={NavLink}
            to="/CustomerService"
          >
            <Lock sx={{ fontSize: "40px", margin: "auto", textAlign: "center", color: theme.palette.primary.main }} />
            <Typography
              variant="body1"
              color="white"
              sx={{ textAlign: "center", mt: 1 }}
              className="funp13"
            >
              Forgot password
            </Typography>
          </Box>
          <Box
            sx={{ ...flexcoloumcenter, width: "80%", margin: "auto", mt: 3 }}
            component={NavLink}
            to="/CustomerService"
          >
            <SupportAgent sx={{ fontSize: "40px", margin: "auto", textAlign: "center", color: theme.palette.primary.main }} />
            <Typography
              variant="body1"
              color="white"
              sx={{ textAlign: "center", mt: 1 }}
              className="funp13"
            >
              Customer Service
            </Typography>
          </Box>
        </Stack>

      </Container>
    </Layout>
  );
}

export default Login;

const style = {
  authheader: { background: bggray },
  logocss: { width: "150px !important", margin: 'auto' },
  flagcss: { width: "30px" },
  icon: { color: bggold },
  icon1: { fontSize: "18px", color: "white" },
  icon2: { color: bggold, mr: 1 },

  authform: { width: "100%" },
  tabs: { width: "100%", "&>p": { textTransform: "none" } },
  checkbox: {
    mt: 1,
    "&>span>svg": { color: bggold },
  },
  loginfooter: { width: "70%", margin: "auto", mt: 5 },
  footericon: { color: bggold, fontSize: "30px", mb: 1 },
  flexbetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between;",
  },
  flexcenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flexcoloumcenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};
