import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { zubgback, zubgbackgrad, zubgmid, zubgtext } from '../../../Shared/color';
import Layout from '../../../component/Layout/Layout';


function RebateRatio() {
  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', }}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Rebate ratio</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{ '&>p': { fontSize: '15px', color: zubgtext, py: 1, px: 1 } }}>
          <Typography variant="body1" color="initial">Lottery commission percentage</Typography>
          <Box>
            <Stack direction='row' sx={{
              px: '2px', py: '10px', background: zubgbackgrad, alignItems: 'center', justifyContent: 'space-between',
              '&>div': { fontSize: '12px', color: 'white !important', width: '20%', textAlign: 'center' },
            }}>
              <Box>Commission level</Box>
              <Box>Tier 1 </Box><Box>Tier 2</Box><Box>Tier 3 </Box><Box>Tier 4 </Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L0</Box><Box>0.6%</Box><Box>0.18%</Box><Box>0.054%</Box><Box>0.0162%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L1</Box><Box>0.7%</Box><Box>0.245%</Box><Box>0.0858%</Box><Box>0.03%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L2</Box><Box>0.75%</Box><Box>0.2812%</Box><Box>0.1054%</Box><Box>0.0396%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L3</Box><Box>0.8%</Box><Box>0.32%</Box><Box>0.128%</Box><Box>0.0512%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L4</Box><Box> 0.85%</Box><Box>0.3612%</Box><Box>0.1536%</Box><Box>0.0652%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L5</Box><Box>0.9%</Box><Box>0.405%</Box><Box>0.1822%</Box><Box>0.082%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L6</Box><Box>1%</Box><Box>0.5%</Box><Box>0.25%</Box><Box>0.125%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L7</Box><Box> 1.1%</Box><Box>0.605%</Box><Box>0.3328%</Box><Box>0.183%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L8</Box><Box>1.2%</Box><Box>0.72%</Box><Box>0.432%</Box><Box>0.2592%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L9</Box><Box>1.3%</Box><Box>0.845%</Box><Box>0.5492%</Box><Box>0.357%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L10</Box><Box>1.4%</Box><Box>0.98%</Box><Box>0.686%</Box><Box>0.4802%</Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ '&>p': { fontSize: '15px', color: zubgtext, py: 1, px: 1 } }}>
          <Typography variant="body1" color="initial">Slots commission percentage</Typography>
          <Box>
            <Stack direction='row' sx={{
              px: '2px', py: '10px', background: zubgbackgrad, alignItems: 'center', justifyContent: 'space-between',
              '&>div': { fontSize: '12px', color: 'white !important', width: '20%', textAlign: 'center' },
            }}>
              <Box>Commission level</Box>
              <Box>Tier 1 </Box><Box>Tier 2</Box><Box>Tier 3 </Box><Box>Tier 4 </Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L0</Box><Box>0.3%</Box><Box>0.09%</Box><Box>0.027%</Box><Box>0.0081%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L1</Box><Box>0.35%</Box><Box>0.1225%</Box><Box>0.0429%</Box><Box>0.015%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L2</Box><Box>0.375%</Box><Box>0.1406%</Box><Box>0.0527%</Box><Box>0.0198%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L3</Box><Box>0.4%</Box><Box>0.16%</Box><Box>0.064%</Box><Box>0.0256%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L4</Box><Box> 0.425%</Box><Box>0.1806%</Box><Box>0.0768%</Box><Box>0.0326%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L5</Box><Box>0.45%</Box><Box>0.2025%</Box><Box>0.0911%</Box><Box>0.041%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L6</Box><Box>0.5%</Box><Box>0.25%</Box><Box>0.125%</Box><Box>0.0625%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L7</Box><Box>0.55%</Box><Box>0.3025%</Box><Box>0.1664%</Box><Box>0.0915%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L8</Box><Box>0.6%</Box><Box>0.36%</Box><Box>0.216%</Box><Box>0.1296%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L9</Box><Box>0.65%</Box><Box>0.4225%</Box><Box>0.2746%</Box><Box>0.1785%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L10</Box><Box>0.7%</Box><Box>0.49%</Box><Box>0.343%</Box><Box>0.2401%</Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ '&>p': { fontSize: '15px', color: zubgtext, py: 1, px: 1 } }}>
          <Typography variant="body1" color="initial">Casino commission percentage</Typography>
          <Box>
            <Stack direction='row' sx={{
              px: '2px', py: '10px', background: zubgbackgrad, alignItems: 'center', justifyContent: 'space-between',
              '&>div': { fontSize: '12px', color: 'white !important', width: '20%', textAlign: 'center' },
            }}>
              <Box>Commission level</Box>
              <Box>Tier 1 </Box><Box>Tier 2</Box><Box>Tier 3 </Box><Box>Tier 4 </Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L0</Box><Box>0.3%</Box><Box>0.09%</Box><Box>0.027%</Box><Box>0.0081%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L1</Box><Box>0.35%</Box><Box>0.1225%</Box><Box>0.0429%</Box><Box>0.015%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L2</Box><Box>0.375%</Box><Box>0.1406%</Box><Box>0.0527%</Box><Box>0.0198%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L3</Box><Box>0.4%</Box><Box>0.16%</Box><Box>0.064%</Box><Box>0.0256%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L4</Box><Box> 0.425%</Box><Box>0.1806%</Box><Box>0.0768%</Box><Box>0.0326%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L5</Box><Box>0.45%</Box><Box>0.2025%</Box><Box>0.0911%</Box><Box>0.041%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L6</Box><Box>0.5%</Box><Box>0.25%</Box><Box>0.125%</Box><Box>0.0625%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L7</Box><Box>0.55%</Box><Box>0.3025%</Box><Box>0.1664%</Box><Box>0.0915%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L8</Box><Box>0.6%</Box><Box>0.36%</Box><Box>0.216%</Box><Box>0.1296%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L9</Box><Box>0.65%</Box><Box>0.4225%</Box><Box>0.2746%</Box><Box>0.1785%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L10</Box><Box>0.7%</Box><Box>0.49%</Box><Box>0.343%</Box><Box>0.2401%</Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ '&>p': { fontSize: '15px', color: zubgtext, py: 1, px: 1 } }}>
          <Typography variant="body1" color="initial">Sports commission percentage</Typography>
          <Box>
            <Stack direction='row' sx={{
              px: '2px', py: '10px', background: zubgbackgrad, alignItems: 'center', justifyContent: 'space-between',
              '&>div': { fontSize: '12px', color: 'white !important', width: '20%', textAlign: 'center' },
            }}>
              <Box>Commission level</Box>
              <Box>Tier 1 </Box><Box>Tier 2</Box><Box>Tier 3 </Box><Box>Tier 4 </Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L0</Box><Box>0.3%</Box><Box>0.09%</Box><Box>0.027%</Box><Box>0.0081%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L1</Box><Box>0.35%</Box><Box>0.1225%</Box><Box>0.0429%</Box><Box>0.015%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L2</Box><Box>0.375%</Box><Box>0.1406%</Box><Box>0.0527%</Box><Box>0.0198%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L3</Box><Box>0.4%</Box><Box>0.16%</Box><Box>0.064%</Box><Box>0.0256%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L4</Box><Box> 0.425%</Box><Box>0.1806%</Box><Box>0.0768%</Box><Box>0.0326%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L5</Box><Box>0.45%</Box><Box>0.2025%</Box><Box>0.0911%</Box><Box>0.041%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L6</Box><Box>0.5%</Box><Box>0.25%</Box><Box>0.125%</Box><Box>0.0625%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L7</Box><Box>0.55%</Box><Box>0.3025%</Box><Box>0.1664%</Box><Box>0.0915%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L8</Box><Box>0.6%</Box><Box>0.36%</Box><Box>0.216%</Box><Box>0.1296%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L9</Box><Box>0.65%</Box><Box>0.4225%</Box><Box>0.2746%</Box><Box>0.1785%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L10</Box><Box>0.7%</Box><Box>0.49%</Box><Box>0.343%</Box><Box>0.2401%</Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ '&>p': { fontSize: '15px', color: zubgtext, py: 1, px: 1, } }}>
          <Typography variant="body1" color="initial">Chess and card commission ratio</Typography>
          <Box sx={{ pb: 13 }}>
            <Stack direction='row' sx={{
              px: '2px', py: '10px', background: zubgbackgrad, alignItems: 'center', justifyContent: 'space-between',
              '&>div': { fontSize: '12px', color: 'white !important', width: '20%', textAlign: 'center' },
            }}>
              <Box>Commission level</Box>
              <Box>Tier 1 </Box><Box>Tier 2</Box><Box>Tier 3 </Box><Box>Tier 4 </Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L0</Box><Box>0.3%</Box><Box>0.09%</Box><Box>0.027%</Box><Box>0.0081%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L1</Box><Box>0.35%</Box><Box>0.1225%</Box><Box>0.0429%</Box><Box>0.015%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L2</Box><Box>0.375%</Box><Box>0.1406%</Box><Box>0.0527%</Box><Box>0.0198%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L3</Box><Box>0.4%</Box><Box>0.16%</Box><Box>0.064%</Box><Box>0.0256%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L4</Box><Box> 0.425%</Box><Box>0.1806%</Box><Box>0.0768%</Box><Box>0.0326%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L5</Box><Box>0.45%</Box><Box>0.2025%</Box><Box>0.0911%</Box><Box>0.041%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L6</Box><Box>0.5%</Box><Box>0.25%</Box><Box>0.125%</Box><Box>0.0625%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L7</Box><Box>0.55%</Box><Box>0.3025%</Box><Box>0.1664%</Box><Box>0.0915%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L8</Box><Box>0.6%</Box><Box>0.36%</Box><Box>0.216%</Box><Box>0.1296%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L9</Box><Box>0.65%</Box><Box>0.4225%</Box><Box>0.2746%</Box><Box>0.1785%</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box>L10</Box><Box>0.7%</Box><Box>0.49%</Box><Box>0.343%</Box><Box>0.2401%</Box>
            </Stack>
          </Box>
        </Box>
      </Container >
    </Layout>
  )
}

export default RebateRatio

const style = {
  header: {
    padding: '10px 8px',
    background: zubgtext,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '35px'
    }
  },
  levalBox: {
    px: '0px', background: zubgmid, display: 'flex !important', alignItems: 'center', justifyContent: 'space-between',
    '&>div': {
      fontSize: '12px', color: 'white !important', textAlign: 'center', border: '1px solid #292929', width: '20%', height: '45px',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    '&>div>img': { width: '50%', height: '35px' },
    '&>div:nth-child(1)': { position: 'relative' },
    '&>div:nth-child(1)>div': { position: 'absolute', top: '40%', left: '53%', fontSize: '14px', color: '#f7dda7' },
  },
};







