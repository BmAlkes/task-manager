import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

ReactDOM.render(
  <>
    <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <GlobalStyle />
        <App />
      </AlertProvider>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
