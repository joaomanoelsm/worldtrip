import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app'
import './styles/main.scss'

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLDivElement );
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
)
