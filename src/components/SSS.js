import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const SSS_DATA = [
  {
    kategori: 'ARAMA & TEKNİK SEO',
    sorular: [
      { soru: 'GEO (Generative Engine Optimization) nedir?', cevap: 'GEO, yapay zekâ destekli arama motorlarında (Google AI Overview, Bing Copilot, Perplexity vb.) içeriklerinizin kaynak olarak gösterilmesini ve öne çıkmasını sağlayan optimizasyon sürecidir. Klasik SEO\'nun bir adım ötesinde, LLM tabanlı sistemlerin içeriğinizi anlayıp referans göstermesine odaklanır.', etiket: 'ARAMA & SEO' },
      { soru: 'AI SEO nedir, klasik SEO\'dan farkı ne?', cevap: 'AI SEO, yapay zekâ algoritmalarının arama sonuçlarını şekillendirdiği yeni nesil bir optimizasyon yaklaşımıdır. Klasik SEO anahtar kelime ve link odaklıyken, AI SEO içeriğin anlamsal derinliğine, E-E-A-T sinyallerine ve yapay zekâ modellerinin içeriği nasıl yorumladığına odaklanır.', etiket: 'ARAMA & SEO' },
      { soru: 'Teknik SEO neden bu kadar önemli?', cevap: 'Teknik SEO, arama motorlarının sitenizi düzgün tarayıp indeksleyebilmesinin temelidir. Sayfa hızı, crawl bütçesi, yapılandırılmış veri ve Core Web Vitals gibi faktörler doğrudan sıralama ve kullanıcı deneyimini etkiler. En iyi içerik bile teknik sorunlar yüzünden görünmez kalabilir.', etiket: 'ARAMA & SEO' },
      { soru: 'Core Web Vitals nedir ve neden önemli?', cevap: 'Core Web Vitals, Google\'ın kullanıcı deneyimini ölçmek için kullandığı üç temel metrikten oluşur: LCP (Largest Contentful Paint — yüklenme hızı), INP (Interaction to Next Paint — etkileşim süresi) ve CLS (Cumulative Layout Shift — görsel kararlılık). Bu metrikler doğrudan sıralamayı etkiler.', etiket: 'ARAMA & SEO' },
    ],
  },
  {
    kategori: 'AI ARAMA',
    sorular: [
      { soru: 'Google AI Overviews (SGE) sıralamaları nasıl etkiliyor?', cevap: 'AI Overviews, belirli sorular için arama sonuçlarının üstünde yapay zekâ tarafından oluşturulan özetler gösterir. Bu özetlerin kaynak gösterdiği siteler tıklama ve marka görünürlüğü açısından avantaj sağlar. E-E-A-T sinyalleri güçlü, yapılandırılmış ve yetkili içerikler bu özet kutularında yer alma şansını artırır.', etiket: 'AI ARAMA' },
      { soru: 'llms.txt dosyası ne işe yarar?', cevap: 'llms.txt, web sitelerinin LLM (büyük dil modeli) tabanlı sistemlere içeriklerini nasıl kullanmalarını istediklerini ilettiği yeni bir standart dosyadır. Robots.txt\'in yapay zekâ için versiyonu olarak düşünebilirsiniz. Hangi içeriklerinizin AI tarafından işleneceğini ve nasıl atıfta bulunulacağını kontrol etmenizi sağlar.', etiket: 'AI ARAMA' },
    ],
  },
  {
    kategori: 'E-TİCARET & PLATFORM',
    sorular: [
      { soru: 'Trendyol SEO ile organik site SEO\'su arasındaki fark nedir?', cevap: 'Trendyol SEO, platformun kendi arama algoritmasını hedefler: ürün başlığı optimizasyonu, satış hacmi, müşteri puanı ve görseller ön plana çıkar. Organik site SEO\'su ise Google\'ı hedefler ve teknik altyapı, backlink profili ve içerik kalitesi belirleyicidir. İkisi birbirini tamamlar ancak farklı stratejiler gerektirir.', etiket: 'E-TİCARET' },
      { soru: 'E-ticaret sitelerinde kategori sayfası SEO\'su neden kritik?', cevap: 'Kategori sayfaları, ürün sayfalarına kıyasla çok daha geniş anahtar kelime havuzunu hedefler ve genellikle en yüksek organik trafiği çeker. Doğru başlık, meta açıklama, içerik blokları ve iç linkleme ile optimize edilmiş kategori sayfaları satışları doğrudan artırır.', etiket: 'E-TİCARET' },
      { soru: 'Shopify mi yoksa WooCommerce mi SEO için daha iyi?', cevap: 'Her iki platform da SEO açısından yeterince güçlüdür. Shopify, teknik SEO konularını otomatik olarak halleder ve hız açısından avantajlıdır. WooCommerce ise daha fazla özelleştirme imkânı sunar. Gerçek fark, platformun kendisinden çok içerik stratejisi, backlink profili ve teknik optimizasyondan kaynaklanır.', etiket: 'E-TİCARET' },
    ],
  },
];

export default function SSS() {
  const [aktifKat, setAktifKat] = useState('Tümü');
  const [acik, setAcik] = useState(null);
  const [arama, setArama] = useState('');

  const katlar = ['Tümü', 'ARAMA & TEKNİK SEO', 'AI ARAMA', 'E-TİCARET & PLATFORM'];

  const tumSorular = SSS_DATA.flatMap(k => k.sorular.map(s => ({ ...s, kategori: k.kategori })));
  const filteredKat = aktifKat === 'Tümü' ? tumSorular : tumSorular.filter(s => s.kategori === aktifKat);
  const filtered = arama ? filteredKat.filter(s => s.soru.toLowerCase().includes(arama.toLowerCase()) || s.cevap.toLowerCase().includes(arama.toLowerCase())) : filteredKat;

  const gruplar = SSS_DATA.filter(k => aktifKat === 'Tümü' || k.kategori === aktifKat);

  return (
    <>
      <Helmet>
        <title>SSS | Fatih Emin Çakıroğlu — Sıkça Sorulan Sorular</title>
        <meta name="description" content="SEO, GEO, e-ticaret ve dijital pazarlama hakkında sıkça sorulan sorular ve net cevaplar." />
      </Helmet>

      <div style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh', background: 'var(--bg)' }}>

        {/* Header */}
        <div style={{ padding: '48px 32px 0', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '20px 24px', border: '1px solid var(--border)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--dim2)', letterSpacing: '1px' }}>SSS</span>
              <span style={{ fontSize: '13px', color: 'var(--dim2)' }}>·</span>
              <span style={{ fontSize: '13px', color: 'var(--dim2)' }}>{tumSorular.length} soru-cevap · GEO, AI araması ve klasik SEO</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
              Sıkça sorulan sorular
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--dim2)', lineHeight: 1.6 }}>
              Kategori seçerek daraltın, bölüm şeridinden atlayın veya arama kutusuyla soru ve yanıt metninde arayın.
            </p>
          </div>

          {/* Filtre + Arama */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '16px 20px', border: '1px solid var(--border)', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
              {katlar.map((k, i) => (
                <button key={k} onClick={() => setAktifKat(k)} style={{
                  padding: '7px 16px', borderRadius: '20px', border: 'none',
                  background: aktifKat === k ? 'var(--orange)' : 'var(--bg)',
                  color: aktifKat === k ? '#fff' : 'var(--dim)',
                  fontSize: '13px', fontWeight: aktifKat === k ? 700 : 400,
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}>{k}</button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg)', borderRadius: '8px', padding: '10px 14px', border: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--dim2)', fontSize: '16px' }}>🔍</span>
              <input
                type="text"
                placeholder='Soru veya yanıt içinde ara… (ör: "canonical", "AI Overview", "SERP")'
                value={arama}
                onChange={e => setArama(e.target.value)}
                style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font-body)' }}
              />
            </div>

            {/* Alt etiketler */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              {['SEO', 'AI', 'E-T'].map((e, i) => (
                <span key={e} style={{
                  padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700,
                  background: i === 0 ? 'var(--orange)' : 'transparent',
                  color: i === 0 ? '#fff' : 'var(--dim2)',
                  border: i === 0 ? 'none' : '1px solid var(--border)',
                  cursor: 'pointer',
                }}>{e}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sorular */}
        <div style={{ padding: '0 32px 96px', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          {arama ? (
            <div>
              <div style={{ fontSize: '13px', color: 'var(--dim2)', marginBottom: '16px' }}>
                {filtered.length} sonuç: "<strong>{arama}</strong>"
              </div>
              {filtered.map((s, i) => (
                <SoruKart key={i} soru={s} acik={acik} setAcik={setAcik} idx={`arama-${i}`} />
              ))}
            </div>
          ) : (
            gruplar.map((grup, gi) => (
              <div key={gi} style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '3px', height: '20px', background: 'var(--orange)', borderRadius: '2px' }}></div>
                  <h2 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.3px' }}>{grup.kategori.charAt(0) + grup.kategori.slice(1).toLowerCase().replace('& tekni̇k', '& teknik').replace('ai arama', 'AI arama').replace('e-ti̇caret', 'E-ticaret')}</h2>
                </div>
                {grup.sorular.map((s, si) => (
                  <SoruKart key={si} soru={s} acik={acik} setAcik={setAcik} idx={`${gi}-${si}`} />
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

function SoruKart({ soru, acik, setAcik, idx }) {
  const isAcik = acik === idx;
  return (
    <div style={{
      background: '#fff', borderRadius: '12px', marginBottom: '10px',
      border: '1px solid var(--border)', overflow: 'hidden',
      transition: 'box-shadow 0.2s',
    }}>
      <button onClick={() => setAcik(isAcik ? null : idx)} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none',
        cursor: 'pointer', textAlign: 'left', gap: '16px',
      }}>
        <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>{soru.soru}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <span style={{ padding: '3px 10px', borderRadius: '4px', background: 'rgba(232,86,10,0.08)', color: 'var(--orange)', fontSize: '11px', fontWeight: 700 }}>{soru.etiket}</span>
          <span style={{ fontSize: '18px', color: 'var(--dim2)', transition: 'transform 0.2s', transform: isAcik ? 'rotate(45deg)' : 'none' }}>+</span>
        </div>
      </button>
      {isAcik && (
        <div style={{ padding: '0 24px 20px', borderTop: '1px solid var(--bg)' }}>
          <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.8, marginTop: '12px' }}>{soru.cevap}</p>
        </div>
      )}
    </div>
  );
}
