import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const POSTS = {
  'eticaret-seo-rehberi-2025': {
    baslik: 'E-Ticaret SEO Rehberi 2025: Rakiplerinizin Önüne Geçin',
    tarih: '15 Ocak 2025', sure: '8 dk', etiket: 'SEO',
    ozet: 'E-ticaret siteleri için SEO, normal web sitelerinden çok daha karmaşık bir yapıya sahiptir.',
    icerik: `E-ticaret siteleri için SEO, normal web sitelerinden çok daha karmaşık bir yapıya sahiptir. Yüzlerce, hatta binlerce ürün sayfasını optimize etmek; hem teknik hem de içerik açısından kapsamlı bir strateji gerektirir.\n\n## Teknik SEO Temelleri\n\nSayfa hızı e-ticaret SEO'sunun temel taşlarından biridir. Google, yavaş yüklenen sayfaları sıralamada geri düşürür. Core Web Vitals skorlarınızı düzenli olarak kontrol edin.\n\nStrüktürel veri (schema markup) ürün sayfalarınızı zengin snippet'larla öne çıkarır. Fiyat, stok durumu ve ürün yorumları arama sonuçlarında doğrudan görünür.\n\n## İçerik Stratejisi\n\nÜrün açıklamalarını üreticiden kopyalamak yerine orijinal içerik üretin. Anahtar kelime yoğunluğundan çok kullanıcı niyetine odaklanın.\n\nKategori sayfaları çoğu zaman göz ardı edilir ancak en yüksek trafiği bu sayfalar çekebilir. Her kategori için hedef anahtar kelimelerinizi belirleyin ve içeriği zenginleştirin.\n\n## Backlink Stratejisi\n\nSektör blogları ve medya sitelerinden editoryal linkler alın. Rakip analizi yaparak link boşluklarını tespit edin ve bu fırsatları değerlendirin.`
  },
  'google-core-update-2025': {
    baslik: 'Google Core Update 2025: Sitenizi Nasıl Korursunuz?',
    tarih: '3 Şubat 2025', sure: '6 dk', etiket: 'Google',
    ozet: 'Google\'ın 2025 yılı Core Update\'i E-E-A-T sinyallerine daha fazla ağırlık veriyor.',
    icerik: `Google'ın 2025 yılı Core Update'i, E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) sinyallerine daha da fazla ağırlık veriyor.\n\n## Neler Değişti?\n\nYapay zekayla üretilen içeriklerin ayrıştırılması daha da güçlendi. Google, gerçek uzman görüşleri ve birinci elden deneyimleri ön plana çıkarıyor.\n\nSayfa deneyimi sinyalleri de güncellendi. Yavaş yüklenen, mobil uyumsuz veya çok fazla reklam içeren sayfalar sıralamada geriledi.\n\n## Ne Yapmalısınız?\n\nBiyografi sayfalarınızı güncelleyin, uzman kimliğinizi öne çıkarın. Referanslar ve sertifikalar güven inşa eder.\n\nİçerik kalitesini artırın: derinlemesine araştırma, orijinal veri ve gerçek deneyim paylaşımı sıralamaları olumlu etkiler.`
  },
  'trendyol-seo-ipuclari': {
    baslik: 'Trendyol\'da Üst Sıralara Çıkmanın 10 Yolu',
    tarih: '20 Şubat 2025', sure: '5 dk', etiket: 'E-Ticaret',
    ozet: 'Trendyol arama algoritmasını anlayın ve ürünlerinizi üst sıralara taşıyın.',
    icerik: `Trendyol, Türkiye'nin en büyük e-ticaret platformu olarak güçlü bir arama algoritmasına sahiptir. Bu algoritmayı anlamak satışlarınızı doğrudan etkiler.\n\n## Ürün Başlığı Optimizasyonu\n\nBaşlıkta marka adı, ürün adı ve en önemli özellikleri sıraya koyun. Gereksiz dolgu kelimelerden kaçının. Müşterilerin arama yaptığı exact match ifadeleri başlığa ekleyin.\n\n## Görseller ve İçerik\n\nYüksek çözünürlüklü, beyaz arka planlı ürün görselleri kullanın. Detay görselleri ve ölçü bilgileri dönüşüm oranını artırır.\n\n## Satış ve Yorum Metrikleri\n\nTrendyol algoritması satış adetini ve müşteri yorumlarını sıralamada önemli faktörler olarak kullanır. İlk satışları tetiklemek için kampanya fırsatlarını değerlendirin.`
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS[slug];

  if (!post) return (
    <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh', background: 'var(--bg)' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', marginBottom: '16px', color: 'var(--text)' }}>Yazı bulunamadı</h2>
      <Link to="/blog" style={{ color: 'var(--orange)', fontWeight: 600 }}>← Blog'a dön</Link>
    </div>
  );

  const paragraphs = post.icerik.split('\n\n');

  return (
    <>
      <Helmet>
        <title>{post.baslik} | Fatih Emin Çakıroğlu</title>
        <meta name="description" content={post.ozet} />
      </Helmet>

      <div style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh', background: 'var(--bg)' }}>

        {/* Hero */}
        <div style={{ background: '#1a1612', borderBottom: '1px solid #2a2520', padding: '48px 32px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <Link to="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: '#6b6b6b', fontSize: '13px', marginBottom: '24px',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b6b6b'}
            >← Blog'a dön</Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ padding: '4px 12px', borderRadius: '4px', background: 'rgba(232,86,10,0.15)', color: 'var(--orange)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px' }}>{post.etiket}</span>
              <span style={{ fontSize: '12px', color: '#4a4540' }}>· {post.tarih} · {post.sure} okuma</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '16px',
            }}>{post.baslik}</h1>

            <p style={{ color: '#6b6b6b', fontSize: '16px', lineHeight: 1.6, borderLeft: '3px solid var(--orange)', paddingLeft: '16px' }}>{post.ozet}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #2a2520' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '14px' }}>F</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Fatih Emin Çakıroğlu</div>
                <div style={{ fontSize: '12px', color: '#6b6b6b' }}>SEO & Dijital Pazarlama Uzmanı</div>
              </div>
            </div>
          </div>
        </div>

        {/* İçerik */}
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 32px 96px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', border: '1px solid var(--border)' }}>
            {paragraphs.map((p, i) => {
              if (p.startsWith('## ')) return (
                <h2 key={i} style={{
                  fontFamily: 'var(--font-display)', fontSize: '24px',
                  fontWeight: 800, margin: '36px 0 14px', color: 'var(--text)',
                  display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                  <span style={{ width: '4px', height: '24px', background: 'var(--orange)', borderRadius: '2px', flexShrink: 0 }}></span>
                  {p.slice(3)}
                </h2>
              );
              return <p key={i} style={{ color: 'var(--dim)', fontSize: '16px', lineHeight: 1.85, marginBottom: '20px' }}>{p}</p>;
            })}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '32px', padding: '40px', background: '#1a1612',
            borderRadius: '16px', border: '1px solid #2a2520', textAlign: 'center',
          }}>
            <div style={{ fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>— ÜCRETSİZ DANIŞMA</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#fff', marginBottom: '10px' }}>
              SEO danışmanlığı almak ister misiniz?
            </h3>
            <p style={{ color: '#6b6b6b', marginBottom: '24px', fontSize: '15px', lineHeight: 1.6 }}>
              Sitenizi analiz edip size özel strateji sunuyorum. İlk görüşme tamamen ücretsiz.
            </p>
            <Link to="/#iletisim">
              <button style={{
                padding: '13px 28px', borderRadius: '8px',
                background: 'var(--orange)', border: 'none', color: '#fff',
                fontWeight: 700, cursor: 'pointer', fontSize: '15px',
                fontFamily: 'var(--font-body)', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#ff6b1a'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
              >
                Ücretsiz Danışma Al →
              </button>
            </Link>
          </div>

          {/* Önceki / Sonraki */}
          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--dim)', fontSize: '14px', fontWeight: 600, transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--orange)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              ← Tüm yazılara dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
