import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js'
import Header from './Components/HeaderComponent/Header.js'
import ServicesPage from './Components/ServicesPage/ServicesPage.js'
import WorkPage from './Components/WorkPage/WorkPage.js'
import AboutPage from './Components/AboutPage/AboutPage.js'
import ContactPage from './Components/ContactPage/ContactPage.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='home' Component={HomePage} />
        <Route path='services' Component={ServicesPage} />
        <Route path='work' Component={WorkPage} />
        <Route path='about' Component={AboutPage} />
        <Route path='contact' Component={ContactPage} />
        <Route path='carrer' Component={HomePage} />
        <Route path='privary-policy' Component={HomePage} />
        <Route path='*' Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
