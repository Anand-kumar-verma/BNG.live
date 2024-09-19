import React from 'react'
import Layout from '../../../component/Layout/Layout'
import { Box, Typography, IconButton, Button, Divider } from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'
import { bgcolorlight, bgcolorlight2 } from '../../../Shared/color'
import invitation_bg from "../../../assets/images/invitation_bg-643b61e5.png";
import BettingRebate from "../../../assets/images/inviterecord-83990d9a.svg";
import invitationBonus from "../../../assets/images/inviterule-7c5f5524.svg";
import { NavLink, useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';


function InvitationBonus() {


  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };


  return (
    <Layout header={false}>
      <Box sx={{ py: '12px', background: bgcolorlight }}>
        <Box className="fcsb w95" >
          <Box sx={{ width: '30%' }}>
            <ArrowBackIos className='fp18' sx={{ color: 'white', }} onClick={handleBack} />
          </Box>
          <Typography className='fp15' sx={{ color: 'white', width: '30%' }}>Invitation bonus</Typography>
          <Typography sx={{ color: 'white', width: '30%' }}></Typography>
        </Box>
      </Box>

      <Box sx={{ backgroundImage: `url(${invitation_bg}),linear-gradient(94deg,#f99937 2.72%,#ff6922 43.54%,#ff8039 98.54%)`, backgroundSize: '100% 100%', }}>
        <Box className="w95" sx={{ py: 2, pb: 4, }}>
          <Typography className='w fp18 fw400'>Invite friends and deposit</Typography>
          <Typography mt={2} className='w fp14 fw400'>Both parties can receive rewards</Typography>
          <Typography className='w fp14 fw400' sx={{ width: '60%' }}> Invite friends to register and recharge to receive rewards</Typography>
          <Typography className='w fp14 fw400'>activity date</Typography>
          <Typography mt={1} className='w fp16 fw400'>2024-05-03 - 2099-05-03</Typography>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', height: '120px', }}>
        <Box sx={{ position: 'absolute', top: '-10%', width: '90%', left: '5%', borderRadius: '10px', background: bgcolorlight2, padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', }}>
          <Box className="fccc fp13" component={NavLink} to="/activity/InvitationBonus/Rule">
            <Box component='img' sx={{ width: '50px' }} src={invitationBonus}></Box>
            <Typography className="fp13" sx={{ color: 'white' }}>Invitation reward rules </Typography>
          </Box>
          <Box className="fccc fp13" component={NavLink} to="/activity/InvitationBonus/Record">
            <Box component='img' sx={{ width: '50px' }} src={BettingRebate}></Box>
            <Typography className="fp13" sx={{ color: 'white' }}>Invitation record </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>1</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹55.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>1</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 1</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 1</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>2</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹155.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>3</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 3</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 3</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>
      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>3</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>10</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 10</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 10</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>4</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹1,555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>30</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 30</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 30</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>5</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹2,955.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>60</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 60</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 60</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>6</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹5,655.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>100</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 100</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 100</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>7</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹11,555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>200</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 200</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 200</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>8</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹28,555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>500</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 500</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 500</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>9</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹58,555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>1000</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 1000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 1000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>10</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹365,555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>5000</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 5000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 5000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>11</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹765,555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>10000</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 10000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 10000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>12</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹1,655,555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>20000</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 20000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 20000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>

      <Box className="w95" sx={styles.container}>
        <Box sx={styles.flexBox}>
          <Typography variant="body2" sx={styles.bonusBox}> Bonus{' '}<Box component="span" sx={styles.bonusNumber}>13</Box>
            <Box className="fcc" sx={styles.closeIconBox}><CloseIcon className="fp18" /></Box>
          </Typography>
          <Typography className="fw600" sx={styles.bonusAmount}>₹3,655,555.00</Typography>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Number of invitees</Typography>
            <Typography className="fp14 fw600" sx={styles.valueText}>50000</Typography>
          </Box>
        </Box>
        <Box className="w95" sx={styles.detailsBox}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className="fp14 fw600" sx={styles.labelText}>Recharge per people</Typography>
            <Typography className="fp14 fw600" sx={styles.rechargeText}>₹300.00</Typography>
          </Box>
        </Box>
        <Box sx={styles.separator}>
          <Divider sx={{ backgroundColor: '#777', marginY: '16px' }} />
        </Box>
        <Box sx={styles.numberDetails}>
          <Box sx={styles.numberDetailBox}>
            <Typography variant="body2" sx={styles.numberDetailText}>0 / 50000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Number of invitees</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography variant="body2" sx={styles.depositDetailText}>0 / 50000</Typography>
            <Typography variant="caption" sx={{ color: '#ddd' }}>Deposit number</Typography>
          </Box>
        </Box>
        <Button className="goldbtn2" sx={styles.button}>Unfinished</Button>
      </Box>
      <Box sx={{ py: 5 }}></Box>
    </Layout >
  )
}

export default InvitationBonus


const styles = {
  container: {
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    pb: 2,
    mb: 2,
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px',
    position: 'relative',
  },
  bonusBox: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#17B15E',
    padding: '10px',
    borderRadius: '10px 0px 20px 0px',
  },
  bonusNumber: {
    marginLeft: '16px',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '50%',
    padding: '0px 8px',
    fontWeight: 600,
    fontSize: '14px',
    width: '23px',
    height: '23px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIconBox: {
    marginLeft: 4,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
  },
  bonusAmount: {
    position: 'absolute',
    right: '0px',
    color: '#dd9138',
    width: '60%',
    padding: '10px 10px 6px 10px',
    textAlign: 'end',
    borderBottom: '1px dashed white',
    fontSize: '13px',
    fontWeight: '600'
  },
  detailsBox: {
    marginTop: '16px',
    padding: '2px 16px',
    backgroundColor: '#555',
    borderRadius: '2px',
  },
  labelText: {
    color: '#ddd',
  },
  valueText: {
    color: '#fff',
    width: '50%',
    textAlign: 'center',
  },
  rechargeText: {
    color: 'red',
    width: '50%',
    textAlign: 'center',
  },
  separator: {
    width: '90%',
    ml: '5%',
    position: 'relative',
    '&:before': {
      content: '""',
      width: '23px',
      height: '23px',
      backgroundColor: '#262424',
      position: 'absolute',
      top: '-11px',
      left: '-29px',
      borderRadius: '50%',
    },
    '&:after': {
      content: '""',
      width: '23px',
      height: '23px',
      backgroundColor: '#262424',
      position: 'absolute',
      top: '-11px',
      right: '-29px',
      borderRadius: '50%',
    },
  },
  numberDetails: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  numberDetailBox: {
    borderRight: '1px dashed white',
    width: '50%',
  },
  numberDetailText: {
    color: '#ffcc00',
  },
  depositDetailText: {
    color: 'red',
  },
};
