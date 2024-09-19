// import LayoutAviator from "../GamePage/Layout";
// import PlayGame from "../GamePage/PlayGame";
import Ticketgenerate from "../pages/promotion/component/Ticketgenerate";
import Test from "../pages/Test";
import Account from "../pages/account/Account";
import AddBankDetails from "../pages/account/Component/AddBankDetails";
import AddedBankDetailList from "../pages/account/Component/AddedBankDetailList";
import BatHistorys from "../pages/account/Component/BatHistory";
import Feedback from "../pages/account/Component/Feedback";
import GameNotification from "../pages/account/Component/GameNotification";
import Gamestaticks from "../pages/account/Component/Gamestaticks";
import Languages from "../pages/account/Component/Language";
import LoginPassword from "../pages/account/Component/LoginPassword";
import Mail from "../pages/account/Component/Mail";
import Notification from "../pages/account/Component/Notification";
import SettingCenter from "../pages/account/Component/SettingCenter";
import Activity from "../pages/activity/Activity";
import BettingRebate from "../pages/activity/component/BettingRebate";
import DailySignInBonous from "../pages/activity/component/DailySignInBonous";
import AttendanceBonus from "../pages/activity/component/DailySignInBonous";
import DailySignInRules from "../pages/activity/component/DailySignInRules";
import Gift from "../pages/activity/component/Gift";
import InvitationBonus from "../pages/activity/component/InvitationBonus";
import InvitationBonusRecord from "../pages/activity/component/InvitationBonusRecord";
import InvitationBonusRules from "../pages/activity/component/InvitationBonusRules";
import RebateHistory from "../pages/activity/component/RebateHistory";
import Register from "../pages/auth/register/Register";
import AddAddressUsdt from "../pages/dashboard/AddAddressUsdt";
import Dashboard from "../pages/dashboard/Dashboard";
import FundRequest from "../pages/dashboard/FundRequest";
import WithdrawalUsdt from "../pages/dashboard/WithdrawalUsdt";
import Withdrawl from "../pages/dashboard/Withdrawl";
import MainPageOFIncome from "../pages/income/MainPageOFIncome";
import CashbackReport from "../pages/income/incomeSubSection/CashbackReport";
import DailyCashBackBonus from "../pages/income/incomeSubSection/DailyCashBackBonus";
import DailySalaryBonus from "../pages/income/incomeSubSection/DailySalaryBonus";
import DepositBonus from "../pages/income/incomeSubSection/DepositBonus";
import ReferralBonus from "../pages/income/incomeSubSection/ReferralBonus";
import RegistrationBonus from "../pages/income/incomeSubSection/RegistrationBonus";
import SelfTradingBonus from "../pages/income/incomeSubSection/SelfTradingBonus";
import TeamRewardBonus from "../pages/income/incomeSubSection/TeamRewardBonus";
import TeamTradingBonus from "../pages/income/incomeSubSection/TeamTradingBonus";
import WeeklySalaryBonus from "../pages/income/incomeSubSection/WeeklySalaryBonus";
import Promotion from "../pages/promotion/Promotion";
import Commission from "../pages/promotion/component/Commission";
import CustomerLine from "../pages/promotion/component/CustomerLine";
import Invitaton from "../pages/promotion/component/Invitaton";
import PromotionRule from "../pages/promotion/component/PromotionRule";
import RobateRetio from "../pages/promotion/component/RebateRatio";
import QueryForm from "../pages/promotion/component/RiseQuery.js";
import Subordinate from "../pages/promotion/component/Subordinate";
import SubordinateIncome from "../pages/promotion/component/SubordinateIncome";
import TeamData from "../pages/promotion/component/TeamData";
import TeamReports from "../pages/promotion/component/TeamReport";
import Trx from "../pages/trx/Trx";
import TronScanPage from "../pages/trx/component/TronScanPage";
import VIPPage from "../pages/vip/Vip";
import Wallet from "../pages/wallet/Wallet";
import WithdrawalHistoryUSdt from "../pages/wallet/WithdrawalHistoryUsdt";
import DepositeHistory from "../pages/wallet/component/DepositeHistory";
import DepositeUsdt from "../pages/wallet/component/DepositeUsdt";
import QRScreen from "../pages/wallet/component/QRScreen";
import UsdtQR from "../pages/wallet/component/UsdtQR";
import WalletRecharge from "../pages/wallet/component/WalletRecharge";
import WalletTransfer from "../pages/wallet/component/WalletTransfer";
import WalletTransferHistory from "../pages/wallet/component/WalletTransferHistory";
import WithdravalHistory from "../pages/wallet/component/WithdravalHistory";
import WinLossPopup from "../pages/win/component/WinOneMin/WinLossPopup";

import Win from "../pages/win/win";
import Attendence from "../pages/income/incomeSubSection/Attendaence";
import Claim from "../pages/income/incomeSubSection/Claim";
import StreakBonus from "../pages/income/incomeSubSection/Streak";
import VipBonus from "../pages/income/VipBonus";

export const routes = [
    {
        path: "/win-los",
        component: <WinLossPopup />
    },
    {
        path: "/account/income-main/attendance-bonus",
        component: <Attendence />
    },
    {
        path: "/account/income-main/streak-bonus",
        component: <StreakBonus />
    },
    {
        path: "/account/income-main/vip-bonus",
        component: <VipBonus />
    },
    {
        path: "/account/income-main/claim-bonus",
        component: <Claim />
    },
    {
        path: "/account",
        component: <Account />
    },
    {
        path: "/withdravalHistory",
        component: <WithdravalHistory />
    },
    {
        path: "/Withdrawal",
        component: <Withdrawl />
    },
    {
        path: "/Withdrawalusdt",
        component: <WithdrawalUsdt />
    },
    {
        path: "/Withdrawalusdthistory",
        component: <WithdrawalHistoryUSdt />
    },
    {
        path: "/addadressusdt",
        component: <AddAddressUsdt />
    },

    {
        path: "/depositHistory",
        component: <DepositeHistory />
    },
    {
        path: "/depositusdt",
        component: <DepositeUsdt />
    },
    {
        path: "/wallet/Recharge",
        component: <WalletRecharge />
    },
    {
        path: "/trx",
        component: <Trx />
    },
    {
        path: "/wallet",
        component: <Wallet />
    },
    {
        path: "/usdt",
        component: <UsdtQR />
    },
    {
        path: "/bathistory",
        component: <BatHistorys />
    },
    {
        path: "/notification",
        component: <Notification />
    },

    {
        path: "/gamestaticks",
        component: <Gamestaticks />
    },
    {
        path: "/Language",
        component: <Languages />
    },
    {
        path: "/SettingCenter",
        component: <SettingCenter />
    },
    {
        path: "/SettingCenter/LoginPassword",
        component: <LoginPassword />
    },
    {
        path: "/SettingCenter/mail",
        component: <Mail />
    },
    {
        path: "/feedback",
        component: <Feedback />
    },
    {
        path: "/gameNotification",
        component: <GameNotification />
    },
    // {
    //     path:"/",
    //     component:<Login/>
    // },
    {
        path: "/test",
        component: <Test />
    },
    {
        path: "/register",
        component: <Register />
    },
    {
        path: "/dashboard",
        component: <Dashboard />
    },
    {
        path: "/activity",
        component: <Activity />
    },
    {
        path: "/win",
        component: <Win />
    },
    {
        path: "/transfer",
        component: <WalletTransfer />
    },
    {
        path: "/transferhistory",
        component: <WalletTransferHistory />
    },
    {
        path: "/promotion",
        component: <Promotion />
    },
    {
        path: "/promotion/Subordinate",
        component: <Subordinate />
    },
    {
        path: "/promotion/PromotionShare",
        component: <Invitaton />
    },
    {
        path: "/promotion/TeamReport/",
        component: <TeamReports />
    },
    {
        path: "/promotion/TeamReport/data",
        component: <TeamData />
    },
    {
        path: "/promotion/PromotionRule/",
        component: <PromotionRule />
    },
    {
        path: "/promotion/RebateRatio/",
        component: <RobateRetio />
    },
    {
        path: "/customerLine/",
        component: <CustomerLine />
    },
    {
        path: "/ticket/",
        component: <Ticketgenerate />
    },
    {
        path: "/view_fund_request",
        component: <FundRequest />
    },


    {
        path: "/account/income-main",
        component: <MainPageOFIncome />
    },
    {
        path: "/promotion/SubordinateIncome",
        component: <SubordinateIncome />
    },
    {
        path: "/promotion/Commission",
        component: <Commission />
    },
    {
        path: "/account/income-main/registration-bonus",
        component: <RegistrationBonus />
    },
    {
        path: "/account/income-main/deposit-bonus",
        component: <DepositBonus />
    },
    {
        path: "/account/income-main/referral-bonus",
        component: <ReferralBonus />
    },
    {
        path: "/account/income-main/daily-cash-back-bonus",
        component: <DailyCashBackBonus />
    },
    {
        path: "/account/income-main/cash_back_report",
        component: <CashbackReport />
    },
    {
        path: "/account/income-main/daily-salary-bonus",
        component: <DailySalaryBonus />
    },
    {
        path: "/account/income-main/weekly-bonus",
        component: <WeeklySalaryBonus />
    },
    {
        path: "/account/income-main/self-trading-bonus",
        component: <SelfTradingBonus />
    },
    {
        path: "/account/income-main/team-trading-bonus",
        component: <TeamTradingBonus />
    },
    {
        path: "/account/income-main/team-reward-bonus",
        component: <TeamRewardBonus />
    },
    {
        path: "/add-bank-details",
        component: <AddBankDetails />
    },
    {
        path: "/add-bank-details/pre-added-bank-details",
        component: <AddedBankDetailList />
    },
    {
        path: "/deposit/qr-screen",
        component: <QRScreen />
    },
    {
        path: "/trx/tron-scan",
        component: <TronScanPage />
    },

    {
        path: "/activity/InvitationBonus",
        component: <InvitationBonus />
    },
    {
        path: "/activity/InvitationBonus/Rule",
        component: <InvitationBonusRules />
    },
    {
        path: "/activity/InvitationBonus/Record",
        component: <InvitationBonusRecord />
    },
    {
        path: "/activity/Betting/rebate",
        component: <BettingRebate />
    },
    {
        path: "/activity/Laundry/LaundryRecord",
        component: <RebateHistory />
    },
    {
        path: "/gift",
        component: <Gift />
    },
    {
        path: "/activity/DailySignIn",
        component: <DailySignInBonous />
    },
    {
        path: "/activity/DailySignIn/Rules",
        component: <DailySignInRules />
    },
    {
        path: "/vip",
        component: <VIPPage />
    },
    {
        path: "/rise/query",
        component: <QueryForm />
    },
]