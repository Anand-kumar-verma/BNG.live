import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
// import * as uuid from "uuid";
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CryptoJS from 'crypto-js';
import { flexbetween, flexcenterstart, normalinput, passwordinput, selectinput } from "../../../Shared/Commom";
import { storeCookies } from "../../../Shared/CookieStorage";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { LoginMobileSchemaValidaton } from "../../../Shared/Validation";
import { lightblue } from "../../../Shared/color";
import { endpoint } from "../../../services/urls";
import theme from "../../../utils/theme";


function LoginWithMobile() {


  const [CountryCode, setCountryCode] = React.useState('+91');
  const handleChangecr = (event: SelectChangeEvent) => {
    setCountryCode(event.target.value);
  };


  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [showPassword, setShowPassword] = React.useState(false);
  const [loding, setloding] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [ipAddress, setIpAddress] = useState('');
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  useEffect(() => {
    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        setIpAddress(response.data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, []);


  const initialValue = {
    mob: "",
    pass: "",
    isAllowCheckBox: false,
  };


  const fk = useFormik({
    initialValues: initialValue,
    validationSchema: LoginMobileSchemaValidaton,
    onSubmit: () => {
      const reqbody = {
        username: fk.values.mob,
        password: fk.values.pass,
        ipAddress: ipAddress
      };
      loginFunction(reqbody);
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
        // get_user_data(response?.data?.UserID);
        setloding(false);
        storeCookies();
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };


  // const [CountryCode, setCountryCode] = React.useState('+91');


  // const handleChange = (event) => {
  //   setCountryCode(event.target.value);
  // };


  // const get_user_data = async (id) => {
  //   try {
  //     const response = await axios.get(
  //       `${endpoint.get_data_by_user_id}?id=${id}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     );
  //     if (response?.data?.error === "200") {
  //       localStorage.setItem(
  //         "aviator_data",
  //         JSON.stringify(response?.data?.data)
  //       );
  //       sessionStorage.setItem("isAvailableUser", true);
  //     }
  //   } catch (e) {
  //     toast(e?.message);
  //     console.error(e);
  //   }


  // };

  return (
    <Box
      component="form"
      sx={{
        width: "95%",
        marginLeft: "2.5%",
        transition: "0.3s",
      }}
      onSubmit={fk.handleSubmit}
    >
      <Box mt={3} >
        <Box sx={{ ...flexcenterstart, my: 1, }}>
          <PhoneAndroidIcon sx={style.icon} /> <Typography variant="body1" ml={1} sx={{ color: 'white' }}> Phone number</Typography>
        </Box>
        <FormControl fullWidth>
          <Box sx={{ ...flexbetween, }}>
            <Select
              sx={{ ...selectinput }}
              mr={2}
              value={CountryCode}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className="funp13"

            >
              <MenuItem value="+91" selected> + 91</MenuItem>
            </Select>
            <TextField
              id="mob"
              name="mob"
              type="number"
              value={fk.values.mob}
              onChange={fk.handleChange}
              onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
              placeholder='Enter Phone Number'
              sx={{ ...normalinput, width: '80%', }}
              className="funp13"
            />
          </Box>
          {fk.touched.mob && fk.errors.mob ? (
            <div className="error" style={{ textAlign: 'center' }}>{fk.errors.mob}</div>
          ) : (
            String(fk.values.mob)?.includes(".") && (
              <div className="error" style={{ textAlign: 'center' }}>Dot not allowed in mob no</div>
            )
          )}
        </FormControl>
      </Box>
      <Box  >
        <FormControl fullWidth >
          <Box sx={{ ...flexcenterstart, mt: 4, mb: 1, }}>
            <HttpsOutlinedIcon sx={style.icon} /> <Typography variant="body1" ml={1} sx={{ color: 'white' }}> Password</Typography>
          </Box>
          <OutlinedInput
            id="pass"
            className="funp13"
            name="pass"
            value={fk.values.pass}
            onChange={fk.handleChange}
            placeholder="Enter password"
            onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
            sx={{ ...passwordinput, width: '100%', }}
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
                    <VisibilityOff sx={{ color: lightblue, mr: 1 }} />
                  ) : (
                    <Visibility sx={{ color: lightblue, mr: 1 }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      {fk.touched.pass && fk.errors.pass && (
        <div className="error" style={{ textAlign: 'center' }}>{fk.errors.pass}</div>
      )}
      {/* <Box mt={1}>
        <FormControl fullWidth>
          <FormControlLabel
            required
            onClick={() =>
              fk.setFieldValue("isAllowCheckBox", !fk.values.isAllowCheckBox)
            }
            control={
              <Checkbox
                checked={fk.values.isAllowCheckBox}
                sx={{ color: zubgtext }}
              />
            }
            label="Remember password"
            sx={{ color: zubgtext, fontSize: '12px', fontWeight: '500' }}
          />
        </FormControl>
      </Box> */}
      <Stack mt={3}>
        <Box sx={{ width: '100%' }}> <Button className='goldbtn2' onClick={fk.handleSubmit}>Log in</Button></Box>
        <Box sx={{ width: '100%' }}>
          <NavLink to='/register'>
            <Button className='goldborderbtn'>Register</Button>
          </NavLink>
        </Box>
      </Stack >
      <CustomCircularProgress isLoading={loding} />
    </Box>
  );
}

export default LoginWithMobile;


const style = {
  inputfield2: {
    width: '100%', position: 'relative', mb: '10px', filter: 'hue-rotate(100deg)',
    backgroundSize: '100% 100%',
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
  selectinput: {
    width: '18%',
    borderRadius: '10px',
    backgroundColor: '#fff',
    '&>div': {
      border: 'none',
      borderRadius: '10px',
      color: lightblue,
      padding: '10px 0px 10px 5px !important'
    },
    '&>fieldset': {
      border: 'none !important',
      borderRadius: '10px',
      marginLeft: '20px',
    },
  },
}