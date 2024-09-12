import { Container, Typography, Box, } from '@mui/material'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import empty from '../../../assets/images/empty.png'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Layout from '../../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';
import { iconcolorpink, zubgback, zubgmid } from '../../../Shared/color';


function Subordinate() {


  const [value, setValue] = React.useState(0);
  console.log(value)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%' }}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">New subordinates</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{
          width: '95%', background: zubgmid, marginLeft: '2.5%', marginTop: '10px', borderRadius: '5px', color: 'white !important',
          '&>div>div>div>button': { color: 'gray' },
          '&>div>div>div>button.Mui-selected ': { color: iconcolorpink },
        }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Today" />
            <Tab label="Yesterday" />
            <Tab label="This month" />
          </Tabs>
        </Box>
        {
          value === 0 &&
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80vh' }}>
            <Box component='img' src={empty} sx={{ width: '30%', height: '30%', marginLeft: '35%' }}></Box>
          </Box>
        }
        {
          value === 1 &&
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80vh' }}>
            <Box component='img' src={empty} sx={{ width: '30%', height: '30%', marginLeft: '35%' }}></Box>
          </Box>
        }
        {
          value === 2 &&
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80vh' }}>
            <Box component='img' src={empty} sx={{ width: '30%', height: '30%', marginLeft: '35%' }}></Box>
          </Box>
        }
      </Container >
    </Layout>
  )
}

export default Subordinate

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
};







