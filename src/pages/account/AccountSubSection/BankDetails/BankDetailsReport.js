import {
    Box,
    Button,
    CircularProgress,
    Container,
    TextField,
} from "@mui/material";
import axios from "axios";
import copy from "clipboard-copy";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DetailsTables from "./DetailsTables";
import { endpoint } from "../../../../services/urls";
import Layout from "../../../../component/Layout/Layout";
function BankDetailsReport() {
  const login_data = localStorage.getItem("logindataen") && CryptoJS.AES.decrypt(localStorage.getItem("logindataen"), "anand")?.toString(CryptoJS.enc.Utf8) || null
  const user_id =login_data &&  JSON.parse(login_data)?.UserID;
  const functionTOCopy = (value) => {
    copy(value);
    toast.success("Copied to clipboard!");
  };
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
              <span className="py-[8%]">Bank Details</span>
            </div>
            <div className="bg-white !bg-opacity-10 rounded-lg p-2 mt-3">
              <p className="!text-white">Bank Details</p>
              <div className="flex justify-between items-center mt-3 mb-3">
                <div className="flex items-center gap-2">
                  <label className="!text-white">Search:</label>
                  <TextField
                    size="small"
                    placeholder="Search Value"
                    className="!bg-white !bg-opacity-5"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <Button variant="contained" className="!bg-[#47C45D]">
                    PDF
                  </Button>
                  <Button variant="contained" className="!bg-[#DCB86A]">
                    Excel
                  </Button>
                </div>
              </div>
              <DetailsTables />
            </div>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default BankDetailsReport;

const styles = {
  root: { background: "#202020", pb: 6 },
};
