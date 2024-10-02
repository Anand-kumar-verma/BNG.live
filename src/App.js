import { Box } from '@mui/material';
import CryptoJS from "crypto-js";
import { Route, Routes } from "react-router-dom";
import "../src/index.css";
import "./App.css";
import "./assets/styles/main.css";
import Changepassword from "./pages/auth/login/Changepassword";
import ForgetPassword from "./pages/auth/login/ForgetPassword";
import Login from "./pages/auth/login/Login";
import Otpverify from "./pages/auth/login/Otpverify";
import Register from "./pages/auth/register/Register";
import { routes } from "./routes";
import BeforeLogin from "./Shared/BeforeLogin";
import SplashScreen from "./Shared/SplashScreen";

const App = () => {
  const isAuthenticated =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;

  return (
    <Box>
      
      <Routes>
        <Route path="/" element={<Login />} />
      <Route path="/before-login" element={<BeforeLogin />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otpverify />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/register" element={<Register />} />

        {isAuthenticated ? (
          routes?.map((route, index) => {
            return (
              <Route key={index} path={route?.path} element={route?.component} />
            );
          })
        ) : (
          <Route path="/" element={<Login />} />
        )}
         <Route path="/splash" element={<SplashScreen />}></Route>
      </Routes>
    </Box>
  );
};

export default App;
