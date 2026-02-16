import React from 'react'

const skills = [
  {
    title: 'Design & UX',
    icon: '🎨',
    items: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Responsive Design', 'Accessibility (WCAG)', 'Gen AI']
  },
  {
    title: 'Frontend Engineering',
    icon: '💻',
    items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS']
  },
  {
    title: 'Backend & Tools',
    icon: '🛠️',
    items: ['Node.js', 'Git & GitHub', 'MongoDB', 'Postman', 'Python', 'VS Code']
  },
  {
    title: 'Soft Skills',
    icon: '✨',
    items: ['User Empathy', 'Collaboration', 'Problem Solving', 'Adaptability', 'Visual Communication']
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

