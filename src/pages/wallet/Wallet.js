import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import {
  bgdarkgray,
  bglightgray,
  zubggray
} from "../../Shared/color";
import logo1 from "../../assets/images/logotwhite.png";
import deposite from "../../assets/images/new/download (10).png";
import wallet from "../../assets/images/new/download (11).png";
import wallettransfer from "../../assets/images/new/download (12).png";
import wallettransfer1 from "../../assets/images/new/download (13).png";
import d14 from "../../assets/images/new/download (14).png";
import rechargeIcon from "../../assets/images/new/download (8).png";

// import sunlotteryhomebanner from "../../assets/sunlotteryhomebanner.jpg";
import Layout from "../../component/Layout/Layout";
import { walletamount, yesterdayFn } from "../../services/apicalling";
import theme from "../../utils/theme";
import MyModal from "../../Shared/Modal";

function Wallet() {

  const navigate = useNavigate();

  const [openDialogBoxHomeBanner, setopenDialogBoxHomeBanner] =
    React.useState(false);

  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    retryOnMount: false,
    refetchOnWindowFocus: false
  });
  const amount = data?.data?.data || 0;

  const series = [(Number(Number(amount?.wallet || 0) % 100) || 0)?.toFixed(2),]
  const series2 = [(Number(Number(amount?.winning || 0) % 100) || 0)?.toFixed(2),];
  const series1 = [(Number(Number(amount?.working_wallet || 0) % 100) || 0)?.toFixed(2),];

  const { data: status } = useQuery(["yesterday_income"], () => yesterdayFn(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const statusyesterday = status?.data?.data

  const [options] = React.useState({
    colors: ["#D9AC4F", "red", "green"],
    chart: {
      height: 150,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "11px",
          },
          value: {
            fontSize: "16px",
          },
        },
        stroke: {
          colors: ["#D9AC4F"],
        },
      },
      radialBar: {
        dataLabels: {
          show: false,
        },
      },
    },
    labels: ["0.40%", "B", "C", "D"],
  });

  return (
    <Layout>
      <Container
        className="no-scrollbar"
        sx={{
          background: bgdarkgray,
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            pt: 2,
            width: "95%",
            marginLeft: "2.5%",
            marginTop: "70px",
            borderRadius: "10px ",
            background: '#D9AC4F',
            border: '1px solid #D9AC4F',
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: '100%',
            }}
          >
            {/* <div class="container">
              <div class="circles">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
              </div>

              <div class="card">
                <div class="visa_logo">
                  <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="" />
                </div>
                <div class="visa_info">
                  <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
                  <p>4586 7985 9271 6388</p>
                </div>
                <div class="visa_crinfo">
                  <p>02/12</p>
                  <p>Nikhil Bobade</p>
                </div>
              </div>
            </div> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: '100%'
              }}
              className="walletBox"
            >
              <Box component="img" src={wallet} width={50} sx={{ filter: 'brightness(0.1)' }}></Box>
              <Typography variant="h2" color="initial" sx={{ color: 'white' }}>
                ₹ {Number(
                  Number(amount?.wallet || 0) + Number(amount?.winning || 0) + Number(amount?.working_wallet || 0)
                )?.toFixed(2)}

              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: 'white' }}
              >
                Total balance
              </Typography>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: '100%', padding: '0px 16px 16px' }}>
                <div class="visa_info">
                  <img style={{ width: '50px' }} src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
                </div>
                <div class="visa_logo">
                  <Box component={'img'} src={logo1} sx={{ width: '90px' }}></Box>
                </div>
              </Stack>
            </Box>
          </Box>
        </Box>
        {/*  */}

        <Box className="wallet-track-box">
          <Stack
            direction="row"
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "10px",
            }}
          >

            <Stack
              direction="row"
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                background: bglightgray,
                pb: 2,
                borderRadius: '10px',
              }}
            >
              <Box sx={{ width: "50%", position: "relative" }}>

                <Typography

                  variant="body1"
                  color="initial"
                  sx={{
                    position: "absolute",
                    left: "39%",
                    top: "32%",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "white",
                    textAlign: 'center !important',
                    ml: '-3%',
                    mt: '1%',
                  }}
                >
                  {series}
                </Typography>

                <ReactApexChart
                  options={options}
                  series={series}
                  type="radialBar"
                  height={150}

                />
                <Box
                  sx={{
                    textAlign: "center",
                    "&>p": { fontSize: "11px", fontWeight: 500 },
                  }}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ color: "white", fontWeight: "500" }}
                  >
                    {amount?.wallet}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ color: "white", fontWeight: "500" }}
                  >
                    Bonus Amount
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: "50%", position: "relative" }}>
                <Typography

                  variant="body1"
                  color="initial"
                  sx={{
                    position: "absolute",
                    left: "39%",
                    top: "32%",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "white",
                    ml: '-3%',
                    mt: '1%',
                  }}
                >
                  {series1}
                </Typography>
                <ReactApexChart
                  options={options}
                  series={series1}
                  type="radialBar"
                  height={150}

                />
                <Box
                  sx={{
                    textAlign: "center",
                    "&>p": { fontSize: "11px", fontWeight: 500 },
                  }}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ color: "white", fontWeight: "500" }}
                  >
                    {amount?.working_wallet}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ color: "white", fontWeight: "500", fontSize: '11px' }}
                  >
                    Working Amount
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: "50%", position: "relative" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    position: "absolute",
                    color: "white",
                    left: "40%",
                    top: "32%",
                    fontSize: "15px",
                    fontWeight: "400",
                    ml: '-3%',
                    mt: '1%',
                  }}
                >
                  {series2}
                </Typography>
                <ReactApexChart
                  options={options}
                  series={series2}
                  type="radialBar"
                  height={150}
                />
                <Box
                  sx={{
                    textAlign: "center",
                    "&>p": { fontSize: "11px", fontWeight: 500 },
                  }}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ color: "white", fontWeight: "500" }}
                  >
                    {amount?.winning}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ color: "white", fontWeight: "500", fontSize: '11px' }}
                  >
                    Winning Amount
                  </Typography>
                </Box>
              </Box>
            </Stack>

          </Stack>

          <div style={{ background: bglightgray, padding: '5px', borderRadius: '10px', marginTop: '16px', marginBottom: '100px' }}>
            <Box sx={{
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start', '&>a': { width: '33%', },
              '&>a>div': { display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', alignItems: 'center', padding: '5px' },
              'a>div>p': { textAlign: 'center', fontSize: '11px', color: 'white' },
              '&>a>div>img': { width: '30px', filter: 'hue-rotate(-346deg)' },
            }}>
              <NavLink to="/wallet/Recharge">
                <div className=" " >
                  <p className=" mt-4">Deposit</p>
                  <Box component="img" src={rechargeIcon} width={50}></Box>
                </div>
              </NavLink>
              <NavLink to="/Withdrawal">
                <div className=" " >
                  <p className=" mt-4">Withdrawal</p>
                  <Box component="img" src={wallettransfer1} className="!text-blue-500" width={50}></Box>
                </div>
              </NavLink>
              <NavLink to="/add-bank-details">
                <div className=" " >
                  <p className=" mt-4">Add Bank</p>
                  <Box component="img" src={d14} width={50}></Box>
                </div>
              </NavLink>
              <NavLink to="/transfer">
                <div className=" " >
                  <p className=" mt-4">W to M Wallet Transfer </p>
                  <Box component="img" src={wallettransfer} width={50}></Box>
                </div>
              </NavLink>
              <NavLink to="/transferhistory">
                <div className=" " >
                  <p className=" mt-4">W to M Wallet Transfer History </p>
                  <Box component="img" src={wallettransfer1} width={50}></Box>
                </div>
              </NavLink>
              <NavLink to="/depositHistory">
                <div className=" " >
                  <p className=" mt-4">Deposit history</p>
                  <Box component="img" src={d14} width={50}></Box>
                </div>
              </NavLink>
              <NavLink to="/withdravalHistory">
                <div className=" " >
                  <p className=" mt-4">Withdrawal history</p>
                  <Box component="img" src={deposite} width={50}></Box>
                </div>
              </NavLink>
              <NavLink to="/depositusdt">
                <div className=" " >
                  <p className=" mt-4">Deposit USDT history</p>
                  <Box component="img" src={d14} width={50}></Box>
                </div>
              </NavLink>
            </Box>
          </div>
        </Box>

        {/* {openDialogBoxHomeBanner && (
          <Dialog
            PaperProps={{ width: "500px", height: "500px" }}
            open={openDialogBoxHomeBanner}
          >
            <div>
              <p>
                <IconButton onClick={() => setopenDialogBoxHomeBanner(false)}>
                  <CloseIcon />
                </IconButton>
              </p>
              <p>
                <img src={sunlotteryhomebanner} />
              </p>
            </div>
          </Dialog>
        )} */}
        <CustomCircularProgress isLoading={isLoading} />
        {statusyesterday?.status_of_deposit_popup === 1 ?
           <MyModal /> 
          : "" }

      </Container>
    </Layout>
  );
}

export default Wallet;

const style = {
  header: {
    padding: "5px 8px",
    background: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "500",
      textAlign: "center",
      color: "white",
    },
    "& > a > svg": {
      color: "white",
      fontSize: "35px",
    },
  },
  wthui: {
    textAlign: "center",
    width: "31%",
    minHeight: "15vh",
    background: zubggray,
    borderRadius: "10px",
    mb: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div>p": { color: "white", fontWeight: 500 },
  },
};
