import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NetflixRegisterComponent } from "./NetflixRegisterComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NetflixRegisterComponent />
  </React.StrictMode>
  );