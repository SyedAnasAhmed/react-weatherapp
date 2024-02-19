import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Statecontextprovider} from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Statecontextprovider>
    <App />
  </Statecontextprovider>,
)
