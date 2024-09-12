import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import axios from "axios";
import CryptoJS from 'crypto-js';
import moment from "moment";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../../component/Layout/Layout";
import { endpoint, rupees } from "../../services/urls";
function FundRequest() {
  const login_data = localStorage.getItem("logindataen") && CryptoJS.AES.decrypt(localStorage.getItem("logindataen"), "anand")?.toString(CryptoJS.enc.Utf8) || null;
  const user_id = login_data && JSON.parse(login_data).UserID;

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
          <div
            style={{
              background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
            }}
            className="grid place-items-center rounded-b-[50px]"
          >
            <span className="py-[8%]">Deposit</span>
          </div>
          <div className="bg-white !bg-opacity-10 rounded-lg p-5 mt-3">
            <p className="!text-white">Fund Request</p>
            <div className="flex gap-5 items-center mt-3 justify-center">
              <label>Amount*</label>
              <TextField
                size="small"
                placeholder="Enter Amount"
                className="!text-white  !bg-white !bg-opacity-5"
              />
            </div>
            <div className="flex gap-3 mt-3">
              <Button variant="contained" className="!text-white">
                Submit
              </Button>
              <Button variant="contained" className="!text-white !bg-[#FF7D89]">
                Cancel
              </Button>
            </div>
          </div>

          <div className="bg-white !bg-opacity-10 rounded-lg p-5 mt-3">
            <p className="!text-white !text-2xl">Quick amount</p>

            <div className="flex gap-1 first-letter: mt-3 flex-wrap justify-between">
              {[501, 1000, 2000, 5000, 10000, 30000, 50000]?.map((i, index) => {
                return (
                  <Button
                    variant="contained"
                    className={`${
                      index % 2 === 0 ? `!bg-[#47C45D]` : `!bg-[#DCB86A]`
                    } !text-white !px-0`}
                  >
                    <span className="!text-white whitespace-nowrap">
                      {rupees} {i}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            {[
              1,
              2,
              3,
              ,
              4,
              34,
              45,
              53,
              3,
              3,
              34,
              34,
              354,
              34,
              2,
              4234,
              234,
              234,
              234,
              23423,
            ]?.map((i) => {
              return (
                <div className="bg-white !bg-opacity-10 rounded-lg p-5 mt-3">
                  <div className="flex justify-between w-full">
                    <span className="font-bold !text-white">Deposit</span>
                    <span className="text-sm !text-white">Expired</span>
                    <span className="!text-2xl !text-[#FF7D89] font-bold">
                      500
                    </span>
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="!text-white text-sm">
                      {moment(Date.now())?.format("DD-MM-YYYY")}{" "}
                      {moment(Date.now())?.format("HH:mm:ss")}
                    </span>
                    <span className=" text-sm">Pending</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default FundRequest;

const styles = {
  root: { background: "#202020", pb: 6 },
};
