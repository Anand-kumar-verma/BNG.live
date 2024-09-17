import { ArrowBackIos } from '@mui/icons-material'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball'
import WidgetsIcon from '@mui/icons-material/Widgets'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../../component/Layout/Layout'
import { bgcolorlight, bggold, bggrad, bgtan } from '../../../Shared/color'
import empty from '../../../assets/images/empty.png'



function RebateHistory() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  console.log(tabValue);

  return (
    <Layout header={false} footer={false}>
      <Box sx={{ py: '12px', background: bgcolorlight }}>
        <Box className="fcsb w95" >
          <Box sx={{ width: '20%' }}>
            <ArrowBackIos className='fp18' sx={{ color: 'white', }} onClick={handleBack} />
          </Box>
          <Typography className='fp17' sx={{ color: 'white', width: '60%', textAlign: 'center' }}>Rebate History</Typography>
          <Typography sx={{ color: 'white', width: '20%' }}></Typography>
        </Box>
      </Box>

      <Box sx={styles.root}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={styles.tabContainer}
        >
          <Tab icon={< WidgetsIcon />}
            label="All" sx={styles.tab} />
          <Tab icon={< BubbleChartIcon />}
            label="Wingo" sx={styles.tab} />
          <Tab icon={< SportsVolleyballIcon />}
            label="TRX" sx={styles.tab} />
          <Tab icon={< FlightTakeoffIcon />} label="Aviator" sx={styles.tab} />
        </Tabs>
        {tabValue === 0 ? (
          <Box>
            <Box sx={styles.emp} component='img' src={empty}></Box>
            <Typography className='w f15 fw500' mt={2} sx={{ textAlign: 'center' }}>No data</Typography>
          </Box>
        ) :
          <Box></Box>
        }
        {tabValue === 1 ? (
          <Box>
            <Box sx={styles.emp} component='img' src={empty}></Box>
            <Typography className='w f15 fw500' mt={2} sx={{ textAlign: 'center' }}>No data</Typography>
          </Box>
        ) :
          <Box></Box>
        }
        {tabValue === 2 ? (
          <Box>
            <Box sx={styles.emp} component='img' src={empty}></Box>
            <Typography className='w f15 fw500' mt={2} sx={{ textAlign: 'center' }}>No data</Typography>
          </Box>
        ) :
          <Box></Box>
        }
        {tabValue === 3 ? (
          <Box>
            <Box sx={styles.emp} component='img' src={empty}></Box>
            <Typography className='w f15 fw500' mt={2} sx={{ textAlign: 'center' }}>No data</Typography>
          </Box>
        ) :
          <Box></Box>
        }
      </Box>
    </Layout>
  )
}

export default RebateHistory

const styles = {
  root: {
    minHeight: '100vh',
    padding: 2,
  },
  tabContainer: {
    backgroundColor: 'transparent',
    marginBottom: 2,
  },
  tab: {
    backgroundColor: '#3d3d3d',
    color: '#fff',
    minHeight: '48px',
    borderRadius: '8px',
    mr: 1,
    fontSize: '13px',
    padding: '6px 20px !important ',
    '&>svg': { marginBottom: '1px !important', },
    '&.Mui-selected': {
      background: bggrad,
      color: bgtan,
    },
  },
  emp: {
    width: '250px',
    margin: 'auto',
    marginTop: '51px',
    filter: 'brightness(0.5)',
  },
};