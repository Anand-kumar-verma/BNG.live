import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import banner2 from "../../assets/images/giftRedeem.png";
import banner1 from "../../assets/images/signInBanner.png";
import actbanner1 from "../../assets/img/banner6.png";
import actbanner2 from "../../assets/img/banner4.png";
import b3 from "../../assets/img/banner3.jpg";
import b2 from "../../assets/img/banner2.jpg";
import b1 from "../../assets/img/banner1.png";

import BettingRebate from "../../assets/images/BettingRebate-17d35455.png";
import invitationBonus from "../../assets/images/invitationBonus-aa7acbd3.png";
import { bgfootergray } from "../../Shared/color";
import Layout from "../../component/Layout/Layout";
import { NavLink } from "react-router-dom";
import MyModal from "../../Shared/Modal";
import { yesterdayFn } from "../../services/apicalling";
import { useQuery } from "react-query";
import FirstDeposit from "../../Shared/FirstDeposit";

const style = {
    root: {
        background: bgfootergray,
        pt: 2,
        mt: "45px",
        px: 1,
        "&>p": { color: "white" },
        "&>p:nth-child(1)": { fontSize: "17px", fontWeight: 600 },
        "&>p:nth-child(2)": { fontSize: "12px", fontWeight: 400, mt: 1 },
        "&>p:nth-child(3)": { fontSize: "12px", fontWeight: 400, pb: 1 },
    },
    act: {
        px: 2,
        alignItems: "baseline",
        justifyContent: "space-between",
        width: "100%",
        mt: 3,
    },
    act2: { px: 2, width: "100%", mt: 3, pb: "80px" },
    actimg: {
        width: "49%",
        height: "200px",
        background: "#fff",
        borderRadius: "10px",
        paddingBottom: "20px",
        "&>p:nth-child(2)": { fontSize: "14px", fontWeight: 600, pl: 1 },
        "&>p:nth-child(3)": { fontSize: "12px", fontWeight: 400, pl: 1, pt: 1 },
    },
    actimg2: {
        mb: 2,
        width: "100%",
        background: "#fff",
        borderRadius: "10px",
        paddingBottom: "20px",
        "&>p:nth-child(2)": {
            fontSize: "18px",
            fontWeight: 700,
            pl: 1,
            textAlign: "center",
        },
    },
};
function FirstDepositBonus() {

    return (
        <Layout>
            <Box sx={style.root}>
            </Box>
            <FirstDeposit />
        </Layout>
    );
}

export default FirstDepositBonus;
