import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Typography, } from '@mui/material';
import * as React from 'react';

import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { iconcolorpink, iconcoloryellow, zubgback, zubgbackgrad, zubgmid } from '../../../Shared/color';
import bank from '../.././../assets/images/bank.png';
import car from '../.././../assets/images/car.png';
import posterlogo from '../.././../assets/images/logo.png';


function Invitaton() {

  return (
    <Container sx={{ background: zubgback, width: '100%', }}>
      <Box sx={style.header}>
        <Box component={NavLink} to='/promotion/'>
          <KeyboardArrowLeftOutlinedIcon />
        </Box>
        <Typography variant="body1" color="initial">Invite</Typography>
        <Typography variant="body1" color="initial"> </Typography>
      </Box>
      <Box my={3}>
        <Typography variant="body1" color="initial" sx={{ color: 'white !important', textAlign: 'center', }}>Please swipe left - right to choose your favorite poster</Typography>
      </Box>

      <Swiper pagination={{ dynamicBullets: false, }} modules={[Pagination]} className="mySwiper"
        slidesPerView={1.2}
        spaceBetween={10}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Box sx={{ padding: ' 0px 20px 20px 20px ', background: zubgmid, borderRadius: '10px' }}>
            <Box component='img' src={posterlogo} sx={{ width: '100px !important', margin: 'auto' }}></Box>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              '&>p': { fontSize: '12px', color: 'white !important', fontWeight: '500' }
            }}>
              <Typography variant="body1" color="initial">Welcome to <br /> BDG Game</Typography>

              <Box sx={{
                padding: '10px', background: zubgbackgrad, borderRadius: '10px', textAlign: 'center',
                '&>p': { color: 'white', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Fair <br /> and justice</Typography>
              </Box>
              <Box sx={{
                padding: '10px', background: zubgbackgrad, borderRadius: '10px', textAlign: 'center',
                '&>p': { color: 'white', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Open and <br /> transparent</Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2, '&>p': { fontSize: '30px', color: 'white !important', fontWeight: '600' } }}>
              <Typography variant="body1" color="initial">Full Odds  <br />Bonus  Rate</Typography>
            </Box>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'center',
              '&>div': { marginRight: '20px', marginTop: '20px', border: '1px solid white', borderRadius: '10PX', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
              '&>div>img': { width: '50px', height: '50px' },
              '&>div>p': { fontSize: '14px', color: 'white' },
            }}>
              <Box>
                <Box component='img' src={bank}></Box>
                <Typography variant="body1" color="initial"> Financial security</Typography>
              </Box>
              <Box>
                <Box component='img' src={car}></Box>
                <Typography variant="body1" color="initial"> Quick withdrawal</Typography>
              </Box>
            </Stack>
            <Box sx={{ my: 2, textAlign: 'center', '&>h6': { color: 'white' } }}>
              <Typography variant="h6" color="initial">Permanent<br /> commission up to 85%</Typography>
            </Box>
            <Box SX={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Box sx={{ background: zubgback, width: '100px', height: '100px', margin: 'auto' }}></Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ padding: ' 0px 20px 20px 20px ', background: zubgmid, borderRadius: '10px' }}>
            <Box component='img' src={posterlogo} sx={{ width: '100px !important', margin: 'auto' }}></Box>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              '&>p': { fontSize: '12px', color: 'white !important', fontWeight: '500' }
            }}>
              <Typography variant="body1" color="initial">Welcome to <br /> BDG Game</Typography>

              <Box sx={{
                padding: '10px', background: zubgbackgrad, borderRadius: '10px', textAlign: 'center',
                '&>p': { color: 'white', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Fair <br /> and justice</Typography>
              </Box>
              <Box sx={{
                padding: '10px', background: zubgbackgrad, borderRadius: '10px', textAlign: 'center',
                '&>p': { color: 'white', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Open and <br /> transparent</Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2, '&>p': { fontSize: '30px', color: 'white !important', fontWeight: '600' } }}>
              <Typography variant="body1" color="initial">Full Odds  <br />Bonus  Rate</Typography>
            </Box>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'center',
              '&>div': { marginRight: '20px', marginTop: '20px', border: '1px solid white', borderRadius: '10PX', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
              '&>div>img': { width: '50px', height: '50px' },
              '&>div>p': { fontSize: '14px', color: 'white' },
            }}>
              <Box>
                <Box component='img' src={bank}></Box>
                <Typography variant="body1" color="initial"> Financial security</Typography>
              </Box>
              <Box>
                <Box component='img' src={car}></Box>
                <Typography variant="body1" color="initial"> Quick withdrawal</Typography>
              </Box>
            </Stack>
            <Box sx={{ my: 2, textAlign: 'center', '&>h6': { color: 'white' } }}>
              <Typography variant="h6" color="initial">Permanent<br /> commission up to 85%</Typography>
            </Box>
            <Box SX={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Box sx={{ background: zubgback, width: '100px', height: '100px', margin: 'auto' }}></Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ padding: ' 0px 20px 20px 20px ', background: zubgmid, borderRadius: '10px' }}>
            <Box component='img' src={posterlogo} sx={{ width: '100px !important', margin: 'auto' }}></Box>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              '&>p': { fontSize: '12px', color: 'white !important', fontWeight: '500' }
            }}>
              <Typography variant="body1" color="initial">Welcome to <br /> BDG Game</Typography>

              <Box sx={{
                padding: '10px', background: zubgbackgrad, borderRadius: '10px', textAlign: 'center',
                '&>p': { color: 'white', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Fair <br /> and justice</Typography>
              </Box>
              <Box sx={{
                padding: '10px', background: zubgbackgrad, borderRadius: '10px', textAlign: 'center',
                '&>p': { color: 'white', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Open and <br /> transparent</Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2, '&>p': { fontSize: '30px', color: 'white !important', fontWeight: '600' } }}>
              <Typography variant="body1" color="initial">Full Odds  <br />Bonus  Rate</Typography>
            </Box>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'center',
              '&>div': { marginRight: '20px', marginTop: '20px', border: '1px solid white', borderRadius: '10PX', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
              '&>div>img': { width: '50px', height: '50px' },
              '&>div>p': { fontSize: '14px', color: 'white' },
            }}>
              <Box>
                <Box component='img' src={bank}></Box>
                <Typography variant="body1" color="initial"> Financial security</Typography>
              </Box>
              <Box>
                <Box component='img' src={car}></Box>
                <Typography variant="body1" color="initial"> Quick withdrawal</Typography>
              </Box>
            </Stack>
            <Box sx={{ my: 2, textAlign: 'center', '&>h6': { color: 'white' } }}>
              <Typography variant="h6" color="initial">Permanent<br /> commission up to 85%</Typography>
            </Box>
            <Box SX={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Box sx={{ background: zubgback, width: '100px', height: '100px', margin: 'auto' }}></Box>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>


      <Stack direction='row' sx={{
        alignItems: 'center', justifyContent: 'space-between', padding: 2,
        '&>p:nth-child(1)': { color: 'white !important', fontSize: '14px', fontWeight: 500 },
        '&>p:nth-child(2)': { color: 'white !important', fontSize: '14px', fontWeight: 500 },
        '&>p:nth-child(2)>span': { color: iconcolorpink, fontSize: '14px', fontWeight: 500 },
      }}>
        <Typography variant="body1" color="initial">Invite friends</Typography>
        <Typography variant="body1" color="initial">Income  <span> 10 billion </span> Commission</Typography>
      </Stack>
      <Box sx={style.invitebutton}>
        <NavLink to="/promotion/PromotionShare">
          <Typography >INVITATION LINK</Typography>
        </NavLink>
      </Box>
      <Box sx={style.invitebuttontwo}>
        <NavLink to="/promotion/PromotionShare">
          <Typography >Copy invitation link</Typography>
        </NavLink>
      </Box>
    </Container >
  )
}

export default Invitaton

const style = {
  header: {
    padding: '15px 8px',
    background: zubgmid,
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
  invitebutton: {
    width: '100%', background: zubgback, paddingTop: '40px', mt: '-10px',
    '&>a>p': { width: '80%', marginLeft: '10%', borderRadius: '10px', textAlign: 'center', padding: '10px', background: iconcoloryellow, color: 'white', fontSize: '17px', fontWeight: 600 }
  },
  invitebuttontwo: {
    width: '100%', background: 'transparent', paddingTop: '40px', mt: '-10px', pb: 5,
    '&>a>p': { width: '80%', marginLeft: '10%', borderRadius: '10px', textAlign: 'center', padding: '10px', background: iconcolorpink, color: 'white', fontSize: '17px', fontWeight: 600, }
  },
};


