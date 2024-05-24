import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componets/App.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
//componente que me va a permitir crear las rutas