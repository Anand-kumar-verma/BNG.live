import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import asistant from "../../../../assets/images/asistant.png"
import backbtn from "../../../../assets/images/backBtn.png"
import music from "../../../../assets/images/music.png"
import musicoff from "../../../../assets/images/musicoff.png"
import logo from '../../../../assets/img/logo.png'
import { bglightgray } from '../../../../Shared/color'


function Header() {
  const [musicicon, setmusicicon] = useState(true)
  const navigate = useNavigate()

  return (
    <Box >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100%",
          maxWidth: '400px',
          padding: '10px',
          background: bglightgray
        }}
      >
        <Box sx={{ width: '33%' }}>
          <NavLink onClick={() => navigate(-1)}>
            <Box component="img" src={backbtn} width={25}></Box>
          </NavLink>
        </Box>
        <Box sx={{ width: '33%' }}>
          <Box component='img' src={logo} sx={{ width: '180px', margin: 'auto' }}></Box>
        </Box>
        <Box sx={{ width: '33%', display: 'flex', justifyContent: 'end' }}>
          <Stack direction="row">
            <NavLink to={"/CustomerService"}>
              <Box
                component="img"
                src={asistant}
                width={25}
                sx={{ mr: 2 }}
              ></Box>
            </NavLink>
            <NavLink onClick={() => setmusicicon(!musicicon)}>
              {musicicon === true ?
                <Box component="img" src={music} width={25}></Box>
                :
                <Box component="img" src={musicoff} width={25}></Box>
              }
            </NavLink>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Header
