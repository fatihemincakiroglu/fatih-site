import React from 'react';
import { Link } from 'react-router-dom';

const LINKLER = {
  'HİZMETLER': [
    { label: 'Tüm Hizmetler', url: '/hizmetler' },
    { label: 'SEO Danışmanlığı', url: '/seo' },
    { label: 'İçerik Stratejisi', url: '/icerik' },
    { label: 'Performans & Growth', url: '/performans' },
    { label: 'GEO Danışmanlığı', url: '/geo' },
    { label: 'Backlink & Dijital PR', url: '/backlink' },
  ],
  'HAKKIMDA': [
    { label: 'Hakkımda', url: '/hakkimda' },
    { label: 'Referanslar', url: '/referanslar' },
    { label: 'Vaka Çalışmaları', url: '/vakalar' },
    { label: 'Fiyatlandırma', url: '/fiyatlandirma' },
  ],
  'KAYNAKLAR': [
    { label: 'Kaynaklar', url: '/kaynaklar' },
    { label: 'SEO Rehberi', url: '/seo-rehberi' },
    { label: 'GEO Rehberi', url: '/geo-rehberi' },
    { label: 'AI Sözlük', url: '/ai-sozluk' },
    { label: 'SSS', url: '/sss' },
  ],
  'KEŞFET': [
    { label: 'Araçlar', url: '/araclar' },
    { label: 'Rehber', url: '/rehber' },
    { label: 'Blog', url: '/blog' },
    { label: 'İletişim', url: '/iletisim' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#1a1612', color: '#fff', borderTop: '1px solid #2a2520' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', textDecoration: 'none' }}>
              <img src="/logo.png" alt="Fatih Emin Çakıroğlu" style={{ height: '36px', filter: 'invert(1) brightness(2)' }} />
            </Link>
            <p style={{ color: '#6b6b6b', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              SEO & dijital pazarlama danışmanlığı ile işletmenizin organik büyümesini hızlandırıyorum.
            </p>
            <div style={{ background: '#231f1a', borderRadius: '10px', padding: '16px', border: '1px solid #2a2520', marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: '#4a4540', marginBottom: '10px' }}>İLK GÖRÜŞME ÜCRETSİZ</div>
              <Link to="/iletisim">
                <button style={{ width: '100%', padding: '10px', background: 'var(--orange)', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                  İletişime Geç →
                </button>
              </Link>
            </div>
            <a href="mailto:info@fatihemincakiroglu.com" style={{ fontSize: '13px', color: '#6b6b6b', textDecoration: 'none', display: 'block', marginBottom: '6px' }}>✉️ info@fatihemincakiroglu.com</a>
            <div style={{ fontSize: '13px', color: '#6b6b6b' }}>⏰ Pzt–Cum 09:00–18:00</div>
          </div>

          {/* Link kolonları */}
          {Object.entries(LINKLER).map(([baslik, linkler]) => (
            <div key={baslik}>
              <div style={{ fontSize: '11px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>{baslik}</div>
              {linkler.map(l => (
                <div key={l.label} style={{ marginBottom: '10px' }}>
                  <Link to={l.url} style={{ color: '#6b6b6b', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#6b6b6b'}
                  >{l.label}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #2a2520', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ color: '#4a4540', fontSize: '13px' }}>© {new Date().getFullYear()} Fatih Emin Çakıroğlu</div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/in/fatihemincakiroglu/" target="_blank" rel="noreferrer" style={{ color: '#4a4540', fontSize: '13px', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = '#9a9a9a'}
              onMouseLeave={e => e.target.style.color = '#4a4540'}
            >LinkedIn ↗</a>
            {['KVKK', 'Gizlilik'].map(l => (
              <a key={l} href="#" style={{ color: '#4a4540', fontSize: '12px', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
