
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import App from './App'; // Changed from AppWrapper to App
import { AuthProvider } from './contexts/AuthContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter> {/* This is the single top-level router */}
        <App />
      </HashRouter>
    </AuthProvider>
  </React.StrictMode>
);