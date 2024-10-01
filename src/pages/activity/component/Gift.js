import { ArrowBackIos, CopyAll, HistoryEduOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import empty from '../../../assets/images/empty.png'
import gift from '../../../assets/images/gift-d7507b9b.png'
import Layout from '../../../component/Layout/Layout'
import { getGiftFn } from '../../../services/apicalling'
import { bgcolorlight, bggold, bggrad, bgtan } from '../../../Shared/color'
import axios from 'axios'
import { endpoint } from '../../../services/urls'
import toast from 'react-hot-toast'
import copy from "clipboard-copy";
import CryptoJS from "crypto-js";
import moment from 'moment/moment'


function Gift() {

  const navigate = useNavigate();
  const client = useQueryClient()
  const [inputValue, setInputValue] = useState({});
  const [openGiftId, setOpenGiftId] = useState(null);
  const [scratched, setScratched] = useState(false);
  const handleScratch = () => {
    setScratched(true);
  };
  const handleInputChange = (id, value) => {
    setInputValue((prev) => ({ ...prev, [id]: value }));
  };
  const handleBack = () => {
    navigate(-1);
  }
  const functionTOCopy = (value) => {
    copy(value);
    toast.success("Copied to clipboard!");
  };
  const value =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = value && JSON.parse(value)?.UserID;

  const { data } = useQuery(
    ["gift_voucher"],
    () => getGiftFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const res = data?.data?.data || []


  const ClaimGiftFn = async (id) => {
    const reqBody = {
      t_id: id,
      user_id: user_id,
    };
    try {
      const response = await axios.post(endpoint.get_claim_card, reqBody);
      toast(response?.data?.data, { id: 1 });
      if ("Congratulation! You have achieved Gift Amount: 34.0000" === response?.data?.data) {
        setOpenGiftId(id);
      }
      client.refetchQueries("gift_voucher");
    } catch (e) {
      const errorMsg = e.response?.data?.msg || e.message || "An error occurred.";
      toast(errorMsg);
      console.error("Error:", e); // Use console.error for better visibility
    }
  };

  const handleClaimGift = (item) => {
    const enteredCode = inputValue[item.id] || '';
    if (enteredCode.trim() === '') {
      toast.error("Please enter a valid gift code.");
      return;
    }
    if (enteredCode !== item?.code) {  // Validate against the actual code
      toast.error("Invalid code. Please enter the correct gift code.");
      return;
    }
    ClaimGiftFn(item?.id);
  };
  return (
    <Layout header={false} footer={false}>
      <Box sx={{ py: '12px', background: bgcolorlight }}>
        <Box className="fcsb w95" >
          <Box sx={{ width: '20%' }}>
            <ArrowBackIos className='fp18' sx={{ color: 'white', }} onClick={handleBack} />
          </Box>
          <Typography className='fp20 fw700' sx={{ color: 'white', width: '60%', textAlign: 'center' }}>Gift</Typography>
          <Typography sx={{ color: 'white', width: '20%' }}></Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={styles.emp} component='img' src={gift}></Box>
      </Box>
      {res?.map((item) => {
        return <>
          <Box sx={{ paddingRight: '16px', paddingLeft: '16px', paddingTop: '10px', }}>
            <Card sx={{ backgroundColor: '#2f2f2f', color: '#fff', borderRadius: '8px', marginBottom: '16px', }}>
              <CardContent sx={{ padding: '16px !important' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <HistoryEduOutlined sx={{ color: bggold, marginRight: '8px' }} />
                  <Typography className='w f17 fw700'>Gift Code </Typography>
                </Box>

                <div className="!flex justify-between mt-5">
                  <p className='!text-xs !font-bold'> {item?.code} <CopyAll className='!cursor-pointer' onClick={() =>
                    functionTOCopy(item?.code)
                  } /></p>
                  <p className='!text-xs !font-bold'>{moment(item?.expired_date)?.format("DD-MM-YYYY HH:mm:ss")} </p>
                </div>
                <TextField fullWidth variant="outlined" placeholder="Please enter gift code"
                  value={inputValue[item?.id] || ''} 
                  onChange={(e) => handleInputChange(item?.id, e.target.value)}
                  sx={{
                    backgroundColor: '#1c1c1c', borderRadius: '50px', marginTop: '12px', color: '#fff', '& input': { color: '#fff', padding: '10px 20px' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'transparent', }, '&:hover fieldset': { borderColor: 'transparent', },
                      '&.Mui-focused fieldset': { borderColor: 'transparent', },
                    },
                  }}
                />
                {inputValue[item?.id] && (
                  <Button sx={{
                    backgroundImage: bggrad, color: bgtan, textTransform: 'none',
                    fontWeight: 'bold', borderRadius: '24px', marginTop: '12px', width: '100%', padding: '8px 0',
                  }}  onClick={() => handleClaimGift(item)}>
                    Receive
                  </Button>
                )}
              </CardContent>
            </Card>
            {openGiftId === item?.id && ( 
              <div className="dialog">
                <div
                  className={`scratch-area ${scratched ? 'scratched' : ''}`}
                  onMouseDown={handleScratch}
                >
                  {scratched && <div className="message">Congratulations! You have won ₹ {Number(item?.amount)?.toFixed(0, 2)}</div>}
                </div>
                <button onClick={() => setOpenGiftId(null)}>Close</button>
              </div>

            )}
          </Box>
        </>
      })}
    </Layout>
  )
}

export default Gift


const styles = {
  emp: {
    width: '100%',
  },
  emp1: {
    width: '250px',
    margin: 'auto',
    filter: 'brightness(0.5)',
  },
};