import React, { useEffect } from 'react'
import './WorkPage.css'
import ClientLogos from '../HomePage/ClientLogosComponent/ClientLogos'
import Reviews from '../HomePage/ReviewsComponent/Reviews'
import WorkPageHeader from './WorkPageHeaderComponent/WorkPageHeader'
import ProjectsScrolling from './ProjectsScrollingComponent/ProjectsScrolling'
import { Helmet } from 'react-helmet'

function WorkPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - Work</title>
        <link rel="canonical" href="https://www.visheshcountrycache.com/" />
        <meta name='description' content='Foster intellect with Vishesh Country Cache – Your destination for innovative solutions. We specialize in creative design, digital marketing, data analysis, full stack development, and UI/UX. Elevate your online presence with our cutting-edge services.' />
        <meta name='keywords' content='Vishesh Country Cache, fostering intellect, creative design, full stack, data analysis, ui/ux, digital marketing' />
        <meta name="author" content="Vishesh Country Cache" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      {/** Workpage Header text */}
      <WorkPageHeader />

      {/** Projects Scrolling  */}
      <ProjectsScrolling />
      {/**    logo slider          */}
      <ClientLogos />

      {/**    Reviews Section        */}
      <Reviews />
      <div className='height-3'></div>
    </div>

  )
}

export default WorkPage