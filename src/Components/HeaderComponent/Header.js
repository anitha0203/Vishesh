import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from '../../assets/Logo-black.png'
import LogoWhite from '../../assets/Logo-white.png'
import LogoS from '../../assets/logo-s.png'
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [orderCount, setOrderCount] = useState(0);

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

  const handleNavItemClick = (path) => {
    const currentIndex = getOrderIndex(path);
    setOrderCount(currentIndex);
    navigate(path);
  };

  const getOrderIndex = (path) => {
    const order = ['/home', '/services', '/work', '/about', '/contact'];
    return order.indexOf(path);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const currentIndex = getOrderIndex(location.pathname);
    setOrderCount(currentIndex);
  }, [location.pathname]);

  const calculateRightPosition = () => {
    const screenWidth = window.innerWidth;
    let basePercentage;
    if (screenWidth > 370) basePercentage = 22;
    else basePercentage = 21;


    // Increase or decrease based on the order count and screen width
    return `calc(15% + ${orderCount * basePercentage}%)`;
  };

  return (
    <div>
      <div className={`main-heading ${isActive('/services') ? 'services-page' : ''}`}>
      {isActive('/services') ? (
        <img onClick={() => { navigate('/') }} src={LogoWhite} className='main-logo' alt='main-logo' />
      ) : (
        <img onClick={() => { navigate('/') }} src={Logo} className='main-logo' alt='main-logo' />
      )}
      </div>
      <hr className='hr-element' />

      <div className={`main-heading1 ${isScrolled ? 'scrolled' : ''}`}>
        <img onClick={() => { navigate('/') }} src={LogoS} className='main-logo1' alt='main-logo' />
      </div>

      <div  className='header-section'>
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
          <div style={{ right: calculateRightPosition(), position: 'relative' }}
            className='nav-items-section2'>
            <h2 className={`nav-items ${isActive('/') || isActive('/home') ? 'active' : ''}`} onClick={() => { handleNavItemClick('/home') }}>Home</h2>
            <h2 className={`nav-items ${isActive('/services') ? 'active' : ''}`} onClick={() => { handleNavItemClick('/services') }}>Services</h2>
            <h2 className={`nav-items ${isActive('/work') ? 'active' : ''}`} onClick={() => { handleNavItemClick('/work') }}>Work</h2>
            <h2 className={`nav-items ${isActive('/about') ? 'active' : ''}`} onClick={() => { handleNavItemClick('/about') }}>About</h2>
            <h2 className={`nav-items ${isActive('/contact') ? 'active' : ''}`} onClick={() => { handleNavItemClick('/contact') }}>Contact</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header