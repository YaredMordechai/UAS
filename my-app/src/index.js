import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
  <div>
    <ChakraProvider>
      <App /> 
    </ChakraProvider>
  </div>
</React.StrictMode>
);

