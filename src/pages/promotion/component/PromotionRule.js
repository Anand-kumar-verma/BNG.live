import * as React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Layout from '../../../component/Layout/Layout';
import Leval from '../../../assets/images/leval.png'
import { iconcolorpink, zubgback, zubgbackgrad, zubgmid, zubgtext } from '../../../Shared/color';



function PromotionRule() {
  return (
    <Layout>
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Rules</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>

        <Box sx={style.contentText}>
          <Typography variant="body1" color="initial">【Promotion partner】program</Typography>
          <Typography variant="body1" color="initial">This activity is valid for a long time</Typography>
        </Box>

        <Box sx={{ px: 2, mt: 5 }}>
          <Box sx={style.box}>
            <Box sx={style.boxNumber}>01</Box>
            <Typography variant="body1" color="initial">
              When inviting friends to register, you must send the invitation link provided or enter the invitation code manually so that your friends become your level 1 subordinates.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 2, mt: 5 }}>
          <Box sx={style.box}>
            <Box sx={style.boxNumber}>02</Box>
            <Typography variant="body1" color="initial">
              There are 6 subordinate levels in inviting friends, if A invites B, then B is a level 1 subordinate of A.
              If B invites C, then C is a level 1 subordinate of B and also a level 2 subordinate of A. If C invites D,
              then D is a level 1 subordinate of C, at the same time a level 2 subordinate of B and also a level 3 subordinate of A.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 2, mt: 5 }}>
          <Box sx={style.box}>
            <Box sx={style.boxNumber}>03</Box>
            <Typography variant="body1" color="initial">
              The invitee registers via the inviter's invitation code and completes the deposit, shortly after that the commission will be received immediately
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 2, mt: 5 }}>
          <Box sx={style.box}>
            <Box sx={style.boxNumber}>04</Box>
            <Typography variant="body1" color="initial">
              The calculation of yesterday's commission starts every morning at 01:00. After the commission calculation is completed, the commission is rewarded to the wallet and can be viewed through the commission collection record.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 2, mt: 5 }}>
          <Box sx={{ ...style.box, mb: 3 }}>
            <Box sx={style.boxNumber}>05</Box>
            <Typography variant="body1" color="initial">
              Commission rates vary depending on your agency level on that day
              <br />
              Number of Teams: How many downline deposits you have to date.
              <br />
              Team Deposits: The total number of deposits made by your downline in one day.
              <br />
              Team Deposit: Your downline deposits within one day.
            </Typography>
          </Box>
          <Box>
            <Stack direction='row' sx={{
              px: '2px', py: '10px', background: zubgtext, alignItems: 'center', justifyContent: 'space-between',
              '&>div': { fontSize: '12px', color: 'white !important', },
            }}>
              <Box>Rebate level</Box>
              <Box>Team Number </Box>
              <Box>Team Betting </Box>
              <Box>Team Deposit </Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L0</Box></Box>
              <Box>0</Box>
              <Box>0</Box>
              <Box>0</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L1</Box></Box>
              <Box>5</Box>
              <Box>500k</Box>
              <Box>100k</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L2</Box></Box>
              <Box>10</Box>
              <Box>1000k</Box>
              <Box>200k</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L3</Box></Box>
              <Box>15</Box>
              <Box>2.50M</Box>
              <Box>500k</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L4</Box></Box>
              <Box>20</Box>
              <Box>3.50M</Box>
              <Box>700K</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L5</Box></Box>
              <Box>25</Box>
              <Box>5M</Box>
              <Box>1000k</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L6</Box></Box>
              <Box>30</Box>
              <Box>10M</Box>
              <Box>2M</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L7</Box></Box>
              <Box>100</Box>
              <Box>100M</Box>
              <Box>20M</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L8</Box></Box>
              <Box>500</Box>
              <Box>500M</Box>
              <Box>100M</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L9</Box></Box>
              <Box>1000</Box>
              <Box>1,000M</Box>
              <Box>200M</Box>
            </Stack>
            <Stack direction='row' sx={style.levalBox}>
              <Box> <Box component='img' src={Leval}></Box><Box>L10</Box></Box>
              <Box>5000</Box>
              <Box>1,500M</Box>
              <Box>300M</Box>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ px: 2, mt: 5 }}>
          <Box sx={style.box}>
            <Box sx={style.boxNumber}>06</Box>
            <Typography variant="body1" color="initial">
              The commission percentage depends on the membership level. The higher the membership level, the higher the bonus percentage. Different game types also have different payout percentages.
              The commission rate is specifically explained as follows
              <NavLink to='/promotion/RebateRatio/'>View rebate ratio  <KeyboardArrowRightIcon /> </NavLink>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 2, mt: 5 }}>
          <Box sx={style.box}>
            <Box sx={style.boxNumber}>07</Box>
            <Typography variant="body1" color="initial">
              TOP20 commission rankings will be randomly awarded with  a separate bonus
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 2, mt: 5 }}>
          <Box sx={style.box}>
            <Box sx={style.boxNumber}>08</Box>
            <Typography variant="body1" color="initial">
              The final interpretation of this activity belongs to Welcome to FunXplore Game
            </Typography>
          </Box>
        </Box>
        <Box sx={{ padding: 7 }}>
        </Box>
      </Container>
    </Layout>
  );
}

export default PromotionRule;

const style = {
  container: { background: zubgback, width: '100%', pb: '50px' },
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
  contentText: { '& > p:nth-child(1)': { fontSize: '20px', textAlign: 'center', py: 1, color: zubgtext, }, '& > p:nth-child(2)': { fontSize: '15px', textAlign: 'center', color: 'gray' } },
  box: {
    position: 'relative', border: '1px solid #6F6F6F', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', padding: 2, background: zubgtext,
    '&>p': { color: 'white !important', fontSize: '13px', fontWeight: '400', wordSpacing: '1x', lineHeight: '20px' },
    '&>p>a': { color: '#FEA237', fontSize: '13px', fontWeight: '400', wordSpacing: '1x', lineHeight: '20px', display: 'flex', alignItems: 'center' },
  },
  boxNumber: { color: 'white !important', position: 'absolute', textAlign: 'center', background: zubgbackgrad, clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)', width: '30%', top: '-13px', left: '35%' },
  levalBox: {
    px: '0px', background: zubgmid, display: 'flex !important', alignItems: 'center', justifyContent: 'space-between',
    '&>div': {
      fontSize: '12px', color: 'white !important', textAlign: 'center', border: '1px solid #fff', width: '25%', height: '45px',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    '&>div>img': { width: '50%', height: '35px' },
    '&>div:nth-child(1)': { position: 'relative' },
    '&>div:nth-child(1)>div': { position: 'absolute', top: '40%', left: '53%', fontSize: '14px', color: '#f7dda7' },
  },
};

