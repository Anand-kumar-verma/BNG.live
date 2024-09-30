import { ArrowBackIos } from "@mui/icons-material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Fade,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../../assets/images/profile.jpg";
import vip from "../../assets/images/vip.png";
import vip01 from "../../assets/images/vip01.png";
import vip02 from "../../assets/images/vip02.png";
import vip03 from "../../assets/images/vip03.png";
import vip04 from "../../assets/images/vip04.png";
import vip05 from "../../assets/images/vip05.png";
import vip06 from "../../assets/images/vip06.png";
import vip1 from "../../assets/images/vip1.png";
import vip10 from "../../assets/images/vip10.png";
import vip1010 from "../../assets/images/vip1010.png";
import vip11 from "../../assets/images/vip11.png";
import vip111 from "../../assets/images/vip111.png";
import vip1111 from "../../assets/images/vip1111.png";
import vip2 from "../../assets/images/vip2.png";
import vip22 from "../../assets/images/vip22.png";
import vip222 from "../../assets/images/vip222.png";
import vip2222 from "../../assets/images/vip2222.png";
import vip3 from "../../assets/images/vip3.png";
import vip333 from "../../assets/images/vip333.png";
import vip3333 from "../../assets/images/vip3333.png";
import vip4 from "../../assets/images/vip4.png";
import vip44 from "../../assets/images/vip44.png";
import vip5 from "../../assets/images/vip5.png";
import vip55 from "../../assets/images/vip55.png";
import vip6 from "../../assets/images/vip6.png";
import vip66 from "../../assets/images/vip66.png";
import vip7 from "../../assets/images/vip7.png";
import vip77 from "../../assets/images/vip77.png";
import vip8 from "../../assets/images/vip8.png";
import vip88 from "../../assets/images/vip88.png";
import vip9 from "../../assets/images/vip9.png";
import vip99 from "../../assets/images/vip99.png";
import Layout from "../../component/Layout/Layout";
import { VipIncomeFn, yesterdayFn } from "../../services/apicalling";
import { rupees } from "../../services/urls";
import { bgcolorlight, bggold, bgtan } from "../../Shared/color";

function VIPPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const { isLoading, data: data } = useQuery(
    ["vip_bonus"],
    () => VipIncomeFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    }
  );
  const res = data?.data?.data;
  const { data: vip_data } = useQuery(
    ["yesterday_income"],
    () => yesterdayFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const vip_data_res = vip_data?.data?.data || [];
  const Rules = () => {
    return (
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "17px",
            fontWeight: "500",
            mb: "8px !important",
            mt: "16px !important",
            color: bggold,
            fontFamily: "roboto !important",
          }}
        >
          VIP privileges
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "17px",
            fontWeight: "500",
            mb: "8px !important",
            color: "white",
            fontFamily: "roboto !important",
          }}
        >
          VIP rule description
        </Typography>

        <Card className="w95" sx={styles.rulebox}>
          <Box sx={styles.rule2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#a8a5a1",
                fontFamily: "inter !important",
              }}
            >
              Upgrade standard
            </Typography>
          </Box>
          <Typography
            className="w fp13 fw400"
            sx={{ fontFamily: "roboto !important" }}
            py={1}
            mb={1}
          >
            The IP member's experience points (valid bet amount) that meet the
            requirements of the corresponding rank will be promoted to the
            corresponding VIP level, the member's VIP data statistics period
            starts from 00:00:00 days VIP system launched.VIP level calculation
            is refreshed every 10 minutes! The corresponding experience level is
            calculated according to valid odds 1:1 !
          </Typography>
        </Card>

        <Card className="w95" sx={styles.rulebox}>
          <Box sx={styles.rule2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#a8a5a1",
                fontFamily: "inter !important",
              }}
            >
              Upgrade order
            </Typography>
          </Box>
          <Typography
            className="w fp13 fw400"
            sx={{ fontFamily: "roboto !important" }}
            py={1}
            mb={1}
          >
            The VIP level that meets the corresponding requirements can be
            promoted by one level every day, but the VIP level cannot be
            promoted by leapfrogging.
          </Typography>
        </Card>

        <Card className="w95" sx={styles.rulebox}>
          <Box sx={styles.rule2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#a8a5a1",
                fontFamily: "inter !important",
              }}
            >
              Level maintenance
            </Typography>
          </Box>
          <Typography
            className="w fp13 fw400"
            sx={{ fontFamily: "roboto !important" }}
            py={1}
            mb={1}
          >
            VIP members need to complete the maintenance requirements of the
            corresponding level within 30 days after the "VIP level change"; if
            the promotion is completed during this period, the maintenance
            requirements will be calculated according to the current level.
          </Typography>
        </Card>

        <Card className="w95" sx={styles.rulebox}>
          <Box sx={styles.rule2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#a8a5a1",
                fontFamily: "inter !important",
              }}
            >
              Downgrade standard
            </Typography>
          </Box>
          <Typography
            className="w fp13 fw400"
            sx={{ fontFamily: "roboto !important" }}
            py={1}
            mb={1}
          >
            If a VIP member fails to complete the corresponding level
            maintenance requirements within 30 days, the system will
            automatically deduct the experience points corresponding to the
            level. If the experience points are insufficient, the level will be
            downgraded, and the corresponding discounts will be adjusted to the
            downgraded level accordingly.
          </Typography>
        </Card>

        <Card className="w95" sx={styles.rulebox}>
          <Box sx={styles.rule2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#a8a5a1",
                fontFamily: "inter !important",
              }}
            >
              Upgrade Bonus
            </Typography>
          </Box>
          <Typography
            className="w fp13 fw400"
            sx={{ fontFamily: "roboto !important" }}
            py={1}
            mb={1}
          >
            The upgrade benefits can be claimed on the VIP page after the member
            reaches the VIP membership level, and each VIP member can only get
            the upgrade reward of each level once.
          </Typography>
        </Card>

        <Card className="w95" sx={styles.rulebox}>
          <Box sx={styles.rule2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#a8a5a1",
                fontFamily: "inter !important",
              }}
            >
              Monthly reward
            </Typography>
          </Box>
          <Typography
            className="w fp13 fw400"
            sx={{ fontFamily: "roboto !important" }}
            py={1}
            mb={1}
          >
            VIP members can earn the highest level of VIP rewards once a
            month.Can only be received once a month. Prizes cannot be
            accumulated. And any unclaimed rewards will be refreshed on the next
            settlement day. When receiving the highest level of monthly rewards
            this month Monthly Rewards earned in this month will be deducted
            e.g. when VIP1 earns 500 and upgrades to VIP2 to receive monthly
            rewards 500 will be deducted.
          </Typography>
        </Card>

        <Card className="w95" sx={styles.rulebox}>
          <Box sx={styles.rule2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#a8a5a1",
                fontFamily: "inter !important",
              }}
            >
              Real-time rebate
            </Typography>
          </Box>
          <Typography
            className="w fp13 fw400"
            sx={{ fontFamily: "roboto !important" }}
            py={1}
            mb={1}
          >
            The higher the VIP level, the higher the return rate, all the games
            are calculated in real time and can be self-rewarded!
          </Typography>
        </Card>

        <Card className="w95" sx={styles.rulebox}>
          <Box sx={styles.rule2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#a8a5a1",
                fontFamily: "inter !important",
              }}
            >
              Safe
            </Typography>
          </Box>
          <Typography
            className="w fp13 fw400"
            sx={{ fontFamily: "roboto !important" }}
            py={1}
            mb={1}
          >
            VIP members who have reached the corresponding level will get
            additional benefits on safe deposit based on the member's VIP level.
          </Typography>
        </Card>
      </Box>
    );
  };
  return (
    <Layout header={false} footer={false}>
      <Box sx={styles.header}>
        <Box sx={styles.headerContainer}>
          <Box sx={styles.backButton}>
            <ArrowBackIos sx={styles.backIcon} onClick={handleBack} />
          </Box>
          <Typography sx={styles.title}>VIP</Typography>
          <Typography sx={{ color: "white", width: "20%" }}></Typography>
        </Box>
      </Box>
      <Box sx={styles.vipContainer}>
        <Box sx={styles.vipInfo}>
          <Avatar src={profile} alt="Profile Image" sx={styles.vipAvatar} />
          <Box>
            <Box
              component="img"
              src={vip}
              alt="VIP Badge"
              sx={styles.vipBadge}
            />
            <Typography variant="body1" sx={styles.vipName}>
              {" "}
              MemberNNGHGUQJ
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.vipStats}>
          <Box sx={styles.vipStat}>
            <Typography variant="body1" sx={styles.vipStatValue}>
              0 EXP
            </Typography>
            <Typography variant="caption" sx={styles.vipStatLabel}>
              My experience
            </Typography>
          </Box>
          <Box sx={styles.vipStat}>
            <Typography variant="body1" sx={styles.vipStatValue}>
              15 Days
            </Typography>
            <Typography variant="caption" sx={styles.vipStatLabel}>
              Payout time
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="w95">
        <Box sx={{ py: 3.5 }}></Box>
        <Typography
          className="w fw500"
          sx={{
            padding: 1,
            borderRadius: "5px",
            border: "1px solid gray",
            textAlign: "center",
            fontFamily: "roboto !important",
            fontSize: "11px",
            color: "white",
          }}
        >
          VIP level rewards are settled at 2:00 am on the 1st of every month
        </Typography>
        <Swiper
          onSlideChange={handleSlideChange}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          style={{ marginTop: "16px" }}
        >
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#899fbf",
                backgroundImage: `url(${vip1111})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip1}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP1
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP1 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                3000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip111}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 1
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[0]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 3000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#6E8094" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#899fbf",
                  }}
                >
                  {res?.[0]
                    ? "3000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /3000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  3000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#d77d22",
                backgroundImage: `url(${vip2222})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip2}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP2
                </Typography>
                <Box
                  component="img"
                  src={vip22}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP2 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                30000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip222}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 2
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[1]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 30000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#ad5913" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#ad5913",
                  }}
                >
                  {res?.[1]
                    ? "30000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /30000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  30000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundImage: `url(${vip3333}) `,
                backgroundColor: "#ff7878",
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip3}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP3
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP3 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                400000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip333}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 3
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[2]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 400000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#fa4a4a" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#fa4a4a",
                  }}
                >
                  {res?.[2]
                    ? "400000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /400000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  400000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#00bcd4",
                backgroundImage: `url(${vip44})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip2}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP4
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP4 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                4000000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip4}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 4
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[3]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 4000000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#008798" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#008798",
                  }}
                >
                  {res?.[3]
                    ? "4000000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /4000000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  4000000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#da62bd",
                backgroundImage: `url(${vip55})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip2}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP5
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP5 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                20000000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip5}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 5
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[4]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 20000000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#d73ab1" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#d73ab1",
                  }}
                >
                  {" "}
                  {res?.[4]
                    ? "20000000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /20000000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  20000000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#1aa883",
                backgroundImage: `url(${vip66})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip2}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP6
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP6 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                80000000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip6}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 1
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[5]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 80000000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#2c584d" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#2c584d",
                  }}
                >
                  {" "}
                  {res?.[5]
                    ? "80000000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /80000000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  80000000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#57b733",
                backgroundImage: `url(${vip77})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip2}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP7
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP7 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                300000000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip7}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 7
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[6]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 300000000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#23650b" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#57b733",
                  }}
                >
                  {" "}
                  {res?.[6]
                    ? "300000000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /300000000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  300000000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#3d77e8",
                backgroundImage: `url(${vip88})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip2}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP8
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP8 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                1000000000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip8}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 8
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[7]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 1000000000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#26437b" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#3d77e8",
                  }}
                >
                  {" "}
                  {res?.[7]
                    ? "1000000000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /1000000000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  1000000000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#8945fa",
                backgroundImage: `url(${vip99})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip2}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP9
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP9 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                5000000000EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip9}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 9
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[8]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 5000000000)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#4e2395" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#8945fa",
                  }}
                >
                  {" "}
                  {res?.[8]
                    ? "5000000000"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /5000000000
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  5000000000 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                ...styles.vipLevelContainer,
                backgroundColor: "#f98b3b",
                backgroundImage: `url(${vip1010})`,
                backgroundSize: "100% 100%",
              }}
            >
              <Box sx={styles.vipLevelInfo}>
                <Box
                  component="img"
                  src={vip2}
                  sx={{ width: "30px !important" }}
                />
                <Typography variant="h6" sx={styles.vipLevelName}>
                  VIP10
                </Typography>
                <Box
                  component="img"
                  src={vip11}
                  sx={{ width: "15px !important" }}
                />
                <Typography variant="caption" sx={styles.vipLevelStatus}>
                  Not open yet
                </Typography>
              </Box>
              <Typography variant="body2" sx={styles.textone}>
                Upgrading VIP10 requires
              </Typography>
              <Typography variant="body2" sx={styles.texttwo}>
                9999999999EXP
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={styles.vipLevelButton}
              >
                Bet ₹1 = 1 EXP
              </Button>
              <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                <Box
                  component="img"
                  src={vip10}
                  sx={{ width: "70px !important" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white" }}
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "roboto !important" }}
                >
                  VIP 10
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  res?.[9]
                    ? 100
                    : vip_data_res?.total_betting_by_user * (100 / 9999999999)
                }
                sx={{ ...styles.vipLevelProgress, backgroundColor: "#805331" }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ...styles.vipLevelProgressButton,
                    background: "#f98b3b",
                  }}
                >
                  {" "}
                  {res?.[9]
                    ? "9999999999"
                    : parseInt(vip_data_res?.total_betting_by_user)}
                  /9999999999
                </Button>
                <Typography variant="body2" sx={styles.vipLevelText}>
                  9999999999 EXP can be leveled up
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>

        {
          <Fade in={activeSlide === 0} timeout={1000}>
            <Box sx={{ display: activeSlide === 0 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP1
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          60
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          30
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.05%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 1} timeout={1000}>
            <Box sx={{ display: activeSlide === 1 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP2
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          180
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          90
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.05%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 2} timeout={1000}>
            <Box sx={{ display: activeSlide === 2 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP3
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          690
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          290
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.01%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 3} timeout={1000}>
            <Box sx={{ display: activeSlide === 3 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP4
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          1,890
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          890
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.01%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 4} timeout={1000}>
            <Box sx={{ display: activeSlide === 4 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP5
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          6,900
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          1,890
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.01%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 5} timeout={1000}>
            <Box sx={{ display: activeSlide === 5 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP6
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          16,900
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          6,900
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.15%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 6} timeout={1000}>
            <Box sx={{ display: activeSlide === 6 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP7
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          69,000
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          16,900
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.15%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 7} timeout={1000}>
            <Box sx={{ display: activeSlide === 7 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP8
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          169,000
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          69,000
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.15%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 8} timeout={1000}>
            <Box sx={{ display: activeSlide === 8 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP9
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          690,000
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          169,000
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.2%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }
        {
          <Fade in={activeSlide === 9} timeout={1000}>
            <Box sx={{ display: activeSlide === 9 ? "block" : "none" }}>
              <Card style={styles.card}>
                <CardContent style={styles.cardcontent}>
                  <Typography variant="h6" sx={styles.titlec} className="fcs">
                    <DiamondOutlinedIcon sx={{ color: bggold, mr: 1 }} /> VIP10
                    Benefits level
                  </Typography>
                  <Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip01}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Level up rewards
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Each account can only receive 1 time
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          1,690,000
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />{" "}
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip02}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "20px" }}
                          >
                            Monthly reward
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{ ...styles.detailText, lineHeight: "13px" }}
                          >
                            Each account can only receive 1 time per month
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip04}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          690,000
                        </Typography>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip06}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0
                        </Typography>
                      </Box>
                    </Box>
                    <Box style={styles.rewardBox}>
                      <Box style={styles.rewardText}>
                        <Box
                          component="img"
                          src={vip03}
                          sx={{ width: "50px !important" }}
                        />
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ lineHeight: "5px" }}
                          >
                            Rebate rate
                          </Typography>
                          <Typography
                            variant="caption"
                            style={styles.detailText}
                          >
                            Increase income of rebate
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Typography variant="body1" style={styles.amount}>
                          <Box
                            component="img"
                            src={vip05}
                            sx={{ width: "15px !important", mr: 1 }}
                          />
                          0.3%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        }

        <AppBar
          position="static"
          sx={{
            borderRadius: "5px",
            backgroundColor: "transparent",
            marginTop: "16px",
          }}
        >
          <Tabs value={activeTab} onChange={handleChange} centered>
            <Tab
              label="History"
              sx={{
                color: "white",
                width: "50%",
                borderRadius: "5px 10px 5px",
                backgroundColor: "#333",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Rules"
              sx={{
                color: "white",
                width: "50%",
                borderRadius: "10px 5px 10px",
                backgroundColor: "#333",
                textTransform: "capitalize",
              }}
            />
          </Tabs>
        </AppBar>

        <Fade in={activeTab === 0} timeout={1000}>
          <Box sx={{ display: activeTab === 0 ? "block" : "none" }}>
            <Box
              sx={{
                textAlign: "center",
                pt: 2,
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "#ccc",
                }}
              >
                <Box mt={5}>
                  <Box sx={styles.emp1} component="img" src={empty}></Box>
                  <Typography
                    className="w f15 fw500"
                    mt={5}
                    sx={{ textAlign: "center" }}
                  >
                    No data
                  </Typography>
                </Box>
              </Box> */}
              <div className="!flex !flex-col">
                {res?.map((i) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        color: "#ccc",
                        background: "#242424",
                      }}
                      className={"!bg-[#333333] !p-2"}
                    >
                      <>
                        <div className="!w-full !flex !flex-row !justify-between">
                          <p>VIP BONUS</p>
                          <p>
                            {rupees} {i?.l01_amount} 
                          </p>
                        </div>
                        <div className="!w-full !flex !flex-row !justify-between">
                          <p>Date</p>
                          <p>
                            {moment(i?.l01_date)?.format("DD-MM-YYYY HH:mm:ss")}
                          </p>
                        </div>
                      </>
                    </Box>
                  );
                })}
              </div>

              <Button
                variant="contained"
                sx={{
                  width: "80%",
                  background:
                    "linear-gradient(90deg, #FAE59F 0%, #C4933F 100%)",
                  borderRadius: "50px",
                  marginLeft: "10%",
                  color: bgtan,
                  padding: "7px0",
                  my: 5,
                  textTransform: "capitalize",
                  fontFamily: "roboto !important",
                }}
              >
                View All
              </Button>
            </Box>
          </Box>
        </Fade>
        <Fade in={activeTab === 1} timeout={1000}>
          <Box>
            {" "}
            <Box sx={{ display: activeTab === 1 ? "block" : "none" }}>
              {" "}
              <Rules />
            </Box>
          </Box>
        </Fade>
        <Box sx={{ py: 1 }}></Box>
      </Box>
    </Layout>
  );
}

export default VIPPage;

const styles = {
  header: { py: "12px", background: bgcolorlight },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  backButton: { width: "20%" },
  backIcon: { color: "white", fontSize: "18px", ml: 2 },
  title: {
    color: "white",
    width: "60%",
    textAlign: "center",
    fontSize: "15px",
  },
  vipContainer: {
    backgroundColor: "#333",
    padding: "16px",
    textAlign: "center",
    color: "white",
    position: "relative",
    height: "120px",
  },
  vipInfo: { display: "flex", alignItems: "center", justifyContent: "start" },
  vipAvatar: { width: 60, height: 60, marginRight: "8px" },
  vipBadge: { marginRight: "4px", width: "60px" },
  vipName: { fontFamily: "roboto !important" },
  vipStats: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    position: "absolute",
    left: "2.5%",
    width: "95%",
  },
  vipStat: {
    textAlign: "center",
    backgroundColor: "#444",
    padding: "8px",
    borderRadius: "8px",
    width: "47%",
  },
  vipStatValue: { fontFamily: "roboto !important", fontWeight: "bold" },
  vipStatLabel: { color: "#CCC" },
  vipLevelContainer: {
    borderRadius: "8px",
    padding: "8px",
    width: "100%",
    color: "white",
    position: "relative",
    textAlign: "left",
    backgroundColor: "#899fbf",
    backgroundImage: `url(${vip1111})`,
    backgroundSize: "100% 100%",
  },
  vipLevelInfo: { display: "flex", alignItems: "center" },
  vipLevelBadge: { width: 30 },
  vipLevelName: {
    fontWeight: "bold",
    color: "#F0F0F0",
    marginRight: "8px",
    fontFamily: "roboto !important",
    ml: 1,
  },
  vipLevelStatus: {
    fontWeight: "bold",
    ml: 1,
    fontFamily: "roboto !important",
  },
  vipLevelButton: {
    borderRadius: "5px",
    textTransform: "none",
    fontSize: "11px",
    fontWeight: "bold",
    color: "#E0E0E0",
    padding: "2px 4px !important",
    lineHeight: "13px",
  },
  vipLevelProgress: {
    backgroundColor: "#6E8094",
    height: "8px",
    borderRadius: "4px",
    "& .MuiLinearProgress-bar": { backgroundColor: "#4CAF50" },
  },
  vipLevelProgressButton: {
    borderRadius: "20px",
    textTransform: "none",
    fontSize: "11px",
    fontWeight: "bold",
    color: "#E0E0E0",
    padding: "2px 4px !important",
    marginBottom: "12px",
    lineHeight: "13px",
    background: "#899fbf",
    boxShadow: "none !important",
  },
  vipLevelText: {
    fontSize: "11px",
    color: "#E0E0E0",
    fontFamily: "roboto !important",
  },
  abcd: { display: "flex", justifyContent: "space-between", mt: 1 },
  not: { width: "15px !important" },
  textone: {
    fontSize: "11px",
    marginTop: "8px",
    color: "#E0E0E0",
    fontFamily: "roboto !important",
  },
  texttwo: {
    fontSize: "11px",
    color: "#E0E0E0",
    fontFamily: "roboto !important",
  },
  card: {
    backgroundColor: "#333332",
    marginTop: "16px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "8px",
    color: "#fff",
  },
  cardcontent: { padding: "0px" },
  titlec: {
    fontFamily: "roboto !important",
    display: "flex",
    alignItems: "center",
    borderBottom: "1.5px solid #565050",
  },
  rewardBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 0px",
  },
  rewardText: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#fff",
  },
  icon: { width: "32px", height: "32px" },
  detailText: { color: "#bbb" },
  amount: {
    color: "#ffdf00",
    padding: "0px 5px",
    border: `1px solid${bggold}`,
    borderRadius: "5px",
    fontSize: "11px",
    marginBottom: "3px",
    width: "100%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emp1: { width: "250px", margin: "auto", filter: "brightness(0.5)" },
  rulebox: {
    backgroundColor: "#2f2f2f",
    color: "#ffffff",
    borderRadius: 2,
    boxShadow: "none",
    padding: "0px 16px",
    marginBottom: "16px",
  },
  rule2: {
    width: "50%",
    backgroundColor: "#3A3947",
    padding: "4px 8px",
    textAlign: "center",
    margin: "auto",
  },
};
