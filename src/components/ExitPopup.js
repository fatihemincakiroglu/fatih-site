import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ExitPopup() {
  const [goster, setGoster] = useState(false);
  const [kapandi, setKapandi] = useState(false);

  useEffect(() => {
    if (kapandi) return;
    const handler = (e) => {
      if (e.clientY <= 10) setGoster(true);
    };
    document.addEventListener('mouseleave', handler);
    return () => document.removeEventListener('mouseleave', handler);
  }, [kapandi]);

  const kapat = () => { setGoster(false); setKapandi(true); };

  if (!goster) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}
      onClick={kapat}>
      <div style={{ background: '#fff', borderRadius: '20px', padding: '48px', maxWidth: '480px', width: '90%', position: 'relative', textAlign: 'center' }}
        onClick={e => e.stopPropagation()}>
        <button onClick={kapat} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#aaa', lineHeight: 1 }}>✕</button>

        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(232,86,10,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 20px' }}>🎯</div>

        <div style={{ fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>BEKLE!</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 800, color: '#111', lineHeight: 1.2, marginBottom: '12px' }}>
          Ücretsiz SEO Audit<br />hakkınızı kullanmak ister misiniz?
        </h2>
        <p style={{ color: '#777', fontSize: '15px', lineHeight: 1.6, marginBottom: '28px' }}>
          Sitenizin teknik SEO durumunu analiz edip size özel bir rapor hazırlıyorum. Kayıt gerekmez, tamamen ücretsiz.
        </p>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
          {['Teknik Analiz', 'İçerik Denetimi', 'Rakip Karşılaştırması'].map(b => (
            <span key={b} style={{ padding: '4px 12px', borderRadius: '20px', background: '#f5f5f5', fontSize: '12px', color: '#555' }}>✓ {b}</span>
          ))}
        </div>

        <Link to="/randevu" onClick={kapat}>
          <button style={{ width: '100%', padding: '14px', borderRadius: '10px', background: 'var(--orange)', color: '#fff', border: 'none', fontWeight: 700, fontSize: '16px', cursor: 'pointer', fontFamily: 'var(--font-body)', marginBottom: '10px' }}>
            Ücretsiz Audit İstiyorum →
          </button>
        </Link>
        <button onClick={kapat} style={{ background: 'none', border: 'none', color: '#aaa', fontSize: '13px', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
          Hayır, teşekkürler
        </button>
      </div>
    </div>
  );
}
