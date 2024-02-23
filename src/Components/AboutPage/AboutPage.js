import React, { useEffect } from 'react'
import './AboutPage.css'
import AboutHeader from './AboutHeaderComponent/AboutHeader'
import ScrollingImages from './ScrollingImagesComponent/ScrollingImages'
import StoryVisionFuture from './StoryVisionFutureComponent/StoryVisionFuture'
import Numbers from './NumbersComponent/Numbers'
import CEOProfile from './CEOProfileComponent/CEOProfile'
import Members from './MembersComponent/Members'
import ContactUsNav from './ContactUsNavComponent/ContactUsNav'
import CareersNav from './CareersNavComponent/CareersNav'
import ApplyNowNav from './ApplyNowNavComponent/ApplyNowNav'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'


function AboutPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const componentRef = useRef(null);
  const handleClick = () => {
    componentRef.current.scrollIntoView({ block: 'start' });
  };

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - About</title>
        <link rel="canonical" href="https://www.visheshcountrycache.com/" />
        <meta name='description' content='Foster intellect with Vishesh Country Cache – Your destination for innovative solutions. We specialize in creative design, digital marketing, data analysis, full stack development, and UI/UX. Elevate your online presence with our cutting-edge services.' />
        <meta name='keywords' content='Vishesh Country Cache, fostering intellect, creative design, full stack, data analysis, ui/ux, digital marketing' />
        <meta name="author" content="Vishesh Country Cache" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <div >
        <AboutHeader />
      </div>
      <div className='height-3' ></div>
      <div onClick={(e) => { e.preventDefault(); handleClick(e) }} onPointerOver={(e) => { e.preventDefault(); handleClick(e) }} onMouseEnter={(e) => { e.preventDefault(); handleClick(e) }} ref={componentRef} >
        <ScrollingImages onScrolling={() => { handleClick() }} />
      </div>
      <div className='height-1'></div>
      <StoryVisionFuture />
      <div className='height-1'></div>
      <Numbers />
      <div className='height-1'></div>
      <CEOProfile />
      <div className='height-4'></div>
      <Members />
      <div className='height-4'> </div>
      <ContactUsNav />
      <div className='height-4'></div>
      <CareersNav />
      <div className='height-4'></div>
      <ApplyNowNav />
      <div className='height-2'></div>
    </div>
  )
}

export default AboutPage