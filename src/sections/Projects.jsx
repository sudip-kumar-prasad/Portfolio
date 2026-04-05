import React from 'react'

const projects = [
  {
    title: 'VitalQ',
    description: 'Designed a user-centric health guidance platform focusing on accessibility and clarity. Features an intuitive symptom analysis flow and automated emergency alerts, built with a clean, responsive MERN architecture.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    live: 'https://health-guide-8kzu.vercel.app/',
    code: 'https://github.com/sudip-kumar-prasad/Health_Guide.git'
  },
  {
    title: 'ShopSmart',
    description: 'Built a scalable full-stack MERN e-commerce platform with secure authentication using Google OAuth 2.0 and JWT. Implemented product management, live search, and real-time filtering for 500+ products.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    live: 'https://shopsmart-sandy.vercel.app/',
    code: 'https://github.com/sudip-kumar-prasad/ShopSmart'
  },
  {
    title: 'CrickBoard',
    description: 'Crafted a professional mobile UI for cricket team management. Prioritized data visualization and usability, featuring custom themes, real-time analytics dashboards, and smooth navigation interactions.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop',
    live: 'https://drive.google.com/file/d/12SA5NBLes2z5MaWVtL4Sk2sHoDf47oQq/view',
    code: 'https://github.com/sudip-kumar-prasad/CrickBoard.git'
  },
  {
    title: 'Virtual Café System',
    description: 'Designed a seamless coffee ordering experience with a focus on visual appeal and ease of use. Implemented smooth order flows, interactive menus, and real-time tracking to enhance customer satisfaction.',
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

