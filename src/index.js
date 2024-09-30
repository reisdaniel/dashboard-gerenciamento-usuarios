import React from 'react';
import ReactDOM from 'react-dom/client'; // Substituir por react-dom/client
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Crie o root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use o método render no root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
