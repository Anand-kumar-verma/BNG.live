import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { NavLink, useNavigate } from "react-router-dom";
import { endpoint } from "../../../services/urls";
import { zubgtext } from "../../../Shared/color";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { ForgetPasswordSchemaValidation } from "../../../Shared/Validation";
function ForgetPassword() {
  const [loding, setloding] = useState(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [openOTPBox, setopenOTPBox] = useState(false);
  const initialValue = {
    mobile: "",
    password: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    validationSchema: ForgetPasswordSchemaValidation,
    onSubmit: () => {
      openOTPBox
        ? veryFyOTPAndChangePassword(fk.values)
        : loginFunction(fk.values);
    },
  });

  const veryFyOTPAndChangePassword = async (reqbody) => {
    setloding(true);
    try {
      const response = await axios.get(
        `${endpoint.veryfy_otp}?mobile=${reqbody.mobile}&otp=${otp}&password=${reqbody.password}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response?.data?.msg === "Successfully Otp Verify") {
        setopenOTPBox(false);
        fk.handleReset();
        navigate("/");
      }
      toast.success(response?.data?.msg);
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };
  const loginFunction = async (reqbody) => {
    setloding(true);
    try {
      const response = await axios.get(
        `${endpoint.send_otp}?mobile=${reqbody.mobile}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response?.data?.msg === "Successfully Otp Send") {
        setopenOTPBox(true);
      }
      if (response?.data?.otp) {
        toast.success(
          response?.data?.msg + " " + "OTP is: " + response?.data?.otp
        );
      } else {
        toast.success(response?.data?.msg);
      }
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };

  return (
    <Container
      sx={{
        background: zubgtext,
        minHeight: "100vh"
      }}
    >
      <Box sx={{}}>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "100%", pt: "5vh" }}>
            {/* <Box
              component="img"
              src={logo}
              sx={{ width: "150px", margin: "auto" }}
            ></Box> */}
          </Box>
          <Box
            sx={{
              mt: "6vh",
              background: "white",
              borderRadius: "10px",
              padding: "20px 10px",
              "& > p:nth-child(1)": {
                fontSize: "20px",
                fontWeight: "500",
                color: "white",
              },
              "& > p:nth-child(2)": {
                fontSize: "12px",
                fontWeight: "400",
                color: "white",
              },
              background: "rgba(255, 255, 255, 0.15)",
              WebkitBackdropFilter: "blur(17px)",
              backdropFilter: "blur(17px)",
              border: "1px solid rgba(255, 255, 255, 0.075)",
            }}
          >
            <div className="" style={{ color: 'white', fontSize: '13px', fontWeight: '600' }}>
              Forget Password{" "}


            </div>

            <Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: '13px', fontWeight: '600', mt: 1 }}>
              After sent OTP , Please do not refresh your page.{" "}
            </Typography>
            <Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: '13px', fontWeight: '600', mt: 1 }}>
              Please Enter mobile no for otp, and verify OTP for reset password.
            </Typography>
            <Box
              component="form"
              sx={{
                width: "100%",
                transition: "0.3s",
              }}
              onSubmit={fk.handleSubmit}
            >
              <FormControl fullWidth sx={{ mt: 2 }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white', fontSize: '13px', fontWeight: '600', }}>Enter email or mobile no</Typography>
                </Stack>
                <>
                  <TextField
                    id="mobile"
                    type="number"
                    name="mobile"
                    placeholder="Enter email or mobile no"
                    className="loginfieldsff"
                    value={fk.values.email}
                    onChange={fk.handleChange}
                    onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  />

                  {fk.touched.mobile && fk.errors.mobile && (
                    <div className="error">{fk.errors.mobile}</div>
                  )}
                </>
                {openOTPBox && (
                  <>
                    <>
                      <Stack direction="row" className="loginlabel mt-5">
                        <Typography variant="h3">Enter New Password</Typography>
                      </Stack>
                      <TextField
                        id="password"
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        className="loginfields"
                        value={fk.values.password}
                        onChange={fk.handleChange}
                        onKeyDown={(e) =>
                          e.key === "Enter" && fk.handleSubmit()
                        }
                      />
                    </>
                    <div className="!flex !justify-center mt-3">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={
                          <span style={{ width: "10px" }}> </span>
                        }
                        renderInput={(props) => (
                          <input
                            {...props}
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "transparent", // Set background to transparent
                              color: "blue", // Set text color to blue
                              border: "2px solid white",
                              textAlign: "center",
                            }}
                          />
                        )}
                      />
                    </div>
                  </>
                )}
              </FormControl>
              <div className="flex flex-col justify-center !mt-5">
                <Button
                  type="submit"
                  value="Submit"
                  component={NavLink}
                  className="btnLogin"
                  onClick={fk.handleSubmit}
                  sx={{ mb: 2 }}
                >
                  {openOTPBox ? "Submit" : "Send OTP"}
                </Button>
                <p className="!text-sm text-right">
                  <span
                    className="!cursor-pointer"
                    onClick={() => navigate("/")}
                    style={{ color: 'white', fontSize: '13px', fontWeight: '600', mt: 1 }}
                  >
                    Return to Login
                  </span>
                </p>
              </div>
              <Stack direction="row" className="loginbtnbox" mt={2}></Stack>
              <CustomCircularProgress isLoading={loding} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgetPassword;
