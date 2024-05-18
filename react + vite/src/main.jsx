import React from 'react'
import ReactDOM from 'react-dom/client'
import Separado from './Separado.jsx'
import Conjunto from './Conjunto.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Separado/>
    <Conjunto/>
  </React.StrictMode>,
)
