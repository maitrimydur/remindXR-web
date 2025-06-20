import React from 'react'
import brainIcon from '../assets/brain.png'
import graphIcon from '../assets/graph.png'

export default function WhyItMatters() {
  return (
    <section className="why">
      <h2>Why It Matters</h2>

      {/* Wrap intro + cards in a two‐column grid on desktop */}
      <div className="why-row">
        <p className="why-intro">
          Every year, hundreds of thousands of young people who survive a moderate-to-severe traumatic brain injury (TBI) struggle with the “invisible” fallout: gaps in everyday memory that chip away at their independence, academic progress, and self-confidence. Traditional flash-card apps can boost recall in healthy learners, but they fall short for brains recovering from trauma—they rely on a single sensory channel, rigid review schedules, and demand high processing speed.
        </p>

        <div className="why-cards">
          <div className="why-card">
            <img src={brainIcon} alt="Brain icon" />
          </div>
          <div className="why-card">
            <img src={graphIcon} alt="Graph icon" />
            <p>
              ReMind-XR’s multisensory, load-adaptive scheduler increases 24-hour recall from 55% with standard SM-2 to 65%–an absolute gain of 10 percentage points.
            </p>
          </div>
        </div>
      </div>

      <ul className="why-list">
        ReMind-XR bridges that gap by pairing evidence-backed research with real-world practice:
        <li><strong>Multisensory Encoding:</strong> Text, speech, and a subtle haptic “focus cue” work together to forge stronger memory traces.</li>
        <li><strong>Load-Adaptive Spacing:</strong> Our scheduler senses when a user is under high cognitive load and intelligently shortens or extends review intervals—so you review just when you need to, not on a fixed timetable.</li>
        <li><strong>Validated in Simulation & Pilot Trials:</strong> We’ve run head-to-head simulations of the classic SM-2 algorithm versus our cognitive-load scheduler, and designed an 8-day trial protocol specifically for adolescents and young adults with TBI.</li>
        <li><strong>Accessible Web App:</strong> No bulky hardware—just sign in at any browser, see each word in large font, listen to audio, tap “Got it” or “Struggled,” adjust responses, and watch your progress score over an eight-day rehabilitation block.</li>
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
        By focusing on real-time feedback and reducing “study anxiety,” ReMind-XR doesn’t just teach—you rebuild confidence. Improving 24-hour recall by even ten percentage points can mean the difference between missing a classroom cue or walking into a meeting prepared. That empowerment ripples outward: stronger self-efficacy leads to better social engagement, smoother transitions back to school or work, and ultimately a higher quality of life.
      </p>
    </section>
  )
}
