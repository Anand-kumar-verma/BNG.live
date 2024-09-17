import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import Layout from "../../../component/Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { bgcolorlight, bgtan } from "../../../Shared/color";
import { ArrowBackIos } from "@mui/icons-material";
import giftbg from '../../../assets/images/giftbg.png'
import coin from '../../../assets/images/coin-294b6998.png'
import day7Bg from '../../../assets/images/day7Bg-ada1d750.png'


const AttendanceCard = ({ day, amount }) => (
  <Box sx={styles.rewardBox}>
    <Typography variant="h6">₹{amount}</Typography>
    <Typography variant="body2">{day} Day</Typography>
  </Box>
);
function DailySignInBonous() {


  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

  return (
    <Layout header={false} footer={false}>
      <Box sx={{ py: '12px', background: bgcolorlight }}>
        <Box className="fcsb w95" >
          <Box sx={{ width: '20%' }}>
            <ArrowBackIos className='fp18' sx={{ color: 'white', }} onClick={handleBack} />
          </Box>
          <Typography className='fp15 fw500' sx={{ color: 'white', width: '60%', textAlign: 'center' }}>Attendance</Typography>
          <Typography sx={{ color: 'white', width: '20%' }}></Typography>
        </Box>
      </Box>
      <Box sx={styles.root}>
        <Box sx={{
          padding: 2,
          background: '#F54545',
          backgroundImage: `url(${giftbg})`,
          backgroundSize: 'cover',
        }} >
          < Typography className="w fp20 fw600" >
            Attendance Bonus
          </Typography>
          <Typography className="w fp14 fw600">
            Get rewards based on consecutive login days
          </Typography>
          <Box sx={{ padding: '4px', background: 'white', mt: 2, width: '50%', clipPath: 'polygon(100% 0%, 90% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)', }}>
            <Typography variant="h6" sx={{ color: '#F54545' }} className=" fp14 fw500">
              Attended consecutively
            </Typography>
            <Typography variant="h6" sx={{ color: '#F54545' }} className=" fp14 fw500">
              0 Day
            </Typography>
          </Box>

          <Typography sx={{ color: 'white' }}>Accumulated </Typography>
          <Typography className="w f23" >₹0.00</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, }}>
            <Button variant="contained" sx={styles.button} component={NavLink} to="/activity/DailySignIn/Rules">
              Game Rules
            </Button>
            <Button variant="contained" sx={styles.button}>
              Attendance History
            </Button>
          </Box>
        </Box>
        <Box mt={2} className="w90 fcsw">
          {[
            { day: 1, amount: 7, img: coin },
            { day: 2, amount: 20, img: coin },
            { day: 3, amount: 100, img: coin },
            { day: 4, amount: 200, img: coin },
            { day: 5, amount: 450, img: coin },
            { day: 6, amount: 2400, img: coin },
          ].map((reward) => (
            <Box sx={{ background: '#333332', borderRadius: '8px', width: '30%', mb: 2, py: 1, }} className="fccc" key={reward.day}>
              <Typography className=" w fp16 fw700" mb={1} ax={{ textAlign: 'center' }}>₹{reward.amount}.00</Typography>
              <Box component='img' src={reward.img} sx={{ width: '30px' }}></Box>
              <Typography className=" w fp14 fw500" mt={1} ax={{ textAlign: 'center' }}>{reward.day} Days</Typography>
            </Box>
          ))}
        </Box>
        <Box
          className="w95 fcsb"
          sx={{
            backgroundColor: "#333332",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Box
            component="img"
            src={day7Bg}
            alt="Gift Icon"
            sx={{ width: "150px", }}
          />
          <Box sx={{ width: '30%', textAlign: 'center', }}>
            <Typography variant="h5" className="w f20 fw500">
              ₹6,400.00</Typography>
            <Typography variant="body2" className="w f15">7 Day</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ width: '80%', background: 'linear-gradient(90deg, #FAE59F 0%, #C4933F 100%)', borderRadius: '50px', marginLeft: '10%', color: bgtan, padding: '7px0', my: 5, textTransform: 'capitalize' }}>
          Attendance
        </Button>
      </Box>
    </Layout >
  )
}

export default DailySignInBonous


const styles = {
  button: {
    backgroundColor: "linear-gradient(180deg,#FFBD40 0%,#FF7F3D 100%)",
    color: "white",
    padding: "6px 16px",
    borderRadius: "50px",
    textTransform: "none",
  },
  rewardBox: {
    backgroundColor: "#333",
    color: "white",
    padding: "16px",
    borderRadius: "8px",
    textAlign: "center",
  },
  attendanceButton: {
    backgroundColor: "gold",
    color: "black",
    padding: "12px 24px",
    marginTop: "24px",
    borderRadius: "8px",
  },
};