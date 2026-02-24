import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FashionApp } from './FashionApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<FashionApp />
  </StrictMode>,
)
