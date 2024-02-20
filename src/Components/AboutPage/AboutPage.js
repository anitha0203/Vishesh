import React from 'react'
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


function AboutPage() {

  const componentRef = useRef(null);
  const handleClick = () => {

    componentRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <div >
        <AboutHeader />
      </div>
      <div className='height-3'></div>
      <div onClick={() => { handleClick() }} onPointerOver={() => { handleClick() }} ref={componentRef}>
        <ScrollingImages />
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
    </>
  )
}

export default AboutPage