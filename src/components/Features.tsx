import React from 'react'
import { Link } from 'react-router-dom'
import researchIcon from '../assets/research.png'
import codeIcon     from '../assets/code.png'
import appIcon      from '../assets/app.png'

type CardProps = {
  icon: string
  title: string
  text: string
  cta: string
  to: string
}

function Card({ icon, title, text, cta, to }: CardProps) {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-icon" />
      <h3>{title}</h3>
      <p>{text}</p>
      {/* Only this Link is clickable */}
      <Link to={to} className="feature-cta">
        {cta} &gt;
      </Link>
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
        to="https://www.researchgate.net/publication/392627252_Enhancing_Memory_After_Traumatic_Brain_Injury_Through_Multisensory_Load-Adaptive_Spaced_Repetition_Effects_on_Delayed_Recall_and_Everyday_Self-Efficacy_in_Adolescents_and_Young_Adults"
      />
      <Card
        icon={codeIcon}
        title="Simulation Code"
        text="View code for cognitive-load-adaptive scheduler."
        cta="View"
        to="https://github.com/maitrimydur/sr-scheduler-comparison"
      />
      <Card
        icon={appIcon}
        title="Live App"
        text="Try the app directly in the browser."
        cta="Access"
        to="https://remind-xr.netlify.app/"
      />
    </section>
  )
}
