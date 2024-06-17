import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth.jsx';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
