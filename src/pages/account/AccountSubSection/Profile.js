import { Lock, Mail } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";
import { Box, CircularProgress, Container } from "@mui/material";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../../../component/Layout/Layout";
import { endpoint } from "../../../services/urls";
function Profile() {
  const navigate = useNavigate();
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = login_data && JSON.parse(login_data)?.UserID;

  const { isLoading, data } = useQuery(["profiledata"], () => profileFn(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
    refetchOnWindowFocus:false,
  });

  const profileFn = async () => {
    try {
      const response = await axios.get(`${endpoint.profiledata}?id=${user_id}`);
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  const profile_data = data?.data || {};
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
          <div className="no-scrollbar h-screen overflow-auto">
            <div
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="grid bg-white bg-opacity-80  place-items-center rounded-b-[50px]"
            >
              <span className="py-[8%]">User Profile</span>
            </div>

            <div className="cursor-pointer flex flex-col items-center bg-white !bg-opacity-30 rounded-lg p-5 mt-3 py-8">
              <div className="flex justify-center w-full relative">
                <img
                  className="h-[20%] w-[20%] bg-black p-2 rounded-full"
                  src="https://zupeeter.com/application/libraries/profile.png"
                />
                <CameraAltIcon className="absolute bottom-0 left-[55%] !text-black" />
              </div>
              <p className="text-lg !text-black mt-2">
                {profile_data?.data?.username}
              </p>
              <p className="text-sm !text-black ">
                {profile_data?.data?.referral_code}
              </p>
              <div className="!border-[1px] border-white grid grid-cols-3 place-items-center w-full py-3 mt-2">
                <div className="w-full flex  flex-col items-center">
                  <p className="!text-[#8f5206]">276</p>
                  <p className="!text-[12px] !text-black">Total Team</p>
                </div>
                <div className="w-full flex  flex-col items-center">
                  <p className="!text-[#8f5206]">
                    {Number(profile_data?.deposit?.payin || 0)?.toFixed(2) || 0}
                  </p>
                  <p className="!text-[12px] !text-black">Total Investment</p>
                </div>
                <div className="w-full flex  flex-col items-center">
                  <p className="!text-[#8f5206]">
                    {Number(profile_data?.withdrawal?.withdrawal || 0)?.toFixed(
                      2
                    )}
                  </p>
                  <p className="!text-[12px] !text-black">Total Income</p>
                </div>
              </div>
              <p className="py-4 !text-black">Account Info</p>
              <div className="!border-[1px] border-white w-full py-3 mt-2 px-3">
                <div className="flex gap-2">
                  <PersonIcon className="!text-[#8f5206]" />
                  <span className="!text-black">
                    {profile_data?.data?.referral_code}
                  </span>
                </div>
                <p className="bg-[#DCB86A] h-[1px] !my-2 "></p>
                <div className="flex gap-2">
                  <PersonIcon className="!text-[#8f5206]" />
                  <span className="!text-black">
                    {profile_data?.data?.username}
                  </span>
                </div>
                <p className="bg-[#DCB86A] h-[1px] !my-2 "></p>
                <div className="flex gap-2">
                  <CallIcon className="!text-[#8f5206]" />
                  <span className="!text-black">
                    {profile_data?.data?.mobile}
                  </span>
                </div>
                <p className="bg-[#DCB86A] h-[1px] !my-2 "></p>
                <div className="flex gap-2">
                  <Mail className="!text-[#8f5206]" />
                  <span className="!text-black">
                    {profile_data?.data?.email}
                  </span>
                </div>
                <p className="bg-[#DCB86A] h-[1px] !my-2 "></p>
                <div className="flex gap-2">
                  <Lock className="!text-[#8f5206]" />
                  <span className="!text-black">
                    {profile_data?.data?.password}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default Profile;

const styles = {
  // root: { background: "#202020", pb: 6 },
};
