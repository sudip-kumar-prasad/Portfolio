import React from 'react'

const experienceItems = [
  {
    company: 'Get Interview Confidence',
    role: 'Frontend Developer (Intern)',
    period: 'Apr 2025 — May 2025 · Remote',
    bullets: [
      'Built and enhanced responsive web features using HTML, CSS, and React, improving UX and engagement.'
    ]
  }
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        {experienceItems.length === 0 && (
          <p style={{ color: 'var(--muted)' }}>Share your roles and achievements to populate this section.</p>
        )}
        <ol className="timeline">
          {experienceItems.map((item) => (
            <li key={item.company + item.role} className="timeline-item">
              <div className="timeline-meta">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-card card">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <h3 style={{ margin: 0 }}>{item.role}</h3>
                  <span style={{ color: 'var(--muted)' }}>{item.period}</span>
                </div>
                <p style={{ marginTop: 6, color: 'var(--muted)' }}>{item.company}</p>
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

export default Experience

