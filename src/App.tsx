import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Research from './pages/Research'
import CodePage from './pages/Code'
import AppPage from './pages/AppPage'

import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/code"    element={<CodePage />} />
        <Route path="/app"     element={<AppPage />} />
      </Routes>
    </>
  )
}
