import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Rehber from './components/Rehber';
import SSS from './components/SSS';
import Randevu from './components/Randevu';
import Fiyatlandirma from './components/Fiyatlandirma';
import Araclar from './components/Araclar';
import VakaCalismasi from './components/VakaCalismasi';
import Hakkimda from './components/Hakkimda';
import ExitPopup from './components/ExitPopup';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/rehber" element={<Rehber />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/randevu" element={<Randevu />} />
        <Route path="/fiyatlandirma" element={<Fiyatlandirma />} />
        <Route path="/araclar" element={<Araclar />} />
        <Route path="/vakalar" element={<VakaCalismasi />} />
      </Routes>
      <Footer />
      <ExitPopup />
    </>
  );
}

export default App;
