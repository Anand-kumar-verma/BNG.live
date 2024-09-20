export const rupees = "₹";
// https://admin.bngwin.live/
export const baseUrl = "https://api.bngwin.live";
export const fron_end_main_domain = "https://bngwin.live";

export const newdomain1 = "https://api.bngwin.live";
export const newdomain = "https://api.bngwin.live";
// export const newdomain1 = "http://192.168.18.183:9000";
// export const newdomain = "http://192.168.18.183:9000";

export const domain = "https://funxplora-timer.onrender.com";
export const support_mail = "";
export const telegram_url = "";
export const facebook_url = "";
export const instagram_url = "";

export const endpoint = {
  //node login api  

  login: `${newdomain}/api/v1/user_login`,
  send_otp: `${baseUrl}/api/forget-password`,
  veryfy_otp: `${baseUrl}/api/user-otp-verify`,
  signup: `${baseUrl}/api/v1/signup`,
  get_name_by_referral_code: `${baseUrl}/api/v1/get-sponsor-name`,
  ticket_raised: `${baseUrl}/api/v1/ticket-raised`,
  ticket_raised_history: `${baseUrl}/api/v1/ticket-raised-history`,
  attendence_income: `${baseUrl}/api/v1/attendance-bonus`,
  claim_income: `${baseUrl}/api/v1/clame-bonus`,
  invitation_income: `${baseUrl}/api/v1/inivitation-bonus`,
 streak_income: `${baseUrl}/api/v1/winning-streak-bonus`,
 vip_income: `${baseUrl}/api/v1/vip-bonus`,
 deposit_bonus: `${baseUrl}/api/v1/get-deposit-bonus-income/`,
 daily_income: `${baseUrl}/api/v1/daily-salary-income`,
 forget_pass: `${baseUrl}/api/v1/forget-password-send-otp`,
 otp_verify: `${baseUrl}/api/v1/forget-password-veryfy-otp`,
 change_password: `${baseUrl}/api/v1/forget-password-change-pass`,





  userwallet: `${newdomain1}/api/v1/userwallet`,
  get_yesterday_deposit_withdrawl_by_treamFn: `${newdomain1}/api/v1/get_yesterday_deposit_withdrawl_by_treamFn`,
  top11winner: `${newdomain1}/api/v1/get-top-winners`,
  openbannerUrl: `${baseUrl}/popup`,
  profiledata: `${baseUrl}/api/profileapi`,
  get_level: `${newdomain}/api/v1/get-level`,
  promotion_data: `${newdomain}/api/v1/promotiondata`,
  applybet: `${newdomain}/api/v1/bet`,
  game_history: `${newdomain}/api/v1/colour_result`,
  my_history_all: `${newdomain}/api/v1/getbet-game-results`,
  get_status: `${newdomain}/api/v1/get-status`,
  cashback_report: `${newdomain1}/api/v1/getCashBack-report`,
 
  //payment
  payment: `${newdomain1}/api/v1/payment`,
  deposit_history_usdt: `${newdomain1}/api/v1/coin-payment-deposit-history`,
  withdrawal_request_usdt: `${newdomain1}/api/v1/payout-request`,
  withdrawal_address_usdt: `${newdomain1}/api/v1/add-usdt-address`,
  get_address_list: `${newdomain1}/api/v1/usdt-address-record`,
  withdrawl_usdt_history: `${newdomain1}/api/v1/coin-payment-withdrawl-history`,

  check_result: `${baseUrl}/api/checkresult`,
  color_winning: `${baseUrl}/api/colour_winning`,
  cash_deposit: `${baseUrl}/api/deposit`,
  payment_url: "https://vpayout.com/Upi_controller/insert_fund_request_online",
  withdraw_payment: `${baseUrl}/api/payout-request`,

  payment_request: `${baseUrl}/api/deposit-request`,
  registration_bonus: `${baseUrl}/api/welcom-bonus`,
  deposit_history: `${baseUrl}/api/deposit-history`,
  withdrawl_history: `${baseUrl}/api/withdrawl-history`,
  // deposit_bonus: `${baseUrl}/api/deposit-bonus`,

  // referral_bonus: `${baseUrl}/api/refral-bonus`,
  daily_self_bet_income: `${baseUrl}/api/daily-self-bet-income`,
  daily_wallet_income: `${baseUrl}/api/daily-wallet-income`,
  daily_salary_income: `${newdomain1}/api/v1/daily-salary-icome`,
  weekly_salary_income: `${newdomain1}/api/v1/weekly-salary-icome`,
  team_reward_bonus: `${baseUrl}/api/team-reward-bonus`,
  team_trading_bonus: `${newdomain}/api/v1/level-income`,
  add_bank_details: `${baseUrl}/api/bank-add`,
  get_bank_list: `${baseUrl}/api/user-bank-details`,
  all_withdrawl_user_list: `${baseUrl}/api/widthrol-user-list`,
  recharge_call_bakc: `${baseUrl}/api/deposits-user-request`,
  cricket_get_url_id_pass: `${baseUrl}/api/cricket-details`,


  trx_game_history: `${newdomain}/api/v1/trx-auto-genrated-result`,
  my_history_all_trx: `${newdomain}/api/v1/trx-getColourBets`,
  my_history_all_trx_temp: `${newdomain}/api/v1//trx-getColourBets-temp`,
  trx_game_bet: `${newdomain}/api/v1/trx-bet`,

  // aviator api's
  aviator_login: `${domain}/api/aviator/login`,
  // get_data_by_user_id: `${domain}/api/userProfile`,
  aviator_result: `${domain}/api/aviator/result_cron`,
  total_bet_history: `${domain}/api/aviator/total-bet-histroy`,
  bet_history: `${domain}/api/aviator/bet_histroy`,
  result: `${domain}/api/aviator/result`,
  wallet_data: `${domain}/api/aviator/userwallet`,
  bet_now: `${domain}/api/aviator/bet_now`,
  cash_out: `${domain}/api/aviator/cash_out`,

  // change_password: `${newdomain}/api/v1/change-password`,
  // deposit_bonus: `${newdomain}/api/v1/self-deposit-bonus`,
  referral_bonus: `${newdomain}/api/v1/sponsor-income`,
  need_to_bet: `${newdomain}/api/v1/need-to-bet`,
  //income
  subordinate_data: `${newdomain1}/api/v1/get-subordinate-data-funx`,
  commission_data: `${newdomain1}/api/v1/get-commisssion-data-funx`,
  tranfer_wallet: `${newdomain1}/api/v1/transfer-amount-from-working-wallet-to-main-wallet`,
  transfer_wallet_history: `${newdomain1}/api/v1/transfer-history-from-working-wallet-to-main-wallet`,
  yesterday_income : `${newdomain}/api/v1/get-total-betA-ad-income-yesterday`,
};
