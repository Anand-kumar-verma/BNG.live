
import CottageIcon from '@mui/icons-material/Cottage';
import {
    Box,
    CircularProgress,
    Container
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../../../../component/Layout/Layout";
import { endpoint } from "../../../../services/urls";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
  function CommonPasswordPage() {
    const navigate = useNavigate();
    const login_data = localStorage.getItem("logindataen") && CryptoJS.AES.decrypt(localStorage.getItem("logindataen"), "anand")?.toString(CryptoJS.enc.Utf8) || null
    const user_id = login_data &&  JSON.parse(login_data)?.UserID;
    const [select_type_of_history, setselect_type_of_history] = useState(1);
    const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
      refetchOnMount: false,
      refetchOnReconnect: false,
refetchOnWindowFocus:false
    });
  
    const walletamount = async () => {
      try {
        const response = await axios.get(
          `${endpoint.userwallet}?userid=${user_id}`
        );
        return response;
      } catch (e) {
        toast(e?.message);
        console.log(e);
      }
    };
    const initialValues = {
      referrel_code: "https://zupeeter.com/auth/registration/WlcxMjM0NTY3",
    };
    const fk = useFormik({
      initialValues: initialValues,
      onSubmit: () => {
        console.log("This is handle submit");
      },
    });
  
    const amount = data?.data?.data?.wallet || 0;
    if (isLoading)
      return (
        <Layout>
          <CircularProgress />
        </Layout>
      );
    return (
      <Layout>
        <Box sx={styles.root}>
          <Container>
            <div className="h-screen">
              <div
                style={{
                  background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
                }}
                className="grid place-items-center rounded-b-[50px]"
              >
                <span className="py-[8%]">Password</span>
              </div>
              
              <div className="w-full grid grid-cols-2 mt-3">
                <div
                onClick={()=>navigate('/account-password/change-password')}
                  style={{
                    background:
                      `${select_type_of_history===1?"linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)":""}`,
                  }}
                  className="cursor-pointer  place-items-center flex w-full justify-center items-center flex-col rounded-lg py-2"
                >
                  <PrivacyTipIcon className="!w-[40px] !h-[40px] !text-[#8f5206]" />
                  <p className="text-sm !text-[#8f5206]">Change Account  Password</p>
                </div>
                <div 
                onClick={()=>navigate('/account-password/change-transction-password')}
                  style={{
                    background:
                      `${select_type_of_history===2?"linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)":""}`,
                  }}
                  className="cursor-pointer  place-items-center flex w-full justify-center items-center flex-col rounded-lg py-2"
                >
                  <PrivacyTipIcon className="!w-[40px] !h-[40px] !text-[#8f5206]" />
                  <p className="text-sm !text-[#8f5206]">Change Transaction  Password</p>
                </div>
              </div>
            </div>
          </Container>
        </Box>
      </Layout>
    );
  }
  
  export default CommonPasswordPage;
  
  const styles = {
    root: { background: "#202020", pb: 6 },
    depositWithdrawIcon: { width: "30px", height: "30px" },
  };
  

