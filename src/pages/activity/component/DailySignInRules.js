import React from 'react'
import Layout from '../../../component/Layout/Layout'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'
import { bgcolorlight } from '../../../Shared/color'
import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'



function DailySignInRules() {

  const data = [
    { account: '1', deposit: '₹300.00', bonus: '₹7.00' },
    { account: '2', deposit: '₹1,000.00', bonus: '₹20.00' },
    { account: '3', deposit: '₹3,000.00', bonus: '₹100.00' },
    { account: '4', deposit: '₹8,000.00', bonus: '₹200.00' },
    { account: '5', deposit: '₹20,000.00', bonus: '₹450.00' },
    { account: '6', deposit: '₹80,000.00', bonus: '₹2,400.00' },
    { account: '7', deposit: '₹200,000.00', bonus: '₹6,400.00' },
  ];
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Layout header={false} footer={false}>
      <Box sx={{ py: '12px', background: bgcolorlight }}>
        <Box className="fcsb w95" >
          <Box sx={{ width: '20%' }}>
            <ArrowBackIos className='fp18' sx={{ color: 'white', }} onClick={handleBack} />
          </Box>
          <Typography className='fp15' sx={{ color: 'white', width: '60%', textAlign: 'center' }}>Game Rules</Typography>
          <Typography sx={{ color: 'white', width: '20%' }}></Typography>
        </Box>
      </Box>

      <Box sx={{ width: '100%', padding: '16px' }}>
        <TableContainer component={Paper} sx={{ backgroundColor: '#333', borderRadius: '10px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="f17" sx={{ padding: '5px', lineHeight: '15px', py: 1, textAlign: 'center', borderBottom: 'none', color: '#fff', fontWeight: 600, backgroundColor: '#3A3947' }}>Continuous attendance</TableCell>
                <TableCell className="f17" sx={{ padding: '5px', lineHeight: '15px', py: 1, textAlign: 'center', borderBottom: 'none', color: '#fff', fontWeight: 600, backgroundColor: '#3A3947' }}>Accumulated amount</TableCell>
                <TableCell className="f17" sx={{ padding: '5px', lineHeight: '15px', py: 1, textAlign: 'center', borderBottom: 'none', color: '#fff', fontWeight: 600, backgroundColor: '#3A3947' }}>Attendance bonus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? '#333332' : '#282730',
                  }}
                >
                  <TableCell sx={{ textAlign: 'center', borderBottom: 'none', color: '#ddd' }}>{row.account}</TableCell>
                  <TableCell sx={{ textAlign: 'center', borderBottom: 'none', color: '#ddd' }}>{row.deposit}</TableCell>
                  <TableCell sx={{ textAlign: 'center', borderBottom: 'none', color: '#ddd' }}>{row.bonus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>


      <Card
        className='w95'
        sx={{
          backgroundColor: '#2f2f2f',
          color: '#ffffff',
          borderRadius: 2,
          boxShadow: 'none',
          padding: '0px 16px',
        }}
      >
        <Box
          sx={{
            width: '50%',
            backgroundColor: '#3A3947',
            padding: '4px 8px',
            textAlign: 'center',
            margin: 'auto',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#a8a5a1', fontFamily: 'inter !important', }}>
            Rules
          </Typography>
        </Box>

        <CardContent sx={{ padding: '0px !important', }}>
          <List >
            {[
              "The higher the number of consecutive login days, the more rewards you get, up to 7 consecutive days",
              "During the activity, please check once a day",
              "Players with no deposit history cannot claim the bonus",
              "Deposit requirements must be met from day one",
              "The platform reserves the right to final interpretation of this activity",
              "When you encounter problems, please contact customer service"
            ].map((rule, index) => (
              <ListItem key={index} sx={{ padding: '8px 0' }}>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <FiberManualRecord fontSize="small" sx={{ color: '#a8a5a1', fontSize: '10px' }} />
                </ListItemIcon>
                <ListItemText
                  primary={rule}
                  primaryTypographyProps={{
                    fontSize: '13px',
                    lineHeight: '1.2',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <Box sx={{ py: 1 }}></Box>
    </Layout>
  )
}

export default DailySignInRules