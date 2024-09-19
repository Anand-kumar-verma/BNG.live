import React from 'react'
import Layout from '../../../component/Layout/Layout'
import { Box, Typography } from '@mui/material'
import { bgcolorlight, bggold, bggrad, bgtan } from '../../../Shared/color'
import { ArrowBackIos, HistoryEduOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import gift from '../../../assets/images/gift-d7507b9b.png'
import { TextField, Button, Card, CardContent } from '@mui/material';
import RedeemIcon from '@mui/icons-material/Redeem';
import empty from '../../../assets/images/empty.png'


function Gift() {

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
            }}>
              Receive
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: '#2f2f2f', color: '#fff', borderRadius: '8px', marginBottom: '16px', }}>
          <CardContent sx={{ padding: '16px !important' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <HistoryEduOutlined sx={{ color: bggold, marginRight: '8px' }} />
              <Typography className='w f17 fw700'>History</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: '#ccc', }}>
              <Box mt={5} >
                <Box sx={styles.emp1} component='img' src={empty}></Box>
                <Typography className='w f15 fw500' mt={5} sx={{ textAlign: 'center' }}>No data</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
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