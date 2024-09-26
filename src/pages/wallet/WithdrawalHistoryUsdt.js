import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import { bgdarkgray, bggrad, zubgback, zubgbackgrad, zubgmid, zubgtext } from "../../Shared/color";
import deposit from "../../assets/check.png";
import Layout from "../../component/Layout/Layout";
import { withdrawlHistoryUSdtFunction } from "../../services/apicalling";

function WithdrawalHistoryUSdt() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { isLoading, data } = useQuery(
    ["withdrwal_history"],
    () => withdrawlHistoryUSdtFunction(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const res = data?.data?.data || []

  return (
    <Layout>
      <Container
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 5,
        }}
        className="no-scrollbar"
      >
        <CustomCircularProgress isLoading={isLoading} />
        <Box>
          <Box
            sx={{
              padding: "10px",
              // background: zubgwhite,
              // boxShadow: zubgshadow,
              borderRadius: "10px",
              mb: 5,
              mt: 9,
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
              <Box component="img" src={deposit} width={30}></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px ", color: 'white', ml: "10px" }}
              >
                Withdrawal USDT history
              </Typography>
            </Stack>
            {res?.map((i) => {
              return (
                <Box
                  sx={{
                    mb: 2,
                    padding: "15px",
                    borderRadius: "10px",
                    background: bggrad,
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      paddingBottom: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid white",
                    }}
                  >
                    <Box>
                      <Button
                        sx={{
                          background: bgdarkgray,
                          color: "white",
                          textTransform: "capitalize",
                        }}
                      >
                        Withdrawal
                      </Button></Box>

                    <Box>
                      <Button
                        sx={{ color: "green", textTransform: "capitalize" }}
                        className={`${i?.tr15_status === "Approve"
                          ? "!text-green-500 !text-[15px]"
                          : "!text-red-500 !text-[15px]"
                          }`}
                      >
                        {i?.tr15_status}
                      </Button>
                      <IconButton>
                        <ArrowForwardIcon sx={{ color: zubgtext }} />
                      </IconButton>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{
                      mt: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      Balance
                    </Typography>
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      {/* ₹  */}
                      {i?.tr15_amt}
                    </Typography>
                  </Stack>
                
                  <Stack
                    direction="row"
                    sx={{
                      my: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      Status
                    </Typography>
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      {i?.tr15_status}{" "}
                    </Typography>
                  </Stack>
                 
                  <Stack
                    direction="row"
                    sx={{
                      mb: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      Trans number
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        mb: "5px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        "&>p": { color: zubgtext },
                      }}
                    >
                      <Typography variant="body1" color="initial" className="!text-[15px]">
                        {i?.tr15_w_id}
                      </Typography>

                      {/* <IconButton>
                        <ContentCopyIcon sx={{ color: zubgtext }} />
                      </IconButton> */}
                    </Stack>
                  </Stack>
                  <Stack

                    direction="row"
                    sx={{
                      mb: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      USDT Type
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        mb: "5px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        "&>p": { color: zubgtext },
                      }}
                    >
                      <Typography variant="body1" color="initial" className="!text-[15px] " >
                        <p>   {i?.usdt_type}</p>
                       
                      </Typography>
                    </Stack>
                    
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      mb: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      Date/Time
                    </Typography>
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      {moment(i?.tr15_date)?.format("DD-MM-YYYY")}{" "}
                      {moment(i?.tr15_date)?.format("HH:mm:ss")}
                    </Typography>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default WithdrawalHistoryUSdt;

const style = {
  header: {
    padding: "15px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
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
      color: "white",
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
