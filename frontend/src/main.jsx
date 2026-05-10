import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD

=======
import { BrowserRouter } from 'react-router-dom'
>>>>>>> 7f4c2fef8f023981f0b666afcd20f9acd22edfc7
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)