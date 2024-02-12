import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hrElement = document.querySelector('.hr-element');
      const scrollPosition = window.scrollY;
      if (hrElement) {
        const hrPosition = hrElement.getBoundingClientRect().top + window.scrollY;
        setIsScrolled(scrollPosition > hrPosition);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    // Check if the current path matches the provided path
    return location.pathname === path;
  };

  return (
    <div>
      <div className='main-heading'>
        <img src={Logo} className='main-logo' alt='main-logo' />
        <div>
          <h2 className='vishesh-head'>VISHESH</h2>
          <h2 className='vishesh-sub-head'>COUNTRY CACHE</h2>
        </div>
      </div>
      <hr className='hr-element' />

      <div className={`main-heading1 ${isScrolled ? 'scrolled' : ''}`}>
        <img src={Logo} className='main-logo1' alt='main-logo' />
      </div>

      <div className='header-section'>
        <div className='nav-items-section'>
          <h2 className={`nav-items ${isActive('/') || isActive('/home') ? 'active' : ''}`} onClick={() => { navigate('/home') }}>Home</h2>
          <h2 className={`nav-items ${isActive('/services') ? 'active' : ''}`} onClick={() => { navigate('/services') }}>Services</h2>
          <h2 className={`nav-items ${isActive('/work') ? 'active' : ''}`} onClick={() => { navigate('/work') }}>Work</h2>
          <h2 className={`nav-items ${isActive('/about') ? 'active' : ''}`} onClick={() => { navigate('/about') }}>About</h2>
          <h2 className={`nav-items ${isActive('/contact') ? 'active' : ''}`} onClick={() => { navigate('/contact') }}>Contact</h2>
        </div>
      </div>
    </div>
  )
}

export default Header