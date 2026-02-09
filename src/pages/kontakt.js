import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/Button'

const Kontakt = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    const data = new FormData(event.target)
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
      if (response.ok) {
        setStatus('success')
        event.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
        <div className="prose lg:prose-xl">
          <p>
            Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Zögern Sie
            nicht, uns zu kontaktieren. Wir freuen uns auf Ihre Nachricht.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">HEA - Smart Abrechnen</h2>
            <p>
              <strong>Ansprechpartner:</strong> [Ihr Name]
              <br />
              <strong>Adresse:</strong> [Ihre Straße und Hausnummer], [Ihre PLZ und Stadt]
              <br />
              <strong>Telefon:</strong> <a href="tel:[Ihre Telefonnummer]">[Ihre Telefonnummer]</a>
              <br />
              <strong>E-Mail:</strong>{' '}
              <a href="mailto:[Ihre E-Mail-Adresse]">[Ihre E-Mail-Adresse]</a>
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Schreiben Sie uns eine Nachricht</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Nachricht
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                ></textarea>
              </div>
              <div>
                <Button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </div>
              {status === 'success' && (
                <p className="text-green-600">Vielen Dank für Ihre Nachricht!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600">
                  Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Kontakt
