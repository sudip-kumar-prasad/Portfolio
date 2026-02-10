import React, { useState } from 'react'

function Home() {
  const [photoLoaded, setPhotoLoaded] = useState(false)
  return (
    <section id="home" className="section hero">
      <div className="container hero-content">
        <div>
          <h1>Hi, I'm Sudip.</h1>
          <p className="subtitle">I build delightful, performant interfaces for the web.</p>
          <div className="cta-group">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
            <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="btn">Resume</a>
          </div>
          <div className="cta-group" style={{ justifyContent: 'flex-start' }}>
            <a className="btn small" href="https://github.com/sudip-kumar-prasad" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn small" href="https://www.linkedin.com/in/sudip-kumar-prasad/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn small" href="mailto:sudipkumarprasad2005@gmail.com">Email</a>
          </div>
        </div>
        <div className="avatar-wrap">
          <img
            className="avatar"
            src="/profile.jpg?v=1"
            alt="Sudip Kumar Prasad portrait"
            onLoad={() => setPhotoLoaded(true)}
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          {!photoLoaded && <div className="avatar-fallback" aria-hidden="true">SKP</div>}
        </div>
      </div>
    </section>
  )
}

export default Home

