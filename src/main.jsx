import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProcessProvider from './context/ProcessProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProcessProvider>
      <App />
    </ProcessProvider>
  </React.StrictMode>,
)
