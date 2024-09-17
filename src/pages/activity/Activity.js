import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import banner2 from "../../assets/images/giftRedeem.png";
import banner1 from "../../assets/images/signInBanner.png";
import logo from '../../assets/img/logo.png';
import actbanner1 from "../../assets/img/slider1.png";
import actbanner2 from "../../assets/img/slider2.png";
import actbanner3 from "../../assets/img/slider3.png";
import actbanner4 from "../../assets/img/slider4.png";
import actbanner5 from "../../assets/img/slider5.png";
import actbanner6 from "../../assets/img/slider6.png";
import actbanner7 from "../../assets/img/slider8.png";
import BettingRebate from "../../assets/images/BettingRebate-17d35455.png";
import invitationBonus from "../../assets/images/invitationBonus-aa7acbd3.png";
import { bgfootergray } from "../../Shared/color";
import Layout from "../../component/Layout/Layout";
import { NavLink } from "react-router-dom";


const style = {
  root: {
    background: bgfootergray,
    pt: 2,
    mt: '45px',
    px: 1,
    "&>p": { color: "white" },
    "&>p:nth-child(1)": { fontSize: "17px", fontWeight: 600 },
    "&>p:nth-child(2)": { fontSize: "12px", fontWeight: 400, mt: 1 },
    "&>p:nth-child(3)": { fontSize: "12px", fontWeight: 400, pb: 1 },
  },
  act: {
    px: 2,
    alignItems: "baseline",
    justifyContent: "space-between",
    width: "100%",
    mt: 3,
  },
  act2: { px: 2, width: "100%", mt: 3, pb: '80px' },
  actimg: {
    width: "49%",
    height: '100%',
    background: "#fff",
    borderRadius: "10px",
    paddingBottom: "20px",
    "&>p:nth-child(2)": { fontSize: "14px", fontWeight: 600, pl: 1 },
    "&>p:nth-child(3)": { fontSize: "12px", fontWeight: 400, pl: 1, pt: 1 },
  },
  actimg2: {
    mb: 2,
    width: "100%",
    background: "#fff",
    borderRadius: "10px",
    paddingBottom: "20px",
    "&>p:nth-child(2)": {
      fontSize: "18px",
      fontWeight: 700,
      pl: 1,
      textAlign: "center",
    },
  },
};
function Activity() {

  return (
    <Layout >
      {/* <Box sx={{ background: bgfootergray }}>
        <Box component='img' src={logo} sx={{ width: '120px', margin: 'auto' }}></Box>
      </Box> */}
      <Box sx={style.root} >
        <Typography variant="body1" color="initial">
          Activity
        </Typography>
        <Typography variant="body1" color="initial">
          Please remember to follow the event page
        </Typography>
        <Typography variant="body1" color="initial">
          We will launch user feedback activities from time to time
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: 2 }}>
        <Box className="fccc fp13" component={NavLink} to="/activity/InvitationBonus">
          <Box component='img' sx={{ width: '50px' }} src={invitationBonus}></Box>
          <Typography className="fp13" sx={{ color: 'white' }}>Invitation </Typography>
          <Typography className="fp13" sx={{ color: 'white', lineHeight: '10px' }}>bonus</Typography>
        </Box>
        <Box className="fccc fp13" component={NavLink} to="/activity/Betting/rebate">
          <Box component='img' sx={{ width: '50px' }} src={BettingRebate}></Box>
          <Typography className="fp13" sx={{ color: 'white' }}>Betting </Typography>
          <Typography className="fp13" sx={{ color: 'white', lineHeight: '10px' }}>rebate</Typography>
        </Box>
      </Box>
      <Stack direction="row" sx={style.act}>
        <Box sx={style.actimg} component={NavLink} to="/gift">
          <Box component="img" sx={{ width: "100%" }} src={banner1}></Box>
          <Typography variant="body1" color="initial">
            Gifts
          </Typography>
          <Typography variant="body1" color="initial">
            Enter the redemption code to receive gift rewards
          </Typography>
        </Box>
        <Box sx={style.actimg} component={NavLink} to="/activity/DailySignIn">
          <Box component="img" sx={{ width: "100%" }} src={banner2}></Box>
          <Typography variant="body1" color="initial">
            FIRST DEPOSIT BONUS
          </Typography>
          <Typography variant="body1" color="initial">
            The more consecutive days you sign in, the higher the reward will
            be.
          </Typography>
        </Box>
      </Stack>
      <Stack sx={style.act2}>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner1}
          ></Box>
          <Typography variant="body1" color="initial">
            FIRST DEPOSIT BONUS
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner2}
          ></Box>
          <Typography variant="body1" color="initial">
            BNG Game CREATIVE VIDEO CONTEST
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner3}
          ></Box>
          <Typography variant="body1" color="initial">
            WINSTREAK 2X PRIZE HAPPY HOUR
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner4}
          ></Box>
          <Typography variant="body1" color="initial">
            DAILY BONUS UNTIL 1 CRORE
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner5}
          ></Box>
          <Typography variant="body1" color="initial">
            BEST PILOT BNG Game AIRLINES
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner6}
          ></Box>
          <Typography variant="body1" color="initial">
            MONTHLY VIP BONUS
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner7}
          ></Box>
          <Typography variant="body1" color="initial">
            BNG Game SUPPORT FUNDS
          </Typography>
        </Box>
      </Stack>
    </Layout >
  );
}

export default Activity;
