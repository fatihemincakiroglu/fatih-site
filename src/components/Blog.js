import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const POSTS = [
  { slug: 'eticaret-seo-rehberi-2025', baslik: 'E-Ticaret SEO Rehberi 2025: Rakiplerinizin Önüne Geçin', ozet: 'E-ticaret sitelerinin Google\'da üst sıralara çıkması için uygulamanız gereken güncel SEO stratejileri ve teknik ipuçları.', tarih: '15 Ocak 2025', sure: '8 dk', etiket: 'SEO', no: '01' },
  { slug: 'google-core-update-2025', baslik: 'Google Core Update 2025: Sitenizi Nasıl Korursunuz?', ozet: 'Google\'ın son algoritma güncellemesi ne anlama geliyor ve sitenizi nasıl hazırlarsınız? E-E-A-T sinyallerinin önemi.', tarih: '3 Şubat 2025', sure: '6 dk', etiket: 'Google', no: '02' },
  { slug: 'trendyol-seo-ipuclari', baslik: 'Trendyol\'da Üst Sıralara Çıkmanın 10 Yolu', ozet: 'Trendyol arama algoritmasını anlayın ve ürünlerinizi üst sıralara taşıyın. Pazar yeri SEO\'sunun püf noktaları.', tarih: '20 Şubat 2025', sure: '5 dk', etiket: 'E-Ticaret', no: '03' },
  { slug: 'yerel-seo-rehberi', baslik: 'Yerel SEO Rehberi: Google Haritalar\'da Öne Çıkın', ozet: 'Yerel işletmeler için Google Haritalar ve yerel arama optimizasyonu stratejileri. Google Business Profile optimizasyonu.', tarih: '8 Mart 2025', sure: '7 dk', etiket: 'Yerel SEO', no: '04' },
  { slug: 'google-ads-optimizasyon', baslik: 'Google Ads Bütçenizi Optimize Etmenin 7 Yolu', ozet: 'Reklam bütçenizi en verimli şekilde kullanmak için bilmeniz gereken ipuçları. ROAS ve CPA optimizasyonu.', tarih: '22 Mart 2025', sure: '6 dk', etiket: 'Google Ads', no: '05' },
  { slug: 'icerik-stratejisi-2025', baslik: 'İçerik Stratejisi 2025: AI Çağında SEO', ozet: 'Yapay zeka çağında içerik üretimi ve SEO uyumlu strateji nasıl oluşturulur? Topical authority ve içerik kümeleme.', tarih: '5 Nisan 2025', sure: '9 dk', etiket: 'İçerik', no: '06' },
];

const ETİKETLER = ['Tümü', 'SEO', 'Google', 'E-Ticaret', 'Yerel SEO', 'Google Ads', 'İçerik'];

export default function Blog() {
  const [aktif, setAktif] = useState('Tümü');
  const filtered = aktif === 'Tümü' ? POSTS : POSTS.filter(p => p.etiket === aktif);
  const [featured, ...rest] = filtered;

  return (
    <>
      <Helmet>
        <title>Blog | Fatih Emin Çakıroğlu — SEO & Dijital Pazarlama</title>
        <meta name="description" content="SEO, e-ticaret ve dijital pazarlama hakkında güncel yazılar ve stratejiler." />
      </Helmet>

      <div style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh', background: 'var(--bg)' }}>

        {/* Header */}
        <div style={{ background: '#1a1612', borderBottom: '1px solid #2a2520', padding: '48px 32px 40px' }}>
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '4px', height: '24px', background: 'var(--orange)', borderRadius: '2px' }}></div>
              <span style={{ fontSize: '11px', color: '#6b6b6b', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>BLOG</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800, color: '#fff', lineHeight: 1.15,
              marginBottom: '12px',
            }}>
              SEO & Dijital Pazarlama<br />
              <span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Yazıları</span>
            </h1>
            <p style={{ color: '#6b6b6b', fontSize: '15px', maxWidth: '520px' }}>
              Güncel stratejiler, algoritma analizleri ve sektör içgörüleri.
              <span style={{ color: 'var(--orange)', fontWeight: 600 }}> {POSTS.length} yazı</span>
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '40px 32px 96px' }}>

          {/* Filtre */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {ETİKETLER.map(e => (
              <button key={e} onClick={() => setAktif(e)} style={{
                padding: '7px 16px', borderRadius: '20px', border: 'none',
                background: aktif === e ? 'var(--orange)' : '#fff',
                color: aktif === e ? '#fff' : 'var(--dim)',
                fontSize: '13px', fontWeight: aktif === e ? 700 : 400,
                cursor: 'pointer', fontFamily: 'var(--font-body)',
                transition: 'all 0.2s',
                boxShadow: aktif === e ? '0 2px 8px rgba(232,86,10,0.3)' : 'none',
                border: aktif === e ? 'none' : '1px solid var(--border)',
              }}>
                {e}
              </button>
            ))}
          </div>

          {featured && (
            <Link to={`/blog/${featured.slug}`} style={{ display: 'block', marginBottom: '24px', textDecoration: 'none' }}>
              <article style={{
                background: '#fff', borderRadius: '16px', overflow: 'hidden',
                border: '1px solid var(--border)', display: 'grid',
                gridTemplateColumns: '1fr 1fr', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Sol — görsel alan */}
                <div style={{
                  background: 'linear-gradient(135deg, #2a1a0a 0%, #1a0a00 100%)',
                  padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '280px',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(232,86,10,0.1)' }}></div>
                  <div style={{ position: 'absolute', top: '20px', right: '40px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(232,86,10,0.06)' }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>ÖNE ÇIKAN · {featured.etiket}</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', fontWeight: 800, lineHeight: 1.3, marginBottom: '10px' }}>{featured.baslik}</h2>
                  <div style={{ fontSize: '12px', color: '#6b6b6b' }}>{featured.sure} okuma · {featured.tarih}</div>
                </div>
                {/* Sağ — içerik */}
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '4px', background: 'rgba(232,86,10,0.08)', color: 'var(--orange)', fontSize: '11px', fontWeight: 700, marginBottom: '16px' }}>{featured.etiket}</span>
                    <p style={{ color: 'var(--dim)', fontSize: '15px', lineHeight: 1.7 }}>{featured.ozet}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '13px', color: 'var(--dim2)' }}>Fatih Emin Ç.</span>
                    <span style={{ color: 'var(--orange)', fontSize: '14px', fontWeight: 600 }}>Makaleyi oku →</span>
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Liste — tablo formatı seoart gibi */}
          <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 120px 80px 64px', gap: '0', padding: '12px 24px', borderBottom: '2px solid var(--orange)' }}>
              {['#', 'BAŞLIK', 'ETİKET', 'SÜRE', ''].map((h, i) => (
                <div key={i} style={{ fontSize: '11px', color: 'var(--dim2)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{h}</div>
              ))}
            </div>
            {rest.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '48px 1fr 120px 80px 64px',
                  padding: '18px 24px', borderBottom: '1px solid #f5f0e8',
                  transition: 'background 0.15s', alignItems: 'center',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#faf8f5'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}
                >
                  <div style={{ fontSize: '14px', color: '#d0cbc0', fontWeight: 700 }}>{post.no}</div>
                  <div style={{ fontSize: '15px', color: 'var(--text)', fontWeight: 500, paddingRight: '16px' }}>{post.baslik}</div>
                  <div>
                    <span style={{ padding: '3px 10px', borderRadius: '4px', background: 'rgba(232,86,10,0.08)', color: 'var(--orange)', fontSize: '11px', fontWeight: 700 }}>{post.etiket}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--dim2)' }}>{post.sure}</div>
                  <div style={{ fontSize: '13px', color: 'var(--orange)', fontWeight: 600 }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
