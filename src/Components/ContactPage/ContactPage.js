import React, { useEffect } from 'react'
import './ContactPage.css'
import ContactHeader from './ContactHeaderComponent/ContactHeader'
import ContactForm from './ContactFormComponent/ContactForm'
import ContactUs from './ContactUsComponent/ContactUs'
import { Helmet } from 'react-helmet'

function ContactPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - Contact</title>
        <link rel="canonical" href="https://www.visheshcountrycache.com/" />
        <meta name='description' content='Foster intellect with Vishesh Country Cache – Your destination for innovative solutions. We specialize in creative design, digital marketing, data analysis, full stack development, and UI/UX. Elevate your online presence with our cutting-edge services.' />
        <meta name='keywords' content='Vishesh Country Cache, fostering intellect, creative design, full stack, data analysis, ui/ux, digital marketing' />
        <meta name="author" content="Vishesh Country Cache" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      {/* Contact Header Text */}
      <ContactHeader />

      {/** Contact form */}
      <ContactForm />

      {/* Contact US  */}
      <ContactUs />

      <div className='height-2'></div>

    </div>
  )
}

export default ContactPage