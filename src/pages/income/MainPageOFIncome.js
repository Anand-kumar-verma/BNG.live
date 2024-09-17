import { Diversity2Outlined } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import RedeemIcon from "@mui/icons-material/Redeem";
import StoreIcon from "@mui/icons-material/Store";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { bgdarkgray, bggrad, bgtan, zubgback, zubgbackgrad, zubgmid, zubgtext } from "../../Shared/color";
import Layout from "../../component/Layout/Layout";
import theme from "../../utils/theme";

function MainPageOFIncome() {
  const data_array = [
    
    {
      to: "/account/income-main/attendance-bonus",
      name: "Attendance Income",
      logo: <PriceCheckIcon className="!w-[40px] !h-[40px] " color="black" />,
    },
    {
      to: "/account/income-main/claim-bonus",
      name: "Invitation Income",
      logo: <RedeemIcon className="!w-[40px] !h-[40px] " color="black" />,
    },
    {
       to: "/account/income-main/streak-bonus",
      name: "Winning Streak Income",
      logo: <PriceCheckIcon className="!w-[40px] !h-[40px] " color="black" />,
    },
    {
        to: "/account/income-main/vip-bonus",
        name: "VIP Income",
        logo: <AccountBalanceIcon className="!w-[40px] !h-[40px] " color="black" />,
      },
       {
      to: "/account/income-main/daily-salary-bonus",
      name: "Daily Salary",
      logo: <StoreIcon className="!w-[40px] !h-[40px] " color="black" />,
    },
    {
      to: "/account/income-main/deposit-bonus",
      name: "Deposit Self Income",
      logo: <Diversity2Outlined className="!w-[40px] !h-[40px] " color="black" />,
    },
    //  {
    //   to: "/account/income-main/claim-bonus",
    //   name: "Claim Income",
    //   logo: <RedeemIcon className="!w-[40px] !h-[40px] " color="black" />,
    // },
   
    // {
    //   to: "/account/income-main/referral-bonus",
    //   name: "Sponsor Income",
    //   logo: <RedeemIcon className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/daily-salary-bonus",
    //   name: "Daily Salary",
    //   logo: <StoreIcon className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/self-trading-bonus",
    //   name: "Self Trade Income",
    //   logo: <StoreIcon className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/weekly-bonus",
    //   name: "Weekly Salary Income",
    //   logo: <Diversity2Outlined className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/team-trading-bonus",
    //   name: "Level Income",
    //   logo: <CardGiftcardIcon className="!w-[40px] !h-[40px] " color="black" />,
    // },
    // {
    //   to: "/account/income-main/cash_back_report",
    //   name: "Cashback Income",
    //   logo: <StoreIcon className="!w-[40px] !h-[40px] !text-white" color="#8f5206" sx={{ filter: 'invert(1)' }} />,
    // },
  ];

  return (
    <Layout header={false}>
      <Container
        sx={{
          background: bgdarkgray,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            // background: zubgtext,

          }}
        >
          <Typography
            variant="body1" color="initial" sx={{ color: bgtan, fontSize: "20px", fontWeight: "600", background: zubgtext, textAlign: 'center', padding: '10px' }}>
            Income
          </Typography>


          <Box sx={{}}>
            <TableContainer sx={{ background: bggrad, width: '95%', ml: '2.5%', mt: 2, }}>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell className="!border !text-xs !border-r !border-black  !text-center" sx={{ color: "black !important", fontWeight: "600" }}>S.No</TableCell>
                    <TableCell className="!border !text-xs !border-r !border-black  !text-center" sx={{ color: "black !important", fontWeight: "600" }}>Title</TableCell>
                    <TableCell className="!border !text-xs !border-r !border-black  !text-center" sx={{ color: "black !important", fontWeight: "600" }}>Icon</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data_array.map((item, index) => (
                    <TableRow key={item.name}>
                      <TableCell className="!border !text-xs !border-r !border-black  !text-center">
                        <NavLink style={{ textDecoration: 'none', color: 'black' }}>
                          {index + 1}
                        </NavLink>
                      </TableCell>
                      <TableCell className="!border !text-xs !border-r !border-black  !text-center">
                        <NavLink to={item.to} style={{ textDecoration: '', color: 'black' }}>
                          {item.name}
                        </NavLink>
                      </TableCell>
                      <TableCell className="!border !text-xs !border-r !border-black  !text-center">
                        <NavLink to={item.to} style={{ textDecoration: '', color: 'black !important' }}>
                          {item.logo}
                        </NavLink>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default MainPageOFIncome;


const style = {
  header: {
    padding: "15px 8px",
    background: zubgback,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "black !important",
    },
    "& > a > svg": {
      color: "black !important",
      fontSize: "35px",
    },
  },
  wthui: {
    textAlign: "center",
    width: "32%",
    minHeight: "15vh",
    background: zubgmid,
    borderRadius: "10px",
    mb: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div>p": { color: "white" },
  },
  paymentlink: {
    width: "32%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "15vh",
    background: zubgmid,
    borderRadius: "10px",
    mb: "10px",
    "&>p": {
      color: "black !important",
      fontSize: "12px",
      fontWeight: "500",
      textAlign: "center",
      mt: "5px",
    },
  },
  paymentBoxOuter: {
    width: "95%",
    margin: "auto",
    my: "10px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paytmbtn: {
    mb: 2,
    background: zubgback,
    color: "white !important",
    width: "31%",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgbackgrad,
    color: "white !important",
    width: "100%",
    mt: 2,
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};
