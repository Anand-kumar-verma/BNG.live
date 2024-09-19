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
  
  function Otpverify () {
    const [loding, setloding] = useState(false);
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    
    const initialValue = {
      email: "",
      otp:""
    };

    const fk = useFormik({
      initialValues: initialValue,
      onSubmit: () => {
        const reqbody = {
          email: fk.values.email ,
          otp  : otp
        };
        otpverify(reqbody);
      },
    });
    const otpverify = async (reqbody) => {
      setloding(true);
      try {
        const response = await axios.post(endpoint.otp_verify, reqbody,
           {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        toast.success(response?.data?.msg, { id: 1});
        if("OTP Verified"===response?.data?.msg){
            navigate("/changepassword")
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
             
            </Box>
            <Box
              sx={{
                mt: "6vh",
                background: "#292929",
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
                background: "#292929",
                WebkitBackdropFilter: "blur(17px)",
                backdropFilter: "blur(17px)",
                border: "1px solid rgba(255, 255, 255, 0.075)",
              }}
            >
              <div className="" style={{ color: 'white', fontSize: '13px', fontWeight: '600' }}>
               Otp Verify{" "}
  
  
              </div>
  
              <Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: '13px', fontWeight: '600', mt: 1 }}>
                Please Enter email or otp, for reset password.
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
               
                    <TextField
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter email "
                      className="loginfieldsff"
                      value={fk.values.email}
                      onChange={fk.handleChange}
                      onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                    />
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
                                color: "white", // Set text color to blue
                                border: "2px solid white",
                                textAlign: "center",
                              }}
                            />
                          )}
                        />
                      </div>
                
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
                    Verify OTP
                  </Button>
                  <p className="!text-sm text-right">
                    <span
                      className="!cursor-pointer"
                      onClick={() => navigate("/forget-password")}
                      style={{ color: 'white', fontSize: '13px', fontWeight: '600', mt: 1 }}
                    >
                      Return to Forget Password
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
  
  export default Otpverify;
  