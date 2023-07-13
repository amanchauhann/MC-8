import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { DataProvider } from './Contexts/DataContext.jsx';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <ChakraProvider>
        <App />
        </ChakraProvider>
      
      </DataProvider>

    </Router>
    
  </React.StrictMode>,
)
