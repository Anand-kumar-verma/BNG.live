import { Box, Stack, TablePagination, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import moment from "moment";
import * as React from "react";
import { useSelector } from "react-redux";
import { bgtan, zubgtext } from "../../../../Shared/color";
import { rupees } from "../../../../services/urls";

const MyHistory = ({ gid }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const my_history_data = useSelector(
    (state) => state.aviator.trx_my_history_data
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      my_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, my_history_data]
  );

  return (
    <Box>
      <Stack direction="row" className="onegotextbox">
        {/* <Typography variant="body1" sx={{ color: bgtan }}>
          <Box
            component="img"
            src={history}
            width={25}
            sx={{
              marginRight: "10px",
              filter: "drop-shadow(2px 4px 6px black)",
            }}
          ></Box>
          {gid === "1"
            ? " My One GO Record"
            : gid === "2"
              ? " My Three GO Record"
              : " My Five GO Record"}
        </Typography> */}
      </Stack>
      <div className="flex flex-col gap-[2px]">
        {visibleRows?.map((i) => {
          return (
            <div>
              <Accordion className="!rounded-lg" disableElevation>
                <AccordionSummary
                  // expandIcon={<ArrowDownwardIcon sx={{ color: 'gray', mx: '10px' }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    background: "white",
                    color: zubgtext,
                    borderRadius: "5px",
                    margin: "0px important",
                    mb: 1,
                  }}
                >
                  <Box className="flexbetween">
                    <div className="!flex  gap-4">
                      <Box
                        sx={{
                          background: "red",
                          width: "45px",
                          height: "45px",
                          borderRadius: "10px",
                        }}
                        className={`flexcenter
                                     ${
                                       (i?.number === "0" &&
                                         "transparentColorRedPurpleBGTOP") ||
                                       (i?.number === "5" &&
                                         "transparentColorGreenRedBGTOP") ||
                                       ((i?.number === "1" ||
                                         i?.number === "3" ||
                                         i?.number === "7" ||
                                         i?.number === "9" ||
                                         i?.number === "10") &&
                                         "!bg-[#18b680]") ||
                                       ((i?.number === "2" ||
                                         i?.number === "4" ||
                                         i?.number === "6" ||
                                         i?.number === "8" ||
                                         i?.number === "30") &&
                                         "!bg-[#fb6161]") ||
                                       (i?.number === "50" &&
                                         "!bg-[#468ce8]") ||
                                       (i?.number === "40" &&
                                         "!bg-[#ffc300]") ||
                                       (i?.number === "20" && "!bg-[#c86eff]")
                                     }
                                  font-bold text-xl 

                                        `}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "white" }}
                          className="!text-[11px]"
                        >
                          {/* {i?.result <= 4 ? "Small" : "Big"} */}
                          {i?.number === "10" ? (
                            ""
                          ) : i?.number === "50" ? (
                            "small"
                          ) : i?.number === "40" ? (
                            "big"
                          ) : i?.number === "30" ? (
                            ""
                          ) : i?.number === "20" ? (
                            ""
                          ) : (
                            <span className="!text-lg">{i?.number}</span>
                          )}
                        </Typography>
                      </Box>
                      <Box className="flexrowsstart">
                        <Typography
                          variant="body1"
                          className="funp15"
                          sx={{ color: "#0D0335", textDecoration: "none" }}
                        >
                          <span className="!text-[14px]">{i?.gamesno}</span>
                        </Typography>
                        <Typography
                          variant="body1"
                          className="funp13 !mt-1"
                          sx={{ color: "#0D0335" }}
                        >
                          <span className="!text-[10px] !text-gray-500">
                            {moment(i?.datetime)?.format("DD-MM-YYYY")}{" "}
                            {moment(i?.datetime)?.format("HH:mm:ss")}
                          </span>
                        </Typography>
                      </Box>
                    </div>
                    <Box className="flexrows">
                      <Typography
                        variant="body1"
                        sx={{
                          borderRadius: "5px",
                          padding: "1px 10px",
                          border: `.5px solid red`,
                          color: "red",
                        }}
                        className={` funp15
                        !w-[80px] !text-center
                         ${
                           i?.status === "0"
                             ? "!text-red-400"
                             : i?.status === "1"
                             ? "!text-green-400 !border-[.5px] !border-green-500"
                             : "!text-red-400"
                         } !py-0`}
                      >
                        {" "}
                        {i?.status === "0"
                          ? "Pending"
                          : i?.status === "1"
                          ? "Success"
                          : "Failed"}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "red", mt: 1 }}
                        className={` funp13 ${
                          i?.status === "0"
                            ? "!text-red-400"
                            : i?.status === "1"
                            ? "!text-green-400"
                            : "!text-red-400"
                        } !pr-1`}
                      >
                        {" "}
                        {i?.win ? "₹ " + i?.win : "- " + " ₹ " + i?.amount}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ borderRadius: "10px", color: "black" }}>
                  <p
                    className={`!text-black-400 !font-semibold !text-lg`}
                    style={{ color: "black !important" }}
                  >
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
                      <div className="flex gap-2 items-center bg-white !bg-opacity-10 py-1 px-2">
                        <span>{`${i?.result}`}</span>
                        <span
                          className={`
                  ${
                    (i?.result === "0" &&
                      "!bg-gradient-to-t from-red-400 to-violet-400") ||
                    (i?.result === "5" &&
                      "!bg-gradient-to-t from-violet-400 to-green-400") ||
                    ((i?.result === "1" ||
                      i?.result === "3" ||
                      i?.result === "7" ||
                      i?.result === "9" ||
                      i?.result === "10") &&
                      "bg-gradient-to-t from-green-400 to-green-900") ||
                    ((i?.result === "2" ||
                      i?.result === "4" ||
                      i?.result === "6" ||
                      i?.result === "8" ||
                      i?.result === "30") &&
                      "bg-gradient-to-tl from-red-400 to-red-900") ||
                    (i?.result === "50" && "bg-[#3183ee]") ||
                    (i?.result === "40" && "bg-[#f1be24]") ||
                    (i?.result === "20" && "bg-[#eb2feb]")
                  }
                  transparentColor font-bold text-xl
                  `}
                        >
                          {i?.result === "0"
                            ? "Red Voilet"
                            : i?.result === "1" ||
                              i?.result === "3" ||
                              i?.result === "7" ||
                              i?.result === "9"
                            ? "Green"
                            : i?.result === "5"
                            ? "Voilet Green"
                            : (i?.result === "2" ||
                                i?.result === "4" ||
                                i?.result === "6" ||
                                i?.result === "8") &&
                              "Red"}
                        </span>
                        <span>{Number(i?.result) <= 4 ? "Small" : "Big"}</span>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    <span className="bg-white !bg-opacity-10 py-1 px-2">
                      Select
                    </span>
                    <div className="!bg-white !bg-opacity-10 py-1 px-2">
                      <span
                        className={`
                  ${
                    (i?.number === "0" &&
                      "!bg-gradient-to-t from-red-400 to-violet-400") ||
                    (i?.number === "5" &&
                      "!bg-gradient-to-t from-violet-400 to-green-400") ||
                    ((i?.number === "1" ||
                      i?.number === "3" ||
                      i?.number === "7" ||
                      i?.number === "9" ||
                      i?.number === "10") &&
                      "bg-gradient-to-t from-green-400 to-green-900") ||
                    ((i?.number === "2" ||
                      i?.number === "4" ||
                      i?.number === "6" ||
                      i?.number === "8" ||
                      i?.number === "30") &&
                      "bg-gradient-to-tl from-red-400 to-red-900") ||
                    (i?.number === "50" && "bg-[#3183ee]") ||
                    (i?.number === "40" && "bg-[#f1be24]") ||
                    (i?.number === "20" && "bg-[#eb2feb]")
                  }
                  transparentColor font-bold text-xl 

                  `}
                      >
                        {i?.number === "10"
                          ? "Green"
                          : i?.number === "50"
                          ? "Small"
                          : i?.number === "40"
                          ? "Big"
                          : i?.number === "30"
                          ? "Red"
                          : i?.number === "20"
                          ? "Voilet"
                          : i?.number}
                      </span>
                    </div>
                    <span className="bg-white !bg-opacity-10 py-1 px-2">
                      Status
                    </span>
                    <span
                      className={`${
                        i?.status === "0"
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
                      {rupees} {i?.win || 0}
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

      <Box className="paginationTable " mb={12}>
        <TablePagination
          sx={{
            background: zubgtext,
            color: bgtan,
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

export default MyHistory;
