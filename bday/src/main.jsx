import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './cake.scss'
import Bday from './Bday.jsx'
import Credits from './Credits.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Bday />
    <Credits />
  </StrictMode>,
)
