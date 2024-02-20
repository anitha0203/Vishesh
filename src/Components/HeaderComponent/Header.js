import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import LogoS from '../../assets/logo-s.png'
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

  const scrollActive = (path) => {
    // Check if the current path matches the provided path
    console.log(location);
    return false;
  };

  return (
    <div>
      <div className='main-heading'>
        <img src={Logo} className='main-logo' alt='main-logo' />
      </div>
      <hr className='hr-element' />

      <div className={`main-heading1 ${isScrolled ? 'scrolled' : ''}`}>
        <img src={LogoS} className='main-logo1' alt='main-logo' />
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

      <div className='header-section1'>
        <div className='nav-items-section1'>
          <div className={`nav-items-section2 ${scrollActive('') ? 'nav-items-section21' : ''}`}>
            <h2 className={`nav-items ${isActive('/') || isActive('/home') ? 'active' : ''}`} onClick={() => { navigate('/home') }}>Home</h2>
            <h2 className={`nav-items ${isActive('/services') ? 'active' : ''}`} onClick={() => { navigate('/services') }}>Services</h2>
            <h2 className={`nav-items ${isActive('/work') ? 'active' : ''}`} onClick={() => { navigate('/work') }}>Work</h2>
            <h2 className={`nav-items ${isActive('/about') ? 'active' : ''}`} onClick={() => { navigate('/about') }}>About</h2>
            <h2 className={`nav-items ${isActive('/contact') ? 'active' : ''}`} onClick={() => { navigate('/contact') }}>Contact</h2>
          </div>
          </div>
      </div>

    </div>
  )
}

export default Header