import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App1.css'
//import App from './App.jsx'
//import App from './App1.jsx'
//import App from './Appevent.jsx'
//import App from './Appstate.jsx'
//import App from './Appform.jsx'
//import App from './Hookexample.jsx'
//import App from './Usestatewithstring.jsx'
//import App from './Useststeinput.jsx'
//import App from './Useeffect.jsx';
//import App from './Useref.jsx';
import App from './Appuseref.jsx';
//import App from './Appusereducer.jsx';
//import App from './Usecallback2.jsx';
//import App from './Usememo2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
