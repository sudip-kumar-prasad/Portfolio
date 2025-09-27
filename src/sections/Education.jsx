import React from 'react'

const educationItems = [
  {
    school: 'Newton School of Technology',
    degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
    period: '2024 — 2028',
  }
]

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <ol className="timeline">
          {educationItems.map((item) => (
            <li key={item.school + item.degree} className="timeline-item">
              <div className="timeline-meta">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-card card">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <h3 style={{ margin: 0 }}>{item.school}</h3>
                  <span style={{ color: 'var(--muted)' }}>{item.period}</span>
                </div>
                <p style={{ marginTop: 6, color: 'var(--muted)' }}>{item.degree}</p>
                {item.bullets && (
                  <ul>
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Education

