import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bggold, bgtan, lightblue, zubgback, zubgtext } from "../../../../Shared/color";
import history from "../../../../assets/images/list.png";

const GameHistory = ({ gid }) => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const game_history_data = useSelector(
    (state) => state.aviator.trx_game_history_data
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
      game_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, game_history_data]
  );
  return (
    <Box sx={{ pb: 4 }}>
      <Stack direction="row" className="onegotextbox">
        {/* <Typography variant="body1" sx={{ color: bggold }}>
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
            ? "One GO Record"
            : gid === "2"
              ? "Three Go Record"
              : "Five Go Record"}
        </Typography> */}
      </Stack>
      <TableContainer sx={{ borderRadius: "7px" }}>
        {/* <Table
          sx={{
            background: zubgback,
            color: "white",
            borderRadius: "10px  10px 0px 0px",
          }}
          className="wintable"
          // aria-label="simple table"
        >
          <TableHead sx={{ borderRadius: "10px  10px 0px 0px" }}>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 600 }}
              >
                Period
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600 }}
              >
                Block
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600 }}
              >
                Block Time
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600 }}
              >
                Hash
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600 }}
              >
                Result
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((i) => {
              return (
                <TableRow className="!w-[95%]" sx={{ background: "#0D0335" }}>
                  <TableCell
                    className="!text-white"
                    sx={{
                      padding: " 10px 5px",
                      fontsize: " 13px",
                      borderBottom: `1px solid ${lightblue}`,
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "12px",
                        color: zubgtext,
                      }}
                    >
                      {i?.tr_transaction_id}
                    </p>
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "10px 5px",
                      fontsize: " 13px",
                      borderBottom: `1px solid ${lightblue}`,
                    }}
                    className="!flex !gap-1"
                  >
                    <span>
                      <LiveHelpIcon
                        
                        className="!text-[#FBA343] cursor-pointer !text-[16px]"
                        onClick={() =>
                          navigate("/trx/tron-scan", {
                            state: {
                              tron_id: i?.tr_number,
                            },
                          })
                        }
                      />
                    </span>
                    <span style={{ color: "white" }}>{i?.tr_number}</span>
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: " 10px 5px",
                      fontsize: " 13px",
                      borderBottom: `1px solid ${lightblue}`,
                    }}
                  >
                    <span style={{ color: "white" }}>{i?.tr_block_time}</span>
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: " 10px 5px",
                      fontsize: " 13px",
                      borderBottom: `1px solid ${lightblue}`,
                    }}
                  >
                    <span style={{ color: "white" }}> {i?.tr_hashno}</span>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: " 10px 5px",
                      fontsize: " 13px",
                      borderBottom: `1px solid ${lightblue}`,
                    }}
                  >
                    <span
                      className={`
                ${
                  (String(Number(i?.tr41_slot_id)) === "0" &&
                    "!bg-gradient-to-t from-red-400 to-violet-400") ||
                  (String(Number(i?.tr41_slot_id)) === "5" &&
                    "!bg-gradient-to-t from-violet-400 to-green-400") ||
                  ((String(Number(i?.tr41_slot_id)) === "1" ||
                    String(Number(i?.tr41_slot_id)) === "3" ||
                    String(Number(i?.tr41_slot_id)) === "7" ||
                    String(Number(i?.tr41_slot_id)) === "9" ||
                    String(Number(i?.tr41_slot_id)) === "10") &&
                    "bg-gradient-to-t from-green-400 to-green-900") ||
                  ((String(Number(i?.tr41_slot_id)) === "2" ||
                    String(Number(i?.tr41_slot_id)) === "4" ||
                    String(Number(i?.tr41_slot_id)) === "6" ||
                    String(Number(i?.tr41_slot_id)) === "8" ||
                    String(Number(i?.tr41_slot_id)) === "30") &&
                    "bg-gradient-to-tl from-red-400 to-red-900") ||
                  (String(Number(i?.tr41_slot_id)) === "50" &&
                    "bg-[#3183ee]") ||
                  (String(Number(i?.tr41_slot_id)) === "40" &&
                    "bg-[#f1be24]") ||
                  (String(Number(i?.tr41_slot_id)) === "20" && "bg-[#eb2feb]")
                }
                transparentColor font-bold  text-lg
                `}
                      style={{ color: "white" }}
                    >
                      {Number(i?.tr41_slot_id)}
                    </span>
                    <span style={{ color: "white" }}>
                      {" "}
                      {Number(i?.tr41_slot_id) <= 4 ? "S" : "B"}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table> */}
      </TableContainer>
      <div className={`!w-full !text-[${zubgback}]   rounded-t-lg`}>
        <div
          className="!w-full !text-[13px] !grid !grid-cols-8 !place-items-center !px-2 py-4 
        !bg-[#3A3947] rounded-t-lg !text-white"
        >
          <p className="fw600 !col-span-1">Period</p>
          <p className="fw600 !col-span-2">Block height</p>
          <p className="fw600 !col-span-2">Block Time</p>
          <p className="fw600 !col-span-2">Hash value</p>
          <p className="fw600 !col-span-1">Result</p>
        </div>
        <div className={`!w-full`}>
          {visibleRows?.map((i) => {
            return (
              <>
                <div className="!w-full  !grid !grid-cols-12  !place-items-center !text-[12px] !bg-[#333332] !px-2 !py-1 ">
                  <p className="!col-span-2 !text-[#ffffff] !font-semibold !text-[13px] bdg" >
                    {i?.tr_transaction_id}
                  </p>
                  <p className="!col-span-3 !flex gap-[1px] fccc ">
                    <span style={{ color: "white" }} >
                      <LiveHelpIcon
                        className="!text-[#FBA343] cursor-pointer !text-[16px]"
                        onClick={() =>
                          navigate("/trx/tron-scan", {
                            state: {
                              tron_id: i?.tr_number,
                            },
                          })
                        }
                      />
                    </span>
                    <span
                      style={{ color: "white" }}
                    >
                      {i?.tr_number}
                    </span>
                  </p>
                  <p className="!col-span-3 bdg" style={{ color: "white" }}>{i?.tr_block_time}</p>
                  <p className="bdg !col-span-3" style={{ color: "white" }}>{i?.tr_hashno}</p>
                  <div className="!flex !gap-[1px]  !items-center ">
                    <p
                      className={` bdg
                      ${(String(Number(i?.tr41_slot_id)) === "0" &&
                          "!bg-gradient-to-t from-red-400 to-violet-400") ||
                        (String(Number(i?.tr41_slot_id)) === "5" &&
                          "!bg-gradient-to-t from-violet-400 to-green-400") ||
                        ((String(Number(i?.tr41_slot_id)) === "1" ||
                          String(Number(i?.tr41_slot_id)) === "3" ||
                          String(Number(i?.tr41_slot_id)) === "7" ||
                          String(Number(i?.tr41_slot_id)) === "9" ||
                          String(Number(i?.tr41_slot_id)) === "10") &&
                          "bg-gradient-to-t from-green-400 to-green-900") ||
                        ((String(Number(i?.tr41_slot_id)) === "2" ||
                          String(Number(i?.tr41_slot_id)) === "4" ||
                          String(Number(i?.tr41_slot_id)) === "6" ||
                          String(Number(i?.tr41_slot_id)) === "8" ||
                          String(Number(i?.tr41_slot_id)) === "30") &&
                          "bg-gradient-to-tl from-red-400 to-red-900") ||
                        (String(Number(i?.tr41_slot_id)) === "50" &&
                          "bg-[#3183ee]") ||
                        (String(Number(i?.tr41_slot_id)) === "40" &&
                          "bg-[#f1be24]") ||
                        (String(Number(i?.tr41_slot_id)) === "20" && "bg-[#eb2feb]")
                        }
                        transparentColor  text-lg
                        `}
                    // style={{ color: "white" }}
                    >
                      <span className="!font-semibold">
                        {" "}
                        {Number(i?.tr41_slot_id)}
                      </span>
                      <span className="!font-semibold">
                        {Number(i?.tr41_slot_id) <= 4 ? "S" : "B"}
                      </span>
                    </p>
                  </div>
                </div>
                {/* <div className="!w-full !h-[1px] !bg-[#242424]"></div> */}
              </>
            );
          })}
        </div>
      </div>
      <Box className="paginationTable !w-full " mb={6}>
        <TablePagination
          sx={{ background: zubgtext, color: bgtan, width: "100%" }}
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={game_history_data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows"
        />
      </Box>
      {/* <CustomCircularProgress isLoading={isLoading}/> */}
    </Box>
  );
};

export default GameHistory;
