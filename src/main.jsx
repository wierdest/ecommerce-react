import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.js'
import { ChakraProvider } from '@chakra-ui/react'
import { serrashop } from './serrashop-theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={serrashop} >
      <BrowserRouter>
          <App />
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
