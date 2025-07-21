import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <ChakraProvider> {/* ✅ No config or theme needed */}
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
  
)
