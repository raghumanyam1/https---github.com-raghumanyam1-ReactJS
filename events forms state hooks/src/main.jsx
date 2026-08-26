import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
//import App from './ContextExample.jsx'
//import App from './UseRef.jsx'
//import App from './Inlinecss.jsx'
//import App from './inlinecss2.jsx';
import App from './to-do-list/App To do list.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
