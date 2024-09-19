import CryptoJS from "crypto-js";
import { Route, Routes } from "react-router-dom";
import "../src/index.css";
import "./App.css";
import "./assets/styles/main.css";
import ForgetPassword from "./pages/auth/login/ForgetPassword";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { routes } from "./routes";
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Draggable } from 'react-draggable';
import Otpverify from "./pages/auth/login/Otpverify";
import Changepassword from "./pages/auth/login/Changepassword";

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
      {/* <Draggable>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Draggable> */}
      <Routes>
        <Route path="/" element={<Login />} />
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
      </Routes>
    </Box>
  );
};

export default App;
