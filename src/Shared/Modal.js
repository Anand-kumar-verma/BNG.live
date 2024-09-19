import React, { useState, useEffect } from 'react';
import { Modal, Button, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import { bgdarkgray, bggold, bglightgray, bgtan } from './color';
import { Close } from '@mui/icons-material';

function MyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='fcc'
        style={{ background: '000000c7' }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            width: 300,
            bgcolor: bgdarkgray,
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ background: '#4D4D4C', padding: 1, textAlign: 'center', }}>
            <Typography id="modal-title" className='w fp15 fw500'>
              Extra first deposit bonus
            </Typography>
            <Typography id="modal-title" className='w fp13 fw400'>
              Each account can only receive rewards once
            </Typography>
          </Box>
          <Box sx={{ background: bgdarkgray, textAlign: 'start', maxHeight: '52vh', overflowY: 'scroll' }}>
            <Box className="w95 w" sx={{ p: 1, background: '#4D4D4C', borderRadius: '7px', my: 1, }}>
              <Box className="">
                <Box className="fcsb w">
                  <Typography className='w fp14 fw500'>First deposit<span className=' fp13 fw400' style={{ color: bggold }}>200000</span> </Typography>
                  <Typography className=' fp13' sx={{ color: bggold }}>+ ₹10,000.00</Typography>
                </Box>
                <Typography className='w fp13' my={1} sx={{ lineHeight: '15px' }}>Deposit 200000 for the first time and you will receive 10000 bonus</Typography>
                <Box className="fcsb">
                  <Typography sx={{ textAlign: 'center', width: '60%', background: bgdarkgray, borderRadius: '10px', m: 0, p: 0, textTransform: 'capitalize !important', }} className='w fp13 fw400'>0/200000</Typography>
                  <Button variant='outlined' sx={{ m: 0, p: '0px 8px', }}>Deposit</Button>
                </Box>
              </Box>
            </Box>
            <Box className="w95 w" sx={{ p: 1, background: '#4D4D4C', borderRadius: '7px', my: 1, }}>
              <Box className="">
                <Box className="fcsb w">
                  <Typography className='w fp14 fw500'>First deposit<span className=' fp13 fw400' style={{ color: bggold }}>100000</span> </Typography>
                  <Typography className=' fp13' sx={{ color: bggold }}>+ ₹5,000.00</Typography>
                </Box>
                <Typography className='w fp13' my={1} sx={{ lineHeight: '15px' }}>Deposit 100000 for the first time and you will receive 5000 bonus</Typography>
                <Box className="fcsb">
                  <Typography sx={{ textAlign: 'center', width: '60%', background: bgdarkgray, borderRadius: '10px', m: 0, p: 0, textTransform: 'capitalize !important', }} className='w fp13 fw400'>0/100000</Typography>
                  <Button variant='outlined' sx={{ m: 0, p: '0px 8px', }}>Deposit</Button>
                </Box>
              </Box>
            </Box>
            <Box className="w95 w" sx={{ p: 1, background: '#4D4D4C', borderRadius: '7px', my: 1, }}>
              <Box className="">
                <Box className="fcsb w">
                  <Typography className='w fp14 fw500'>First deposit<span className=' fp13 fw400' style={{ color: bggold }}>30000</span> </Typography>
                  <Typography className=' fp13' sx={{ color: bggold }}>+ ₹2,000.00</Typography>
                </Box>
                <Typography className='w fp13' my={1} sx={{ lineHeight: '15px' }}>Deposit 30000 for the first time and you will receive 2000 bonus</Typography>
                <Box className="fcsb">
                  <Typography sx={{ textAlign: 'center', width: '60%', background: bgdarkgray, borderRadius: '10px', m: 0, p: 0, textTransform: 'capitalize !important', }} className='w fp13 fw400'>0/30000</Typography>
                  <Button variant='outlined' sx={{ m: 0, p: '0px 8px', }}>Deposit</Button>
                </Box>
              </Box>
            </Box>
            <Box className="w95 w" sx={{ p: 1, background: '#4D4D4C', borderRadius: '7px', my: 1, }}>
              <Box className="">
                <Box className="fcsb w">
                  <Typography className='w fp14 fw500'>First deposit<span className=' fp13 fw400' style={{ color: bggold }}>10000</span> </Typography>
                  <Typography className=' fp13' sx={{ color: bggold }}>+ ₹600.00</Typography>
                </Box>
                <Typography className='w fp13' my={1} sx={{ lineHeight: '15px' }}>Deposit 10000 for the first time and you will receive 600 bonus</Typography>
                <Box className="fcsb">
                  <Typography sx={{ textAlign: 'center', width: '60%', background: bgdarkgray, borderRadius: '10px', m: 0, p: 0, textTransform: 'capitalize !important', }} className='w fp13 fw400'>0/10000</Typography>
                  <Button variant='outlined' sx={{ m: 0, p: '0px 8px', }}>Deposit</Button>
                </Box>
              </Box>
            </Box>
            <Box className="w95 w" sx={{ p: 1, background: '#4D4D4C', borderRadius: '7px', my: 1, }}>
              <Box className="">
                <Box className="fcsb w">
                  <Typography className='w fp14 fw500'>First deposit<span className=' fp13 fw400' style={{ color: bggold }}>3000</span> </Typography>
                  <Typography className=' fp13' sx={{ color: bggold }}>+ ₹300.00</Typography>
                </Box>
                <Typography className='w fp13' my={1} sx={{ lineHeight: '15px' }}>Deposit 3000 for the first time and you will receive 300 bonus</Typography>
                <Box className="fcsb">
                  <Typography sx={{ textAlign: 'center', width: '60%', background: bgdarkgray, borderRadius: '10px', m: 0, p: 0, textTransform: 'capitalize !important', }} className='w fp13 fw400'>0/3000</Typography>
                  <Button variant='outlined' sx={{ m: 0, p: '0px 8px', }}>Deposit</Button>
                </Box>
              </Box>
            </Box>
            <Box className="w95 w" sx={{ p: 1, background: '#4D4D4C', borderRadius: '7px', my: 1, }}>
              <Box className="">
                <Box className="fcsb w">
                  <Typography className='w fp14 fw500'>First deposit<span className=' fp13 fw400' style={{ color: bggold }}>1000</span> </Typography>
                  <Typography className=' fp13' sx={{ color: bggold }}>+ ₹150.00</Typography>
                </Box>
                <Typography className='w fp13' my={1} sx={{ lineHeight: '15px' }}>Deposit 1000 for the first time and you will receive 150 bonus</Typography>
                <Box className="fcsb">
                  <Typography sx={{ textAlign: 'center', width: '60%', background: bgdarkgray, borderRadius: '10px', m: 0, p: 0, textTransform: 'capitalize !important', }} className='w fp13 fw400'>0/1000</Typography>
                  <Button variant='outlined' sx={{ m: 0, p: '0px 8px', }}>Deposit</Button>
                </Box>
              </Box>
            </Box>
            <Box className="w95 w" sx={{ p: 1, background: '#4D4D4C', borderRadius: '7px', my: 1, }}>
              <Box className="">
                <Box className="fcsb w">
                  <Typography className='w fp14 fw500'>First deposit<span className=' fp13 fw400' style={{ color: bggold }}>300</span> </Typography>
                  <Typography className=' fp13' sx={{ color: bggold }}>+ ₹60.00</Typography>
                </Box>
                <Typography className='w fp13' my={1} sx={{ lineHeight: '15px' }}>Deposit 300 for the first time and you will receive 60 bonus</Typography>
                <Box className="fcsb">
                  <Typography sx={{ textAlign: 'center', width: '60%', background: bgdarkgray, borderRadius: '10px', m: 0, p: 0, textTransform: 'capitalize !important', }} className='w fp13 fw400'>0/300</Typography>
                  <Button variant='outlined' sx={{ m: 0, p: '0px 8px', }}>Deposit</Button>
                </Box>
              </Box>
            </Box>
            <Box className="w95 w" sx={{ p: 1, background: '#4D4D4C', borderRadius: '7px', my: 1, }}>
              <Box className="">
                <Box className="fcsb w">
                  <Typography className='w fp14 fw500'>First deposit<span className=' fp13 fw400' style={{ color: bggold }}>100</span> </Typography>
                  <Typography className=' fp13' sx={{ color: bggold }}>+ ₹20.00</Typography>
                </Box>
                <Typography className='w fp13' my={1} sx={{ lineHeight: '15px' }}>Deposit 100 for the first time and you will receive 20 bonus</Typography>
                <Box className="fcsb">
                  <Typography sx={{ textAlign: 'center', width: '60%', background: bgdarkgray, borderRadius: '10px', m: 0, p: 0, textTransform: 'capitalize !important', }} className='w fp13 fw400'>0/100</Typography>
                  <Button variant='outlined' sx={{ m: 0, p: '0px 8px', }}>Deposit</Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 1, position: 'relative' }}>
            <Box sx={{ mt: 1, }} className="w95 fcsb">
              <FormControlLabel
                classname="aghy"
                sx={{ m: 0, width: '20px' }}
                label=""
                control={
                  <Checkbox
                    sx={{ color: bggold }}
                    value=""
                    color="primary"
                  />
                }
              />
              <Typography variant="body1" className='w fp13 '>No more reminders today</Typography>
              <Button variant='contained' sx={{ m: 0, p: '0px 8px', borderRadius: '50px', color: bgtan, textTransform: 'capitalize !important', }}>Activity</Button>
            </Box>
          </Box>
          <Box sx={{ mt: 1, }} className="w95 fcc" >
            <Button onClick={handleClose} sx={{
              pt: 0,
              '&>svg': {
                border: '1px solid #FFC107',
                borderRadius: '50px',
                padding: '1px',
                width: '25px',
                height: '25px',
              }
            }}><Close /></Button>
          </Box>
        </Box>
      </Modal >
    </div >
  );
}

export default MyModal;