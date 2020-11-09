import React from 'react'
import Layout from './Containers/Layout'
import { HashRouter as Router } from 'react-router-dom'
import { AppContextProvider } from './Context'
import './App.scss'

function App () {
  return (
    <AppContextProvider>
      <Router basename="/">
        <Layout />
      </Router>
    </AppContextProvider>
  )
}

export default App