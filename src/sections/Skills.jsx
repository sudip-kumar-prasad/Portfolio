import React from 'react'

const skills = [
  {
    title: 'Frontend',
    icon: '🎨',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native']
  },
  {
    title: 'Backend',
    icon: '🧩',
    items: ['Node.js', 'Express JS', 'MySQL', 'Prisma ORM']
  },
  {
    title: 'Data & Tools',
    icon: '🧠',
    items: ['Python', 'Pandas', 'Figma', 'Excel', 'Data Structure', 'Generative AI']
  },
  {
    title: 'Soft Skills',
    icon: '✨',
    items: ['Teamwork', 'Creativity', 'Time management', 'Responsibility', 'Decision-making']
  }
]

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2>Skills</h2>
        <p className="subtitle">Technologies and strengths I work with regularly.</p>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="card skill-card" key={group.title}>
              <div className="skill-card-head">
                <span className="skill-icon" aria-hidden>{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <ul className="badges">
                {group.items.map((item) => (
                  <li key={item}><span className="dot" />{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

