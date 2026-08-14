import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App1.css'
//import App from './App.jsx'
//import App from './App1.jsx'
//import App from './Appevent.jsx'
//import App from './Appstate.jsx'
import App from './Appform.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
