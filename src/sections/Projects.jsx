import React from 'react'

const projects = [
  {
    title: 'Hangman',
    description: 'Interactive word-guessing game using HTML, CSS, and JavaScript with responsive UI.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    live: 'https://hangmanpr.netlify.app/',
    code: 'https://github.com/sudip-kumar-prasad/Hangman-'
  },
  {
    title: 'Virtual Café System',
    description: 'Responsive React app to explore menu items and simulate café orders with smooth navigation.',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop',
    live: 'https://virtualcafesystem.netlify.app/',
    code: 'https://github.com/sudip-kumar-prasad/Virtual-Cafe-'
  },
  {
    title: "Beginner’s Guide to Running",
    description: 'Informational site covering basics, tips, and techniques with clean responsive design (HTML & CSS).',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=1200&auto=format&fit=crop',
    code: 'https://github.com/sudip-kumar-prasad/Runningguide',
    live: 'https://runningguide.netlify.app/'
  }
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article className="card project-card" key={p.title}>
              {p.image && (
                <div className="project-media" style={{aspectRatio:'16/9', overflow:'hidden', borderRadius:12, marginBottom:12}}>
                  <img src={p.image} alt="" style={{width:'100%', height:'100%', objectFit:'cover', display:'block', filter:'saturate(1.05)'}} />
                </div>
              )}
              <h3>{p.title}</h3>
              <p style={{color:'var(--muted)'}}>{p.description}</p>
              <div className="cta-group">
                {p.live && <a className="btn small" href={p.live} target="_blank" rel="noreferrer">Live</a>}
                {p.code && <a className="btn small" href={p.code} target="_blank" rel="noreferrer">Code</a>}
                {p.link && !p.live && !p.code && (
                  <a className="btn small" href={p.link} target="_blank" rel="noreferrer">View</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

