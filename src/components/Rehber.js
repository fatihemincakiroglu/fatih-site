import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const REHBERLER = [
  { no: '01', baslik: 'llms.txt', ozet: 'llmstxt.org öneri standardı, adoption verileri, robots ve sitemap ile eşgüdüm; GEO bağlamı.', ikon: '☀', kategori: 'Teknik' },
  { no: '02', baslik: 'SEO ve CRO', ozet: 'Organik trafiği dönüşüm hedefleriyle aynı çizgide düşünme.', ikon: '⊿', kategori: 'Strateji' },
  { no: '03', baslik: 'Konu otoritesi (Topical Authority)', ozet: 'Konu kümelenmesi, derinlik ve uzmanlık sinyalleriyle otorite inşası.', ikon: '≡', kategori: 'Strateji' },
  { no: '04', baslik: 'Answer Engine Optimization (AEO)', ozet: 'Yanıt motorları ve yapılandırılmış içerikle uyumlu optimizasyon yaklaşımı.', ikon: '▣', kategori: 'Strateji' },
  { no: '05', baslik: 'Zero-Click Search', ozet: 'Tıklama olmadan yanıtlanan sorgular ve görünürlük denklemi.', ikon: '◎', kategori: 'Ölçüm & İçerik' },
  { no: '06', baslik: 'Google Search Generative Experience (SGE)', ozet: 'Üretken arama sonuçları ve klasik SERP ile birlikte düşünülmesi gereken sinyaller.', ikon: '★', kategori: 'Strateji' },
  { no: '07', baslik: 'Google Ads Verileri ve SEO İlişkisi', ozet: 'Reklam panelinden çıkan içgörüleri organik keşif ve içerik için kullanma.', ikon: '◉', kategori: 'Ölçüm & İçerik' },
  { no: '08', baslik: 'Google Algoritma Tarihi', ozet: 'Core, Spam ve yapay zekâ güncellemelerinin kronolojik ve süzülebilir özeti.', ikon: '⌚', kategori: 'Teknik' },
  { no: '09', baslik: 'Content Marketing', ozet: 'İçerik stratejisi ve talep yaratma ile SEO hedeflerinin birlikte düşünülmesi.', ikon: '✏', kategori: 'Ölçüm & İçerik' },
  { no: '10', baslik: 'Ölçme ve Takip', ozet: 'KPI\'lar, Search Console ve raporlama ile ilerlemenin izlenmesi.', ikon: '📊', kategori: 'Ölçüm & İçerik' },
  { no: '11', baslik: 'Teknik SEO', ozet: 'Crawl bütçesi, site mimarisi, HTTP ve performansla ilgili teknik temel taşlar.', ikon: '⚙', kategori: 'Teknik' },
  { no: '12', baslik: 'Interaction to Next Paint (INP)', ozet: 'Etkileşim gecikmesi ve Core Web Vitals içinde INP odaklı iyileştirme.', ikon: '↗', kategori: 'Teknik' },
  { no: '13', baslik: 'Mobil SEO', ozet: 'Mobil deneyim, kullanılabilirlik ve arama ile uyumlu sayfa sunumu.', ikon: '📱', kategori: 'Teknik' },
  { no: '14', baslik: 'Uluslararası SEO', ozet: 'Hreflang, çok dilli yapılar ve global arama görünürlüğü stratejisi.', ikon: '🌐', kategori: 'Teknik' },
  { no: '15', baslik: 'On-Page SEO', ozet: 'Başlık, içerik sinyalleri ve sayfa içi optimizasyon odaklı rehber.', ikon: '📄', kategori: 'Strateji' },
  { no: '16', baslik: 'Off Page SEO', ozet: 'Dış güven, itibar ve marka sinyalleriyle desteklenen organik görünürlük.', ikon: '★', kategori: 'Strateji' },
  { no: '17', baslik: 'Keyword Research', ozet: 'Araştırma, arama niyeti ve içerik planına anlamlı bağlantı.', ikon: '🔍', kategori: 'Strateji' },
  { no: '18', baslik: 'SEO 101', ozet: 'SERP yapısı, temel kavramlar ve stratejik okuma için giriş seviyesi çerçeve.', ikon: '☀', kategori: 'Strateji' },
];

const KATEGORİLER = ['Tümü', 'Strateji', 'Teknik', 'Ölçüm & İçerik'];
const SIRALA = ['Tarih', 'A–Z', 'Z–A', 'Popülerlik'];

export default function Rehber() {
  const [aktifKat, setAktifKat] = useState('Tümü');
  const [aktifSirala, setAktifSirala] = useState('Tarih');

  const filtered = aktifKat === 'Tümü' ? REHBERLER : REHBERLER.filter(r => r.kategori === aktifKat);

  return (
    <>
      <Helmet>
        <title>SEO Bilgi Rehberleri | Fatih Emin Çakıroğlu</title>
        <meta name="description" content="SEO, GEO ve dijital pazarlama hakkında kapsamlı rehberler. Teknik SEO'dan içerik stratejisine tüm konular." />
      </Helmet>

      <div style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh', background: 'var(--bg)' }}>

        {/* Header */}
        <div style={{ padding: '48px 32px 32px', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1.5px solid var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>📚</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-body)', fontSize: '22px', fontWeight: 700, color: 'var(--text)' }}>SEO bilgi rehberleri</h1>
              <span style={{ marginLeft: 'auto', fontSize: '14px', color: 'var(--dim2)' }}>{filtered.length} rehber</span>
            </div>

            {/* Sıralama + Filtre */}
            <div style={{ background: '#fff', borderRadius: '10px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border)', marginBottom: '20px' }}>
              {SIRALA.map(s => (
                <button key={s} onClick={() => setAktifSirala(s)} style={{
                  padding: '6px 14px', borderRadius: '6px', border: 'none',
                  background: aktifSirala === s ? 'var(--bg)' : 'transparent',
                  color: aktifSirala === s ? 'var(--text)' : 'var(--dim2)',
                  fontSize: '13px', fontWeight: aktifSirala === s ? 600 : 400,
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}>{s}</button>
              ))}
              <div style={{ marginLeft: 'auto', fontSize: '13px', color: 'var(--dim2)', fontWeight: 600 }}>{filtered.length} rehber</div>
            </div>

            {/* Kategori etiketleri */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
              {KATEGORİLER.filter(k => k !== 'Tümü').map((k, i) => {
                const colors = ['#7c3aed', '#0ea5e9', '#ec4899'];
                return (
                  <button key={k} onClick={() => setAktifKat(aktifKat === k ? 'Tümü' : k)} style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '13px', color: aktifKat === k ? 'var(--text)' : 'var(--dim2)',
                    fontFamily: 'var(--font-body)', fontWeight: aktifKat === k ? 600 : 400,
                    padding: '4px 0',
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors[i], display: 'inline-block' }}></span>
                    {k}
                  </button>
                );
              })}
              <span style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--dim2)' }}>
                Tıklamayla gezin · kartlar arasında ilerle
              </span>
            </div>
          </div>
        </div>

        {/* Kart Grid */}
        <div style={{ padding: '0 32px 96px', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {filtered.map((r, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '14px', padding: '20px',
                border: '1px solid var(--border)', cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--dim2)' }}>{r.no}</span>
                  <span style={{ fontSize: '20px', color: 'var(--dim2)' }}>{r.ikon}</span>
                </div>
                <div style={{ marginBottom: '6px' }}>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px',
                    padding: '2px 8px', borderRadius: '4px',
                    background: r.kategori === 'Teknik' ? '#e0f2fe' : r.kategori === 'Strateji' ? '#f3e8ff' : '#fce7f3',
                    color: r.kategori === 'Teknik' ? '#0369a1' : r.kategori === 'Strateji' ? '#7c3aed' : '#be185d',
                  }}>{r.kategori}</span>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.3 }}>{r.baslik}</h3>
                <p style={{ fontSize: '13px', color: 'var(--dim2)', lineHeight: 1.6 }}>{r.ozet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
