import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Video from "./video";
import App3 from './App3';
import Dynamic from './dynamic'

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <Video />
    <Dynamic />
    <App3 />
  </React.StrictMode>
);
