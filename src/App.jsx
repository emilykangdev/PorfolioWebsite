import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className="dark">
        <About/>
        <Projects />
      </div>
    </>
  )
}

export default App
