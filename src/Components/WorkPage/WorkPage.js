import React from 'react'
import './WorkPage.css'
import ClientLogos from '../HomePage/ClientLogosComponent/ClientLogos'
import Reviews from '../HomePage/ReviewsComponent/Reviews'
import WorkPageHeader from './WorkPageHeaderComponent/WorkPageHeader'
import ProjectsScrolling from './ProjectsScrollingComponent/ProjectsScrolling'

function WorkPage() {
  return (
    <div>
      {/** Workpage Header text */}
      <WorkPageHeader />

      {/** Projects Scrolling  */}
      <ProjectsScrolling />
      {/**    logo slider          */}
      <ClientLogos />

      {/**    Reviews Section        */}
      <Reviews />
      <div className='height-1'></div>
    </div>

  )
}

export default WorkPage