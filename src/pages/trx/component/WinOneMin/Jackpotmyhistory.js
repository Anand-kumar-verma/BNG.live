import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Box,
  CircularProgress,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import history from "../../../../assets/images/list.png";
import { jackpod_my_history } from "../../../../services/apicalling";
import { rupees } from "../../../../services/urls";
import {
  zubgback,
  zubgtext
} from "../../../../Shared/color";
import { getNumber } from "../../../../Shared/Number";

const Jackpotmyhistory = ({ gid }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { isLoading, data: my_history } = useQuery(
    ["my_jackpod_history", gid],
    () => jackpod_my_history(gid),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const my_history_data = my_history?.data?.data || [];

  const visibleRows = React.useMemo(
    () =>
      my_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, my_history?.data?.data]
  );

  if (isLoading)
    return (
      <div className="!w-full  flex justify-center">
        <CircularProgress className={""} />
      </div>
    );

  return (
    <Box>
      <Stack direction="row" className="onegotextbox">
        <Typography variant="body1" color="initial" sx={{ color: zubgtext }}>
          <Box
            component="img"
            src={history}
            width={25}
            sx={{ marginRight: "10px", filter: 'grayscale(1)' }}
          ></Box>
          {gid === "1"
            ? " My One GO Record"
            : gid === "2"
              ? " My Three GO Record"
              : " My Five GO Record"}
        </Typography>
      </Stack>
      <div className="flex flex-col gap-[2px]">
        {visibleRows?.map((i) => {
          return (
            <div>
              <Accordion className="!rounded-lg" disableElevation sx={{ background: 'white' }}>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon sx={{ color: 'gray', mx: '10px' }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ background: 'white', color: zubgtext, borderRadius: '5px', margin: '0px important', mb: 1 }}
                >
                  <Box className="flexbetween">
                    <Box sx={{ background: 'red', width: '50px', height: '45px', borderRadius: '10px' }} className={` flexcenter ${i?.result <= 4 ? "!bg-[#6DA7F4]" : "!bg-[#FEAA57]"}`}>
                      <Typography variant="body1" sx={{ color: 'white' }}
                        className={`funp13 ${i?.result <= 4 ? "!bg-[#6DA7F4]" : "!bg-[#FEAA57]"}`}
                      >{i?.result <= 4 ? "Small" : "JPT"}</Typography>
                    </Box>
                    <Box className="flexrowsstart" >
                      <Typography variant="body1" className="funp15" sx={{ color: '#0D0335', textDecoration: 'none' }}>{i?.gamesno}</Typography>
                      <Typography variant="body1" className="funp13" sx={{ color: '#0D0335' }}>{moment(i?.datetime)?.format("DD-MM-YYYY")}{" "}
                        {moment(i?.datetime)?.format("HH:mm:ss")} </Typography>
                    </Box>
                    <Box className="flexrows" >
                      <Typography variant="body1" sx={{ borderRadius: '5px', padding: '1px 10px', border: `1px solid red`, color: 'red' }}
                        className={` funp15 ${i?.status === "0"
                          ? "!text-red-400"
                          : i?.status === "1"
                            ? "!text-green-400 !border-1 !border-green-500"
                            : "!text-red-400"
                          } `}
                      >  {i?.status === "0"
                        ? "Pending"
                        : i?.status === "1"
                          ? "Success"
                          : "Failed"}</Typography>
                      <Typography variant="body1" sx={{ color: 'red', mt: 1, }}
                        className={` funp13 ${i?.status === "0"
                          ? "!text-red-400"
                          : i?.status === "1"
                            ? "!text-green-400"
                            : "!text-red-400"
                          } `}
                      > {i?.win ? '₹ ' + i?.win : "- " + ' ₹ ' + i?.amount}</Typography>
                    </Box>
                  </Box>
                  {/* <div className="!w-full !flex !justify-between">
                  <p style={{ color: zubgtext, }}>{i?.gamesno}</p> 
                    <p
                      className={`${i?.status === "0"
                        ? "!text-red-400"
                        : i?.status === "1"
                          ? "!text-green-400"
                          : "!text-red-400"
                        }`}
                    >
                      {i?.status === "0"
                        ? "Pending"
                        : i?.status === "1"
                          ? "Win"
                          : "Loss"}
                    </p>
                    <span
                      className={`${i?.status === "0"
                        ? "!text-red-400"
                        : i?.status === "1"
                          ? "!text-green-400"
                          : "!text-red-400"
                        }`}
                    >
                      {" "}
                      {rupees} {i?.status === "1" ? i?.win : i?.totalamount}
                    </span>
                  </div> */}
                </AccordionSummary>
                <AccordionDetails
                  sx={{ background: '#dadada', color: '#0D0335', borderRadius: '5px', }}
                  disableElevation
                >
                  <p className={`!text-black-400 !font-semibold !text-lg`}>
                    Period Detail
                  </p>
                  <div className="!w-full !grid !grid-cols-2 !gap-y-1 ">
                    <span className="bg-white !bg-opacity-10 py-1 px-2">
                      Period
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      {i?.gamesno}
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      Contract Money
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      {Number(i?.amount || 0).toFixed(2)}
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      Contract Count
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      0
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      Delivery
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      {Number(i?.totalamount || 0).toFixed(2)}
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      Fee
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      {Number(i?.commission || 0).toFixed(2)}
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      Open Price
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      {i?.gamesno}
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2 ">
                      Result
                    </span>

                    {i?.status !== "0" ? (
                      <div className="flex gap-2 items-center bg-white !bg-opacity-10 py-1 pl-1">

                        <span
                          className={`slot-id ${String(i?.result)?.slice(0, 3) === "300"
                            ? "bg-gradient-to-tl from-red-400 to-red-900"
                            : String(i?.result)?.slice(0, 3) === "200"
                              ? "!bg-gradient-to-t from-violet-400 to-violet-900"
                              : String(i?.result)?.slice(0, 3) === "100"
                                ? "bg-gradient-to-t from-green-400 to-green-900"
                                : ""
                            } transparentColor font-bold  text-lg !px-1`}
                        >
                          {String(i?.result)?.slice(0, 3) === "300"
                            ? "Red"
                            : String(i?.result)?.slice(0, 3) === "200"
                              ? "Violet"
                              : String(i?.result)?.slice(0, 3) === "100"
                                ? "Green"
                                : ""}
                        </span>
                        <span
                          className={`slot-id ${String(i?.result)?.slice(0, 3) === "300"
                            ? "bg-gradient-to-tl from-red-400 to-red-900"
                            : String(i?.result)?.slice(0, 3) === "200"
                              ? "!bg-gradient-to-t from-violet-400 to-violet-900"
                              : String(i?.result)?.slice(0, 3) === "100"
                                ? "bg-gradient-to-t from-green-400 to-green-900"
                                : ""
                            } transparentColor font-bold  text-lg `}
                        >
                          {
                            getNumber?.find(
                              (j) => j?.id === Number(String(i?.result?.slice(-1)))
                            )?.number
                          }


                        </span>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    <span className="bg-white !bg-opacity-10 py-1 px-2">
                      Select
                    </span>
                    <div className="!bg-white !bg-opacity-10 py-1 px-2">
                      <span className={`slot-id ${String(i?.number)?.slice(0, 3) === "300"
                        ? "bg-gradient-to-tl from-red-400 to-red-900"
                        : String(i?.number)?.slice(0, 3) === "200"
                          ? "!bg-gradient-to-t from-violet-400 to-violet-900"
                          : String(i?.number)?.slice(0, 3) === "100"
                            ? "bg-gradient-to-t from-green-400 to-green-900"
                            : ""
                        } transparentColor font-bold  text-lg !px-1`}> {i?.color}</span>
                    </div>
                    <span className="bg-white !bg-opacity-10 py-1 px-2">
                      Status
                    </span>
                    <span
                      className={`${i?.status === "0"
                        ? "!text-red-400"
                        : i?.status === "1"
                          ? "!text-green-400"
                          : "!text-red-400"
                        } bg-white !bg-opacity-10 py-1 px-2`}
                    >
                      {i?.status === "0"
                        ? "Pending"
                        : i?.status === "1"
                          ? "Win"
                          : "Loss"}
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2">
                      Amount
                    </span>
                    <span
                      className={`!text-green-400 bg-white !bg-opacity-10 py-1 px-2`}
                    >
                      {" "}
                      {rupees} {Number(i?.win)?.toFixed(2) || 0}
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2">
                      Create Time
                    </span>
                    <span className="bg-white !bg-opacity-10 py-1 px-2">
                      {moment(i?.datetime)?.format("DD-MM-YYYY")}{" "}
                      {moment(i?.datetime)?.format("HH:mm:ss")}
                    </span>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>

      <Box className="paginationTable " mb={10}>
        <TablePagination
          sx={{
            background: zubgtext,
            color: "white",
            borderRadius: "10px",
            marginTop: "10px",
          }}
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={my_history_data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows"
        />
      </Box>
      {/* <CustomCircularProgress isLoading={myhistory_loding} /> */}
    </Box>
  );
};

export default Jackpotmyhistory;
