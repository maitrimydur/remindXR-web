import React from 'react'
import githubIcon from '../assets/github.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <span>©2025 Maithreyi Mydur</span>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Term Use</a>
        <a href="https://github.com/maitrimydur" target="_blank" rel="noopener">
          <img src={githubIcon} alt="GitHub" className="github-icon"/>
        </a>
      </div>
    </footer>
  )
}
