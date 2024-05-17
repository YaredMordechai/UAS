import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Video from "./video";
import Dynamic from "./dynamic";
import Foooter from "./footer";
import Caro from "./carou";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <Video />
    <Dynamic />

    <Caro />
    <Foooter />
  </React.StrictMode>
);
