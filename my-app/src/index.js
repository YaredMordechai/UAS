import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import App1 from './App1';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
      <App />
      <App1 />
</React.StrictMode>
);

