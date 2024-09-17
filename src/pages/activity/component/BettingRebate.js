import React from 'react'
import Layout from '../../../component/Layout/Layout'
import { Box, Typography } from '@mui/material'
import { bgcolorlight, bggold, bggrad, bgtan } from '../../../Shared/color'
import { ArrowBackIos, Margin } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom'
import { Card, CardContent, Button, Grid, Divider, Tab, Tabs } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { FiberManualRecord, } from '@mui/icons-material';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';

function BettingRebate() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Layout header={false} footer={false}>
      <Box sx={{ py: '12px', background: bgcolorlight }}>
        <Box className="fcsb w95" >
          <Box sx={{ width: '20%' }}>
            <ArrowBackIos className='fp18' sx={{ color: 'white', }} onClick={handleBack} />
          </Box>
          <Typography className='fp17' sx={{ color: 'white', width: '60%', textAlign: 'center' }}>Rebate</Typography>
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
        <Card sx={styles.rebateCard}>
          <CardContent sx={{ padding: '8px', }}>
            <Typography sx={{ mb: 1 }} className='f15 fw600 w'>
              All-Total betting rebate
            </Typography>
            <Box sx={styles.rebateHeader}>
              <VerifiedUserIcon fontSize="small" style={{ marginRight: '4px' }} />
              Real-time count
            </Box>
            <Box sx={styles.amountSection}>
              <PriceChangeOutlinedIcon fontSize="large" sx={styles.amountIcon} />
              <Typography className='f15 fw600 w'>
                0.00
              </Typography>
            </Box>
            <Typography variant="body2" sx={styles.rebateText}>
              Upgrade VIP level to increase rebate rate
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: '1px' }}>
              <Grid item xs={6}>
                <Typography variant="body2" sx={styles.rebateText}>
                  Today rebate <br /> <strong>0</strong>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={styles.rebateText}>
                  Total rebate <br /> <strong>0</strong>
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={styles.autoCodeText}>
              Automatic code washing at 01:00:00 every morning
            </Typography>
          </CardContent>
        </Card>
        <Typography variant="h6" sx={styles.footer}>
          Rebate history
        </Typography>
        <Button component={NavLink} to="/activity/Laundry/LaundryRecord" variant="outlined" sx={styles.footerButton}>
          All history
        </Button>
      </Box>
    </Layout>
  )
}

export default BettingRebate

const styles = {
  root: {
    backgroundColor: '#333',
    minHeight: '100vh',
    padding: 2,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  headerText: {
    color: '#fff',
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
  rebateCard: {
    backgroundColor: '#2f2f2f',
    color: '#fff',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  rebateHeader: {
    color: bggold,
    borderRadius: '5px',
    fontSize: '12px',
    padding: '2px 8px',
    display: 'inline-flex',
    alignItems: 'center',
    border: `1px solid ${bggold}`,
  },
  amountSection: {
    display: 'flex',
    alignItems: 'center',
    my: '16px',
  },
  amountIcon: {
    color: '#FFCC00',
    marginRight: '8px',
    fontSize: '25px !important',
  },
  rebateText: {
    backgroundColor: '#444',
    padding: '8px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  autoCodeText: {
    color: '#ccc',
    marginTop: 2,
  },
  footer: {
    color: 'white',
    marginTop: '15px',
  },
  footerButton: {
    borderColor: bggold,
    color: bggold,
    textTransform: 'none',
    borderRadius: '24px',
    marginTop: '8px',
    width: '100%',
  },
};