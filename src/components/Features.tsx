import React from 'react'
import researchIcon from '../assets/research.png'
import codeIcon from '../assets/code.png'
import appIcon from '../assets/app.png'

type CardProps = { icon: string; title: string; text: string; cta: string }
function Card({ icon, title, text, cta }: CardProps) {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-icon" />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#">{cta} &gt;</a>
    </div>
  )
}

export default function Features() {
  return (
    <section className="features">
      <Card
        icon={researchIcon}
        title="Research"
        text="Read the pilot study on multisensor spaced repetition."
        cta="Read"
      />
      <Card
        icon={codeIcon}
        title="Simulation Code"
        text="View code for cognitive-load-adaptive scheduler."
        cta="View"
      />
      <Card
        icon={appIcon}
        title="Live App"
        text="Try the app directly in the browser."
        cta="Access"
      />
    </section>
  )
}
