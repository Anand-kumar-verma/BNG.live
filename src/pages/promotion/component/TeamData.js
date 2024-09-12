

import { Star } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Box, Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { bgdarkgray, bggold, bggrad, bgtan, zubgback, zubgtext, zubgwhite } from "../../../Shared/color";
import Layout from "../../../component/Layout/Layout";
import { MygetdataFn } from "../../../services/apicalling";
import { rupees } from "../../../services/urls";
import theme from "../../../utils/theme";
function TeamData() {
  const { isLoading, data } = useQuery(
    ["get_level"],
    () => MygetdataFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const result = data?.data?.data;
  return (
    <Layout header={false}>
      <Container
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <CustomCircularProgress isLoading={isLoading} />
        <Box sx={style.header}>
          <Box component={NavLink} to="/promotion/">
            <KeyboardArrowLeftOutlinedIcon sx={{ color: bgtan }} />
          </Box>
          <Typography variant="body1" color="initial" sx={{ color: bgtan }}>
            Team data
          </Typography>
          <Typography variant="body1" color="initial">
            {" "}
          </Typography>
        </Box>
        {

          <Accordion className="!rounded-lg">
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ background: bggold, color: "white", mt: 2, }}
              className="!rounded-lg"
            >
              <div className="w-full grid grid-cols-3 pr-2">
                <span className="">Levels</span>
                <p className="">Members</p>
                <p className="">Deposit Amount</p>
              </div>
            </AccordionSummary>
          </Accordion>
        }
        {[1, 2, 3, 4, 5, 6]?.map((i) => {
          return (
            <Box sx={{ width: '95%', margin: '10px 2.5% 10px 2.5%', borderRadius: '5px' }}>
              <Accordion className="!rounded-lg" >
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon className="!text-white" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ background: theme.palette.secondary.light, color: "white", borderRadius: '0px' }}
                >
                  <div className="w-full grid grid-cols-3 pr-2">
                    <span className="">Level: {i}</span>
                    <p className="">{result?.filter((j) => j?.LEVEL === i)?.length}
                    </p>
                    <p className="">
                      {rupees}{" "}
                      <span className="text-green-200">
                        {result?.filter((j) => j?.LEVEL === i)?.reduce((a, b) => a + Number(b?.deposit_amount || 0), 0) || 0}
                      </span>{" "}
                    </p>
                  </div>
                </AccordionSummary>
                <AccordionDetails sx={{ background: theme.palette.secondary.light, color: "white" }}>
                  <Box >
                    <Box sx={style.accordian}>
                      <div style={{ color: 'white', }} className="!grid !grid-cols-3    ">
                        <span>S.No.</span>
                        <span>User Id</span>
                        <span className="">Name</span>
                      </div>
                      <div className="h-[2px] w-full "></div>
                      {result?.filter((j) => j?.LEVEL === i)?.map((i, index) => {
                        return (
                          <div style={{ color: 'white', background: bggrad, color: bgtan, borderRadius: '5px', padding: '10px 20px', }} className="!grid !grid-cols-3  ">
                            <span>{index + 1}</span>
                            <span className=" ">
                              {i?.id || "No data found"}
                            </span>
                            <span className=" ">
                              {i?.full_name || "No data found"}
                            </span>
                          </div>
                        );
                      })}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        })}
      </Container>
    </Layout>
  );
}

export default TeamData;

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
    },
    "& > a > svg": {
      fontSize: "35px",
    },
  },
  accordian: {
    backgroundColor: zubgwhite,
    "&>div": { mb: 1 },
    "&>div>div:nth-child(1)": {
      borderRight: "1px solid black",
    },
    "&>div>div:nth-child(2)": {
    },
    "&>div>div>p": {
      color: "white",
      fontSize: "14px",
      fontWeight: 500,
    },
  },
};
