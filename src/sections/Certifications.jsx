import React from 'react'

const certifications = [
  {
    name: 'Generative AI For Everyone',
    issuer: 'DeepLearning.AI',
    date: 'April 2025',
    link: '',
    image: '/certs/generative-ai.png',
  },
  {
    name: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    date: 'March 2025',
    link: '',
    image: '/certs/ai-for-everyone.png',
  },
  {
    name: 'Internship Completion Certificate',
    issuer: 'Get Interview Confidence',
    date: 'April 2025',
    link: '',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2>Certifications</h2>
        <div className="cert-grid">
          {certifications.map((c) => (
            <article className={`card cert-card`} key={c.name + c.date}>
              <div className="cert-head">
                <h3 style={{ margin: 0 }}>{c.name}</h3>
                <span style={{ color: 'var(--muted)' }}>{c.date}</span>
              </div>
              <p style={{ marginTop: 6, color: 'var(--muted)' }}>{c.issuer}</p>
              {c.image && (
                <div className="cert-media">
                  <img src={c.image} alt={c.name} />
                </div>
              )}
              {c.link && (
                <div className="cta-group">
                  <a className="btn small" href={c.link} target="_blank" rel="noreferrer">Verify</a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

