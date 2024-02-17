import React from 'react'
import './AboutPage.css'
import AboutHeader from './AboutHeaderComponent/AboutHeader'
import ScrollingImages from './ScrollingImagesComponent/ScrollingImages'
import StoryVisionFuture from './StoryVisionFutureComponent/StoryVisionFuture'
import Numbers from './NumbersComponent/Numbers'
import CEOProfile from './CEOProfileComponent/CEOProfile'
import Members from './MembersComponent/Members'

function AboutPage() {
  return (
    <>
      <AboutHeader />
      <div style={{ height: 200 }}></div>
      <ScrollingImages />
      <div style={{ height: 330 }}></div>
      <StoryVisionFuture />
      <div style={{ height: 330 }}></div>
      <Numbers />
      <div style={{ height: 330 }}></div>
      <CEOProfile />
      <div style={{ height: 330 }}></div>
      <Members />
    </>
  )
}

export default AboutPage