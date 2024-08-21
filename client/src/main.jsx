import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Weather from './weather.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='/weather' element={<Weather />} />
    </Routes>
  </BrowserRouter>
)
