import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.module.scss';
import "./Styles/Variables.scss";
import AppProvider from '../Context/AppProvider.jsx';
import {Toaster} from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <Toaster position='top-center' duration={2000}/>
      <App />
    </AppProvider>
  </React.StrictMode>
);
