import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Gallery from './component/Gallery.jsx'
import Test from './component/Test.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Gallery></Gallery>
    <Test></Test>
  </React.StrictMode>,
)
