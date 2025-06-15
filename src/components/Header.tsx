import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="branding">
        <img src={logo} alt="ReMind-XR logo" className="logo" />
        <h1 className="site-title">ReMind-XR</h1>
      </div>
      <nav className="nav-links">
        <NavLink to="/"      end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/research"      className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Research</NavLink>
        <NavLink to="/code"           className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Code</NavLink>
        <NavLink to="/app"            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>App</NavLink>
      </nav>
    </header>
  )
}
