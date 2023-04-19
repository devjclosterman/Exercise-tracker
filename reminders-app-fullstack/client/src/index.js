import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* bc we are placing the app comp between BrowserRouter - it is, conceptually, pasting all the contents of App.js here */}
      <App /> 
  </React.StrictMode>
);
