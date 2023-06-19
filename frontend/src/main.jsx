import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutContextProvider } from './context/WorkoutContext'
import { UserContextProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <WorkoutContextProvider>
       <App />
      </WorkoutContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
