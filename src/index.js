import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import "../src/index.css";
import "tailwindcss/tailwind.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { SocketProvider } from "./Shared/SocketContext";
import { zubgback, zubgmid } from "./Shared/color";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SocketProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
            <Toaster
              toastOptions={{
                className: "",
                style: {
                  color: "white",
                  fontSize: "15px",
                  marginTop: "100px",
                  borderRadius: "5px",
                  background: theme.palette.secondary.dark,
                },
              }}
              limit={1}
            />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </SocketProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
