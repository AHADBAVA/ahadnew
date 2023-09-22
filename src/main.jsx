import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Skill from './Skill.jsx'
import Project from './Project.jsx'
import Footer from './Footer.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Skill/>
    <Project/>
    <Footer/>
  </React.StrictMode>,
)
