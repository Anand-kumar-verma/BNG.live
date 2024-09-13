import * as Yup from "yup";
export const LoginEmailSchemaValidaton = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  pass: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});
export const ForgetPasswordSchemaValidation = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message:
        "Invalid mobile number format. It must be a 10-digit number without dots.",
    })
    .test(
      "no-dots",
      "Dots are not allowed in the mobile number.",
      (value) => !/\./.test(value)
    )
    .required("Mobile number is required"),
});
export const LoginMobileSchemaValidaton = Yup.object().shape({
  pass: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  mob: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message:
        "Invalid mobile number format. It must be a 10-digit number without dots.",
    })
    .test(
      "no-dots",
      "Dots are not allowed in the mobile number.",
      (value) => !/\./.test(value)
    )
    .required("Mobile number is required"),
});
export const signupSchemaValidataon = Yup.object().shape({
  refid : Yup.string().required("Referral Code is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
    pass: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
    confirmpass: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  mobile: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Invalid mobile number format. It must be a 10-digit number."
    )
    .required("Mobile number is required"),
});
export const withdrawAmountSchemaValidaton = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message:
        "Invalid mobile number format. It must be a 10-digit number without dots.",
    })
    .max(10, "Mobile should not be more than 10 character")
    .test(
      "no-dots",
      "Dots are not allowed in the mobile number.",
      (value) => !/\./.test(value)
    )
    .required("Mobile number is required"),
  bank_name: Yup.string().required("Bank Name is required"),
  name: Yup.string().required("Holder Name is required"),
  ifsc: Yup.string()
    .min(11, "IFSC must be 11 characters at minimum")
    .max(11, "IFSC should not be more than 11 character")
    .required("IFSC is required"),
  account_number: Yup.string().required("Account Number is required"),
});

export const withdraw_amount_validation_schema = Yup.object().shape({
  amount: Yup.number()
    .required("Amount is required")
    .min(110, "Amount must be greater than or equal to 110")
    .max(50000, "Amount must be less than or equal to 50000"),
  password: Yup.string().required("Password is required"),
  select_wallet : Yup.string().required("Select wallet is required")
  
});

export const cashDepositRequestValidationSchema = Yup.object().shape({
  amount: Yup.number().required("Amount is required")
  .min(110, "Amount must be greater than or equal to 110"),
  // .test(
  //   "minimumAmount",
  //   "Amount must be greater than or equal to 100",
  //   (value) => {
  //     if (value) {
  //       const numericValue = Number(value);
  //       return numericValue >= 100;
  //     }
  //     return true;
  //   }
  // ),
});
