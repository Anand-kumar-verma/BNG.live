import { Padding } from '@mui/icons-material'
import { Box, Container, Typography, colors } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WalletIcon from '@mui/icons-material/Wallet';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import promotion from '../../../../assets/img/promotion.png'
import zIndex from '@mui/material/styles/zIndex'
import { bgfootergray, bggold, bggray } from '../../../../Shared/color';
import { flexcoloumcenter } from '../../../../Shared/Commom';

function Footer() {

  const [value, setValue] = useState(1);

  const location = useLocation();
  return (

    < Box sx={style.root} >
      <Box sx={style.footer}>
        <Box sx={style.footerinner}>
          <NavLink onClick={() => setValue(1)} to="/dashboard">
            <Box sx={{ ...flexcoloumcenter, ...style.navbarbox }}>
              <OtherHousesIcon className="funp18" sx={{ '&>path': { color: location.pathname == '/dashboard' ? bggold : bggray } }} />
              <Typography className="funp13" sx={{ color: location.pathname === '/dashboard' ? bggold : bggray }}>Home</Typography>
            </Box>
          </NavLink>
          <NavLink onClick={() => setValue(2)} to="/activity">
            <Box sx={{ ...flexcoloumcenter, ...style.navbarbox }}>
              <EmojiEventsIcon className="funp18" sx={{ '&>path': { color: location.pathname === '/activity' ? bggold : bggray } }} />
              <Typography className="funp13" sx={{ color: location.pathname === '/activity' ? bggold : bggray }}>Activity</Typography>
            </Box>
          </NavLink>
          <NavLink onClick={() => setValue(3)} to="/promotion">
            <Box sx={{ ...flexcoloumcenter, ...style.navbarbox, }}>
              <Box component='img' src={promotion} sx={{ position: 'absolute', width: '60px', top: '-18px' }}></Box>
              <Typography className="funp13" sx={{ color: location.pathname === '/promotion' ? bggold : bggray }}>Promotion</Typography>
            </Box>
          </NavLink>
          <NavLink onClick={() => setValue(4)} to="/wallet">
            <Box sx={{ ...flexcoloumcenter, ...style.navbarbox }}>
              <WalletIcon className="funp18" sx={{ '&>path': { color: location.pathname === '/wallet' ? bggold : bggray } }} />
              <Typography className="funp13" sx={{ color: location.pathname === '/wallet' ? bggold : bggray }} >Wallet</Typography>
            </Box>
          </NavLink>
          <NavLink onClick={() => setValue(5)} to="/account">
            <Box sx={{ ...flexcoloumcenter, ...style.navbarbox }}>
              <AssignmentIndIcon className="funp18" sx={{ '&>path': { color: location.pathname === '/account' ? bggold : bggray } }} />
              <Typography className="funp13" sx={{ color: location.pathname === '/account' ? bggold : bggray }}>Account</Typography>
            </Box>
          </NavLink>
        </Box>
      </Box>
    </Box >
  )
}

export default Footer

const style = {
  root: { position: 'relative', },
  footer: { position: 'fixed', bottom: '0', maxWidth: '400px', width: '100%', background: bgfootergray, padding: '7px 20px ', boxSizing: 'border-Box', zIndex: '5000000' },
  navbarbox: { '&>path': { color: bggray }, '&>svg': { fontSize: '30px', } },
  footerinner: { display: 'flex', alignItems: 'end', justifyContent: 'space-between' },
}


