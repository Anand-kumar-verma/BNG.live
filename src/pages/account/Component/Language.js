import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { bgtan, zubgback, zubgbackgrad, zubgmid, zubgtext } from '../../../Shared/color';
import english from '../../../assets/images/enflag.png';
import india from '../../../assets/images/inflag.webp';
import Layout from '../../../component/Layout/Layout';
import theme from '../../../utils/theme';


function Languages() {


  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };


  const [value, setValue] = React.useState(1);

  return (
    <Layout header={false}>
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Language</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{ mt: '10px', padding: '10px', width: '95%', marginLeft: '2.5%', borderRadius: '10px', background: zubgtext }}>
          <Stack direction={'row'} sx={{
            alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', background: value === 1 ? theme.palette.secondary.main : 'transparent',
            padding: '5px', borderRadius: '5PX',
            '&>div>p': { color: 'white' },
          }} component={NavLink} onClick={() => setValue(1)}>
            <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Box component='img' src={english} sx={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}></Box>
              <Typography variant="body1" color="initial">English</Typography>
            </Stack>
            {value === 1 && <CheckCircleIcon sx={{ color: 'white' }} />}
          </Stack>
          <Stack direction={'row'} sx={{
            alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', background: value === 2 ? theme.palette.secondary.main : 'transparent',
            padding: '5px', borderRadius: '5PX',
            '&>div>p': { color: 'white' },
          }} component={NavLink} onClick={() => setValue(2)}>
            <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Box component='img' src={india} sx={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}></Box>
              <Typography variant="body1" color="initial">हिन्दी</Typography>
            </Stack>
            {value === 2 && <CheckCircleIcon sx={{ color: 'white' }} />}
          </Stack>
        </Box>
      </Container>
    </Layout >
  );
};

export default Languages;


export const style = {
  container: { background: zubgback, width: '100%', height: '100vh', overflow: 'auto', },
  header: {
    padding: '10px 8px',
    background: zubgtext,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: bgtan,
    },
    '& > a > svg': {
      color: bgtan,
      fontSize: '35px'
    }
  },
  notificationBox: {
    width: '95%', marginLeft: '2.5%', borderRadius: '10px', background: zubgmid, padding: '10px', mt: '10px',
    '&>div>div>p': { color: 'white', fontSize: '14px', marginLeft: '10px', fontWeight: '500', },
    '&>p': { color: 'white', fontSize: '13px', marginLeft: '0px', fontWeight: '500', mt: '10px', },
    '&>div>div>svg': { color: 'white', fontSize: '24px', }, '&>div>svg': { color: 'white', fontSize: '24px', },
  },
  notificationStack: { alignItems: 'center', justifyContent: 'space-between', },
  paytmbtntwo: { borderRadius: '5px', textTransform: 'capitalize', mb: 2, background: zubgbackgrad, color: 'white !important', width: '100%', mt: '20px', border: "1px solid white", padding: '10px', '&:hover': { background: zubgbackgrad, border: "1px solid transparent", } },

};
