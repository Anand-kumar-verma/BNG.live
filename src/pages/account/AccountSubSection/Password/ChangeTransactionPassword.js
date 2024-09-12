
import CottageIcon from "@mui/icons-material/Cottage";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  MenuItem,
  TextField,
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
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
function ChangeTransactionPassword() {
  const navigate = useNavigate();
  const login_data = localStorage.getItem("logindataen") && CryptoJS.AES.decrypt(localStorage.getItem("logindataen"), "anand")?.toString(CryptoJS.enc.Utf8) || null
  const user_id =login_data && JSON.parse(login_data)?.UserID;
  const [select_type_of_history, setselect_type_of_history] = useState(1);
  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
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
              <span className="py-[8%]">Change Transaction Password</span>
            </div>

            <div className="mt-3 grid grid-cols-3 w-full items-center bg-white bg-opacity-5 gap-2   p-5">
              <span className="col-span-1 !text-white !text-sm ">
                Old Password *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />

              <span className="col-span-1 !text-white !text-sm">
                New Password*
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              <span className="col-span-1 !text-white !text-sm">
                Confirm Password*
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />

              <div className="col-span-3 grid grid-cols-2 gap-2">
                <Button
                  variant="contained"
                  className={`!bg-[#47C45D] place-items-center  !text-white`}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  className={`!bg-[#FF7D89] place-items-center  !text-white`}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default ChangeTransactionPassword;

const styles = {
  root: { background: "#202020", pb: 6 },
  depositWithdrawIcon: { width: "30px", height: "30px" },
};
