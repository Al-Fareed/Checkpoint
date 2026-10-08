import React from 'react'
import './App.css'
import Navbar from './layouts/Navbar'
import Shell from './layouts/Shell'
import Sidebar from './layouts/Sidebar'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Shell />
      <Sidebar />
    </React.Fragment>
  )
}

export default App
