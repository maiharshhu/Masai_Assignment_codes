import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ThemedBox from '../components/theamedBox.jsx'
import ThemeApp from '../components/theamedBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemedBox/> */}
    <ThemeApp />
  </StrictMode>,
)
