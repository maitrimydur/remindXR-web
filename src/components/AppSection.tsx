import React from 'react'
import apple from '../assets/apple.png'

export default function AppSection() {
  return (
    <section className="app-section">
      <h2>App</h2>
      <p>Jump into the in-browser app—start your 8-day memory workout.</p>
      <button className="btn launch">Launch App</button>
      <div className="practice-deck">
        <span>Practice Deck</span>
        <img src={apple} alt="Apple" />
      </div>
    </section>
  )
}
