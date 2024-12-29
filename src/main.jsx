import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router'
import AppLayout from './components/AppLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      {/* <AppLayout> */}
        <App />
      {/* </AppLayout> */}
    </HashRouter>
  </StrictMode>,
)
