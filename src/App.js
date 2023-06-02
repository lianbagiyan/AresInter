import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Sportsbook from './components/Sportsbook'
import Betslip from './components/Betslip'
import './App.scss'

function App() {
  return (
    <div className="main">
      <Header />
      <div className="main__rows">
        <Router>
          <Sportsbook />
        </Router>
        <Betslip />
      </div>
    </div>
  )
}

export default App
