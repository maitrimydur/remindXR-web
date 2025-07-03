import React from 'react'
import apple from '../assets/apple.png'

export default function AppSection() {
  return (
    <section className="app-section">
      <h2>App</h2>

      <p>Jump into the in-browser app—start your 8-day memory workout.</p>

      {/* external link; opens in a new tab */}
      <a
        className="btn launch"
        href="https://remind-xr.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Launch&nbsp;App
      </a>

      <div className="practice-deck">
        <img src={apple} alt="Apple" />
      </div>
    </section>
  )
}
