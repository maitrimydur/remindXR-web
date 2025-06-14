import React from 'react'
import phone from '../assets/phone.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Remember More,<br />
          Live Better.
        </h1>
        <p>
          Multisensory, load-adaptive memory training for teens and young adults after TBI.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Try ReMind-XR</button>
          <button className="btn secondary">Read Research</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={phone} alt="ReMind-XR on phone" />
      </div>
    </section>
  )
}
