import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: '#1a1612', color: '#fff', borderTop: '1px solid #2a2520' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--orange)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 800, color: '#fff' }}>F</div>
              <span style={{ fontWeight: 700, fontSize: '16px' }}>fatih<span style={{ color: 'var(--orange)' }}>emin</span></span>
            </div>
            <p style={{ color: '#6b6b6b', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              SEO & dijital pazarlama danışmanlığı ile işletmenizin organik büyümesini hızlandırıyorum.
            </p>
            <div style={{ background: '#231f1a', borderRadius: '10px', padding: '16px', marginBottom: '16px', border: '1px solid #2a2520' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ background: 'var(--orange)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>ÜCRETSİZ</span>
                <span style={{ fontSize: '12px', color: '#9a9a9a' }}>İlk keşif görüşmesi</span>
              </div>
              <button onClick={() => scrollTo('iletisim')} style={{
                width: '100%', padding: '10px', background: 'var(--orange)',
                border: 'none', borderRadius: '8px', color: '#fff',
                cursor: 'pointer', fontSize: '13px', fontWeight: 600,
                fontFamily: 'var(--font-body)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', gap: '6px',
              }}>
                📅 Randevu Al →
              </button>
            </div>
            <a href="mailto:info@fatihemincakiroglu.com" style={{ fontSize: '13px', color: '#6b6b6b', textDecoration: 'none' }}>✉️ info@fatihemincakiroglu.com</a>
            <div style={{ fontSize: '13px', color: '#6b6b6b', marginTop: '6px' }}>⏰ Pzt–Cum 09:00–18:00</div>
          </div>

          {/* Hizmetler */}
          <div>
            <div style={{ fontSize: '11px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>HİZMETLER</div>
            {['SEO Danışmanlığı', 'E-Ticaret SEO', 'Google Ads', 'Meta Ads', 'İçerik Stratejisi', 'Backlink & PR'].map(h => (
              <div key={h} style={{ marginBottom: '10px' }}>
                <button onClick={() => scrollTo('hizmetler')} style={{
                  background: 'none', border: 'none', color: '#6b6b6b',
                  fontSize: '14px', cursor: 'pointer', padding: 0,
                  fontFamily: 'var(--font-body)', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#6b6b6b'}
                >{h}</button>
              </div>
            ))}
          </div>

          {/* Kurumsal */}
          <div>
            <div style={{ fontSize: '11px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>KURUMSAL</div>
            {[
              { label: 'Hakkımda', id: 'hakkimda' },
              { label: 'Başarı Hikayeleri', id: 'basari' },
              { label: 'Blog', href: '/blog' },
              { label: 'İletişim', id: 'iletisim' },
            ].map(l => (
              <div key={l.label} style={{ marginBottom: '10px' }}>
                {l.href ? (
                  <Link to={l.href} style={{ color: '#6b6b6b', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#6b6b6b'}
                  >{l.label}</Link>
                ) : (
                  <button onClick={() => scrollTo(l.id)} style={{
                    background: 'none', border: 'none', color: '#6b6b6b',
                    fontSize: '14px', cursor: 'pointer', padding: 0,
                    fontFamily: 'var(--font-body)',
                  }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#6b6b6b'}
                  >{l.label}</button>
                )}
              </div>
            ))}
          </div>

          {/* Sosyal */}
          <div>
            <div style={{ fontSize: '11px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>SOSYAL</div>
            {[
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/fatihemincakiroglu/', icon: '🔗' },
              { label: 'Twitter / X', url: 'https://twitter.com/fatihemincakiroglu', icon: '𝕏' },
              { label: 'Instagram', url: 'https://instagram.com/fatihemincakiroglu', icon: '📸' },
              { label: 'YouTube', url: 'https://youtube.com', icon: '▶' },
            ].map(s => (
              <div key={s.label} style={{ marginBottom: '10px' }}>
                <a href={s.url} target="_blank" rel="noreferrer" style={{
                  color: '#6b6b6b', fontSize: '14px', transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b6b6b'}
                >
                  <span style={{ fontSize: '12px' }}>{s.icon}</span> {s.label} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2a2520', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ color: '#4a4540', fontSize: '13px' }}>© {new Date().getFullYear()} Fatih Emin Çakıroğlu — Tüm hakları saklıdır.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['KVKK', 'Gizlilik', 'Çerez Politikası'].map(l => (
              <a key={l} href="#" style={{ color: '#4a4540', fontSize: '12px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#9a9a9a'}
                onMouseLeave={e => e.target.style.color = '#4a4540'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
