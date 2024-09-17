import React from 'react'
import Layout from '../../../component/Layout/Layout'
import { Box, Typography } from '@mui/material'
import { bgcolorlight } from '../../../Shared/color'
import { ArrowBackIos } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function InvitationBonusRecord() {

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
          <Typography className='fp15' sx={{ color: 'white', width: '60%', textAlign: 'center' }}>Invitation record</Typography>
          <Typography sx={{ color: 'white', width: '20%' }}></Typography>
        </Box>
      </Box>

      <Typography variant="body1" color="initial" sx={{ mt: 2, textAlign: 'center', color: 'white' }}>No Data Found</Typography>
    </Layout>
  )
}

export default InvitationBonusRecord