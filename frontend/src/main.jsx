import React from 'react'
import ReactDOM from 'react-dom/client'
import { TrasladaTEC } from './TrasladaTEC'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <TrasladaTEC />
      </BrowserRouter>
    </PersistGate>
    </Provider>
  // </React.StrictMode>,
)
