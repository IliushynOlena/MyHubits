import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import {DashboardPage} from './pages/DashboardPage'
import {HabitPage} from './pages/HabitPage'
import {ProfilePage} from './pages/ProfilePage'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<DashboardPage/>} />
      <Route path='/habits' element={<HabitPage/>} />
      <Route path='/profile' element={<ProfilePage/>} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
