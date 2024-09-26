import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Typography, } from '@mui/material';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { bgtan, zubgback, zubgtext } from '../../../Shared/color';
import customer from '../../../assets/images/customerBg-d4a7e64a.png';
import Layout from '../../../component/Layout/Layout';



function Subordinate() {
  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto', mt: 6 }}>
        <Box sx={{ background: zubgtext, width: '95%', marginLeft: '2.5%', borderRadius: '5px', marginTop: '10px', padding: '10px 0px 0px 0px' }}>
          <Typography variant="body1" color="initial" sx={{ fontSize: '16px', fontWeight: '500', color: bgtan, textAlign: 'center', mt: 2, mb: 3 }}>How can we help you today</Typography>
          <Box sx={{ height: '25vh', width: '100%', overflow: 'hidden', }} className="customer-care">
            <Box component='img' src={customer} sx={{ mt: 3, width: '100%', height: '100%', margin: 'auto', objectFit: 'cover', objectPosition: 'top', }}></Box>
          </Box>
        </Box>
        <Box component={NavLink} to='/ticket'>
          <Stack direction='row' sx={{ background: zubgtext, width: '95%', marginLeft: '2.5%', borderRadius: '5px', marginTop: '10px', padding: '15px', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body1" sx={{ color: bgtan, fontSize: '15px', fontWeight: '400', }}>
              Live Now
            </Typography>

            <Typography variant="body1" color="initial">
              <ArrowForwardIcon sx={{ color: bgtan }} />
            </Typography>
          </Stack>
        </Box>

      </Container >
    </Layout>
  )
}

export default Subordinate

const style = {
  header: {
    padding: '15px 8px',
    background: zubgtext,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '35px'
    }
  },
};







