import React from 'react'
import './ContactPage.css'
import ContactHeader from './ContactHeaderComponent/ContactHeader'
import ContactForm from './ContactFormComponent/ContactForm'
import ContactUs from './ContactUsComponent/ContactUs'

function ContactPage() {
  return (
    <>
      {/* Contact Header Text */}
      <ContactHeader />

      {/** Contact form */}
      <ContactForm />

      {/* Contact US  */}
      <ContactUs />

      <div className='height-2'></div>

    </>
  )
}

export default ContactPage