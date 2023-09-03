import React from 'react'
import ReactDOM from 'react-dom/client'
import { RefsContextProvider } from './contexts/RefsContext.jsx'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RefsContextProvider>
    <App />
    </RefsContextProvider>
  </React.StrictMode>,
)
