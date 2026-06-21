import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Rehber from './components/Rehber';
import RehberPost from './components/RehberPost';
import SSS from './components/SSS';
import Randevu from './components/Randevu';
import Fiyatlandirma from './components/Fiyatlandirma';
import Araclar from './components/Araclar';
import VakaCalismasi from './components/VakaCalismasi';
import Hakkimda from './components/Hakkimda';
import Referanslar from './components/Referanslar';
import Iletisim from './components/Iletisim';
import HizmetlerPage from './components/HizmetlerPage';
import SeoPage from './components/SeoPage';
import IcerikPage from './components/IcerikPage';
import PerformansPage from './components/PerformansPage';
import GeoPage from './components/GeoPage';
import BacklinkPage from './components/BacklinkPage';
import KaynaklarPage from './components/KaynaklarPage';
import SeoRehberi from './components/SeoRehberi';
import GeoRehberi from './components/GeoRehberi';
import AiSozluk from './components/AiSozluk';
import ExitPopup from './components/ExitPopup';
import Footer from './components/Footer';
import CanonicalTag from './components/CanonicalTag';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CanonicalTag />
      <Navbar scrolled={scrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<HizmetlerPage />} />
        <Route path="/seo" element={<SeoPage />} />
        <Route path="/icerik" element={<IcerikPage />} />
        <Route path="/performans" element={<PerformansPage />} />
        <Route path="/geo" element={<GeoPage />} />
        <Route path="/backlink" element={<BacklinkPage />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/referanslar" element={<Referanslar />} />
        <Route path="/vakalar" element={<VakaCalismasi />} />
        <Route path="/kaynaklar" element={<KaynaklarPage />} />
        <Route path="/seo-rehberi" element={<SeoRehberi />} />
        <Route path="/geo-rehberi" element={<GeoRehberi />} />
        <Route path="/ai-sozluk" element={<AiSozluk />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/araclar" element={<Araclar />} />
        <Route path="/rehber" element={<Rehber />} />
        <Route path="/rehber/:slug" element={<RehberPost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/randevu" element={<Randevu />} />
        <Route path="/fiyatlandirma" element={<Fiyatlandirma />} />
      </Routes>
      <Footer />
      <ExitPopup />
    </>
  );
}

export default App;
