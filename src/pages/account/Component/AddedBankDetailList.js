import { Add, Edit } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import * as React from "react";
import { useQuery, useQueryClient } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { zubgback, zubgbackgrad, zubgmid, zubgtext } from "../../../Shared/color";
import deposit from "../../../assets/images/banking.png";
import Layout from "../../../component/Layout/Layout";
import { BankListDetails } from "../../../services/apicalling";
import theme from "../../../utils/theme";
function AddedBankDetailList() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const client = useQueryClient();
  React.useEffect(() => {
    client?.refetchQueries("bank_list_details");
  }, []);
  const { isLoading, data } = useQuery(
    ["bank_list_details"],
    () => BankListDetails(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const result = React.useMemo(() => data?.data?.data, [data]);


  return (
    <Layout>
      <Container
        sx={{
          background: theme.palette.secondary.main,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 7,
          mt: 8,
        }}
        className="no-scrollbar"
      >

        <Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              borderRadius: "10px",
              mb: 5,
            }}
          >
            <div className="!flex !w-full !justify-between !align-center" style={{ alignItems: 'center', marginBottom: "20px" }}>
              <Stack direction="row" sx={{ alignItems: "center", }}>
                <Box component="img" src={deposit} width={30} sx={{ filter: 'sepia(1)' }}></Box>
                <Typography
                  variant="body1"

                  sx={{ fontSize: "15px ", color: 'white', ml: "10px" }}
                >
                  Pre Added Banks
                </Typography>
              </Stack>
              <div
                className="!flex !items-center !cursor-pointer"
                onClick={() => navigate("/add-bank-details")}
              >
                <span style={{ color: 'white' }}>Add New</span>
                <IconButton>
                  <Add sx={{ color: 'white' }} />
                </IconButton>
              </div>
            </div>
            {result?.map((i, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    padding: "15px",
                    borderRadius: "10px",
                    background: theme.palette.primary.main,
                  }}
                >
                  <div className="flex !justify-between">
                    <IconButton>
                      <AccountBalanceIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton onClick={() => navigate("/add-bank-details")}>
                      <Edit sx={{ color: 'white' }} />
                    </IconButton>
                  </div>
                  <Divider className="!bg-red-100 !text-red-100 !bg-opacity-20" />
                  <Stack
                    direction="row"
                    sx={{
                      marginTop: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      Account Holder Name
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      {i?.holder_name}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      Email
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      {i?.email}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      Bank Name
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      {i?.bank_name}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      Mobile No
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      {i?.mobile}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      IFSC Code
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      {i?.ifsc}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      Account Number
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }} >
                      {i?.account}
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

export default AddedBankDetailList;

const style = {
  header: {
    padding: "10px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: 'white',
    },
    "& > a > svg": {
      color: 'white',
      fontSize: "35px",
    },
  },
  wthui: {
    textAlign: "center",
    width: "32%",
    minHeight: "15vh",
    background: zubgmid,
    borderRadius: "10px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div>p": { color: zubgtext },
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

    "&>p": {
      color: zubgtext,
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
    borderRadius: "30px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgbackgrad,
    color: "white !important",
    width: "100%",
    mt: "20px",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  rechargeinstext: {
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};
