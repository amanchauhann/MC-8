import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import EventDetail from './Pages/EventDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<EventDetail />} path='/event/:eventId' />
        </Routes>
    </>
  )
}

export default App
