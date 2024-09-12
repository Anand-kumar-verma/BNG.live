import { Box } from '@mui/material'
import React from 'react'
import Footer from "./component/Footer/Footer";
import Header from "./component/Header.js/Header";
import { bgdarkgray } from '../../Shared/color';

function Layout(props) {
  const { header = true, footer = true, children } = props
  return (
    <Box sx={style.root}>
      {header && <Header />}

      {children}

      {footer && <Footer />}
    </Box>
  )
}

export default Layout

const style = {
  root: { position: 'relative', background: bgdarkgray, maxWidth: '400px', margin: 'auto', minHeight: '100vh', },
}