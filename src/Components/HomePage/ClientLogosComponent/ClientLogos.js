import React from 'react'
import './ClientLogos.css'
import Logo1 from '../../../assets/HomePage/Anion.png'
import Logo2 from '../../../assets/HomePage/jajimalli.png'
import Logo3 from '../../../assets/HomePage/Ultimates.png'
import Logo4 from '../../../assets/HomePage/Nimmagadda.png'
import Logo5 from '../../../assets/HomePage/Sri Chaitanya.png'
import Logo6 from '../../../assets/HomePage/LG.png'
import Logo7 from '../../../assets/HomePage/KMV.png'
import Logo8 from '../../../assets/HomePage/Madhoors.png'
import Logo9 from '../../../assets/HomePage/terrang.png'
import Logo10 from '../../../assets/HomePage/piersoft.png'
import Logo11 from '../../../assets/HomePage/Purple Petal.png'
import Logo12 from '../../../assets/HomePage/Sanjivi.png'
import Logo13 from '../../../assets/HomePage/Ekantika.png'

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13]

function ClientLogos() {
    return (
        <div className='slider'>
            <div className='slide-track'>
                {logos.map((logo, index) => (
                    <div className='slide'>
                        <img key={index} src={logo} className='client-logo-img' alt={`client-logo-${index}`} />
                    </div>
                ))}
                {logos.map((logo, index) => (
                    <div key={index} className='slide'>
                        <img src={logo} className='client-logo-img' alt={`client-logo-${index}`} />
                    </div>
                ))}
                {logos.map((logo, index) => (
                    <div key={index} className='slide'>
                        <img src={logo} className='client-logo-img' alt={`client-logo-${index}`} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ClientLogos