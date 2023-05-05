import React from 'react'
import ReactDOM from 'react-dom/client'
import { TrasladaTEC } from './TrasladaTEC'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TrasladaTEC />
    </BrowserRouter>
  </React.StrictMode>,
)
