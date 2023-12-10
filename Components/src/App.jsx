import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default App
