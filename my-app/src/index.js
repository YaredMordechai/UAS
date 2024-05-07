import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import App1 from "./App1";
import Video from "./video";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <Video />
    <App1 />
  </React.StrictMode>
);
