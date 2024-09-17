import axios from "axios";
import { endpoint } from "../urls";
import toast from "react-hot-toast";
import { aviator_login_data_fn } from "../../redux/slices/counterSlice";
import CryptoJS from "crypto-js";
const value =
  (localStorage.getItem("logindataen") &&
    CryptoJS.AES.decrypt(
      localStorage.getItem("logindataen"),
      "anand"
    )?.toString(CryptoJS.enc.Utf8)) ||
  null;
const user_id = value && JSON.parse(value)?.UserID;

export const MyProfileDataFn = async () => {
  try {
    const response = await axios.get(`${endpoint.profiledata}?id=${user_id}`);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const Cricket_id_passFunction = async ({ setId_pass_data }) => {
  try {
    const response = await axios.get(
      `${endpoint.cricket_get_url_id_pass}?userid=${user_id}`
    );
    if (
      !response?.data?.data?.cricket_userid ||
      !response?.data?.data?.cricket_password
    )
      return toast("No Found User id and password");
    else
      setId_pass_data({
        id: response?.data?.data?.cricket_userid || "",
        pass: response?.data?.data?.cricket_password || "",
        url: response?.data?.data?.cricket_url || "",
      });
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const MypromotionDataFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.promotion_data}?id=${Number(user_id)}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const MygetdataFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.get_level}?userid=${Number(user_id)}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const get_user_data_fn = async (dispatch) => {
  try {
    const response = await axios.get(
      `${endpoint.get_data_by_user_id}?id=${user_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response?.data?.error === "200") {
      dispatch(aviator_login_data_fn(JSON.stringify(response?.data?.data)));
      // localStorage.setItem(
      //   "aviator_data",
      //   JSON.stringify(response?.data?.data)
      // );
    }
    sessionStorage.setItem("isAvailableUser", true);
  } catch (e) {
    toast(e?.message);
    console.error(e);
  }
};
export const CandidateNameFn = async (reqbody) => {
  try {
    const response = await axios.get(`${endpoint.get_name_by_referral_code}`, {
      params: reqbody,
    });
  
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const MyHistoryFn = async (gid) => {
  try {
    const response = await axios.get(
      `${endpoint.my_history}?userid=${user_id}&limit=0&gameid=${gid}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const My_All_HistoryFn = async (gid) => {
  try {
    const response = await axios.get(
      `${endpoint.my_history_all}?userid=${user_id}&limit=0&gameid=${gid}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const My_All_TRX_HistoryFn = async (gid) => {
  try {
    const response = await axios.get(
      `${endpoint.my_history_all_trx}?userid=${user_id}&limit=0&gameid=${gid}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const My_All_TRX_HistoryFnTemp = async (gid) => {
  try {
    const response = await axios.get(
      `${endpoint.my_history_all_trx_temp}?userid=${user_id}&limit=0&gameid=${gid}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const My_All_TRX_HistoryPendingFn = async (gid) => {
  try {
    const response = await axios.get(
      `${endpoint.my_history_all_trx_pending}?userid=${user_id}&limit=0&gameid=${gid}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const cashDepositFn = async (reqbody) => {
  try {
    const res = axios.get(`${endpoint.cash_deposit}`, {
      params: reqbody,
    });
    if (res) {
      toast("Deposit Amount Successfully");
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const getAllBetsAviator = async () => {
  try {
    const response = await axios.get(`${endpoint.total_bet_history}`);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
// this is wallet amount function
export const walletamount = async () => {
  try {
    const response = await axios.get(
      `${endpoint.userwallet}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const yesterday_deposit_withdrawl_by_treamFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.get_yesterday_deposit_withdrawl_by_treamFn}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const allWithdrawlCashUserFn = async () => {
  try {
    const response = await axios.get(`${endpoint.all_withdrawl_user_list}`);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const top11WinnerFunction = async () => {
  try {
    const response = await axios.get(`${endpoint.top11winner}`);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const depositHistoryFunction = async () => {
  try {
    const response = await axios.get(
      `${endpoint.deposit_history}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const depositHistoryUsdtFunction = async () => {
  try {
    const response = await axios.get(
      `${endpoint.deposit_history_usdt}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const depositHistoryUSDTFunction = async () => {
  try {
    const response = await axios.get(
      `${endpoint.deposit_history_usdt}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const withdrawlHistoryFunction = async () => {
  try {
    const response = await axios.get(
      `${endpoint.withdrawl_history}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const withdrawlHistoryUSdtFunction = async () => {
  try {
    const response = await axios.get(
      `${endpoint.withdrawl_usdt_history}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};


export const registrationBonusFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.registration_bonus}?user_id=${user_id}`
    );
    console.log(response);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const team_trading_bonus_functoin = async () => {
  try {
    const response = await axios.get(
      `${endpoint.team_trading_bonus}?id=${user_id}`
    );
    console.log(response);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const depositBonusFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.deposit_bonus}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const referralBonusFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.referral_bonus}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const yesterdayFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.yesterday_income}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const dailySelfBetIncomeFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.daily_self_bet_income}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const dailyWalletIncomeFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.daily_wallet_income}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const dailySalaryIncomeFn = async () => {
  //
  try {
    const response = await axios.get(
      `${endpoint.daily_income}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const AttendenceIncomeFn = async () => {
  //
  try {
    const response = await axios.get(
      `${endpoint.attendence_income}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const InvitationIncomeFn = async () => {
  //
  try {
    const response = await axios.get(
      `${endpoint.invitation_income}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const StreakIncomeFn = async () => {
  //
  try {
    const response = await axios.get(
      `${endpoint.streak_income}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const VipIncomeFn = async () => {
  //
  try {
    const response = await axios.get(
      `${endpoint.vip_income}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const WeeklySalaryIncomeFn = async () => {
  //
  try {
    const response = await axios.get(
      `${endpoint.weekly_salary_income}?id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const teamRewartBonus = async () => {
  //
  try {
    const response = await axios.get(
      `${endpoint.team_reward_bonus}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const BankListDetails = async () => {
  try {
    const response = await axios.get(
      `${endpoint.get_bank_list}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const NeedToBet = async () => {
  try {
    const response = await axios.get(
      `${endpoint.need_to_bet}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const AddressListDetails = async () => {
  try {
    const response = await axios.get(
      `${endpoint.get_address_list}?m_u_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const MyStatusFn = async (gid) => {
  try {
    const response = await axios.get(
      `${endpoint.get_status}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const TransferwithdrawlHistoryFunction = async () => {
  try {
    const response = await axios.get(
      `${endpoint.transfer_wallet_history}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const cashbackReportfn= async () => {
  try {
    const response = await axios.get(
      `${endpoint.cashback_report}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const getTicketRaisedHistory = async () => {
  try {
    const response = await axios.get(
      `${endpoint.ticket_raised_history}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};