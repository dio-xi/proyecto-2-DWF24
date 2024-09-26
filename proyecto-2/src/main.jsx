import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import ProductPage from './components/ProductPage.jsx'
import ImageGallery from './components/ImageGallery.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <div className="main-content">
      <ImageGallery />
      <ProductPage />
    </div>
  </StrictMode>,
)
