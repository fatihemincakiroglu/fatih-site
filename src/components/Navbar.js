import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MEGA_MENU = {
  Hizmetler: {
    kategoriler: [
      {
        baslik: 'KATEGORİLER',
        liste: [
          { label: 'Hizmetler', count: 6 },
          { label: 'Kurumsal', count: 4 },
          { label: 'Kaynaklar', count: 6 },
          { label: 'Rehber', count: 16 },
          { label: 'Blog', count: 10 },
        ],
        kisayollar: [
          { label: 'Ücretsiz AI Audit', href: '/randevu' },
          { label: 'Fiyatlandırma', href: '/randevu' },
          { label: 'İletişim', href: '/randevu' },
        ],
      },
    ],
    icerik: [
      { ikon: '🔍', baslik: 'SEO & Arama', alt: 'Arama görünürlüğü; teknik ve içerik disiplinleriyle uçtan uca.', href: '/#hizmetler' },
      { ikon: '🤖', baslik: 'AI & GEO', alt: 'ChatGPT, Perplexity ve benzeri yanıt motorlarında görünürlük.', href: '/#hizmetler' },
      { ikon: '📄', baslik: 'Content Hizmetleri', alt: 'Arama niyetine uygun içerik stratejisi ve üretimi.', href: '/#hizmetler' },
      { ikon: '🔗', baslik: 'Backlink & Dijital PR', alt: 'Haber değeri taşıyan yüksek otoriteli medya kazanımları.', href: '/#hizmetler' },
      { ikon: '📈', baslik: 'Performans & Growth', alt: 'Trafik, dönüşüm ve büyüme hedeflerini birlikte optimize ederiz.', href: '/#hizmetler' },
    ],
    one_cikan: { baslik: 'Ücretsiz AI Audit', alt: 'Yapay zekâ destekli hızlı sağlık taraması ve ilk aksiyonlar.', href: '/randevu' },
  },
  Kurumsal: {
    icerik: [
      { ikon: '📋', baslik: 'Hakkımda', alt: 'Kuruluş hikâyesi, yaklaşım ve uzmanlık.', href: '/#hakkimda' },
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
      { ikon: '📄', baslik: 'llms.txt', alt: 'llmstxt.org öneri standardı, adoption verileri.', href: '/rehber' },
      { ikon: '☀', baslik: 'SEO ve CRO', alt: 'Organik trafiği dönüşüm hedefleriyle aynı çizgide.', href: '/rehber' },
      { ikon: '🔍', baslik: 'Zero-Click Search', alt: 'Tıklama olmadan yanıtlanan sorgular.', href: '/rehber' },
      { ikon: '📋', baslik: 'Answer Engine Optimization', alt: 'Yapılandırılmış içerikle uyumlu optimizasyon.', href: '/rehber' },
      { ikon: '⚙', baslik: 'Teknik SEO', alt: 'Crawl bütçesi, site mimarisi, HTTP.', href: '/rehber' },
      { ikon: '☀', baslik: 'Google Search Generative Experience', alt: 'Üretken arama sonuçları ve SERP.', href: '/rehber' },
      { ikon: '📱', baslik: 'Mobil SEO', alt: 'Mobil deneyim ve uyumlu sayfa sunumu.', href: '/rehber' },
      { ikon: '★', baslik: 'Off Page SEO', alt: 'Dış güven, itibar ve marka sinyalleri.', href: '/rehber' },
      { ikon: '📄', baslik: 'On-Page SEO', alt: 'Başlık, içerik sinyalleri ve sayfa içi.', href: '/rehber' },
      { ikon: '🔍', baslik: 'Keyword Research', alt: 'Araştırma ve arama niyeti bağlantısı.', href: '/rehber' },
      { ikon: '☀', baslik: 'SEO 101', alt: 'SERP yapısı ve temel kavramlar.', href: '/rehber' },
      { ikon: '📋', baslik: 'Başlangıç Kılavuzu', alt: 'SEO\'ya giriş için kapsamlı başlangıç.', href: '/rehber' },
    ],
    devami: { baslik: 'REHBER', alt: 'Tüm SEO rehberlerini tek yerde görmek için rehber ana sayfasına geç.', href: '/rehber' },
  },
  Blog: {
    icerik: [
      { ikon: '📋', baslik: '2026\'da Öne Çıkan 10 SEO Trendi (Verilerle)', alt: 'Query fan-out\'tan marka inşasına, yapay zeka aramadan içerik müh...', href: '/blog' },
      { ikon: '🔍', baslik: 'Yapay Zeka Ajan Nedir? Sade Bir Dille Kapsamlı Rehber', alt: 'Yapay zeka ajan kavramını, chatbot ve büyük dil modellerinden fark...', href: '/blog' },
      { ikon: '📄', baslik: 'Yapay Zeka ile SEO\'yu Otomatikleştirmenin 11 Yolu', alt: 'Anahtar kelime araştırmasından içerik çürümesi tespitine, rakip bağ...', href: '/blog' },
      { ikon: '📋', baslik: '2026\'da Pazarlamayı Yeniden Şekillendiren 9 Trend', alt: 'GEO\'dan ajan pazarlamaya, sıfır tıklama aramadan içerik mühendisli...', href: '/blog' },
      { ikon: '🔍', baslik: 'Ajanlı Pazarlama: Neden Bu Kadar Önemli ve Nasıl Başlanır?', alt: 'Yapay zeka ajanlarının pazarlama iş akışlarını nasıl dönüştürdüğünü...', href: '/blog' },
    ],
    devami: { baslik: 'SEO & GEO BLOG', alt: 'Devamı için tüm SEO ve GEO blog içeriklerini keşfet.', href: '/blog' },
  },
};

export default function Navbar({ scrolled }) {
  const [acikMenu, setAcikMenu] = useState(null);
  const [aktifKat, setAktifKat] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setAcikMenu(null);
        setAktifKat(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const scrollTo = (id) => {
    setAcikMenu(null);
    if (location.pathname !== '/') { window.location.href = '/#' + id; return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = (href) => {
    setAcikMenu(null);
    setAktifKat(null);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') { window.location.href = href; return; }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menu = MEGA_MENU[acikMenu];

  return (
    <nav ref={navRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: '#1a1612',
      height: 'var(--nav-h)',
      display: 'flex', alignItems: 'center',
      padding: '0 32px',
      borderBottom: '1px solid #2a2520',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', gap: '0' }}>

        {/* Logo */}
        <Link to="/" onClick={() => setAcikMenu(null)} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginRight: '32px' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--orange)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '15px' }}>F</div>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '16px', fontFamily: 'var(--font-body)' }}>
            fatih<span style={{ color: 'var(--orange)' }}>emin</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flex: 1 }}>
          {Object.keys(MEGA_MENU).map(key => (
            <button key={key}
              onClick={() => { setAcikMenu(acikMenu === key ? null : key); setAktifKat(null); }}
              style={{
                padding: '7px 12px', borderRadius: '8px', border: 'none',
                background: acikMenu === key ? '#2a2520' : 'transparent',
                color: acikMenu === key ? '#fff' : '#9a9a9a',
                cursor: 'pointer', fontSize: '14px', fontFamily: 'var(--font-body)',
                display: 'flex', alignItems: 'center', gap: '4px', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (acikMenu !== key) { e.currentTarget.style.color = '#fff'; } }}
              onMouseLeave={e => { if (acikMenu !== key) { e.currentTarget.style.color = '#9a9a9a'; } }}
            >
              {key}
              <span style={{ fontSize: '10px', transition: 'transform 0.2s', transform: acikMenu === key ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▾</span>
            </button>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ fontSize: '11px', color: '#4a4540', fontFamily: 'monospace', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
            We do the art of GEO
          </div>
          <Link to="/randevu" onClick={() => setAcikMenu(null)} style={{
            padding: '9px 18px', borderRadius: '8px',
            background: 'var(--orange)', color: '#fff',
            fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-body)',
            display: 'flex', alignItems: 'center', gap: '6px', transition: 'background 0.2s',
            textDecoration: 'none',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#ff6b1a'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
          >Randevu 📅</Link>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {acikMenu && menu && (
        <div style={{
          position: 'absolute', top: 'var(--nav-h)', left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(1100px, calc(100vw - 64px))',
          background: '#1c1914', borderRadius: '0 0 16px 16px',
          border: '1px solid #2a2520', borderTop: 'none',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          display: 'grid',
          gridTemplateColumns: acikMenu === 'Rehber' ? '220px 1fr' : menu.kategoriler ? '220px 1fr' : '1fr',
          overflow: 'hidden',
        }}>
          {/* Sol sidebar (Hizmetler ve Rehber için) */}
          {(menu.kategoriler || acikMenu === 'Rehber') && (
            <div style={{ background: '#151210', borderRight: '1px solid #2a2520', padding: '24px 0' }}>
              {menu.kategoriler && menu.kategoriler[0] && (
                <>
                  <div style={{ padding: '0 20px', fontSize: '10px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>KATEGORİLER</div>
                  {menu.kategoriler[0].liste.map((item, i) => (
                    <button key={i}
                      onClick={() => setAktifKat(aktifKat === item.label ? null : item.label)}
                      style={{
                        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '10px 20px', background: aktifKat === item.label ? '#1c1914' : 'transparent',
                        border: 'none', borderLeft: aktifKat === item.label ? '2px solid var(--orange)' : '2px solid transparent',
                        color: aktifKat === item.label ? '#fff' : '#9a9a9a',
                        fontSize: '14px', fontWeight: aktifKat === item.label ? 600 : 400,
                        cursor: 'pointer', fontFamily: 'var(--font-body)',
                        textAlign: 'left', transition: 'all 0.15s',
                      }}
                    >
                      <span>{item.label}</span>
                      <span style={{ fontSize: '11px', color: '#4a4540' }}>{item.count} ›</span>
                    </button>
                  ))}
                  <div style={{ borderTop: '1px solid #2a2520', margin: '12px 0', padding: '12px 20px 0' }}>
                    <div style={{ fontSize: '10px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>KISAYOLLAR</div>
                    {menu.kategoriler[0].kisayollar.map((k, i) => (
                      <Link key={i} to={k.href} onClick={() => setAcikMenu(null)} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', color: '#9a9a9a', fontSize: '13px', textDecoration: 'none' }}>
                        {k.label} <span>›</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
              {acikMenu === 'Rehber' && (
                <>
                  <div style={{ padding: '0 20px', fontSize: '10px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>KATEGORİLER</div>
                  {['Hizmetler', 'Kurumsal', 'Kaynaklar', 'Rehber', 'Blog'].map((item, i) => (
                    <button key={i} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', background: item === 'Rehber' ? '#1c1914' : 'transparent', border: 'none', borderLeft: item === 'Rehber' ? '2px solid var(--orange)' : '2px solid transparent', color: item === 'Rehber' ? '#fff' : '#9a9a9a', fontSize: '14px', fontWeight: item === 'Rehber' ? 600 : 400, cursor: 'pointer', fontFamily: 'var(--font-body)', textAlign: 'left' }}>
                      <span>{item}</span>
                      <span style={{ fontSize: '11px', color: '#4a4540' }}>{[6, 4, 6, 16, 10][i]} ›</span>
                    </button>
                  ))}
                </>
              )}
            </div>
          )}

          {/* Sağ içerik */}
          <div style={{ padding: '24px 28px' }}>
            {/* İçerik grid */}
            <div style={{ display: 'grid', gridTemplateColumns: acikMenu === 'Rehber' ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)', gap: '4px', marginBottom: menu.one_cikan || menu.devami || menu.araclar ? '16px' : '0' }}>
              {(menu.icerik || []).map((item, i) => (
                <Link key={i} to={item.href.startsWith('/#') ? '/' : item.href}
                  onClick={() => { navigate(item.href); }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px', borderRadius: '8px', textDecoration: 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#231f1a'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#231f1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{item.ikon}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>{item.baslik}</div>
                    <div style={{ fontSize: '12px', color: '#6b6b6b', lineHeight: 1.4 }}>{item.alt}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Araçlar (Kaynaklar için) */}
            {menu.araclar && (
              <div style={{ borderTop: '1px solid #2a2520', paddingTop: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '10px', color: '#4a4540', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>TOOL</div>
                {menu.araclar.map((a, i) => (
                  <Link key={i} to={a.href} onClick={() => setAcikMenu(null)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', textDecoration: 'none', transition: 'background 0.15s', marginBottom: '4px' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#231f1a'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#231f1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>{a.ikon}</div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginRight: '6px' }}>{a.baslik}</span>
                      <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(232,86,10,0.15)', color: 'var(--orange)', fontWeight: 700 }}>{a.badge}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b6b6b' }}>{a.alt}</div>
                  </Link>
                ))}
              </div>
            )}

            {/* Öne çıkan / Devam */}
            {(menu.one_cikan || menu.devami) && (() => {
              const item = menu.one_cikan || menu.devami;
              const label = menu.one_cikan ? 'ÖNE ÇIKAN' : 'DEVAMI';
              return (
                <Link to={item.href} onClick={() => setAcikMenu(null)} style={{ display: 'block', padding: '16px 20px', borderRadius: '10px', background: 'rgba(232,86,10,0.06)', border: '1px solid rgba(232,86,10,0.15)', textDecoration: 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,86,10,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(232,86,10,0.06)'}
                >
                  <div style={{ fontSize: '10px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '6px' }}>{label}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{item.baslik}</div>
                  <div style={{ fontSize: '13px', color: '#6b6b6b' }}>{item.alt}</div>
                </Link>
              );
            })()}
          </div>
        </div>
      )}
    </nav>
  );
}
