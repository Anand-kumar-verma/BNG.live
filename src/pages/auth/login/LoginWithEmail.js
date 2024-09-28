import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormControl,
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
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { endpoint } from "../../../services/urls";
import { flexbetween, flexcenterstart, normalinput, passwordinput } from '../../../Shared/Commom';
import { storeCookies } from "../../../Shared/CookieStorage";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { LoginEmailSchemaValidaton } from "../../../Shared/Validation";
import theme from '../../../utils/theme';


function LoginWithEmail() {
  const [loding, setloding] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    // Using a free IP API service
    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        setIpAddress(response.data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, []);


  const initialValue = {
    email: "",
    pass: "",
    isAllowCheckBox: false,
  };
  const fk = useFormik({
    initialValues: initialValue,
    validationSchema: LoginEmailSchemaValidaton,
    onSubmit: () => {
      if (fk.values.pass && (fk.values.mob || fk.values.email)) {
        const reqbody = {
          username: fk.values.email || fk.values.mob,
          password: fk.values.pass,
          ipAddress: ipAddress
        };
        console.log(reqbody);
        loginFunction(reqbody);
      } else return toast("Please fill all details");
    },
  });

  const loginFunction = async (reqbody) => {
    setloding(true);
    try {
      const response = await axios.post(endpoint.login, reqbody, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      toast.success(response?.data?.msg, {
        id: 1
      });
      if (response?.data?.msg === "Login Successfully") {
        const value = CryptoJS.AES.encrypt(JSON.stringify(response?.data), "anand")?.toString();
        localStorage.setItem("logindataen", value);
        sessionStorage.setItem("isAvailableUser", true);
        sessionStorage.setItem("isAvailableCricketUser", true);
        setloding(false);
        storeCookies();
        navigate("/before-login");
        window.location.reload();
      }
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };

  useEffect(() => {
    try {
      const res = axios.get(
        "https://vpayout.com/Upi_controllercallback/check_transaction_status"
      );
      console.log(res, "response of new API");
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Box
      // component="form"
      sx={{
        width: "95%",
        marginLeft: "2.5%",
        transition: "0.3s",
      }}
      onSubmit={fk.handleSubmit}
    >
      <Box mt={3} >
        <Box sx={{ ...flexcenterstart, my: 1, }}>
          <MarkEmailReadOutlinedIcon sx={style.icon} /> <Typography variant="body1" ml={1} sx={{ color: 'white' }}>Email / Account Log in</Typography>
        </Box>
        <Box sx={{ ...flexbetween, }}>

          <TextField
            placeholder='please input your email'
            id="email"
            type="email"
            name="email"
            value={fk.values.email}
            onChange={fk.handleChange}
            onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
            sx={{ ...normalinput, width: '100%', }}
          />
        </Box>

      </Box>
      {fk.touched.email && fk.errors.email && (
        <div className="error" style={{ textAlign: 'center' }}>{fk.errors.email}</div>
      )}
      <Box mt={4} mb={3}>
        <FormControl fullWidth >
          <Box sx={{ ...flexcenterstart, mb: 1, }}>
            <HttpsOutlinedIcon sx={style.icon} /> <Typography variant="body1" ml={1} sx={{ color: 'white' }}> Password</Typography>
          </Box>
          <OutlinedInput
            id="pass"
            name="pass"
            value={fk.values.pass}
            onChange={fk.handleChange}
            placeholder="Enter password"
            onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
            type={showPassword ? "text" : "password"}
            sx={{ ...passwordinput, width: '100%', }}
            className="funp13"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"

                >
                  {showPassword ? <VisibilityOff sx={{ color: '#fff2f2', mr: 1 }} /> : <Visibility sx={{ color: '#fff2f2', mr: 1 }} />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {fk.touched.pass && fk.errors.pass && (
          <div className="error" style={{ textAlign: 'center' }}>{fk.errors.pass}</div>
        )}
      </Box>

      <Stack mt={3}>
        <Box sx={{ width: '100%' }}> <Button className='goldbtn' onClick={fk.handleSubmit}>Log in</Button></Box>
        <Box sx={{ width: '100%' }}>
          <NavLink to='/register'>
            <Button className='goldborderbtn'>Register</Button>
          </NavLink>
        </Box>
      </Stack >
      <CustomCircularProgress isLoading={loding} />
    </Box >
  );
}

export default LoginWithEmail;

const style = {
  inputfield2: {
    width: '100%', position: 'relative', mb: '10px', filter: 'hue-rotate(100deg)',
    '&>div': { padding: '12px', border: 'none' },
    '&>div>div>input': { width: '80%', color: 'white', padding: '20px 10px', paddingLeft: '24%', },
    '&>div>div>input::placeholder': { color: 'white' },
    '&>div>div>fieldset': { border: 'none' },
    '&>div>div>button>svg': { mr: '20px' },
    '@media (min-width: 320px)': {
      '&>div': { padding: '5px', },
    },
    '@media (min-width: 360px)': {
      '&>div': { padding: '8px', },
    },
    '@media (min-width: 400px)': {
      '&>div': { padding: '12px', },
    },
    '@media (min-width: 425px)': {
      '&>div': { padding: '15px', },
    },
  },
  passwordfield2: {
    width: '100%', position: 'relative', mb: '10px', filter: 'hue-rotate(100deg)',
    '&>div': { padding: '12px', background: '#ff000000' },
    '&>div>input': { color: 'white', padding: '20px', paddingLeft: '24%' },
    '&>div>div>button>svg': { mr: '20px' },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '@media (min-width: 320px)': {
      '&>div': { padding: '5px', },
    },
    '@media (min-width: 360px)': {
      '&>div': { padding: '8px', },
    },
    '@media (min-width: 400px)': {
      '&>div': { padding: '12px', },
    },
    '@media (min-width: 425px)': {
      '&>div': { padding: '15px', },
    },
  },
  inputimg2: {
    position: 'absolute',
    zIndex: 10,
    width: '30px',
    top: '30%',
    left: '7%',
    fontSize: '35px',
    color: '#bb00006b',
    '@media (min-width: 320px)': {
      left: '6%',
    },
    '@media (min-width: 360px)': {
      left: '7%',
    },
    '@media (min-width: 425px)': {
      left: '7.5%',
      top: '31.5%',
    },
  },
  flexcenterstart: {
    display: 'flex',
    alignItems: 'center',
  },
  flexbetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between;',
  },
  icon: { color: theme.palette.primary.main },
}