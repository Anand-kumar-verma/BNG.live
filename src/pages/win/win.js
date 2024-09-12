import VolumeUpIcon from "@mui/icons-material/VolumeUpOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Button, Container, Dialog, Stack, Typography, } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import asistant from "../../assets/images/asistant.png";
import backbtn from "../../assets/images/backBtn.png";
import bg from "../../assets/img/walletbg-dcbd4124.png";
import music from "../../assets/images/music.png";
import musicoff from "../../assets/images/musicoff.png";
import Timeinactive from "../../assets/images/new/download (7).png";
import refresh from "../../assets/images/refresh.png";
import Timeactive from "../../assets/images/time-.png";
import Layout from "../../component/Layout/Layout";
import theme from "../../utils/theme";
import WinFiveMin from "./component/WinOneMin/WinFiveMin";
import WinLossPopup from "./component/WinOneMin/WinLossPopup";
import WinOneMin from "./component/WinOneMin/WinOneMin";
import WinThreeMin from "./component/WinOneMin/WinThreeMin";
import { bgdarkgray, bggrad, bglightgray, bgtan } from "../../Shared/color";


function Win() {
  const client = useQueryClient();
  const [musicicon, setmusicicon] = useState(true);
  const navigate = useNavigate();
  const [Tab, setTab] = useState(1);
  const [opendialogbox, setOpenDialogBox] = useState(false);
  const isAppliedbet = localStorage.getItem("betApplied");
  const dummycounter = useSelector((state) => state.aviator.dummycounter);
  let net_wallet_amount = useSelector(
    (state) => state.aviator.net_wallet_amount
  );

  React.useEffect(() => {
    setTimeout(() => {
      if (isAppliedbet?.split("_")?.[1] === String(true)) {
        setOpenDialogBox(true);
        setTimeout(() => {
          setOpenDialogBox(false);
          localStorage.setItem("betApplied", false);
        }, 5000);
      }
    }, 1000);
  }, [dummycounter]);


  function refreshFunctionForRotation() {
    client.refetchQueries("walletamount");
    client.refetchQueries("walletamount_aviator");
    const item = document.getElementsByClassName("rotate_refresh_image")?.[0];

    const element = document.getElementById("refresh_button");
    if (!item) {
      element.classList.add("rotate_refresh_image");
    }
    setTimeout(() => {
      element.classList.remove("rotate_refresh_image");
    }, 2000);
  }
  React.useEffect(() => {
    const element = document.getElementById("refresh_button");
    const item = document.getElementsByClassName("rotate_refresh_image")?.[0];
    if (item) {
      element.classList.remove("rotate_refresh_image");
    }
  }, []);

  return (
    <Layout header={true}>
      <Container sx={styles.root}>

        <Box sx={{ position: "relative", overflow: "hidden", background: bgdarkgray, py: 2, mt: 7, }}>
          <Box sx={{ px: 2, pb: 2, position: "relative" }}>
            <Box
              sx={{
                background: bglightgray,
                padding: "15px 10px",
                backgroundImage: `url(${bg})`,
                backgroundSize: '100% 100%',

                borderRadius: "10px",
                my: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box display="flex" alignItems="end" ml={5}>
                <Typography
                  variant="body1"
                  color="initial"
                  className="b-val"
                  sx={{ color: 'white' }}
                >
                  ₹{" "}
                  {Number(
                    Number(net_wallet_amount?.wallet || 0) +
                    Number(net_wallet_amount?.winning || 0) || 0
                  )?.toFixed(2)}
                </Typography>
                <div className="mx-4 rotate_refresh_image" id="refresh_button" style={{ mb: '5px !important', ml: '10px !important' }}>
                  <img
                    style={{ mb: '5px', ml: '10px' }}
                    src={refresh}
                    className="!w-6"
                    ml={3}
                    onClick={() => {
                      refreshFunctionForRotation();
                    }}
                  />
                </div>
              </Box>
              <Box display="flex" alignItems="center" mr={5}>
                <WalletOutlinedIcon sx={{ mr: 1, color: "gray" }} />
                <Typography
                  variant="body1"
                  color="initial"
                  className="b-val2"
                  sx={{ color: 'white' }}
                >
                  Walllet balance
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "100%" }}
              >
                <Button
                  variant="contained"
                  className="greenbtn"
                  onClick={() => navigate("/wallet/Recharge")}
                >
                  Deposit
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  className="redbtn"
                  onClick={() => navigate("/Withdrawal")}
                >
                  Withdraw
                </Button>
              </Box>
            </Box>
          </Box>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              px: 1,
              py: 1,
              background: bglightgray,
              borderRadius: "10PX",
              // mt: 2,
              // mb: 2,
              mx: 2,
            }}
          >
            <VolumeUpIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontWeight: 500,
                fontSize: "10px",
                mr: 1,
                textAlign: "center",
                color: theme.palette.primary.main,
              }}
            >
              1.All recharge methods only available in RECHARGE menu on OFFICIAL
            </Typography>
            <Typography sx={{ background: bggrad, color: bgtan }} className=" !text-xs rounded-2xl px-2 py-1 !flex justify-center">
              <WhatshotIcon fontSize="small" sx={{ color: bgtan, }} /> Details
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "auto",
            background: bglightgray,
            borderRadius: "10PX",
            mt: 2,
          }}
        >
          <Box sx={{ width: "30%" }}>
            <NavLink
              className={Tab === 1 ? " wingonavactive wingonav" : " wingonav"}
              onClick={() => setTab(1)}
            >
              {Tab === 1 ? (
                <Box component="img" src={Timeinactive} width={50}></Box>
              ) : (
                <Box component="img" src={Timeactive} width={50}></Box>
              )}
              <Typography variant="body1" color="initial">
                Win Go
              </Typography>
              <Typography variant="body1" color="initial">
                1 Min
              </Typography>
            </NavLink>
          </Box>
          <Box sx={{ width: "30%" }}>
            <NavLink
              className={Tab === 2 ? " wingonavactive wingonav" : " wingonav"}
              onClick={() => setTab(2)}
            >
              {Tab === 2 ? (
                <Box component="img" src={Timeinactive} width={50}></Box>
              ) : (
                <Box component="img" src={Timeactive} width={50}></Box>
              )}
              <Typography variant="body1" color="initial">
                Win Go
              </Typography>
              <Typography variant="body1" color="initial">
                3 Min
              </Typography>
            </NavLink>
          </Box>
          <Box sx={{ width: "30%" }}>
            <NavLink
              className={Tab === 3 ? " wingonavactive wingonav" : " wingonav"}
              onClick={() => setTab(3)}
            >
              {Tab === 3 ? (
                <Box component="img" src={Timeinactive} width={50}></Box>
              ) : (
                <Box component="img" src={Timeactive} width={50}></Box>
              )}
              <Typography variant="body1" color="initial">
                Win Go
              </Typography>
              <Typography variant="body1" color="initial">
                5 Min
              </Typography>
            </NavLink>
          </Box>
        </Box>
        {Tab === 1 && <WinOneMin gid="1" />}
        {Tab === 2 && <WinThreeMin gid="2" />}
        {Tab === 3 && <WinFiveMin gid="3" />}
        {/* opendialogbox */}
        {opendialogbox && (
          <Dialog
            open={opendialogbox}
            PaperProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
          >
            <WinLossPopup gid={isAppliedbet?.split("_")?.[0]} />
          </Dialog>
        )}
        {/* <CustomCircularProgress isLoading={walletloding} /> */}
      </Container>
    </Layout>
  );
}

export default Win;

const styles = {
  root: {},
  dashboardTitle: {
    textAlign: "center",
    color: "white !important",
    fontSize: "21px",
    fontWeight: "500",
  },
  swiperImage: { width: "100%", height: "auto" },
  depositWithdrawContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: 2,
  },
  depositWithdrawIcon: { width: "30px", height: "30px" },
  referralLinkContainer: {
    background: "#3A3A3A",
    padding: "15px 15px",
    borderRadius: "5px",
    mt: 4,
  },
  referralLinkTitle: {
    color: "white !important",
    fontSize: "14px",
    fontWeight: "500 !important",
  },
  referralLinkInputContainer: { alignItems: "center" },
  referralLinkInput: { width: "100%" },
  referralLinkButton: { marginLeft: 2 },
  socialButtonsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: 4,
  },
  telegramButton: {
    fontSize: "14px",
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "500",
  },
  supportButton: {
    fontSize: "14px",
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "500",
  },
  socialButtonIcon: {
    margin: "auto",
    background: "white",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: { fontSize: "20px", "&>path": { color: "#6da7f4 !important" } },
  socialIconinfo: {
    fontSize: "20px",
    margin: "auto",
    "&>path": { color: "white !important" },
  },
  socialButtonText: {
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: "14px",
  },
  gameImage: {
    width: "90px",
    height: "80px",
    position: "absolute",
    top: "-20px",
    right: "0px",
  },
  gameTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "white !important",
    transition: "all 0.3s",
  },
  gameDescription: {
    fontSize: "15px",
    fontWeight: "500",
    color: "white !important",
    mt: 2,
    transition: "all 0.3s",
  },
  userImage: { width: "50px", height: "50px" },
};
