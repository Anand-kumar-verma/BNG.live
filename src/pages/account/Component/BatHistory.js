import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  OutlinedInput,
  Stack,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { lightblue, lightgreen, zubgback, zubgbackgrad, zubgshadow, zubgtext, zubgwhite } from "../../../Shared/color";
import aviator_game_image from "../../../assets/aviator_game_image.png";
import Layout from "../../../component/Layout/Layout";
import { MyHistoryFn, getAllBetsAviator } from "../../../services/apicalling";
import { rupees } from "../../../services/urls";
function BatHistorys() {
  const [selectedGame, setSelectedGame] = React.useState("Lottery");
  const [selectedGameOption, setselectedGameOption] = React.useState("");

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { isLoading: myhistory_loding, data: my_history } = useQuery(
    ["my_all_history", selectedGame],
    () =>
      (selectedGame === "Lottery" && MyHistoryFn()) ||
      (selectedGame === "Aviator" && getAllBetsAviator()),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const my_history_data =
    selectedGame === "Lottery"
      ? my_history?.data?.data?.filter(
        (i) =>
          i?.gameid ===
          String(
            selectedGameOption === "Win Go 5 Min"
              ? "3"
              : selectedGameOption === "Win Go 3 Min"
                ? "2"
                : "1"
          )
      )
      : my_history?.data?.data;

  const visibleRows = React.useMemo(
    () =>
      my_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, my_history_data]
  );

  const selectionOption =
    (selectedGame === "Lottery" && [
      "Win Go 1 Min",
      "Win Go 3 Min",
      "Win Go 5 Min",
    ]) ||
    (selectedGame === "Aviator" && ["Aviator"]) ||
    [];
  return (
    <Layout>
      <Container
        className="no-scrollbar"
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Bet history
          </Typography>
          <Typography variant="body1" sx={{ color: 'white' }}>
            {" "}
          </Typography>
        </Box>

        <Box
          sx={{
            mt: "20px",
            background: zubgwhite,
            boxShadow: zubgshadow,
            marginLeft: "2.5%",
            borderRadius: "10px",
          }}
          className="!w-[95%] !grid lg:!grid-cols-4 !grid-cols-2 !place-items-center "
        >
          {[
            {
              img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_202401100619315n2k.png",
              item: "Lottery",
            },
            { img: aviator_game_image, item: "Aviator" },
            {
              img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061915xrqy.png",
              item: "Sports",
            },
            {
              img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061937gbid.png",
              item: "Slots",
            },
          ]?.map((i, index) => {
            return (
              <Box
                key={index}
                component={NavLink}
                sx={{
                  borderRadius: "10px",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
                className={
                  selectedGame === i.item && " !bg-opacity-20"
                }
                onClick={() => setSelectedGame(i.item)}
              >
                <Box component="img" src={i.img} sx={{ height: "55px" }}></Box>
                <p className="!text-center " sx={{ color: 'white' }}>{i.item}</p>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ padding: 2, width: "100%" }}>
          <Box component="form">
            <FormControl variant="outlined" fullWidth>
              <Stack direction="row">
                <OutlinedInput
                  className="search"
                  placeholder="Search "
                  fullWidth
                />
                <Button
                  sx={{
                    width: "70px",
                    height: "55px",
                    borderRadius: "10px",
                    background: lightgreen,
                    color: "white",
                    marginLeft: "20px",
                  }}
                >
                  <SearchIcon />
                </Button>
              </Stack>
            </FormControl>
          </Box>
          <FormControl
            variant="outlined"
            sx={{ width: "100%", marginTop: "10px" }}
            className="Select"
          >
            <TextField
              select
              value={selectedGameOption}
              onChange={(e) => setselectedGameOption(e.target.value)}
              sx={{ "&>div": { background: lightblue, color: zubgtext } }}
            >
              {selectionOption.map((i) => {
                return <MenuItem value={i}>{i}</MenuItem>;
              })}
            </TextField>
          </FormControl>
        </Box>

        {selectedGame === "Lottery" && (
          <Box
            className={"lg:!mb-[14%] !mb-[18%]"}
            sx={{ background: zubgtext }}
          >
            <Stack direction="row" className="onegotextbox">
              <Typography variant="body1" sx={{ color: 'white' }}>
                {selectedGameOption === "Win Go 1 Min"
                  ? " My One GO Record"
                  : selectedGameOption === "Win Go 3 Min"
                    ? " My Three GO Record"
                    : " My Five GO Record"}
              </Typography>
            </Stack>
            <div className="flex flex-col gap-3">
              {visibleRows?.map((i) => {
                return (
                  <div
                    style={{
                      background: zubgback,
                      padding: "15px",
                      borderRadius: "10px ",
                      marginBottom: "10px !important",
                    }}
                  >
                    <div className="flex justify-between">
                      <Typography
                        variant="body1"
                        sx={{
                          background: zubgtext,
                          color: "white !important",
                          padding: "5px 20px",
                          borderRadius: "5px",
                        }}
                      >
                        Bet
                      </Typography>
                      <p
                        className={`${i?.status === "0"
                          ? "!text-red-400"
                          : i?.status === "1"
                            ? "!text-green-400"
                            : "!text-blue-400"
                          }`}
                      >
                        {i?.status === "0"
                          ? "Pending"
                          : i?.status === "1"
                            ? "Win"
                            : "Loss"}
                      </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="!text-white !text-[12px]">Balance</p>
                      <p className="!text-white !text-[12px]">
                        {rupees} {i?.amount}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Bet Type</p>
                      <p className={`!text-white !text-[12px]`}>
                        {(["10", "1", "3", "7", "9"]?.includes(i?.color) &&
                          "Green") ||
                          (["30", "2", "4", "6", "8"]?.includes(i?.color) &&
                            "Red") ||
                          (i?.color === String(20) && "Voilet") ||
                          (i?.color === String(40) && "Big") ||
                          (i?.color === String(50) && "Small") ||
                          (i?.color === String(0) && "Red Voilet") ||
                          (i?.color === String(5) && "Green Voilet")}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Type</p>
                      <p className="!text-white !text-[12px]">
                        {i?.gameid === "1"
                          ? "1 min"
                          : i?.gameid === "2"
                            ? "3 min"
                            : "5 min"}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Win Amount</p>
                      <p className="!text-white !text-[12px]">
                        {rupees} {i?.win || 0}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Time</p>
                      <p className="!text-white !text-[12px]">
                        {moment(i?.datetime)?.format("DD-MM-YYYY")}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Order number</p>
                      <p className="!text-white !text-[12px]">{i?.gamesno}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Box className="paginationTable">
              <TablePagination
                sx={{
                  background: zubgbackgrad,
                  color: "white",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
                rowsPerPageOptions={[2, 5, 10, 15]}
                component="div"
                count={my_history_data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
            <CustomCircularProgress isLoading={myhistory_loding} />
          </Box>
        )}
        {selectedGame === "Aviator" && (
          <Box
            className={"lg:!mb-[14%] !mb-[18%]"}
            sx={{ background: zubgtext }}
          >
            <div className="flex flex-col gap-3">
              {visibleRows?.map((i) => {
                return (
                  <div
                    style={{
                      background: zubgback,
                      padding: "15px",
                      borderRadius: "10px ",
                      marginBottom: "10px !important",
                    }}
                  >
                    <div className="flex justify-between mt-2">
                      <p className="!text-white !text-[12px]">Amount</p>
                      <p className="!text-white !text-[12px]">
                        {rupees} {i?.amount}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">CashOut Amount</p>
                      <p className={`!text-white !text-[12px]`}>
                        {rupees} {Number(i?.cashout_amount || 0).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Multiplier</p>
                      <p className="!text-white !text-[12px]">
                        {i?.multiplier} X
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Date</p>
                      <p className="!text-white !text-[12px]">
                        {moment(i?.datetime)?.format("DD-MM-YYYY")}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Time</p>
                      <p className="!text-white !text-[12px]">
                        {moment(i?.datetime)?.format("HH:mm:ss")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Box className="paginationTable">
              <TablePagination
                sx={{
                  background: `${zubgtext} !important`,
                  color: "white",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
                rowsPerPageOptions={[2, 5, 10, 15]}
                component="div"
                count={my_history_data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
            <CustomCircularProgress isLoading={myhistory_loding} />
          </Box>
        )}
      </Container>
    </Layout>
  );
}

export default BatHistorys;

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
};
