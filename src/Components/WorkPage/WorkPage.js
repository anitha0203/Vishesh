import React from 'react'
import './WorkPage.css'
import ClientLogos from '../HomePage/ClientLogosComponent/ClientLogos'

function WorkPage() {
  return (
    <div>

      {/**    logo slider          */}
      <ClientLogos />
      
      {/**    Reviews Section        */}
      <Reviews />
    </div>
  )
}

export default WorkPage