import { ArrowBackIosNew } from '@mui/icons-material';
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailReadOutlined";
import Person4Icon from '@mui/icons-material/Person4';
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { flexbetween, flexcenter, flexcenterstart, normalinput, passwordinput } from '../../../Shared/Commom';
import { storeCookies } from "../../../Shared/CookieStorage";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { signupSchemaValidataon } from "../../../Shared/Validation";
import { bgcolorlight, bgcolorlight2, bggold, bggray } from "../../../Shared/color";
import flag from "../../../assets/img/flag.png";
import logo from "../../../assets/img/logo.png";
import Layout from '../../../component/Layout/Layout';
import { CandidateNameFn } from "../../../services/apicalling";
import { endpoint } from "../../../services/urls";
import theme from '../../../utils/theme';


function Register() {
  const url = new URL(window.location.href);
  const [refParam, setrefParam] = useState(url.searchParams.get("ref") || "");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [show_confirm_password, set_show_confirm_password] =
    React.useState(false);
  const [loding, setloding] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handle_confirm_ClickShowPassword = () =>
    set_show_confirm_password(!show_confirm_password);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // useEffect(() => {
  //   const value =
  //     url.searchParams.get("ref") &&
  //     crypto.AES.decrypt(
  //       url.searchParams.get("ref")?.split(" ")?.join("+"),
  //       "anand"
  //     )?.toString(crypto.enc.Utf8);
  //   setrefParam(value);
  // }, [url.searchParams.get("ref")]);

  const initialValue = {
    email: "",
    mobile: "",
    name: "",
    password: "",
    confirmed_password: "",
    // referral_code: refParam?.substring(1, refParam.length - 1) || "",
    referral_code: refParam,
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    validationSchema: signupSchemaValidataon,
    onSubmit: () => {
      if (fk.values.password !== fk.values.confirmed_password)
        return toast("Password and confirm password should be same.");
      if (!fk.values.privacy_policy)
        return toast("Please confirm the privacy policy.");
      const reqbody = {
        email: fk.values.email,
        mobile: String(fk.values.mobile) || "",
        password: fk.values.password,
        confirmed_password: fk.values.confirmed_password,
        referral_code: fk.values.referral_code,
        name: fk.values.name,
        privacy_policy: false,
      };

      signupFunction(reqbody);
    },
  });

  const signupFunction = async (reqbody) => {
    // setloding(true);
    const fd = new FormData();
    fd.append("email", reqbody.email);
    fd.append("mobile", reqbody.mobile);
    fd.append("name", reqbody.name);
    fd.append("password", reqbody.password);
    fd.append("confirmed_password", reqbody.confirmed_password);
    fd.append("referral_code", reqbody.referral_code);

    try {
      const response = await axios.post(endpoint.signup, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          // Add any other headers you may need, such as authorization
        },
      });
      if (response?.data?.status === "200") {
        const value = CryptoJS.AES.encrypt(
          JSON.stringify(response?.data),
          "anand"
        ).toString();
        localStorage.setItem("logindataen", value);
        sessionStorage.setItem("isAvailableUser", true);
        sessionStorage.setItem("isAvailableCricketUser", true);
        storeCookies();
        swal({
          title: "Registration Successfully",
          text: ` 
          Email : ${fk?.values?.email}
          Mobile : ${fk?.values?.mobile}
          Password : ${fk?.values?.password} `,
          // title: response?.data?.msg,
          icon: "success",
          button: "OK",
        }).then(() => {
          navigate("/dashboard");
          document.location.reload();
        });
      } else {
        swal({
          title: "Registration Failed",
          text: response?.data?.msg,
          icon: "error",
          button: "OK",
        });
        setloding(false);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const { isLoading, data } = useQuery(
    ["getname", fk.values.referral_code],
    () => CandidateNameFn({ reffral_id: fk.values.referral_code }),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const [CountryCode, setCountryCode] = React.useState("+91");

  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };

  const result = data?.data?.data;

  return (
    <Layout header={false} footer={false}>
      <Box sx={style.authheader}>
        <Container>
          <Box sx={{ ...flexbetween, background: bgcolorlight, px: 1, py: 1 }}>
            <Box component={NavLink} sx={{ width: "20%" }}>
              <ArrowBackIosNew sx={style.icon1} />
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
          <Box sx={{ padding: 1, background: bgcolorlight2, pt: 2 }}>
            <Typography
              sx={{ color: "white", mb: 1 }}
              variant="h6"
              className="funp15"
            >
              {" "}
              Register{" "}
            </Typography>
            <Typography sx={{ color: "white" }} className="funp11" mb={2}>
              Please register by phone number or email
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container >
        <Box sx={style.authform} component="form">
          <Box sx={{ ...style.flexcoloumcenter, ...style.registerheader }}>
            <PhoneAndroidIcon sx={{ color: theme.palette.primary.main }} />
            <Typography variant="body1" sx={{ color: 'white' }}>
              Register your account
            </Typography>
          </Box>
        </Box>
        <Box
          component="form"
          sx={{
            width: "90%",
            marginLeft: "5%",
            pb: 5,
            transition: "0.3s",
          }}
          onSubmit={fk.handleSubmit}
        >
          <Box mt={0}>
            <FormControl fullWidth>
              <Box sx={{ ...flexcenterstart, my: 1, }}>
                <Person4Icon sx={style.icons} /> <Typography variant="body1" ml={1} sx={{ color: 'white' }}> Name</Typography>
              </Box>
              <TextField
                className="funp13"

                id="name"
                placeholder="Enter Name"
                sx={{ ...normalinput, width: '100%', }}
                name="name"
                type="text"
                value={fk.values.name}
                onChange={fk.handleChange}
                onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
              />
              {fk.touched.name && fk.errors.name && (
                <div className="error">{fk.errors.name}</div>
              )}
            </FormControl>
          </Box>

          <FormControl fullWidth>
            <Box sx={{ ...flexcenterstart, my: 1, }}>
              <PhoneAndroidIcon sx={style.icon} />{" "}
              <Typography variant="body1" ml={1} sx={{ color: "white" }}>
                {" "}
                Phone number
              </Typography>
            </Box>
            <Box sx={{ ...style.flexbetween }}>
              <TextField
                className="funp13"
                sx={{ ...normalinput, width: '100%', }}
                ml={2}
                id="mob"
                name="mobile"
                type="number"
                value={fk.values.mobile}
                onChange={fk.handleChange}
                onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                placeholder="Enter Phone Number"
              />
            </Box>
            {fk.touched.mobile && fk.errors.mobile && (
              <div className="error">{fk.errors.mobile}</div>
            )}
          </FormControl>

          <Box>
            <FormControl fullWidth>
              <Box sx={{ ...flexcenterstart, my: 1, }}>
                <MarkEmailReadIcon sx={style.icon} />{" "}
                <Typography variant="body1" ml={1} sx={{ color: "white" }}>
                  E-mail
                </Typography>
              </Box>
              <TextField
                className="funp13"
                id="fullWidth"
                type="email"
                placeholder="Enter email"
                sx={{ ...normalinput, width: '100%', }}
                name="email"
                value={fk.values.email}
                onChange={fk.handleChange}
                onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
              />
              {fk.touched.email && fk.errors.email && (
                <div className="error">{fk.errors.email}</div>
              )}
            </FormControl>
          </Box>
          <Box mt={2}>
            <FormControl fullWidth>
              <Box sx={{ ...flexcenterstart, my: 1, }}>
                <PhonelinkLockIcon sx={style.icon} />{" "}
                <Typography variant="body1" ml={1} sx={{ color: "white" }}>
                  Set password
                </Typography>
              </Box>
              <OutlinedInput
                className="funp13"
                placeholder="Enter password"
                name="password"
                sx={{ ...passwordinput, width: '100%', }}
                value={fk.values.password}
                onChange={fk.handleChange}
                onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ color: theme.palette.primary.main, mr: 1 }} />
                      ) : (
                        <Visibility sx={{ color: theme.palette.primary.main, mr: 1 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {fk.touched.password && fk.errors.password && (
                <div className="error">{fk.errors.password}</div>
              )}
            </FormControl>
          </Box>
          <Box mt={2}>
            <FormControl fullWidth>
              <Box sx={{ ...flexcenterstart, my: 1, }}>
                <PhonelinkLockIcon sx={style.icon} />{" "}
                <Typography variant="body1" ml={1} sx={{ color: "white" }}>
                  Confirm password
                </Typography>
              </Box>
              <OutlinedInput
                className="funp13"
                sx={{ ...passwordinput, width: '100%', }}
                name="confirmed_password"
                id="confirmed_password"
                value={fk.values.confirmed_password}
                onChange={fk.handleChange}
                onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                placeholder="Enter confirm password"
                type={show_confirm_password ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handle_confirm_ClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {show_confirm_password ? (
                        <VisibilityOff sx={{ color: theme.palette.primary.main, mr: 1 }} />
                      ) : (
                        <Visibility sx={{ color: theme.palette.primary.main, mr: 1 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {fk.touched.confirmed_password && fk.errors.confirmed_password && (
                <div className="error">{fk.errors.confirmed_password}</div>
              )}
            </FormControl>
          </Box>
          <Box mt={2}>
            <FormControl fullWidth>
              <Box sx={{ ...flexcenterstart, my: 1, }}>
                <ReceiptIcon sx={style.icon} />{" "}
                <Typography variant="body1" ml={1} sx={{ color: "white" }}>
                  Referral Code
                </Typography>
              </Box>
              <TextField
                className="funp13"
                id="referral_code"
                placeholder="Enter Referral Code"
                sx={{ ...normalinput, width: '100%', }}
                name="referral_code"
                value={fk.values.referral_code}
                onChange={fk.handleChange}
                onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
              />
              {fk.touched.referral_code && fk.errors.referral_code ? (
                <div className="error">{fk.errors.referral_code}</div>
              ) : fk.values.referral_code ? (
                result ? (
                  <div className="no-error">Referral From: {result}</div>
                ) : (
                  <div className="error">Invalid Referral Id</div>
                )
              ) : null}

            </FormControl>
          </Box>
          <Box mt={1}>
            <FormControl fullWidth>
              <FormControlLabel
                required
                control={
                  <Checkbox
                    checked={fk.values.privacy_policy}
                    sx={{ color: 'white !important', fontSize: "12px", fontWeight: "500", '&>label>div>span': { color: 'white !important' } }}
                    onClick={() =>
                      fk.setFieldValue(
                        "privacy_policy",
                        !fk.values.privacy_policy
                      )
                    }
                  />
                }
                label={
                  <span style={{ color: 'white', fontSize: "12px", }}>
                    I have read and agree to the{' '}
                    <a
                      rel="noopener noreferrer"
                      style={{ color: 'white', textDecoration: 'underline' }}
                    >
                      Privacy Agreement
                    </a>
                  </span>
                }
              />
            </FormControl>
          </Box>
          <Stack mt={3}>
            <Box sx={{ width: '100%' }}> <Button className='goldbtn' onClick={fk.handleSubmit}>Register</Button></Box>
            <Box sx={{ width: '100%' }}>
              <NavLink to='/'>
                <Button className='goldborderbtn'>Back to Login</Button>
              </NavLink>
            </Box>
          </Stack >

        </Box>
        <CustomCircularProgress isLoading={loding} />
      </Container>
    </Layout>
  );
}

export default Register;

const style = {
  authheader: { background: bggray },
  logocss: { width: "150px", margin: 'auto', },
  flagcss: { width: "30px" },
  icon: { color: bggold },
  icon1: { fontSize: "18px", color: "white" },
  icon2: { color: bggold, mr: 1 },

  authform: { width: "100%", padding: 2 },
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
  icons: { color: bggold },
  icon2: { color: bggold, mr: 1 },
};