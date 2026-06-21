import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CanonicalTag() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const BASE = 'https://fatihemincakiroglu.com';
    const canonical = BASE + (pathname === '/' ? '' : pathname);
    
    // Mevcut canonical tag'i bul veya yeni oluştur
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
    
    return () => {
      // Cleanup gerekmez - bir sonraki sayfa güncelleyecek
    };
  }, [pathname]);
  
  return null;
}
