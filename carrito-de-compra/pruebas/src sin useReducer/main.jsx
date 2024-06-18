import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltrosProvider } from "./context/filtros.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltrosProvider>
      <App />
    </FiltrosProvider>
  </React.StrictMode>,
)
