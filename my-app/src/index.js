import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import App1 from "./App1";
import Video from "./video";
import App2 from "./app2";
import App3 from './App3';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <Video />
    <App1 />
    <App2 />
    <App3 />
  </React.StrictMode>
);
