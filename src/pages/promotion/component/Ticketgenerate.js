import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import "jspdf-autotable";
import moment from "moment";
import * as React from "react";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "react-query";
import Layout from "../../../component/Layout/Layout";
import { getTicketRaisedHistory } from "../../../services/apicalling";
import { endpoint } from "../../../services/urls";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import theme from "../../../utils/theme";
import { bgtan, zubgback, zubgtext } from "../../../Shared/color";
import CryptoJS from "crypto-js";

export default function Ticketgenerate() {

  const [image, setImage] = React.useState(null);
  const [isvisible, setisvisible] = React.useState(false);
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const initialValue = {
    type: "Select Type",
    description: "",
    files: "",
  };
  const client = useQueryClient();
  const [loding, setloding] = React.useState(false);
  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      // if (fk.values.type === "Select Type")
      //   return "Select Type of issues."

      // if(!fk.values.files || !fk.values.type || !fk.values.description){
      //   toast(" Please Enter All Fields ")
      //   return
      // }
      const reqBody = {
        user_id: user_id,
        files: image,
        type: Number(fk.values.type),
        description: fk.values.description,
      };
      ticketRaised(reqBody);
    },
  });

  async function ticketRaised(reqBody) {
    setloding(true);
    try {
      const response = await axios.post(endpoint.ticket_raised, reqBody);
      if (response?.data?.msg === "Data saved successfully") {
        toast(response?.data?.msg ,{id:-1});
        fk.handleReset();
      }
    } catch (e) {
      console.error(e);
      toast.error("Enter all Fields");
    }
    setloding(false);
    client.refetchQueries("get_ticket_raised_history");
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const { isLoading, data: TicketRaised } = useQuery(
    ["get_ticket_raised_history"],
    () => getTicketRaisedHistory(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

const ticket = TicketRaised?.data?.data || []

  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto', mt: 9 }}>
        <div className="flex justify-between w-full items-center bg-[#272726] px-2 pt-6 rounded-lg  ">
          <div className="grid grid-cols-2 gap-1 items-center w-[400px] p-5">
            <span className="col-span-2 justify-end">
              <div className="flex justify-between">
                <span className="font-bold text-white !text-xl my-3 !text-center">Ticket Generate</span>
              </div>
            </span>
            <span className="!text-white !my-3 !text-xl">
              Select Type*
            </span>
            <TextField
              id="type"
              name="type"
              value={fk.values.type}
              onChange={fk.handleChange}
              className="!w-[100%] !bg-white !my-3"
              select
              size="small"
            >
              <MenuItem value={"Select Type"}>Select Type</MenuItem>
              <MenuItem value={"1"}>Deposit</MenuItem>
              <MenuItem value={"2"}>Withdrawal</MenuItem>
              <MenuItem value={"3"}>Bank Details</MenuItem>
              <MenuItem value={"4"}>Payout </MenuItem>
              <MenuItem value={"5"}>Other issue </MenuItem>
            </TextField>

            <span className="!text-white !my-3 !text-lg">Attachment*</span>
            <div>
              <input
                type="file"
                id="myfile"
                name="myfile"
                className="!text-sm !my-3"
                // onChange={(e) => setImage(e.target.files[0])}
                onChange={handleFileChange}
                required
              />
              <p className="!text-white !text-[10px]">File size should be less than 10MB</p>
            </div>
            <span className="!text-white !my-3 !text-lg">Description*</span>
            <textarea
              type="textarea"
              id="description"
              name="description"
              placeholder="Enter Description"
              value={fk.values.description}
              onChange={fk.handleChange}
              className="!w-[100%] !bg-white !text-sm  !text-center !text-black pt-4 !my-3"
            />

            <div className="col-span-2 flex  justify-end gap-2 mt-4">
              <Button
               sx={style.paytmbtntwo1}
                className=" !text-black"
                onClick={() => fk.handleReset()}
              >
                Cancel
              </Button>
              <Button
               sx={style.paytmbtntwo}
                className=" !text-white"
                onClick={() => fk.handleSubmit()}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
     <p className="!text-white text-center !-mt-16 ">Ticket Raised History </p>
        {ticket?.map((i, index) => {
          return (
            <Box
              key={index}
              sx={{
                mb: 2,
                padding: "10px",
                borderRadius: "10px",
                background: "#fff",
                width: "92%",
                margin: "auto",
                mt: 2,
              }}
            >
              <Stack
                direction="row"
                sx={{
                  paddingBottom: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #efefef",
                }}
              >
                <Box>
                  <Typography className="!bg-[#272726] !text-white rounded px-2 py-1 !flex justify-center">
                    Ticket
                  </Typography>
                </Box>
                <Box
                  sx={{
                    color: "#888",
                    textTransform: "capitalize",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {i?.call_back_status}
                </Box>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  "&>p:nth-child(1)": {
                    color: "#888",
                    fontSize: "13px",
                    fontWeight: "600",
                    py: 1,
                  },
                  "&>p:nth-child(2)": {
                    color: theme.palette.primary.main,
                    fontSize: "13px",
                    fontWeight: "600",
                    py: 1,
                  },
                }}
              >
                <Typography variant="body1" color="initial">
                  Status
                </Typography>
                <Typography variant="body1">
                  {i?.status === 0 ? "Pending" : "Success"}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  "&>p": {
                    color: "#888",
                    fontSize: "13px",
                    fontWeight: "600",
                    py: 1,
                  },
                }}
              >
                <Typography variant="body1" color="initial">
                  Type
                </Typography>
                <Typography variant="body1" color="initial">
                  {i?.ticket_type}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  "&>p": {
                    color: "#888",
                    fontSize: "13px",
                    fontWeight: "600",
                    py: 1,
                  },
                }}
              >
                <Typography variant="body1" color="initial">
                  Time
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  className="!text-green-500"
                >
                  {moment(i?.timestamp)?.format("DD-MM-YYYY HH:mm:ss")}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  "&>p": {
                    color: "#888",
                    fontSize: "13px",
                    fontWeight: "600",
                    py: 1,
                  },
                }}
              >
                <Typography variant="body1" color="initial">
                  Ticket Id
                </Typography>
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&>p:nth-child(1)": {
                      color: "#888",
                      fontSize: "13px",
                      fontWeight: "600",
                      py: 1,
                    },
                    "&>p:nth-child(2)": {
                      color: theme.palette.primary.main,
                      fontSize: "13px",
                      fontWeight: "600",
                    },
                  }}
                >
                  <Typography variant="body1" color="initial">
                    {i?.ticket_id}
                  </Typography>
                  <IconButton sx={{ padding: 0 }}>
                    <ContentCopyIcon
                      sx={{ color: "#888", width: "15px", ml: 1 }}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              <div>
                <p className="!text-blue-500">Query:</p>
                <p className="!px-5 !w-full !overflow-auto border-2 !border-gray-400 !min-h-[100px]">
                  {i?.description}
                </p>
              </div>

              {i?.status === 1 && (
                <div>
                  <p className="!text-green-500 !font-bold !w-full flex justify-between items-center">
                    <span>Resolution:</span>
                    <span className="!text-[10px]">{moment(i?.resolution_date)?.format("YYYY-MM-DD HH:mm:ss")}</span>
                  </p>
                  <p className="!px-5 !w-full !overflow-auto border-2 !border-gray-400 !min-h-[100px] !text-black">{i?.resolution}</p>
                </div>
              )}
              <p
                onClick={() => setisvisible(index)}
                className="!cursor-pointer"
              >
                View Image
              </p>
              {String(isvisible) && index === isvisible && (
                <div className="!flex w-full ">
                  <img src={i?.file_name} className="!w-full !h-[400px]" />
                </div>
              )}
            </Box>
          );
        })}

        <CustomCircularProgress isLoading={loding || isLoading} />
      </Container>
    </Layout>
  );
}

const style = {
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 10,
    background: zubgtext,
    color: bgtan,
    width: "100%",
    mt: "20px",
    padding: "10px",
    "&:hover": { background: zubgtext, },
  },
  paytmbtntwo1: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 10,
    background: "white",
    width: "100%",
    mt: "20px",
    padding: "10px",
    "&:hover": { background: zubgtext, },
  },
  wdbtn: {
    width: "95% !important",
    boxShadow: "0 0.05333rem #b6bad0",
    borderRadius: "20px",
    border: "none",
    color: "#fff",
    letterSpacing: "0.13333rem",
    fontWeight: "700",
    fontSize: "15px",
    height: "0.93333rem",
    width: "100%",
    background:
      "linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%), linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%)",
    backgroundSize: "100% 100%, 100% 100%",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    textShadow: "0 0.02667rem 0.01333rem #afb0be",
    padding: "20px",
    mt: 3,
  },
};
