import React from 'react'
import brainIcon from '../assets/brain.png'
import graphIcon from '../assets/graph.png'

export default function WhyItMatters() {
  return (
    <section className="why">
      <h2>Why It Matters</h2>
      <p className="why-intro">
        Every year, hundreds of thousands of young people who survive a moderate-to-severe traumatic brain injury (TBI) struggle with the “invisible” fallout…
      </p>

      <div className="why-cards">
        <div className="why-card">
          <img src={brainIcon} alt="Brain icon" />
          <p>
            Traditional flash-card apps boost recall but fall short for brains recovering from trauma.
          </p>
        </div>
        <div className="why-card">
          <img src={graphIcon} alt="Graph icon" />
          <p>
            ReMind-XR pairs evidence-based research with real-world practice.
          </p>
        </div>
      </div>

      <ul className="why-list">
        <li>
          <strong>Multisensory Encoding:</strong> Text, speech, and a subtle haptic “focus cue.”
        </li>
        <li>
          <strong>Load-Adaptive Spacing:</strong> Scheduler senses user cognitive load.
        </li>
        <li>
          <strong>Validated Trials:</strong> Head-to-head SM-2 vs. adaptive scheduler.
        </li>
        <li>
          <strong>Accessible Web App:</strong> Browser-based, no bulky hardware needed.
        </li>
      </ul>

      <div className="graph">
        <div className="bar">
          <div className="fill" style={{ height: '55%' }} />
          <span className="label">Standard SM-2</span>
          <span className="percent">55%</span>
        </div>
        <div className="bar">
          <div className="fill" style={{ height: '65%' }} />
          <span className="label">ReMind-XR</span>
          <span className="percent">65%</span>
        </div>
      </div>

      <p className="why-outro">
        By focusing on real-time feedback and reducing “study anxiety,” ReMind-XR doesn’t just teach—you rebuild confidence…
      </p>
    </section>
  )
}
