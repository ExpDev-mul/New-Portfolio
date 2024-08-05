import {  } from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';

import Home from './pages/Home/Home.jsx'

function App(){
  // Return
  return (
    <>
     {/* Navigation */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={() => <h1>Page Not Found</h1>} /> { /* Display a Not Found page */ }
      </Routes>
    </>
  )
}

export default App
