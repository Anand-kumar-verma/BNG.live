import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Button, Container, FormControl, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { bggrad, bgtan, zubgback, zubgbackgrad, zubgmid, zubgtext } from '../../../Shared/color';
import Layout from '../../../component/Layout/Layout';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CryptoJS from "crypto-js";
import toast from 'react-hot-toast';
import axios from 'axios';
import { endpoint } from '../../../services/urls';
import { useFormik } from 'formik';
import CustomCircularProgress from '../../../Shared/CustomCircularProgress';
import { MyProfileDataFn } from '../../../services/apicalling';
import { useQuery } from 'react-query';

function LoginPassword() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const [showoldPassword, setShowoldPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [show_confirm_password, set_show_confirm_password] =
    React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowoldPassword = () => setShowoldPassword((show) => !show);
  const handle_confirm_ClickShowPassword = () =>
    set_show_confirm_password(!show_confirm_password);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { data: profile } = useQuery(
    ["myprofile"],
    () => MyProfileDataFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const result = profile?.data?.data || [];

  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;

  const user_id = login_data && JSON.parse(login_data)?.UserID;

  const initialValue = {
    userid: "",
    old_pass: "",
    new_pass: "",
    confirm_new_pass: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      if (!fk.values.old_pass || !fk.values.new_pass || !fk.values.confirm_new_pass) {
        toast.error("Please enter all fields");
        return;
      }
      if (fk.values.old_pass !== result?.password) {
        toast.error("Old password is incorrect");
        return;
      }
      if (fk.values.old_pass === fk.values.new_pass) {
        toast.error("New password must be different from old password");
        return;
      }
      if (fk.values.new_pass !== fk.values.confirm_new_pass) {
        toast.error("New password and confirm password do not match");
        return;
      }
      const reqbody = {
        userid: user_id,
        old_pass: fk.values.old_pass,
        new_pass: fk.values.new_pass,
        confirm_new_pass: fk.values.confirm_new_pass,
      };
      changePassword(reqbody);
    },
  });

  const changePassword = async (reqbody) => {
    setLoading(true);

    try {
      const response = await axios.post(endpoint.change_password, reqbody, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      toast.success(response?.data?.msg);
      navigate("/account");
    } catch (error) {
      toast.error(error?.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Container sx={style.container}>
        <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgback, borderRadius: '10px', padding: '10px', mt: 7, }}>
          <Box mt={2} component='form'
            onSubmit={fk.handleSubmit}>
            <Box mt={2}>

              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>Old password</Typography>
                </Stack>

                <TextField
                  sx={{
                    background: 'white',
                    borderRadius: '5px'
                  }}
                  placeholder="Enter password"
                  name="old_pass"
                  className="withdrawalfield2"
                  value={fk.values.old_pass}
                  onChange={fk.handleChange}
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  type={showoldPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowoldPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showoldPassword ?
                            <VisibilityOff sx={{ color: 'black' }} /> : <Visibility sx={{ color: 'black' }} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}

                />
              </FormControl>
            </Box>
            <Box mt={2}>

              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>Set new password</Typography>
                </Stack>
                <TextField
                  sx={{
                    background: 'white',
                    borderRadius: '5px'
                  }}
                  placeholder="Enter new password"
                  name="new_pass"
                  className="withdrawalfield2" s
                  value={fk.values.new_pass}
                  onChange={fk.handleChange}
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ?
                            <VisibilityOff sx={{ color: 'black' }} />
                            : <Visibility sx={{ color: 'black' }} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>Confirm new password</Typography>
                </Stack>
                <TextField
                  sx={{
                    background: 'white',
                    borderRadius: '5px'
                  }}
                  className="withdrawalfield2"
                  name="confirm_new_pass"
                  value={fk.values.confirm_new_pass}
                  onChange={fk.handleChange}
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  placeholder="Enter new confirm password"
                  type={show_confirm_password ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handle_confirm_ClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {show_confirm_password ? <VisibilityOff sx={{ color: 'black' }} /> : <Visibility sx={{ color: 'black' }} />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Box>

            <Button sx={style.paytmbtntwo} onClick={fk.handleSubmit} >Change Password </Button>
            {isLoading && (
              <CustomCircularProgress isLoading={isLoading} />
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default LoginPassword;


export const style = {
  container: { background: zubgback, width: '100%', height: '100vh', overflow: 'auto', },
  header: {
    padding: '10px 8px',
    background: zubgtext,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '35px'
    }
  },
  notificationBox: {
    width: '95%', marginLeft: '2.5%', borderRadius: '10px', background: zubgmid, padding: '10px', mt: '10px',
    '&>div>div>p': { color: 'white', fontSize: '14px', marginLeft: '10px', fontWeight: '500', },
    '&>p': { color: 'white', fontSize: '13px', marginLeft: '0px', fontWeight: '500', mt: '10px', },
    '&>div>div>svg': { color: 'white', fontSize: '24px', }, '&>div>svg': { color: 'white', fontSize: '24px', },
  },
  notificationStack: { alignItems: 'center', justifyContent: 'space-between', },
  paytmbtntwo: { borderRadius: '5px', textTransform: 'capitalize', mb: 2, background: zubgtext, color: bgtan, width: '100%', mt: '20px', padding: '10px', '&:hover': { background: bggrad, border: "1px solid transparent", } },

};
