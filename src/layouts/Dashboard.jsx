import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Vestel from '../pages/Vestel'

export default function Dashboard() {
  return (
    // <Login></Login>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/login/:id" element={<Vestel/>} />
      
    </Routes>
  )
}
