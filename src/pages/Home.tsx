import React from 'react'
// import Header from '../components/Header'    ← remove this
import Hero from '../components/Hero'
import Features from '../components/Features'
import WhyItMatters from '../components/WhyItMatters'
import AppSection from '../components/AppSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="App">
      {/* <Header />  ← remove this */}
      <main>
        <Hero />
        <Features />
        <WhyItMatters />
        <AppSection />
      </main>
      <Footer />
    </div>
  )
}
