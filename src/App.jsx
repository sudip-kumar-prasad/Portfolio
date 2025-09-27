import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import './App.css'

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.2 })

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <div className="reveal"><About /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Certifications /></div>
        <div className="reveal"><Experience /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Education /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
