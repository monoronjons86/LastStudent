import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import Team from './Team.jsx'
import Todas from './Todas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home></Home>
    <Team></Team>
    <Todas></Todas>
  </React.StrictMode>,
)
