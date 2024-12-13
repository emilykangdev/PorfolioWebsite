import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <div>
        <About/>
        <Projects />
      </div>
    </>
  )
}

export default App
