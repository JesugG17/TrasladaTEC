import React from 'react'
import ReactDOM from 'react-dom/client'
import { TrasladaTEC } from './TrasladaTEC'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <TrasladaTEC />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
