import { ArrowBackIos, HistoryEduOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import axios from 'axios'
import copy from "clipboard-copy"
import CryptoJS from "crypto-js"
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import empty from '../../../assets/images/empty.png'
import gift from '../../../assets/images/gift-d7507b9b.png'
import Layout from '../../../component/Layout/Layout'
import { GiftIncomeFn } from '../../../services/apicalling'
import { endpoint } from '../../../services/urls'
import { bgcolorlight, bggold, bggrad, bgtan } from '../../../Shared/color'
import { slice } from '../../../redux/slices/counterSlice'


function Gift() {

  const navigate = useNavigate();
  const client = useQueryClient()
  const [openGift, setOpenGift] = useState(false);
  const [scratched, setScratched] = useState(false);
  const handleScratch = () => {
    setScratched(true);
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

  const initialValue = {
    t_id: "",
  };
  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      if (!fk.values.t_id) {
        return toast(" Please Enter Code ")
      }
      const reqBody = {
        t_id: fk.values.t_id,
        user_id: user_id,
      };
      ClaimGiftFn(reqBody ,setOpenGift);
    },
  });
  async function ClaimGiftFn(reqBody , setOpenGift) {
    try {
      const response = await axios.post(endpoint.get_claim_card, reqBody);
      toast(response?.data?.data, { id: 1 }); 
      if (response?.data?.data === "Congratulation! You have achieved Gift") {
        fk.handleReset()
          setOpenGift(true);
          client.refetchQueries("gift_bonus");
      }
    } catch (e) {
      const errorMsg = e.response?.data?.msg || e.message || "An error occurred.";
      toast(errorMsg);
      console.error("Error:", e);
    }
  };

  const { data: bonus } = useQuery(
    ["gift_bonus"],
    () => GiftIncomeFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const response = bonus?.data?.data;

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
      <Box sx={{ minHeight: '100vh', padding: '16px', }}>
        <Card sx={{ backgroundColor: '#2f2f2f', color: '#fff', borderRadius: '8px', marginBottom: '16px', }}>
          <CardContent><Typography className='w f15 fw500'>Hi</Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>We have a gift for you</Typography>
            <Typography variant="body2">Please enter the gift code below</Typography>
            <TextField fullWidth variant="outlined" placeholder="Please enter gift code"
              id="t_id"
              name="t_id"
              value={fk.values.t_id}
              onChange={fk.handleChange}
              sx={{
                backgroundColor: '#1c1c1c', borderRadius: '50px', marginTop: '12px', color: '#fff', '& input': { color: '#fff', padding: '10px 20px' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'transparent', }, '&:hover fieldset': { borderColor: 'transparent', },
                  '&.Mui-focused fieldset': { borderColor: 'transparent', },
                },
              }}
            />
            <Button sx={{
              backgroundImage: bggrad, color: bgtan, textTransform: 'none',
              fontWeight: 'bold', borderRadius: '24px', marginTop: '12px', width: '100%', padding: '8px 0',
            }} onClick={fk.handleSubmit}>
              Receive
            </Button>
          </CardContent>
        </Card>
        {response?.map((item) => {
          return <>
            <Card sx={{ backgroundColor: '#2f2f2f', color: '#fff', borderRadius: '8px', marginBottom: '16px', }}>
              <CardContent sx={{ padding: '16px !important' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <HistoryEduOutlined sx={{ color: bggold, marginRight: '8px' }} />
                  <Typography className='w f17 fw700'>Gift Code History</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: '#ccc', }}>
                  {response?.length === 0 ? (
                    <Box mt={5}>
                      <Box sx={styles.emp1} component='img' src={empty} alt="No data" />
                      <Typography className='w f15 fw500' mt={5} sx={{ textAlign: 'center' }}>
                        No data
                      </Typography>
                    </Box>
                  ) : (
                    <Box className="!flex !flex-col gap-5 !justify-between">
                      <div className='!flex !justify-between !font-bold gap-2'>
                        <p className='!text-yellow-800'>You have Achieved Gift Amount</p>
                        <p>₹ {item?.l01_amount}</p>
                      </div>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
            {openGift && (
              <div className="dialog">
                <div
                  className={`scratch-area ${scratched ? 'scratched' : ''}`}
                  onMouseDown={handleScratch}
                >
                  {scratched && <div className="message">Congratulations! You have won ₹ {Number(item?.l01_amount)?.toFixed(0, 2)}</div>}
                </div>
                <button onClick={() => setOpenGift(false)}>Close</button>
              </div>

            )}
          </>
        })}
      </Box>
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