import React from 'react'
import Layout from '../../../component/Layout/Layout'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'
import { bgcolorlight } from '../../../Shared/color'
import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'



function InvitationBonusRules() {

  const data = [
    { account: '1People', deposit: '₹300.00', bonus: '₹55.00' },
    { account: '3People', deposit: '₹300.00', bonus: '₹155.00' },
    { account: '10People', deposit: '₹300.00', bonus: '₹555.00' },
    { account: '30People', deposit: '₹300.00', bonus: '₹1,555.00' },
    { account: '60People', deposit: '₹300.00', bonus: '₹2,955.00' },
    { account: '100People', deposit: '₹300.00', bonus: '₹5,655.00' },
    { account: '200People', deposit: '₹300.00', bonus: '₹11,555.00' },
    { account: '500People', deposit: '₹300.00', bonus: '₹28,555.00' },
    { account: '1000People', deposit: '₹300.00', bonus: '₹58,555.00' },
    { account: '5000People', deposit: '₹300.00', bonus: '₹365,555.00' },
    { account: '10000People', deposit: '₹300.00', bonus: '₹765,555.00' },
    { account: '20000People', deposit: '₹300.00', bonus: '₹1,655,555.00' },
    { account: '50000People', deposit: '₹300.00', bonus: '₹3,655,555.00' },
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
          <Typography className='fp15' sx={{ color: 'white', width: '60%', textAlign: 'center' }}>Invitation reward rules</Typography>
          <Typography sx={{ color: 'white', width: '20%' }}></Typography>
        </Box>
      </Box>


      <Typography variant="body1" className='w fp13 fw500 w95' mt={1}>Invite friends and recharge to get additional platform rewards!</Typography>
      <Typography variant="body1" className='w fp13 fw500 w95' mt={1}>After being claimed, the rewards will be directly distributed to the wallet balance within 10 minutes.</Typography>


      <Box sx={{ width: '100%', padding: '16px' }}>
        <TableContainer component={Paper} sx={{ backgroundColor: '#333', borderRadius: '10px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: 0, py: 1, textAlign: 'center', borderBottom: 'none', color: '#fff', fontWeight: 600, backgroundColor: '#3A3947' }}>Invite account</TableCell>
                <TableCell sx={{ padding: 0, py: 1, textAlign: 'center', borderBottom: 'none', color: '#fff', fontWeight: 600, backgroundColor: '#3A3947' }}>Deposit amount</TableCell>
                <TableCell sx={{ padding: 0, py: 1, textAlign: 'center', borderBottom: 'none', color: '#fff', fontWeight: 600, backgroundColor: '#3A3947' }}>Bonus</TableCell>
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
              "Only when the number of invited accounts is reached and each account can meet the recharge amount can you receive the bonus.",
              "The invitation account meets the requirements, but the recharge amount of the account does not meet the requirements, and the bonus cannot be claimed.",
              "Please claim the event bonus within the event period. All bonuses will be cleared after the event expires.",
              "Please complete the task within the event period. After the event expires, the invitation record will be cleared."
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

export default InvitationBonusRules