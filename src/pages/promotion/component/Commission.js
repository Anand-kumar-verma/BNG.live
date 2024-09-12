import { ArrowDropDown } from '@mui/icons-material';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';
import CryptoJS from "crypto-js";
import dayjs from 'dayjs';
import moment from 'moment';
import * as React from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { bggrad, bgtan, lightblue, lightgreen, zubgback, zubggray, zubgtext } from '../../../Shared/color';
import Layout from '../../../component/Layout/Layout';
import { endpoint } from '../../../services/urls';
import theme from '../../../utils/theme';
import Calendar from './Calender';

function Commission() {
    const [isOpen1, setIsOpen1] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(moment().format("YYYY-MM-DD"));
    const [data, setData] = React.useState(null);

    const toggleDrawer1 = () => { setIsOpen1(!isOpen1); };

    const handleDateSelect = (date) => {
        setSelectedDate(dayjs(date)?.format("YYYY-MM-DD"));
    };

    const login_data =
        (localStorage.getItem("logindataen") &&
            CryptoJS.AES.decrypt(
                localStorage.getItem("logindataen"),
                "anand"
            )?.toString(CryptoJS.enc.Utf8)) ||
        null;

    const user_id = login_data && JSON.parse(login_data)?.UserID;



    const fetchData = async () => {
        setLoading(true);
        const reqbody = {
            user_main_id: user_id || "",
            in_date: selectedDate,
        };
        try {
            const response = await axios.post(`${endpoint.commission_data}`, reqbody);
            if (response?.data?.msg === "Data get successfully") {
                setData(response.data?.data);
            } else {
                toast.error('Data not found');
            }
        } catch (e) {
            toast.error(e?.message || 'An error occurred');
        }
        setLoading(false);
    };

    React.useEffect(() => {
        fetchData();
    }, [selectedDate, user_id]);

    return (
        <Layout header={false}>
            <Container sx={{ background: theme.palette.secondary.main, width: '100%', minHeight: '100vh', }}>
                <CustomCircularProgress isLoading={loading} />
                <Box sx={style.header}>
                    <Box component={NavLink} to='/promotion/'>
                        <KeyboardArrowLeftOutlinedIcon sx={{ color: bgtan }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: bgtan }}>Commission Income</Typography>
                    <Typography variant="body1" sx={{ color: bgtan }}> </Typography>
                </Box>
                <Stack direction="row" justifyContent={"space-between"} className='!mt-5 !mx-3'>
                    <Box className="!border text-gray-500  !w-1/2 !p-2 !flex !justify-between" onClick={toggleDrawer1}>
                        {selectedDate} <ArrowDropDown />
                    </Box>
                </Stack>
                {data?.map((item) => {
                    return <div className="flex flex-col justify-center gap-1 mt-5 !mb-20 m-2" >

                        <div className="flex flex-col  text-gray-500 justify-center shadow-xl rounded-lg    p-3" style={{ background: bggrad, color: bgtan }}>
                            <p className='text-gray-500' style={{ color: bgtan }}>Settlement successfully </p>
                            <p className='text-gray-500' style={{ color: bgtan }}>{item?.satelment_date || 0}</p>
                            The commission has been automatically credited to your balance
                        </div>
                        <div className="flex justify-between shadow-xl  rounded-lg    p-3" style={{ background: bggrad, color: bgtan }}>
                            <p className='text-gray-400' style={{ color: bgtan }}>Number of bettors</p>
                            <p className='font-bold'>{item?.num_of_betters || 0}</p>
                        </div>
                        <div className="flex justify-between shadow-xl  rounded-lg    p-3" style={{ background: bggrad, color: bgtan }}>
                            <p className='text-gray-400' style={{ color: bgtan }}>Bet Amount</p>
                            <p className='font-bold'>{item?.better_amount || 0}</p>
                        </div>
                        <div className="flex justify-between shadow-xl  rounded-lg    p-3" style={{ background: bggrad, color: bgtan }}>
                            <p className='text-gray-400' style={{ color: bgtan }}>Commission Payout</p>
                            <p className='font-bold'>{item?.total_commission_user || 0}</p>
                        </div>
                        <div className="flex justify-between shadow-xl  rounded-lg    p-3" style={{ background: bggrad, color: bgtan }}>
                            <p className='text-gray-400' style={{ color: bgtan }}>Date</p>
                            <p className='font-bold'>{item?.clossing_date || 0}</p>
                        </div>
                    </div>
                })}

                {/* Date Drawer */}
                <div className={`drawer ${isOpen1 ? 'open' : ''} !pb-20 px-1`}>
                    <div className='!flex flex-col justify-between my-5'>
                        <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} className="!mt-10" />
                        <div className='!flex justify-between px-5'>
                            <p className='!cursor-pointer' onClick={toggleDrawer1}>Cancel</p>
                            <p className='text-orange-500 !cursor-pointer' onClick={toggleDrawer1}>Confirm</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Commission

const style = {
    header: {
        padding: '15px 8px',
        background: zubgtext,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > p': {
            fontSize: '20px',
            fontWeight: '600',
            textAlign: 'center',
        },
        '& > a > svg': {
            fontSize: '35px'
        }
    },
    commitionboxOuter: {
        width: "100%",
        backgroundSize: '100% 100%',
        "&>img": { width: "100%", height: "100%" },
    },
    commitionbox: {
        margin: "auto",
        width: "70%",
        textAlign: "center",
        py: 5,
        "&>p:nth-child(1)": { fontSize: "25px", fontWeight: "500" },
        "&>p:nth-child(2)": {
            fontSize: "13px",
            fontWeight: "400",
            padding: "5px 0px",
            background: lightblue,
            borderRadius: "20px",
        },
        "&>p:nth-child(3)": {
            fontSize: "13px",
            fontWeight: "400",
            marginTop: "5px",
        },
    },
    subordinatesleft: {
        width: "50%",
        textAlign: "center",
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: zubgtext,
        borderTopLeftRadius: "10px",
        borderRight: "2px solid black",
        "&>svg": { color: "white", fontSize: "25px", marginRight: "10px" },
        "&>p": { color: "white", fontSize: "14px", fontWeight: "500" },
    },
    subordinatesRight: {
        width: "50%",
        textAlign: "center",
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: zubgtext,
        borderTopRightRadius: "10px",
        "&>svg": { color: "white", fontSize: "25px", marginRight: "10px" },
        "&>p": { color: "white", fontSize: "14px", fontWeight: "500" },
    },
    boxStyles: {
        backgroundSize: '100% 100%',
        padding: "30px 15px",
        display: "flex",
        borderRadius: " 0px 0px 10px 10px",
    },
    innerBoxStyles: {
        width: "50%",
        borderRight: "1px solid black",
        borderBottomLeftRadius: "10px",
        padding: "0px 0px",
    },
    innerBoxStylestwo: { width: "50%", padding: "0px 0px" },
    subcordinatelist: {
        textAlign: "center",
        "&>p:nth-child(1)": { color: lightblue, fontSize: "13px" },
        "&>p:nth-child(2)": { color: 'red', fontSize: "13px" },
        mb: 1,
    },
    subcordinateBox: {
        width: "100%",
        padding: "20px 10px",
        background: zubgback,
    },
    invitebutton: {
        width: "100%",
        background: zubgback,
    },
    invitebtn: {
        mt: "20px",
        "&>a>p": {
            width: "80%",
            marginLeft: "10%",
            borderRadius: "20px",
            textAlign: "center",
            padding: "10px",
            background: zubgtext,
            color: "white",
            fontSize: "17px",
            fontWeight: 600,
        },
    },
    invitbox: {
        width: "95%",
        background: zubggray,
        padding: "10px",
        mb: "20px",
        borderRadius: "10px",
        marginLeft: "2.5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&>div>img": { width: "30px", marginRight: "10px" },
        "&>div>p": { fontSize: "14px", color: "white !important" },
        "&>div": { alignItems: "center" },
        "&>div:nth-child(2)>p": { marginRight: "20px", color: "white !important" },
        "&>div:nth-child(2)>svg": {
            fontSize: "14px",
            marginRight: "10px",
            color: "white !important",
        },
    },
    promotionBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&>div:nth-child(1)": { alignItems: "center" },
        "&>div:nth-child(1)>img": { width: "35px", marginRight: "10px" },
        "&>div:nth-child(1)>p": {
            fontSize: "17px",
            fontWeight: 500,
            color: "white !important",
        },
    },
    promotionBoxOuter: {
        width: "95%",
        background: lightgreen,
        padding: "10px",
        mt: "20px",
        borderRadius: "5px",
        marginLeft: "2.5%",
        paddingBottom: "15px",
        "&>div:nth-child(2)>div:nth-child(1)": {
            my: "10px",
            borderRight: "1px solid gray",
            width: "50%",
            textAlign: "center",
        },
        "&>div:nth-child(2)>div:nth-child(2)": {
            my: "10px",
            width: "50%",
            textAlign: "center",
        },
        "&>div:nth-child(2)>div>p:nth-child(1)": { color: "white !important" },
        "&>div:nth-child(2)>div>p:nth-child(2)": {
            fontSize: "13px",
            fontWeight: 500,
            color: "white !important",
        },
        "&>div:nth-child(3)>div:nth-child(1)": {
            my: "10px",
            borderRight: "1px solid #ff00001f",
            width: "50%",
            textAlign: "center",
        },
        "&>div:nth-child(3)>div:nth-child(2)": {
            my: "10px",
            width: "50%",
            textAlign: "center",
        },
        "&>div:nth-child(3)>div>p:nth-child(1)": { color: "white !important" },
        "&>div:nth-child(3)>div>p:nth-child(2)": {
            fontSize: "13px",
            fontWeight: 500,
            color: "white !important",
        },
    },
    promotionBoxOutertwo: {
        width: "90%",
        background: zubgback,
        padding: "10px",
        borderRadius: "5px",
        marginLeft: "5%",
        paddingBottom: "70px",
    },
};







