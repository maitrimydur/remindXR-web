import React from 'react'
import brainIcon from '../assets/brain.png'
import graphIcon from '../assets/graph.png'
import './WhyItMatters.css'

export default function WhyItMatters() {
  return (
    <section className="why">
      <h2>Why It Matters</h2>

      {/* Intro with floating brain icon */}
      <p className="why-intro">
        <img className="brain-float" src={brainIcon} alt="Stylised brain icon" />
        Every year, hundreds of thousands of young people who survive a
        moderate-to-severe traumatic brain injury (TBI) struggle with the
        “invisible” fallout: gaps in everyday memory that chip away at their
        independence, academic progress, and self-confidence. Traditional
        flash-card apps can boost recall in healthy learners, but they fall
        short for brains recovering from trauma—they rely on a single sensory
        channel, rigid review schedules, and demand high processing speed.
      </p>

      {/* Evidence-backed feature list */}
      <ul className="why-list">
        ReMind-XR bridges that gap by pairing evidence-backed research with
        real-world practice:
        <li>
          <strong>Multisensory Encoding:</strong> Text, speech, and a subtle
          haptic “focus cue” work together to forge stronger memory traces.
        </li>
        <li>
          <strong>Load-Adaptive Spacing:</strong> Our scheduler senses when a
          user is under high cognitive load and intelligently shortens or
          extends review intervals—so you review just when you need to, not on a
          fixed timetable.
        </li>
        <li>
          <strong>Validated in Simulation &amp; Pilot Trials:</strong> We’ve run
          head-to-head simulations of the classic SM-2 algorithm versus our
          cognitive-load scheduler, and designed an 8-day trial protocol
          specifically for adolescents and young adults with TBI.
        </li>
        <li>
          <strong>Accessible Web App:</strong> No bulky hardware—just sign in at
          any browser, see each word in large font, listen to audio, tap “Got
          it” or “Struggled,” adjust responses, and watch your progress score
          over an eight-day rehabilitation block.
        </li>
      </ul>

      {/* Graph icon + caption (now below the list) */}
      <div className="why-graph-caption">
        <img src={graphIcon} alt="Bar graph icon" />

      </div>

      {/* Actual bar chart */}
      <div className="graph">
        <div className="bar">
          <div className="fill" style={{ height: '55%' }} />
        </div>
        <div className="bar">
          <div className="fill" style={{ height: '65%' }} />
        </div>
      </div>

      <p className="why-outro">
        By focusing on real-time feedback and reducing “study anxiety,” ReMind-XR
        doesn’t just teach—you rebuild confidence. Improving 24-hour recall by
        even ten percentage points can mean the difference between missing a
        classroom cue or walking into a meeting prepared. That empowerment
        ripples outward: stronger self-efficacy leads to better social
        engagement, smoother transitions back to school or work, and ultimately
        a higher quality of life.
      </p>
    </section>
  )
}
