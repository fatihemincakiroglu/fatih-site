import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MEGA_MENU = {
  Hizmetler: {
    kategoriler: [
      { label: 'Hizmetler', count: 6 },
      { label: 'Kurumsal', count: 4 },
      { label: 'Kaynaklar', count: 6 },
      { label: 'Rehber', count: 21 },
      { label: 'Blog', count: 50 },
    ],
    kisayollar: [
      { label: 'Ücretsiz AI Audit', href: '/randevu' },
      { label: 'Fiyatlandırma', href: '/randevu' },
      { label: 'İletişim', href: '/randevu' },
    ],
    icerik: [
      { ikon: '🔍', baslik: 'SEO & Arama', alt: 'Teknik ve içerik disiplinleriyle uçtan uca arama görünürlüğü.', href: '/hizmetler' },
      { ikon: '🤖', baslik: 'AI & GEO', alt: 'ChatGPT, Perplexity ve yanıt motorlarında görünürlük.', href: '/hizmetler' },
      { ikon: '📄', baslik: 'Content Hizmetleri', alt: 'Arama niyetine uygun içerik stratejisi ve üretimi.', href: '/hizmetler' },
      { ikon: '🔗', baslik: 'Backlink & Dijital PR', alt: 'Yüksek otoriteli medya kazanımları.', href: '/hizmetler' },
      { ikon: '📈', baslik: 'Performans & Growth', alt: 'Trafik, dönüşüm ve büyüme optimizasyonu.', href: '/hizmetler' },
    ],
    one_cikan: { baslik: 'Ücretsiz AI Audit', alt: 'Yapay zekâ destekli hızlı sağlık taraması ve ilk aksiyonlar.', href: '/randevu' },
  },
  Kurumsal: {
    icerik: [
      { ikon: '📋', baslik: 'Hakkımda', alt: 'Uzmanlık, yaklaşım ve deneyim.', href: '/#hakkimda' },
      { ikon: '📢', baslik: 'Basında Biz', alt: 'Konferans, podcast ve sektör yayınları.', href: '/#hakkimda' },
      { ikon: '≡', baslik: 'Referanslarımız', alt: 'Çalıştığımız markalar ve sektör çeşitliliği.', href: '/#basari' },
      { ikon: '★', baslik: 'Başarı Hikayeleri', alt: 'Ölçülebilir sonuçlar ve vaka özetleri.', href: '/#basari' },
    ],
  },
  Kaynaklar: {
    icerik: [
      { ikon: '📖', baslik: 'GEO Rehberi', alt: 'LLM ve yanıt motorlarında görünürlük için uygulamalı rehber.', href: '/rehber' },
      { ikon: '📚', baslik: 'AI Sözlük', alt: 'AI ve arama terimleri için hızlı başvuru.', href: '/rehber' },
      { ikon: '❓', baslik: 'SSS', alt: 'Sık sorulan sorular ve net cevaplar.', href: '/sss' },
    ],
    araclar: [
      { ikon: '✏', baslik: 'SERP Index', badge: 'TOOL', alt: 'SERP görünürlük ve oynaklık analizi.', href: '/rehber' },
      { ikon: '📈', baslik: 'Traffic Trends', badge: 'TOOL', alt: 'Trafik trendleri ve dönem kıyasları.', href: '/rehber' },
      { ikon: '🔍', baslik: 'Keywords Searched', badge: 'TOOL', alt: 'Aranan anahtar kelimeler ve hacim görünümü.', href: '/rehber' },
    ],
  },
  Rehber: {
    icerik: [
      { ikon: '📄', baslik: 'llms.txt', alt: 'llmstxt.org öneri standardı ve GEO bağlamı.', href: '/rehber' },
      { ikon: '☀', baslik: 'SEO ve CRO', alt: 'Organik trafiği dönüşüm hedefleriyle aynı çizgide.', href: '/rehber' },
      { ikon: '🔍', baslik: 'Zero-Click Search', alt: 'Tıklama olmadan yanıtlanan sorgular.', href: '/rehber' },
      { ikon: '📋', baslik: 'Answer Engine Optimization', alt: 'Yapılandırılmış içerikle uyumlu optimizasyon.', href: '/rehber' },
      { ikon: '⚙', baslik: 'Teknik SEO', alt: 'Crawl bütçesi, site mimarisi, HTTP.', href: '/rehber' },
      { ikon: '📱', baslik: 'Mobil SEO', alt: 'Mobil deneyim ve uyumlu sayfa sunumu.', href: '/rehber' },
    ],
    devami: { baslik: 'TÜM REHBERLER', alt: 'Tüm SEO rehberlerini tek yerde görmek için tıklayın.', href: '/rehber' },
  },
  Blog: {
    icerik: [
      { ikon: '📋', baslik: "2026'da Öne Çıkan 10 SEO Trendi", alt: 'Verilerle desteklenmiş güncel SEO trendleri.', href: '/blog' },
      { ikon: '🔍', baslik: 'Yapay Zeka ile SEO Otomatikleştirme', alt: '11 yol ile SEO süreçlerini otomatize edin.', href: '/blog' },
      { ikon: '📄', baslik: 'E-Ticaret SEO Rehberi 2025', alt: 'Rakiplerinizin önüne geçin.', href: '/blog' },
      { ikon: '📋', baslik: 'Google Core Update Analizi', alt: 'Sitenizi algoritma güncellemelerine hazırlayın.', href: '/blog' },
      { ikon: '🔍', baslik: 'Teknik SEO Denetim Rehberi', alt: 'Adım adım teknik SEO audit nasıl yapılır.', href: '/blog' },
    ],
    devami: { baslik: 'TÜM BLOG YAZILARI', alt: 'Tüm SEO ve dijital pazarlama yazılarını keşfet.', href: '/blog' },
  },
};

export default function Navbar() {
  const [acikMenu, setAcikMenu] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setAcikMenu(null);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const goTo = (href) => {
    setAcikMenu(null);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (window.location.pathname !== '/') { window.location.href = href; return; }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
    }
  };

  const menu = MEGA_MENU[acikMenu];

  return (
    <nav ref={navRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: '#1a1612', height: 'var(--nav-h)',
      display: 'flex', alignItems: 'center', padding: '0 32px',
      borderBottom: '1px solid #2a2520',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <Link to="/" onClick={() => setAcikMenu(null)} style={{ display: 'flex', alignItems: 'center', marginRight: '32px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Fatih Emin Çakıroğlu" style={{ height: '40px', filter: 'invert(1) brightness(2)' }} />
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flex: 1 }}>
          {Object.keys(MEGA_MENU).map(key => (
            <button key={key}
              onClick={() => setAcikMenu(acikMenu === key ? null : key)}
              style={{
                padding: '7px 12px', borderRadius: '8px', border: 'none',
                background: acikMenu === key ? '#2a2520' : 'transparent',
                color: acikMenu === key ? '#fff' : '#9a9a9a',
                cursor: 'pointer', fontSize: '14px', fontFamily: 'var(--font-body)',
                display: 'flex', alignItems: 'center', gap: '4px', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (acikMenu !== key) e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { if (acikMenu !== key) e.currentTarget.style.color = '#9a9a9a'; }}
            >
              {key}
              <span style={{ fontSize: '10px', transition: 'transform 0.2s', transform: acikMenu === key ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▾</span>
            </button>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="https://www.linkedin.com/in/fatihemincakiroglu/" target="_blank" rel="noreferrer" style={{ fontSize: '13px', color: '#4a4540', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#4a4540'}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
            LinkedIn
          </a>
          <Link to="/randevu" onClick={() => setAcikMenu(null)} style={{
            padding: '9px 18px', borderRadius: '8px', background: 'var(--orange)',
            color: '#fff', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-body)',
            display: 'flex', alignItems: 'center', gap: '6px', transition: 'background 0.2s', textDecoration: 'none',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#ff6b1a'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
          >Randevu 📅</Link>
        </div>
      </div>

      {/* Mega Menu */}
      {acikMenu && menu && (
        <div style={{
          position: 'absolute', top: 'var(--nav-h)', left: '50%', transform: 'translateX(-50%)',
          width: 'min(1100px, calc(100vw - 64px))',
          background: '#1c1914', borderRadius: '0 0 16px 16px',
          border: '1px solid #2a2520', borderTop: 'none',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          display: 'grid',
          gridTemplateColumns: menu.kategoriler ? '200px 1fr' : '1fr',
          overflow: 'hidden',
        }}>
          {menu.kategoriler && (
            <div style={{ background: '#151210', borderRight: '1px solid #2a2520', padding: '24px 0' }}>
              <div style={{ padding: '0 20px', fontSize: '10px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>KATEGORİLER</div>
              {menu.kategoriler.map((item, i) => (
                <button key={i} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', background: 'transparent', border: 'none', borderLeft: '2px solid transparent', color: '#9a9a9a', fontSize: '14px', cursor: 'pointer', fontFamily: 'var(--font-body)', textAlign: 'left' }}>
                  <span>{item.label}</span>
                  <span style={{ fontSize: '11px', color: '#4a4540' }}>{item.count} ›</span>
                </button>
              ))}
              <div style={{ borderTop: '1px solid #2a2520', margin: '12px 0', padding: '12px 20px 0' }}>
                <div style={{ fontSize: '10px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>KISAYOLLAR</div>
                {menu.kisayollar.map((k, i) => (
                  <button key={i} onClick={() => goTo(k.href)} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '8px 0', color: '#9a9a9a', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', textAlign: 'left' }}>
                    {k.label} <span>›</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ padding: '24px 28px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px', marginBottom: (menu.one_cikan || menu.devami || menu.araclar) ? '16px' : '0' }}>
              {(menu.icerik || []).map((item, i) => (
                <button key={i} onClick={() => goTo(item.href)} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px', borderRadius: '8px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s', fontFamily: 'var(--font-body)', width: '100%' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#231f1a'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#231f1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{item.ikon}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>{item.baslik}</div>
                    <div style={{ fontSize: '12px', color: '#6b6b6b', lineHeight: 1.4 }}>{item.alt}</div>
                  </div>
                </button>
              ))}
            </div>

            {menu.araclar && (
              <div style={{ borderTop: '1px solid #2a2520', paddingTop: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '10px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>TOOL</div>
                {menu.araclar.map((a, i) => (
                  <button key={i} onClick={() => goTo(a.href)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', background: 'transparent', border: 'none', cursor: 'pointer', transition: 'background 0.15s', marginBottom: '4px', width: '100%', fontFamily: 'var(--font-body)' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#231f1a'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#231f1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>{a.ikon}</div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginRight: '6px' }}>{a.baslik}</span>
                    <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(232,86,10,0.15)', color: 'var(--orange)', fontWeight: 700 }}>{a.badge}</span>
                    <span style={{ fontSize: '12px', color: '#6b6b6b', marginLeft: 'auto' }}>{a.alt}</span>
                  </button>
                ))}
              </div>
            )}

            {(menu.one_cikan || menu.devami) && (() => {
              const item = menu.one_cikan || menu.devami;
              const label = menu.one_cikan ? 'ÖNE ÇIKAN' : 'DEVAMI';
              return (
                <button onClick={() => goTo(item.href)} style={{ display: 'block', width: '100%', padding: '16px 20px', borderRadius: '10px', background: 'rgba(232,86,10,0.06)', border: '1px solid rgba(232,86,10,0.15)', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,86,10,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(232,86,10,0.06)'}
                >
                  <div style={{ fontSize: '10px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '6px' }}>{label}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{item.baslik}</div>
                  <div style={{ fontSize: '13px', color: '#6b6b6b' }}>{item.alt}</div>
                </button>
              );
            })()}
          </div>
        </div>
      )}
    </nav>
  );
}
