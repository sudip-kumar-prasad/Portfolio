import React, { useState } from 'react'

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const mailto = `mailto:sudipkumarprasad2005@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}%0A%0AFrom:%20${encodeURIComponent(formState.email)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 style={{textAlign:'center'}}>Contact</h2>
        <form className="form contact-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={formState.name} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={formState.message} onChange={handleChange} required />
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <button className="btn primary" type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

