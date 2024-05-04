import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import Tombol from './button'

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
  <div>
    <Tombol />
    <ChakraProvider>
      <App /> 
    </ChakraProvider>
  </div>
</React.StrictMode>
);

