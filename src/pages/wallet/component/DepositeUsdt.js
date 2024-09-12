import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
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
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { bgdarkgray, bggrad, zubgback, zubgbackgrad, zubgmid, zubgshadow, zubgtext } from "../../../Shared/color";
import deposit from "../../../assets/check.png";
import Layout from "../../../component/Layout/Layout";
import {
    depositHistoryUsdtFunction
} from "../../../services/apicalling";
import theme from "../../../utils/theme";

function DepositeUsdt() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const { isLoading, data } = useQuery(
        ["deposit_history_usdt"],
        () => depositHistoryUsdtFunction(),
        {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
        }
    );
    const res = data?.data?.data || []

    console.log(res);
    return (
        <Layout>
            <Container
                sx={{
                    background: theme.palette.secondary.main,
                    width: "100%",
                    height: "100vh",
                    overflow: "auto",
                    mb: 5,
                    mt: 9,
                }}
                className="no-scrollbar"
            >
                <CustomCircularProgress isLoading={isLoading} />

                <Box>
                    <Box
                        sx={{
                            padding: "10px",

                            borderRadius: "10px",
                            mb: 5,
                        }}
                    >
                        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
                            <Box component="img" src={deposit} width={30}></Box>
                            <Typography
                                variant="body1"
                                color="initial"
                                sx={{ fontSize: "15px ", color: 'white', ml: "10px" }}
                            >
                                Deposit USDT history
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
                                                    color: 'white',
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                Deposit
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Button
                                                sx={{ color: "green", textTransform: "capitalize" }}
                                                className={`${i?.status === "success"
                                                    ? "!text-green-500"
                                                    : "!text-red-500"
                                                    }`}
                                            >
                                                {i?.status}
                                            </Button>
                                            <IconButton>
                                                <ArrowForwardIcon sx={{ color: zubgtext }} />
                                            </IconButton>
                                        </Box>
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        sx={{
                                            mb: "10px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Balance
                                        </Typography>
                                        <Typography variant="body1" color="initial">
                                            $ {i?.amt}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        sx={{
                                            mb: "10px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Date/Time
                                        </Typography>
                                        <Typography variant="body1" color="initial">
                                            {moment(i?.created_at)?.format("DD-MM-YYYY")}{" "}
                                            {moment(i?.created_at)?.format("HH:mm:ss")}
                                        </Typography>
                                    </Stack>
                                    {i?.success_date !== "NUll" && <Stack
                                        direction="row"
                                        sx={{
                                            mb: "10px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Success Date/Time
                                        </Typography>
                                        <Typography variant="body1" color="initial" className="!text-green-500">
                                            {moment(i?.success_date)?.format("DD-MM-YYYY")}{" "}
                                            {moment(i?.success_date)?.format("HH:mm:ss")}
                                        </Typography>
                                    </Stack>}
                                    <Stack
                                        direction="row"
                                        sx={{
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Trans number
                                        </Typography>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                "&>p": { color: zubgtext },
                                            }}
                                        >
                                            <Typography variant="body1" color="initial">
                                                {i?.order_id}
                                            </Typography>
                                            <IconButton>
                                                <ContentCopyIcon sx={{ color: zubgtext }} />
                                            </IconButton>
                                        </Stack>
                                    </Stack>
                                </Box>
                            );
                        })}
                        {/* <Button sx={style.paytmbtntwo}>All history</Button> */}
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
}

export default DepositeUsdt;

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
