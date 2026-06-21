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

const ARACLAR = [
  {
    isim: 'SEMrush', url: 'https://www.semrush.com',
    logo: (
      <svg height="20" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#FF6B35">SE</text>
        <text x="28" y="22" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="400" fill="#ffffff">Mrush</text>
      </svg>
    )
  },
  {
    isim: 'Ahrefs', url: 'https://ahrefs.com',
    logo: (
      <svg height="20" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="18" fontFamily="Arial Black, sans-serif" fontSize="17" fontWeight="900" fill="#FF8C00">a</text>
        <text x="14" y="18" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="600" fill="#ffffff">hrefs</text>
      </svg>
    )
  },
  {
    isim: 'SEOmonitor', url: 'https://www.seomonitor.com',
    logo: (
      <svg height="20" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="2" width="18" height="18" rx="4" fill="#4A90D9"/>
        <text x="2" y="15" fontFamily="Arial Black" fontSize="11" fontWeight="900" fill="#fff">S</text>
        <text x="24" y="18" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#ffffff">SEOmonitor</text>
      </svg>
    )
  },
  {
    isim: 'ChatGPT', url: 'https://chat.openai.com',
    logo: (
      <svg height="20" viewBox="0 0 105 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="12" r="9" fill="none" stroke="#10A37F" strokeWidth="1.5"/>
        <path d="M6 12 C6 8 14 8 14 12 C14 16 6 16 6 12Z" fill="#10A37F" opacity="0.6"/>
        <text x="24" y="17" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#ffffff">ChatGPT</text>
      </svg>
    )
  },
  {
    isim: 'Perplexity', url: 'https://www.perplexity.ai',
    logo: (
      <svg height="20" viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,2 18,7 18,17 10,22 2,17 2,7" fill="none" stroke="#20B2AA" strokeWidth="1.5"/>
        <line x1="10" y1="2" x2="10" y2="22" stroke="#20B2AA" strokeWidth="1"/>
        <text x="24" y="17" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="500" fill="#ffffff">Perplexity</text>
      </svg>
    )
  },
  {
    isim: 'Claude', url: 'https://claude.ai',
    logo: (
      <svg height="20" viewBox="0 0 85 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="3" width="18" height="18" rx="5" fill="#CC785C"/>
        <text x="3" y="16" fontFamily="serif" fontSize="13" fontWeight="700" fill="#fff">C</text>
        <text x="24" y="17" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#ffffff">Claude</text>
      </svg>
    )
  },
  {
    isim: 'Bing', url: 'https://www.bing.com',
    logo: (
      <svg height="20" viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L4 20 L12 16 L16 18 L16 10 L8 7Z" fill="#008373"/>
        <text x="22" y="17" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#ffffff">Bing</text>
      </svg>
    )
  },
  {
    isim: 'Meta', url: 'https://www.meta.com',
    logo: (
      <svg height="20" viewBox="0 0 75 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="7" cy="13" rx="5" ry="7" fill="none" stroke="#0082FB" strokeWidth="2.5" transform="rotate(-15 7 13)"/>
        <ellipse cx="16" cy="13" rx="5" ry="7" fill="none" stroke="#0082FB" strokeWidth="2.5" transform="rotate(15 16 13)"/>
        <text x="28" y="17" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#ffffff">Meta</text>
      </svg>
    )
  },
  {
    isim: 'Google', url: 'https://www.google.com',
    logo: (
      <svg height="20" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#4285F4">G</text>
        <text x="11" y="18" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#EA4335">o</text>
        <text x="22" y="18" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#FBBC05">o</text>
        <text x="33" y="18" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#4285F4">g</text>
        <text x="44" y="18" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#34A853">l</text>
        <text x="50" y="18" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#EA4335">e</text>
      </svg>
    )
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1a1612', color: '#fff', borderTop: '1px solid #2a2520' }}>

      {/* Araçlar bandı */}
      <div style={{ borderBottom: '1px solid #2a2520', padding: '36px 32px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 10px', background: 'rgba(232,86,10,0.12)', borderRadius: '4px' }}>ÇALIŞMA ORTAMI</span>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
            Veri, reklam ve <span style={{ color: 'var(--orange)' }}>AI araçları</span>
          </h3>
          <p style={{ fontSize: '13px', color: '#4a4540', marginBottom: '24px' }}>
            Operasyonlarımda kullandığım platformlar — logolar bilgi amaçlıdır; ticari adlar ilgili markaların mülkiyetindedir.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            {ARACLAR.map(a => (
              <a key={a.isim} href={a.url} target="_blank" rel="nofollow noreferrer noopener"
                title={a.isim}
                style={{
                  padding: '10px 18px',
                  background: '#231f1a',
                  border: '1px solid #2a2520',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#4a4540'; e.currentTarget.style.background = '#2a2520'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2520'; e.currentTarget.style.background = '#231f1a'; e.currentTarget.style.transform = 'none'; }}
              >
                {a.logo}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Ana footer */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '48px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>
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
            <a href="mailto:info@fatihemincakiroglu.com" style={{ fontSize: '13px', color: '#6b6b6b', textDecoration: 'none', display: 'block', marginBottom: '6px' }}>
              ✉️ info@fatihemincakiroglu.com
            </a>
            <div style={{ fontSize: '13px', color: '#6b6b6b' }}>⏰ Pzt–Cum 09:00–18:00</div>
          </div>

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
