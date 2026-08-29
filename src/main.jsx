import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.addEventListener('vite:preloadError', (event) => {
  const isReloaded = sessionStorage.getItem('vite-reloaded');
  if (!isReloaded) {
    sessionStorage.setItem('vite-reloaded', 'true');
    // Force cache bust on reload
    const url = new URL(window.location.href);
    url.searchParams.set('t', Date.now());
    window.location.href = url.toString();
  } else {
    console.error('Vite preload error after reload:', event);
  }
});

sessionStorage.removeItem('vite-reloaded');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
