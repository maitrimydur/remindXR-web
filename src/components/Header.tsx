import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="ReMind-XR logo" className="logo" />
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Research</a>
        <a href="#">Code</a>
        <a href="#">App</a>
      </nav>
    </header>
  )
}
