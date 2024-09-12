import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Container, Dialog, Stack, Typography } from "@mui/material";
import profile from "../../../assets/images/profile.jpg";
import synchronize from "../../../assets/images/padlock.png";
import mail from "../../../assets/images/email.png";
import updated from "../../../assets/images/quality-control.png";
import Layout from "../../../component/Layout/Layout";
import { zubgback, zubgbackgrad, zubgmid, zubgtext } from "../../../Shared/color";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { MyProfileDataFn } from "../../../services/apicalling";
import { useQuery } from "react-query";
import dp1 from "../../../assets/dp1.png";
import dp2 from "../../../assets/dp2.png";
import dp3 from "../../../assets/dp3.png";
import dp4 from "../../../assets/dp4.png";
function SettingCenter() {
  const navigate = useNavigate();
  const [openbox, setOpenBox] = React.useState(false);
  const profile_data = localStorage.getItem("profile_data");
  const [imageNumber, setImageNumber] = React.useState(profile_data || "1")
  const goBack = () => {
    navigate(-1);
  };
  const { isLoading, data } = useQuery(["myprofile"], () => MyProfileDataFn(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });

  const result = data?.data?.data;
  const imge_array = [{ id: 1, img: dp1 }, { id: 2, img: dp2 }, { id: 3, img: dp3 }, { id: 4, img: dp4 },];
  return (
    <Layout>
      <Container sx={style.container}>
        <CustomCircularProgress isLoading={isLoading} />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Settings
          </Typography>
          <Typography variant="body1" color="initial">
            {" "}
          </Typography>
        </Box>
        <Box sx={style.sectionBox}>
          <Stack
            direction={"row"}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Box component="img" src={imge_array[Number(Number(imageNumber) - 1 || 0)]?.img} sx={style.profileImage}></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={style.textWithIcon}
              className="!cursor-pointer"
              onClick={() => setOpenBox(true)}
            >
              Change Profile{" "}
              <NavigateNextIcon sx={{ color: "white", marginLeft: "10PX" }} />
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mt: "30px",
            }}
          >
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              Nickname
            </Typography>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              {result?.username}
              <NavigateNextIcon sx={{ color: "white", marginLeft: "10PX" }} />
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mt: "30px",
            }}
          >
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              UID
            </Typography>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              {result?.custid || 0}{" "}
              <CopyAllIcon sx={{ color: "white", marginLeft: "10PX" }} />
            </Typography>
          </Stack>
        </Box>
        <Box sx={style.securityBox}>
          <Typography variant="body1" color="initial" sx={style.securityTitle}>
            Security information
          </Typography>
          <Stack
            direction={"row"}
            sx={style.securityItem}
            component={NavLink}
            to="/SettingCenter/LoginPassword"
          >
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Box
                component="img"
                src={synchronize}
                sx={{ width: "35px", height: "35px", mr: "10px" }}
              ></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.textWithIcon}
              >
                Login password
              </Typography>
            </Stack>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              Edit{" "}
              <NavigateNextIcon sx={{ color: "white", marginLeft: "10PX" }} />
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={style.securityItem}
            component={NavLink}
            to="/SettingCenter/mail"
          >
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Box
                component="img"
                src={mail}
                sx={{ width: "35px", height: "35px", mr: "10px" }}
              ></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.textWithIcon}
              >
                Bind mailbox
              </Typography>
            </Stack>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              To Bind{" "}
              <NavigateNextIcon sx={{ color: "white", marginLeft: "10PX" }} />
            </Typography>
          </Stack>
          <Stack direction={"row"} sx={style.securityItem}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Box
                component="img"
                src={updated}
                sx={{ width: "35px", height: "35px", mr: "10px" }}
              ></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.textWithIcon}
              >
                Updated version
              </Typography>
            </Stack>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              1.0.9{" "}
              <NavigateNextIcon sx={{ color: "white", marginLeft: "10PX" }} />
            </Typography>
          </Stack>
        </Box>
        <Dialog
          open={openbox}
          PaperProps={{
            style: {
              backgroundColor: zubgback,
              boxShadow: "none",
            },
          }}
        >
          <p className="!text-center !text-white !mt-5">Choose Profile</p>
          <div className="!grid !grid-cols-2 !gap-4 !p-5">
            {imge_array?.map((i) => {
              return <img src={i.img} className="cursor-pointer w-32 h-32" onClick={() => {
                localStorage.setItem("profile_data", i.id)
                setImageNumber(i.id)
                setOpenBox(false)
              }} />;
            })}
          </div>
        </Dialog>
      </Container>
    </Layout>
  );
}

export default SettingCenter;

export const style = {
  container: {
    background: zubgback,
    width: "100%",
    height: "100vh",
    overflow: "auto",
  },
  header: {
    padding: "10px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
    "& > a > svg": {
      color: "white",
      fontSize: "35px",
    },
  },
  profileImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "1px solid white",
    padding: "2px",
  },
  textWithIcon: {
    color: 'black',
    fontSize: "14px",
    fontWeight: "500",
  },
  sectionBox: {
    padding: "20px 10px",
    width: "95%",
    marginLeft: "2.5%",
    borderRadius: "10px",
    background: zubgtext,
    mt: "20px",
  },
  securityBox: {
    padding: "10px 10px",
    width: "95%",
    marginLeft: "2.5%",
    borderRadius: "10px",
    background: zubgtext,
    mt: "20px",
  },
  securityTitle: {
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
  },
  securityItem: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: "15px",
    background: zubgback,
    padding: "10px",
    borderRadius: "10px",
  },
};
