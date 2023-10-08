import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import './assets/bootstrap.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="default">
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  </div>
)
