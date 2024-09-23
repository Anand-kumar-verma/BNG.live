import { ArrowBackIos } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../component/Layout/Layout";
import { bgcolorlight } from "../../../Shared/color";
import slider4 from '../../../assets/img/banner4.png'
import slider5 from '../../../assets/img/banner5.jpg'


const AttendanceCard = ({ day, amount }) => (
  <Box sx={styles.rewardBox}>
    <Typography variant="h6">₹{amount}</Typography>
    <Typography variant="body2">{day} Day</Typography>
  </Box>
);
function ActivityDetail() {


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
          <Typography className='fp15 fw500' sx={{ color: 'white', width: '60%', textAlign: 'center' }}>Activity details</Typography>
          <Typography sx={{ color: 'white', width: '20%' }}></Typography>
        </Box>
      </Box>
      <Box component="img" src={slider4} sx={styles.sliderimg}></Box>
      <Typography variant="body1" color="initial" sx={{ textAlign: 'center', my: 1, }} className="w fp15 fw700">1 MINUTE LOTTERY GAME</Typography>
      <Box component="img" src={slider5} sx={styles.sliderimg}></Box>

    </Layout >
  )
}

export default ActivityDetail


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