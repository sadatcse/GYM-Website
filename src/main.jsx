// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { router } from './routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/Utility/ScrollToTop';

// Initialize AOS library
AOS.init();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }, err => {
      console.log('Service Worker registration failed:', err);
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
