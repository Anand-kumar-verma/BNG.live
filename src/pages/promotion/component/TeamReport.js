import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Container,
  Typography
} from "@mui/material";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { bgdarkgray, bggrad, bglightgray, bgtan, zubgback, zubgshadow, zubgtext, zubgwhite } from "../../../Shared/color";
import Layout from "../../../component/Layout/Layout";
import { MygetdataFn } from "../../../services/apicalling";

function TeamReports() {
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
          background: bgdarkgray,
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
          <Typography variant="body1" sx={{ color: bgtan }}>
            Subordinate data
          </Typography>
          <Typography variant="body1" sx={{ color: bgtan }}>
            {" "}
          </Typography>
        </Box>
        <Box >
          <Box
            className="!mb-10"
            sx={{
              background: bgdarkgray,
              boxShadow: zubgshadow,

              padding: "20px 16px",
              "&>div": { mb: 1 },
              "&>div>div:nth-child(1)": {
                borderRight: "1px solid black",
                width: "50%",
                textAlign: "center",
              },
              "&>div>div:nth-child(2)": { width: "50%", textAlign: "center" },
              "&>div>div>p": {
                color: zubgtext,
                fontSize: "14px",
                fontWeight: 500,
              },
            }}
          >
            <div style={{ paddingTop: '16px', color: bgtan, background: zubgtext, padding: '10px', borderRadius: '5px' }} className="!grid !grid-cols-6   !place-items-center ">
              <span>S.No.</span>
              <span>User Id</span>
              <span className="!col-span-2">Name</span>
              <span className="!col-span-2">Mobile No</span>
            </div>
            {result?.filter((j) => j?.LEVEL === 1)?.map((i, index) => {
              return (
                <div style={{ color: 'white', background: bglightgray, color: 'white', borderRadius: '5px', padding: '10px 20px', }} className="!grid !grid-cols-6   !place-items-center">
                  <span >{index + 1}</span>
                  <span>{i?.id}</span>
                  <span className="!text-center !col-span-2">{i?.full_name || "No data found"}</span>
                  <span className="!col-span-2">{i?.mobile || "987654210"}</span>
                </div>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Layout >
  );
}

export default TeamReports;

const style = {
  header: {
    padding: "15px 8px",
    background: bggrad,
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
};
