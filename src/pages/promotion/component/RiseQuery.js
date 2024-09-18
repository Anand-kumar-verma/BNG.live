import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Box, Button, Container, FormControl, Stack, TextField, Typography, } from "@mui/material";
import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { bgtan, zubgback, zubgbackgrad, zubgmid, zubgtext } from "../../../Shared/color";
import payment from "../../../assets/images/c1.png";
import Layout from "../../../component/Layout/Layout";
import theme from "../../../utils/theme";

function AddBankDetails() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout header={false}>
      <Container
        className="no-scrollbar"
        sx={{
          background: theme.palette.secondary.main,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 4,
        }}
      >
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack}>
            <KeyboardArrowLeftOutlinedIcon sx={{ color: bgtan }} />
          </Box>
          <Typography variant="body1" sx={{ color: bgtan }}>
            Customer Service
          </Typography>
          <Box
            component={NavLink}
            to="/add-bank-details/pre-added-bank-details"
          >
            {/* <HistoryIcon /> */}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: "20px",
              borderRadius: "10px",
              mb: 5,
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
              <Box component="img" src={payment} width={30} sx={{ filter: 'sepia(1)' }}></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px ", color: 'white', ml: "10px" }}
              >
                Customer Service
              </Typography>
            </Stack>
            <Box mt={2} component="form" >
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Name <span className="!text-red-600">*</span>
                  </Typography>
                </Stack>
                <TextField
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Name *"
                  className="withdrawalfield2"
                />

              </FormControl>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Email <span className="!text-red-600">*</span>
                  </Typography>
                </Stack>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email *"
                  className="withdrawalfield2"
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Phone <span className="!text-red-600">*</span>
                  </Typography>
                </Stack>
                <TextField
                  id="Phone"
                  name="Phone"
                  type="Phone"
                  placeholder="Enter Phone *"
                  className="withdrawalfield2"
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Query <span className="!text-red-600">*</span>
                  </Typography>
                </Stack>
                <TextField
                  id="email" name="email" type="email" placeholder="Enter Query *" className="withdrawalfield2"
                  multiline rows={4} sx={{ background: 'white', borderRadius: '5px', }}
                />
              </FormControl>

              <Button
                sx={style.paytmbtntwo}
                type="submit"
              >
                Submit{" "} Query
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default AddBankDetails;

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
    },
    "& > a > svg": {
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
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgtext,
    color: bgtan,
    width: "100%",
    mt: "20px",
    padding: "10px",
    "&:hover": { background: zubgtext, },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};
