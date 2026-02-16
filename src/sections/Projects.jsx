import React from 'react'

const projects = [
  {
    title: 'VitalQ',
    description: 'A full-stack health guidance platform built with the MERN stack (MongoDB, Express, React, Node.js) that provides rule-based symptom analysis, automated emergency alerts, and secure JWT-based health tracking.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    live: 'https://health-guide-8kzu.vercel.app/',
    code: 'https://github.com/sudip-kumar-prasad/Health_Guide.git'
  },
  {
    title: 'CrickBoard',
    description: 'React Native cricket team management app with authentication, player/match CRUD, real-time analytics dashboards, and tournament tracking. Features professional UI with data visualization, theme customization, and social feed functionality.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop',
    live: 'https://drive.google.com/file/d/12SA5NBLes2z5MaWVtL4Sk2sHoDf47oQq/view',
    code: 'https://github.com/sudip-kumar-prasad/CrickBoard.git'
  },
  {
    title: 'Virtual Café System',
    description: 'Responsive full-stack café management system with React frontend and Express.js/MongoDB backend, implementing secure user authentication, real-time order tracking, and menu management. Deployed using CI/CD pipelines on Vercel and Render.',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop',
    live: 'https://virtual-cafe-amber.vercel.app/',
    code: 'https://github.com/sudip-kumar-prasad/Virtual-Cafe-.git'
  },
  {
    title: 'Hangman',
    description: 'Interactive word-guessing game using HTML, CSS, and JavaScript with responsive UI.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    live: 'https://hangmanpr.netlify.app/',
    code: 'https://github.com/sudip-kumar-prasad/Hangman-'
  },
  {
    title: "Beginner's Guide to Running",
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
                <div className="project-media" style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: 12, marginBottom: 12 }}>
                  <img src={p.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(1.05)' }} />
                </div>
              )}
              <h3>{p.title}</h3>
              <p style={{ color: 'var(--muted)' }}>{p.description}</p>
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

