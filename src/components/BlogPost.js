import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const POSTS = {
  'eticaret-seo-rehberi-2025': {
    baslik: 'E-Ticaret SEO Rehberi 2025: Rakiplerinizin Önüne Geçin',
    tarih: '15 Ocak 2025', sure: '8 dk', etiket: 'E-Ticaret',
    ozet: 'E-ticaret sitelerinin Google\'da üst sıralara çıkması için kapsamlı teknik ve içerik stratejileri.',
    bolumler: [
      {
        baslik: 'Teknik SEO Altyapısı',
        paragraflar: [
          'E-ticaret sitelerinin teknik SEO altyapısı, kategorik URL yapısından başlar. `/category/sub-category/product-name` formatı, hem Googlebot\'un siteyi anlamasını kolaylaştırır hem de kullanıcıların navigasyonunu destekler. Özellikle yüzlerce veya binlerce ürüne sahip büyük kataloglarda URL kanonikleştirme kritik önem taşır; renk, beden veya filtreleme parametrelerinden oluşan duplicate URL\'leri canonical tag ile kontrol altına almak, crawl bütçesinin verimli kullanılmasını sağlar.',
          'Sayfa hızı e-ticaret SEO\'sunun temel metriklerinden biridir. Core Web Vitals kapsamındaki LCP (Largest Contentful Paint) değerinin 2,5 saniyenin altında tutulması için ürün görsellerinin WebP formatına dönüştürülmesi, lazy loading implementasyonu ve CDN kullanımı zorunlu hale gelmiştir. Ayrıca render-blocking JavaScript ve CSS kaynaklarının azaltılması, özellikle mobil kullanıcılar için LCP skorunu doğrudan etkiler.',
        ]
      },
      {
        baslik: 'Ürün Sayfası Optimizasyonu',
        paragraflar: [
          'Ürün sayfaları, e-ticaret SEO\'sunun en kritik bileşenidir. Üretici açıklamalarını kopyalamak yerine orijinal, kullanıcı niyetine uygun içerik üretmek şarttır. Başlık etiketinin `{Ürün Adı} - {Ana Özellik} | {Marka}` formatında yapılandırılması, hem tıklama oranını (CTR) artırır hem de hedef anahtar kelimelerle uyumu güçlendirir. Ürün açıklamasında LSI (Latent Semantic Indexing) anahtar kelimelerin doğal biçimde kullanılması, semantik SEO açısından önem taşır.',
          'Product schema markup, ürün sayfalarına zengin sonuç (rich result) özelliği kazandırır. JSON-LD formatında yazılan schema; fiyat, stok durumu, ürün değerlendirmesi ve marka bilgisini yapılandırılmış veri olarak Googlebot\'a iletir. Bu durum, arama sonuçlarında yıldız puanı, fiyat ve stok bilgisinin doğrudan görünmesini sağlayarak CTR\'yi %15-30 oranında artırabilir.',
        ]
      },
      {
        baslik: 'Kategori Sayfası Mimarisi',
        paragraflar: [
          'Kategori sayfaları, ürün sayfalarına kıyasla çok daha geniş anahtar kelime havuzunu hedefleyebildiğinden e-ticaret sitelerinin organik trafiğinin büyük bölümünü oluşturur. Her kategori sayfasının net bir hedef anahtar kelimesi olmalı ve H1 etiketi bu kelimeyi içermelidir. Sayfa üst kısmına eklenen 100-200 kelimelik kategori açıklaması, hem kullanıcılara bağlam sunar hem de arama motorlarına semantik sinyal iletir.',
          'Faceted navigation (filtreli navigasyon) e-ticaret sitelerinde ciddi crawl bütçesi sorunlarına yol açabilir. Filtre kombinasyonlarından oluşan URL\'lerin `noindex` direktifi veya canonical tag ile yönetilmesi, Googlebot\'un asıl kategori sayfasına odaklanmasını sağlar. Google Search Console\'daki kapsam raporunu düzenli inceleyerek "discovered but not indexed" olarak kalan sayfaları tespit etmek, bu sorunu erken aşamada çözmenize yardımcı olur.',
        ]
      },
      {
        baslik: 'Backlink Stratejisi',
        paragraflar: [
          'E-ticaret siteleri için backlink inşasında en etkili yöntemlerden biri, ürün kategorileriyle ilgili rehber ve karşılaştırma içerikleri oluşturmaktır. "En İyi X Ürünleri" veya "X Nasıl Seçilir" formatındaki içerikler, doğal backlink çekme potansiyeli taşır ve hedef anahtar kelimeler için otorite sayfası işlevi görür. Bu içeriklere eklenen iç linkler, bağlantısal değerin (link equity) kategori ve ürün sayfalarına aktarılmasını sağlar.',
          'Dijital PR kampanyaları, e-ticaret SEO\'sunda link inşasının en ölçeklenebilir yöntemidir. Sektörel veriler içeren araştırmalar, anketler veya orijinal çalışmalar medya kuruluşlarının dikkatini çeker ve editoryal nitelikte yüksek DA (Domain Authority) bağlantılar kazandırır. Bu tür içerikler için "newsjacking" tekniği; yani güncel haberlere sektörel yorum katmak da hızlı backlink kazanımı için etkili bir yaklaşımdır.',
        ]
      },
      {
        baslik: 'Dönüşüm ve SEO Entegrasyonu',
        paragraflar: [
          'CRO (Dönüşüm Oranı Optimizasyonu) ile SEO, birbirini tamamlayan iki disiplindir. Organik trafik çeken ancak yüksek hemen çıkma oranına (bounce rate) sahip sayfalar, Google\'a kötü kullanıcı deneyimi sinyali gönderir. Isı haritaları (heatmap) ve oturum kayıtları ile kullanıcı davranışını analiz etmek, hem dönüşümü artıracak hem de SEO performansını iyileştirecek içerik ve UX değişikliklerini belirlemenizi sağlar.',
          'Sepete ekleme oranı, ortalama oturum süresi ve sayfa başına görüntüleme gibi davranışsal metrikler, dolaylı olarak arama sıralamalarını etkiler. Bu nedenle e-ticaret SEO stratejisi, yalnızca teknik optimizasyonla sınırlı kalmamalı; kullanıcı deneyimi, sayfa tasarımı ve içerik kalitesini de kapsamlı biçimde ele almalıdır.',
        ]
      },
      {
        baslik: 'Ölçüm ve Raporlama',
        paragraflar: [
          'E-ticaret SEO performansını doğru ölçmek için Google Analytics 4\'te organik trafikten kaynaklanan işlemleri (transactions) ve geliri ayrı ayrı raporlamak gerekir. GA4\'teki "Acquisition > Traffic acquisition" raporu, organik kanalın brüt gelire katkısını net biçimde ortaya koyar. Buna ek olarak, Search Console\'daki "Search results" raporu; hangi sorguların en fazla tıklama getirdiğini ve hangi sayfaların izlenim/tıklama oranı iyileştirmesine ihtiyaç duyduğunu gösterir.',
          'Anahtar kelime sıralaması takibinde Ahrefs veya SEMrush gibi araçların haftalık raporu, özellikle rakip domain karşılaştırmasında değer taşır. Belirli bir ürün kategorisi için rakiplerin kazandığı veya kaybettiği sıralamalar, içerik ve bağlantı stratejisine yönelik taktik kararları destekler. Aylık SEO raporlarında trafik, sıralama ve dönüşüm verilerinin bir arada sunulması, yatırımın geri dönüşünü (ROI) somut olarak ortaya koyar.',
        ]
      },
    ]
  },
  'teknik-seo-denetim-rehberi': {
    baslik: 'Teknik SEO Denetim Rehberi: Adım Adım Site Audit',
    tarih: '10 Şubat 2025', sure: '12 dk', etiket: 'Teknik SEO',
    ozet: 'Crawl bütçesi, indeksleme sorunları, hız optimizasyonu ile kapsamlı teknik SEO denetimi.',
    bolumler: [
      {
        baslik: 'Crawl ve İndeksleme Analizi',
        paragraflar: [
          'Teknik SEO denetiminin ilk adımı, Googlebot\'un siteyi nasıl taradığını anlamaktır. Screaming Frog SEO Spider veya Sitebulb gibi araçlarla gerçekleştirilen crawl simülasyonu; 3xx yönlendirmeler, 4xx hata sayfaları ve 5xx sunucu hataları gibi kritik sorunları tek bir raporla ortaya çıkarır. Özellikle redirect zincirleri (A→B→C), hem crawl bütçesini tüketir hem de aktarılan link değerini dilüe eder.',
          'Google Search Console\'daki "Pages" raporunda "Not indexed" sekmesi, Googlebot\'un keşfedip indekslemediği sayfaları ayrıştırır. "Crawled but not indexed" ve "Discovered but not indexed" durumları farklı nedenlere işaret eder: ilki düşük kalite veya içerik sorunundan, ikincisi crawl bütçesi yetersizliğinden kaynaklanabilir. Bu iki kategoriyi birbirinden ayırt etmek, doğru çözüm stratejisinin belirlenmesi açısından kritiktir.',
        ]
      },
      {
        baslik: 'Teknik Altyapı ve Hız Optimizasyonu',
        paragraflar: [
          'Sunucu yanıt süresi (TTFB — Time to First Byte), LCP metriğini doğrudan etkileyen bir teknik faktördür. 200ms\'nin altında bir TTFB ideal kabul edilirken 600ms\'yi aşan değerler sıralama üzerinde olumsuz etki yaratabilir. Hosting kalitesi, sunucu konumu ve önbelleğe alma (caching) stratejileri TTFB\'yi belirleyen temel unsurlardır.',
          'JavaScript render\'ının arama motorları üzerindeki etkisi, özellikle React, Vue veya Angular tabanlı SPA\'larda dikkat gerektiren bir konudur. Googlebot, JavaScript\'i ikincil bir crawl aşamasında işler; bu gecikme indekslemeyi 2-3 haftaya uzatabilir. Server-Side Rendering (SSR) veya Static Site Generation (SSG) tercih etmek, bu sorunu ortadan kaldıran en etkili çözümdür.',
        ]
      },
    ]
  },
  'geo-nedir': {
    baslik: 'GEO Nedir? Generative Engine Optimization Rehberi',
    tarih: '12 Nisan 2025', sure: '10 dk', etiket: 'AI & GEO',
    ozet: 'ChatGPT, Perplexity ve Google AI Overview\'da içeriklerinizin kaynak gösterilmesi için GEO stratejileri.',
    bolumler: [
      {
        baslik: 'GEO\'nun Tanımı ve Önemi',
        paragraflar: [
          'Generative Engine Optimization (GEO), yapay zekâ destekli arama motorlarında ve yanıt sistemlerinde (ChatGPT, Perplexity, Google AI Overview, Bing Copilot) içeriklerinizin kaynak olarak alıntılanmasını ve öne çıkmasını sağlayan optimizasyon pratiğidir. Klasik SEO\'nun on yıllar içinde geliştirdiği ranking faktörlerinden farklı olarak GEO, LLM\'lerin (Büyük Dil Modelleri) içeriği nasıl sindirdiğine ve yanıtlara nasıl dahil ettiğine odaklanır.',
          'Arama davranışındaki dönüşüm, GEO\'yu giderek daha kritik bir disiplin haline getirmektedir. Google\'ın kendi araştırmalarına göre AI Overview\'ların sunulduğu sorguların büyük bölümünde kullanıcılar altta kalan mavi linklerle daha az etkileşim kurmaktadır. Bununla birlikte AI Overview\'da kaynak olarak gösterilen siteler, marka güvenilirliği ve direct traffic açısından önemli kazanımlar elde etmektedir.',
        ]
      },
      {
        baslik: 'GEO için İçerik Stratejisi',
        paragraflar: [
          'LLM\'lerin tercih ettiği içerik yapısı, klasik SEO içeriğinden belirgin biçimde ayrışır. Yapay zekâ modelleri; net tanımlar içeren, kaynaklara atıfta bulunan, sayısal veriler ve araştırma bulgularına dayanan içerikleri alıntı kaynağı olarak seçme eğilimindedir. Bu nedenle GEO için içerik üretiminde "nedir", "nasıl çalışır" ve "neden önemlidir" yapısındaki bölümleri açık ve özlü biçimde yanıtlamak kritik önem taşır.',
          'E-E-A-T sinyalleri GEO için de geçerliliğini korur; ancak LLM\'ler, yazar kimliği ve kurumsal otorite sinyallerine klasik arama motorlarından daha fazla ağırlık verebilir. Yazar sayfalarında akademik veya mesleki biyografi, sektör yayınlarındaki atıflar ve konuyla ilgili dış linkler bulundurulması, içeriğin LLM tarafından güvenilir kaynak olarak tanınmasını kolaylaştırır.',
        ]
      },
    ]
  },
};

const DEFAULT_POST = {
  bolumler: [
    {
      baslik: 'Teknik Temeller',
      paragraflar: [
        'Bu konunun teknik altyapısını anlamak, doğru strateji geliştirmenin ön koşuludur. Arama motorlarının içeriği nasıl işlediğini kavramak, optimizasyon kararlarınızı veri odaklı bir temele oturtmanızı sağlar.',
        'Uygulamalı araçlarla desteklenen bir denetim süreci, teorik bilgiyi somut aksiyonlara dönüştürmenin en etkili yoludur. Bu aşamada düzenli ölçüm ve iterasyon, sürdürülebilir büyüme için zorunludur.',
      ]
    },
    { baslik: 'Strateji ve Uygulama', paragraflar: ['Strateji olmadan uygulanan teknikler, kaynakları heba eder. Hedef belirleme, önceliklendirme ve test etme döngüsü başarılı SEO çalışmalarının temelidir.', 'Uzun vadeli organik büyüme, kısa vadeli taktiklerin ötesine geçen bir bakış açısı gerektirir. İçerik kalitesi, teknik sağlık ve otorite inşasının bir arada yönetilmesi rekabet avantajı sağlar.'] },
    { baslik: 'Ölçüm ve Optimizasyon', paragraflar: ['Doğru metrikleri takip etmek, stratejinizin etkinliğini değerlendirmenin tek yoludur. Trafik, sıralama ve dönüşüm verilerinin birlikte analiz edilmesi, gerçek değeri ortaya koyar.', 'A/B testi ve sürekli optimizasyon anlayışı, SEO çalışmalarını rakip sitelerden farklılaştıran temel yaklaşımdır. Veri okuma kapasitesi, doğru yorumlama ve hızlı aksiyon alma döngüsü başarının anahtarıdır.'] },
  ]
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS[slug];

  const baslik = post?.baslik || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const bolumler = post?.bolumler || DEFAULT_POST.bolumler;
  const etiket = post?.etiket || 'SEO';
  const sure = post?.sure || '7 dk';
  const tarih = post?.tarih || '2025';
  const ozet = post?.ozet || '';

  return (
    <>
      <Helmet>
        <title>{baslik} | Fatih Emin Çakıroğlu</title>
        <meta name="description" content={ozet || baslik} />
      </Helmet>

      <div style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh', background: '#f8f7f5' }}>

        {/* Hero */}
        <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '48px 32px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#999', fontSize: '13px', marginBottom: '24px', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#333'}
              onMouseLeave={e => e.currentTarget.style.color = '#999'}
            >← Blog\'a dön</Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ padding: '4px 12px', borderRadius: '4px', background: '#fff3ee', color: 'var(--orange)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px' }}>{etiket}</span>
              <span style={{ fontSize: '12px', color: '#bbb' }}>· {tarih} · {sure} okuma</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: '#111', lineHeight: 1.2, marginBottom: '16px' }}>{baslik}</h1>

            {ozet && <p style={{ color: '#777', fontSize: '16px', lineHeight: 1.6, borderLeft: '3px solid var(--orange)', paddingLeft: '16px', marginBottom: '24px' }}>{ozet}</p>}

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '14px' }}>F</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#111' }}>Fatih Emin Çakıroğlu</div>
                <div style={{ fontSize: '12px', color: '#aaa' }}>SEO & Dijital Pazarlama Uzmanı</div>
              </div>
              <a href="https://www.linkedin.com/in/fatihemincakiroglu/" target="_blank" rel="noreferrer" style={{ marginLeft: 'auto', padding: '7px 14px', borderRadius: '6px', border: '1px solid #eee', color: '#555', fontSize: '13px', textDecoration: 'none', transition: 'border-color 0.2s' }}>LinkedIn →</a>
            </div>
          </div>
        </div>

        {/* İçerik */}
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 32px 96px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', border: '1px solid #eee' }}>
            {bolumler.map((bolum, bi) => (
              <div key={bi} style={{ marginBottom: bi < bolumler.length - 1 ? '40px' : '0' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#111', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '4px', height: '22px', background: 'var(--orange)', borderRadius: '2px', flexShrink: 0, display: 'inline-block' }}></span>
                  {bolum.baslik}
                </h2>
                {bolum.paragraflar.map((p, pi) => (
                  <p key={pi} style={{ color: '#555', fontSize: '16px', lineHeight: 1.85, marginBottom: pi < bolum.paragraflar.length - 1 ? '16px' : '0' }}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '24px', padding: '40px', background: '#1a1612', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>ÜCRETSİZ DANIŞMA</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: '#fff', marginBottom: '10px' }}>SEO danışmanlığı almak ister misiniz?</h3>
            <p style={{ color: '#6b6b6b', marginBottom: '24px', fontSize: '15px' }}>Sitenizi analiz edip size özel strateji sunuyorum. İlk görüşme tamamen ücretsiz.</p>
            <Link to="/randevu">
              <button style={{ padding: '13px 28px', borderRadius: '8px', background: 'var(--orange)', border: 'none', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '15px', fontFamily: 'var(--font-body)' }}>
                Ücretsiz Danışma Al →
              </button>
            </Link>
          </div>

          <div style={{ marginTop: '16px' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', color: '#555', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              ← Tüm yazılara dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
