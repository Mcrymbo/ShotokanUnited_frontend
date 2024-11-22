import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from './context';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/style.css';
import './css/satoshi.css';
import 'flatpickr/dist/flatpickr.min.css';
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <HelmetProvider>
      <UserProvider>
      <Router>     
          <App />
      </Router>
      </UserProvider>
    </HelmetProvider>
  //</React.StrictMode>,
)
