import React from 'react'
import './ContactPage.css'
import ContactHeader from './ContactHeaderComponent/ContactHeader'
import ContactForm from './ContactFormComponent/ContactForm'

function ContactPage() {
  return (
    <>
      {/* Contact Header Text */}
      <ContactHeader />

      {/** Contact form */}
      <ContactForm />
    </>
  )
}

export default ContactPage