import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Beispiel: Nachricht an ein Backend senden
    try {
      const res = await fetch('https://deine-api-url.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        alert('Nachricht erfolgreich gesendet!')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('Fehler beim Senden der Nachricht.')
      }
    } catch (error) {
      console.error(error)
      alert('Es ist ein Fehler aufgetreten.')
    }
  }

  return (
    <div className="w-full px-[5vw] py-[5vw] bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-8">Kontakt</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl mx-auto flex flex-col gap-6"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full p-4 bg-gray-200 placeholder-gray-500 rounded-lg outline-none"
        />

        {/* E-Mail */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-Mail"
          required
          className="w-full p-4 bg-gray-200 placeholder-gray-500 rounded-lg outline-none"
        />

        {/* Telefonnummer */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefonnummer"
          className="w-full p-4 bg-gray-200 placeholder-gray-500 rounded-lg outline-none"
        />

        {/* Anliegen */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ihr Anliegen"
          required
          rows={6} // 3x so hoch wie die Inputs
          className="w-full p-4 bg-gray-200 placeholder-gray-500 rounded-lg outline-none resize-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Abschicken
        </button>
      </form>
    </div>
  )
}

export default ContactForm
