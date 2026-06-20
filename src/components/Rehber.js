import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const REHBERLER = [
  {
    no: '01', baslik: 'llms.txt', kategori: 'Teknik', ikon: '📄',
    ozet: 'llmstxt.org öneri standardı, adoption verileri ve GEO bağlamı.',
    icerik: [
      { alt: 'Nedir?', metin: 'llms.txt, web sitelerinin LLM (Büyük Dil Modeli) tabanlı sistemlere içeriklerini nasıl kullanmalarını istediklerini bildirdiği bir standart dosyadır. Robots.txt\'in yapay zekâ ekvivalenti olarak düşünülebilir; hangi sayfaların LLM tarafından işlenebileceğini ve nasıl atıf yapılacağını tanımlar.' },
      { alt: 'Teknik Implementasyon', metin: 'Site kök dizinine yerleştirilen `/llms.txt` dosyası, `Allow:`, `Disallow:` ve `Sitemap:` direktiflerine benzer bir sözdizimi kullanır. JSON-LD formatındaki meta verilerle desteklenen llms.txt, LLM\'lerin içeriği doğru bağlamda sindirmesini kolaylaştırır ve kaynak gösterilme olasılığını artırır.' },
    ]
  },
  {
    no: '02', baslik: 'SEO ve CRO', kategori: 'Strateji', ikon: '⊿',
    ozet: 'Organik trafiği dönüşüm hedefleriyle aynı çizgide düşünme.',
    icerik: [
      { alt: 'SEO-CRO İlişkisi', metin: 'SEO ve CRO, geleneksel anlayışta farklı ekiplerin yönettiği ayrı disiplinler olarak ele alınır; ancak Google\'ın davranışsal sinyallere (kullanıcı geri dönüşü, oturum süresi, sayfa başına görüntüleme) artan ağırlık vermesiyle birlikte bu iki disiplin giderek iç içe geçmektedir. Yüksek hemen çıkma oranı, algoritmanın söz konusu sayfayı kullanıcı niyetiyle örtüşmeyen bir kaynak olarak değerlendirmesine yol açabilir.' },
      { alt: 'Teknik Entegrasyon', metin: 'Google Analytics 4\'te mikro dönüşümleri (form doldurma, scroll derinliği, video izleme süresi) olay (event) olarak tanımlamak ve bu verileri Search Console verileriyle çapraz analiz etmek, hangi anahtar kelime gruplarının dönüşüme dönüştüğünü netleştirir. Bu sayede SEO kaynaklı organik trafik, yalnızca ziyaretçi sayısıyla değil, işletmeye katkısıyla ölçülmüş olur.' },
    ]
  },
  {
    no: '03', baslik: 'Topical Authority', kategori: 'Strateji', ikon: '≡',
    ozet: 'Konu kümelenmesi ve uzmanlık sinyalleriyle otorite inşası.',
    icerik: [
      { alt: 'Kavramsal Çerçeve', metin: 'Topical authority (konu otoritesi), bir web sitesinin belirli bir konu alanında kapsamlı ve derinlemesine bilgi sunması nedeniyle arama motorları tarafından o alanın uzman kaynağı olarak tanınması sürecidir. Google\'ın Helpful Content sistemi, konu derinliğini ve tutarlılığını içerik kalitesinin temel göstergesi olarak değerlendirir.' },
      { alt: 'Pillar-Cluster Mimarisi', metin: 'Topical authority inşasının teknik yöntemi, pillar-cluster içerik modelidir. Ana konu (pillar) sayfası, bir konuyu üst düzeyde ele alır ve belirli alt başlıklara yönlendiren iç linkler içerir. Her cluster (küme) sayfası ise bir alt konuyu derinlemesine işler ve pillar sayfasına geri link verir. Bu çift yönlü iç link ağı, Googlebot\'un içeriğin hiyerarşisini ve kapsamını anlamasını kolaylaştırır.' },
    ]
  },
  {
    no: '04', baslik: 'Answer Engine Optimization (AEO)', kategori: 'Strateji', ikon: '▣',
    ozet: 'Yanıt motorları ve yapılandırılmış içerikle uyumlu optimizasyon.',
    icerik: [
      { alt: 'AEO Nedir?', metin: 'AEO, içeriğin yalnızca geleneksel arama motorlarında değil, sesli asistanlar, chatbot\'lar ve AI Overview gibi yanıt motorlarında da öne çıkmasını hedefleyen optimizasyon yaklaşımıdır. Bu sistemler, kullanıcı sorularına doğrudan yanıt üreten yapıları tercih ettiğinden içerik formatı ve yapısı kritik önem kazanır.' },
      { alt: 'Uygulama Teknikleri', metin: 'FAQ yapısı ve "Soru-Cevap" formatındaki içerikler, AEO\'nun temel bileşenleridir. H2 veya H3 başlıklarının soru formatında yazılması (Örn: "E-ticaret SEO\'su nedir?") ve ardından gelen paragrafın kısa, öz ve doğrudan yanıt veren bir yapıda olması, hem featured snippet hem de AI Overview\'da kaynak olarak seçilme olasılığını artırır. Bunun yanı sıra FAQPage schema markup eklemek, yapılandırılmış veri olarak bu sinyali güçlendirir.' },
    ]
  },
  {
    no: '05', baslik: 'Zero-Click Search', kategori: 'Ölçüm & İçerik', ikon: '◎',
    ozet: 'Tıklama olmadan yanıtlanan sorgular ve görünürlük denklemi.',
    icerik: [
      { alt: 'Zero-Click Fenomeni', metin: 'Zero-click search, kullanıcının arama sonuçları sayfasından (SERP) herhangi bir siteye tıklamadan sorguya yanıt bulduğu arama deneyimidir. SparkToro\'nun araştırmalarına göre Google aramalarının önemli bir bölümü sıfır tıkla sonuçlanmaktadır. Featured snippet\'lar, bilgi panelleri, yerel paketler ve calculator/weather gibi doğrudan yanıt kutucukları bu olgunun başlıca kaynakları arasındadır.' },
      { alt: 'Görünürlük Stratejisi', metin: 'Zero-click aramada markanın görünür olması, tıklama olmaksızın da değer yaratır. Arama sorgusu yanıtında marka adı, ürün adı veya uzmanlık alanının görünmesi, kullanıcı zihninde otorite algısı oluşturur ve ilerleyen zamanlarda direct veya branded arama olarak geri dönebilir. Bu nedenle sıralama metriklerinin yanı sıra Search Console\'daki izlenim (impression) verilerini de izlemek, zero-click görünürlüğünü değerlendirmenin doğru yoludur.' },
    ]
  },
  {
    no: '06', baslik: 'Google SGE', kategori: 'Strateji', ikon: '★',
    ozet: 'Üretken arama sonuçları ve klasik SERP ile birlikte düşünülmesi.',
    icerik: [
      { alt: 'SGE Nasıl Çalışır?', metin: 'Google Search Generative Experience (SGE), arama sorgularına yanıt olarak LLM tabanlı bir özet kutusu sunar. Bu kutu; kaynak sitelerden alınan bilgileri sentezler, doğrudan yanıt üretir ve kaynakları sağ panelde listeler. Geleneksel mavi link sıralamasından bağımsız çalışan bu sistem, içerik kalitesi ve otorite sinyallerine öncelik tanır.' },
      { alt: 'SGE Optimizasyonu', metin: 'SGE\'de kaynak olarak görünmek için içeriğin "özet çıkarılabilir" bir yapıda yazılması gerekir. Giriş paragrafının soruya doğrudan yanıt vermesi, rakamsal verilerin ve araştırma atıflarının açıkça belirtilmesi ve yazarın uzmanlığının sayfa içinde kanıtlanması, SGE tarafından seçilme olasılığını artırır. Google\'ın kendi araştırmalarına göre uzun formlu, kapsamlı içerikler SGE\'nin tercih ettiği kaynak profiliyle örtüşmektedir.' },
    ]
  },
  {
    no: '07', baslik: 'Google Ads ve SEO İlişkisi', kategori: 'Ölçüm & İçerik', ikon: '◉',
    ozet: 'Reklam panelinden çıkan içgörüleri organik için kullanma.',
    icerik: [
      { alt: 'Veri Sinerji Modeli', metin: 'Google Ads arama kampanyaları, SEO stratejisi için benzersiz bir test ortamı sunar. Reklam gösterimlerinden elde edilen tıklama oranı (CTR) verileri, hangi başlık ve açıklama kombinasyonlarının kullanıcı ilgisini en çok çektiğini ortaya koyar. Bu veriler, organik meta başlık ve açıklamaların optimize edilmesinde somut bir rehber işlevi görür.' },
      { alt: 'Anahtar Kelime Transferi', metin: 'Google Ads\'in Arama Terimleri raporu, kullanıcıların reklamları tetiklemek için gerçekte hangi ifadeleri kullandığını gösterir. Bu veriler, özellikle long-tail anahtar kelime araştırmasında değerlidir; zira organik araştırma araçlarının yakalayamadığı nişe özel sorguları gerçek kullanıcı davranışından türetilmiş veriyle tamamlar. Dönüşüm oranı yüksek reklam anahtar kelimeleri, organik içerik planlaması için öncelikli hedefler olarak belirlenebilir.' },
    ]
  },
  {
    no: '08', baslik: 'Google Algoritma Tarihi', kategori: 'Teknik', ikon: '⌚',
    ozet: 'Core, Spam ve yapay zekâ güncellemelerinin kronolojik özeti.',
    icerik: [
      { alt: 'Temel Güncellemeler', metin: 'Google\'ın algoritma tarihi, Panda (2011 — düşük kaliteli içerik), Penguin (2012 — manipülatif linkler), Hummingbird (2013 — semantik arama), RankBrain (2015 — makine öğrenmesi), Medic (2018 — E-A-T sinyalleri) ve BERT (2019 — doğal dil işleme) ile şekillenmiştir. Her büyük güncelleme, SEO pratiğinin farklı bir boyutunu ön plana çıkarmış ve manipülatif teknikleri etkisizleştirmeye odaklanmıştır.' },
      { alt: 'Güncel Güncellemeler', metin: 'Helpful Content System (2022-2023) ve Core Updates (2023-2024), E-E-A-T çerçevesini genişleterek içerik derinliği ve yazar uzmanlığına verilen ağırlığı artırmıştır. Spam politikası güncellemeleri, site reputation abuse, expired domain abuse ve scaled content abuse gibi yeni manipülasyon kategorilerini hedef almaktadır. AI Overview\'ın yaygınlaşmasıyla birlikte GEO optimizasyonu, algoritma uyumunun yeni bir boyutu haline gelmektedir.' },
    ]
  },
  {
    no: '09', baslik: 'Content Marketing', kategori: 'Ölçüm & İçerik', ikon: '✏',
    ozet: 'İçerik stratejisi ve talep yaratma ile SEO hedeflerinin entegrasyonu.',
    icerik: [
      { alt: 'İçerik-SEO Entegrasyonu', metin: 'İçerik pazarlaması ve SEO, birbirini besleyen iki disiplindir; ancak bu entegrasyon çoğu zaman yüzeysel düzeyde kalır. Etkili bir içerik-SEO entegrasyonu için anahtar kelime araştırmasının yalnızca hacim değil, arama niyeti (informational, navigational, commercial, transactional) bazında segmentasyona tabi tutulması ve her niyete özel içerik formatının belirlenmesi gerekir.' },
      { alt: 'Talep Yaratma ve SEO', metin: 'Talep yaratma (demand generation) içerikleri, arama hacmi düşük ancak dönüşüm potansiyeli yüksek anahtar kelimeler için stratejik öneme sahiptir. Bu içerikler, kullanıcıları satın alma yolculuğunun farkındalık aşamasında yakalayarak marka bilinirliği ve otorite oluşturur. Organik trafiğin yanı sıra branded arama hacmindeki artış, başarılı bir talep yaratma stratejisinin en güvenilir ölçütlerinden biridir.' },
    ]
  },
  {
    no: '10', baslik: 'Ölçme ve Takip', kategori: 'Ölçüm & İçerik', ikon: '📊',
    ozet: 'KPI\'lar, Search Console ve raporlama ile ilerlemenin izlenmesi.',
    icerik: [
      { alt: 'SEO KPI Çerçevesi', metin: 'SEO performansının ölçümünde doğru KPI seçimi, strateji odağını belirler. Organik trafik, sıralama pozisyonu ve organik dönüşüm oranı temel metrikler olarak kabul edilse de bu üç metriğin birlikte değerlendirilmesi yanıltıcı olabilir. Örneğin organik trafikte artış, dönüşüm oranında düşüşe eşlik ediyorsa yanlış anahtar kelime segmentinin hedeflendiğine işaret eder.' },
      { alt: 'Raporlama Altyapısı', metin: 'Google Looker Studio (eski adıyla Data Studio) üzerinde Search Console, GA4 ve rank tracker verilerini birleştiren otomatik raporlar, haftalık veya aylık izleme sürecini kolaylaştırır. Özellikle rakip karşılaştırması yapan görselleştirmeler, strateji toplantılarında karar alıcıların bağlamı hızlı kavramasını sağlar. Raporların yoruma açık ham veri yerine önerilen aksiyonlarla sunulması, SEO çalışmalarının kurumsal içindeki değerini artırır.' },
    ]
  },
  {
    no: '11', baslik: 'Teknik SEO', kategori: 'Teknik', ikon: '⚙',
    ozet: 'Crawl bütçesi, site mimarisi, HTTP ve performansla ilgili teknik temel taşlar.',
    icerik: [
      { alt: 'Site Mimarisi', metin: 'İdeal site mimarisi, herhangi bir sayfanın ana sayfadan 3-4 tıklamada ulaşılabilir olmasını hedefler. Silolanmış (siloed) yapılar, konu otoritesini segmente ederek iç linkleme ile link equity aktarımını optimize eder. Breadcrumb navigasyonu hem kullanıcı deneyimini iyileştirir hem de BreadcrumbList schema ile SERP\'te görsel ipuçları sağlar.' },
      { alt: 'HTTP ve Güvenlik Faktörleri', metin: 'HTTPS, 2014\'ten bu yana Google\'ın resmi sıralama faktörü olup günümüzde teknik SEO denetimlerinde ön koşul kabul edilir. HTTP/2 veya HTTP/3 protokollerinin etkinleştirilmesi, özellikle çok sayıda kaynak yükleyen sayfalarda paralel bağlantı sayısını artırarak yükleme süresini kısaltır. HSTS (HTTP Strict Transport Security) başlığının implementasyonu ise güvenlik skoru açısından ek değer taşır.' },
    ]
  },
  {
    no: '12', baslik: 'INP (Interaction to Next Paint)', kategori: 'Teknik', ikon: '↗',
    ozet: 'Core Web Vitals içinde INP odaklı etkileşim iyileştirme.',
    icerik: [
      { alt: 'INP Nedir?', metin: 'INP (Interaction to Next Paint), Mart 2024\'te First Input Delay\'in (FID) yerini alarak Core Web Vitals\'ın üçüncü metriği olan etkileşim duyarlılığı ölçütüdür. Kullanıcının tıklama, dokunma veya klavye etkileşiminden sayfanın bir sonraki boyama (paint) gerçekleştirmesine kadar geçen süreyi ölçen INP, 200ms altındaki değerleri "iyi" olarak sınıflandırır.' },
      { alt: 'INP Optimizasyonu', metin: 'INP sorunlarının büyük çoğunluğu, uzun görevler (long tasks) olarak tanımlanan 50ms\'yi aşan JavaScript işlemlerinden kaynaklanır. Chrome DevTools\'un Performance paneli ve PageSpeed Insights\'ın "Diagnose performance issues" bölümü, INP sorununa yol açan etkileşimleri tespit eder. Event handler\'ların yield ile ayrılması, işlem ağır görevlerin Web Worker\'a taşınması ve React uygulamalarında render optimizasyonu (useMemo, useCallback) INP\'yi iyileştiren başlıca tekniklerdir.' },
    ]
  },
  {
    no: '13', baslik: 'Mobil SEO', kategori: 'Teknik', ikon: '📱',
    ozet: 'Mobil deneyim, kullanılabilirlik ve mobile-first indeksleme.',
    icerik: [
      { alt: 'Mobile-First İndeksleme', metin: 'Google 2023\'te tüm siteler için mobile-first indekslemeye geçişi tamamlamıştır. Bu politika kapsamında Googlebot, sayfaları masaüstü değil, mobil versiyonlarından indekslemektedir. Mobil sürümde eksik olan içerik, iç linkler veya yapılandırılmış veriler artık indeksleme sürecine dahil edilmez.' },
      { alt: 'Mobil UX ve Sıralama', metin: 'Mobil kullanılabilirlik sorunları (dokunma öğelerinin yakınlığı, metnin okunabilirliği, yatay kaydırma gerekliliği) Search Console\'daki "Mobile Usability" raporunda detaylandırılır. Bu sorunlar doğrudan sıralama cezası getirmese de kullanıcı davranışını olumsuz etkileyerek dolaylı SEO kaybına yol açar. Viewport meta etiketinin doğru konfigüre edilmesi ve medya sorgularıyla responsive tasarımın sağlanması, mobil SEO\'nun teknik temel taşlarındandır.' },
    ]
  },
  {
    no: '14', baslik: 'Uluslararası SEO', kategori: 'Teknik', ikon: '🌐',
    ozet: 'Hreflang, çok dilli yapılar ve global arama görünürlüğü.',
    icerik: [
      { alt: 'Hreflang Implementasyonu', metin: 'Hreflang etiketi, arama motorlarına bir sayfanın hangi dil ve bölge için tasarlandığını bildirir. `<link rel="alternate" hreflang="tr" href="https://example.com/tr/" />` formatındaki etiketler, hem `<head>` bölümüne HTML olarak hem de HTTP yanıt başlıklarına eklenebilir. Büyük ölçekli sitelerde XML sitemap üzerinden hreflang bildirimi tercih edilir ve yönetimi kolaylaştırır.' },
      { alt: 'URL Yapısı Kararları', metin: 'Uluslararası SEO\'da ccTLD (country-code top-level domain: .de, .fr), alt dizin (/de/, /fr/) ve alt alan adı (de.site.com) olmak üzere üç URL yapısı seçeneği mevcuttur. ccTLD en güçlü coğrafi hedefleme sinyalini verirken en fazla kaynak gerektirir. Alt dizin yaklaşımı, ana domain otoritesini tüm dil versiyonlarına aktarması nedeniyle küçük ve orta ölçekli siteler için en dengeli seçenek olarak öne çıkar.' },
    ]
  },
  {
    no: '15', baslik: 'On-Page SEO', kategori: 'Strateji', ikon: '📄',
    ozet: 'Başlık, içerik sinyalleri ve sayfa içi optimizasyon.',
    icerik: [
      { alt: 'Başlık ve Meta Optimizasyonu', metin: 'Title tag, organik CTR\'yi doğrudan etkileyen en kritik on-page SEO öğesidir. 50-60 karakter aralığında, hedef anahtar kelimeyi başa yakın konumlandıran ve kullanıcıya açık bir değer önerisi sunan başlıklar en yüksek tıklama oranına ulaşır. Meta açıklaması teknik olarak sıralama faktörü olmasa da SERP\'te kullanıcıyı sayfaya çekmede belirleyici rol oynar.' },
      { alt: 'İçerik Yapısı ve Semantik Sinyaller', metin: 'H1-H6 başlık hiyerarşisinin mantıksal sırayla kullanılması ve hedef anahtar kelimenin H1 içinde geçmesi, arama motorlarının sayfa yapısını doğru okuyabilmesi için gereklidir. LSI (Latent Semantic Indexing) anahtar kelimeler, konu ile anlam bakımından ilişkili terimler olup sayfa içeriğinin semantik derinliğini artırır. Bu terimleri doğal biçimde içeriğe dahil etmek, keyword stuffing riski olmaksızın semantik alaka düzeyini yükseltir.' },
    ]
  },
  {
    no: '16', baslik: 'Off Page SEO', kategori: 'Strateji', ikon: '★',
    ozet: 'Dış güven, itibar ve marka sinyalleriyle organik görünürlük.',
    icerik: [
      { alt: 'Backlink Kalite Değerlendirmesi', metin: 'Backlink profili değerlendirmesinde Domain Rating (DR) veya Domain Authority (DA) gibi üçüncü taraf metriklerin yanı sıra bağlantıyı veren sitenin tematik alaka düzeyi, organik trafiği ve doğal link büyüme eğrisi göz önünde bulundurulmalıdır. Yüksek DA\'a sahip ancak alakasız bir siteden gelen bağlantı, düşük DA\'lı ama tematik olarak ilgili bir siteden gelen bağlantıdan daha az değer taşıyabilir.' },
      { alt: 'Marka Sinyalleri', metin: 'Off-page SEO, artık yalnızca backlink sayısından ibaret değildir. Marka adının bağlantısız anılması (unlinked brand mentions), sosyal medyada viral içerik paylaşımları ve podcast/konferans görünürlüğü gibi marka sinyalleri, Google\'ın entite (entity) tabanlı arama anlayışında giderek artan bir rol üstlenmektedir. Brand entity güçlendirmesi için Wikipedia bilgi paneli, Google Knowledge Graph ve sektör dizinlerindeki NAP (Ad, Adres, Telefon) tutarlılığı öncelikli hedefler arasında yer alır.' },
    ]
  },
  {
    no: '17', baslik: 'Keyword Research', kategori: 'Strateji', ikon: '🔍',
    ozet: 'Araştırma, arama niyeti ve içerik planına bağlantı.',
    icerik: [
      { alt: 'Arama Niyeti Analizi', metin: 'Modern anahtar kelime araştırması, hacim ve rekabet güçlüğünün ötesinde arama niyetini (search intent) merkeze alır. Informational (bilgi arayan), navigational (belirli bir siteye ulaşmaya çalışan), commercial (karşılaştırma yapan) ve transactional (satın almaya hazır) niyetlerin ayrıştırılması, her anahtar kelime için doğru içerik türünün belirlenmesini sağlar.' },
      { alt: 'Long-Tail Strateji', metin: 'Long-tail anahtar kelimeler (3+ kelimeli, düşük hacimli sorgular), toplam organik trafik potansiyelinin büyük bölümünü oluşturur ve dönüşüm oranı genellikle head term\'lerden yüksektir. Ahrefs\'in "Questions" filtresi, AnswerThePublic ve Google\'ın "People also ask" bölümü, long-tail fırsatları tespit etmek için pratik araçlardır. Bu anahtar kelimelerin içerik planına sistematik olarak entegrasyonu, rekabet baskısı düşük ancak nitelikli trafik çeken sayfaların oluşturulmasına zemin hazırlar.' },
    ]
  },
  {
    no: '18', baslik: 'SEO 101', kategori: 'Strateji', ikon: '☀',
    ozet: 'SERP yapısı, temel kavramlar ve giriş seviyesi çerçeve.',
    icerik: [
      { alt: 'SERP Anatomisi', metin: 'Arama Motoru Sonuç Sayfası (SERP), organik mavi linklerden çok daha karmaşık bir yapı barındırır. Featured snippet\'lar, bilgi panelleri, görsel paketleri, haber kutucukları, yerel paketler ve shopping sonuçları, sorgulara göre farklı kombinasyonlarda SERP\'te yer alır. Bu ögelerin her biri, farklı bir optimizasyon stratejisi gerektirir ve organik konumdan bağımsız trafik fırsatı sunar.' },
      { alt: 'İndeksleme ve Sıralama Mantığı', metin: 'Google\'ın arama süreci üç temel aşamadan oluşur: tarama (crawling), indeksleme (indexing) ve sıralama (ranking). Googlebot, web\'i bağlantılar aracılığıyla gezerek sayfaları keşfeder ve içeriklerini işler. İndeksleme aşamasında sayfa, içerik kalitesi, teknik uyum ve spam sinyalleri değerlendirilerek Google\'ın veri tabanına eklenir ya da eklenmez. Sıralama ise 200\'ü aşkın faktörün (içerik kalitesi, backlink profili, kullanıcı deneyimi) ağırlıklı kombinasyonuna göre gerçekleştirilir.' },
    ]
  },
  {
    no: '19', baslik: 'Link Oluşturma — Domain Otoritesi', kategori: 'Strateji', ikon: '📋',
    ozet: 'Backlink kalitesi, otorite sinyalleri ve sürdürülebilir link stratejisi.',
    icerik: [
      { alt: 'Domain Otorite Metrikleri', metin: 'Domain Rating (Ahrefs) ve Domain Authority (Moz), bir sitenin backlink profilinin gücünü 0-100 arasında puanlayan üçüncü taraf metriklerdir. Google bu metrikleri resmi sıralama faktörü olarak kullanmasa da backlink kalitesini değerlendirmede pratik bir referans işlevi görürler. Önemli olan DR/DA skorunun mutlak değeri değil, rakip sitelerle karşılaştırmalı konumu ve zaman içindeki büyüme hızıdır.' },
      { alt: 'Sürdürülebilir Link İnşası', metin: 'Google\'ın spam politikası kapsamındaki güncellemeler, yapay link şemalarını ve ölçeklendirilmiş bağlantı inşasını doğrudan hedef almaktadır. Sürdürülebilir link stratejisi; orijinal araştırmalar, sektör raporları, interaktif araçlar ve otorite yazarların katkısıyla üretilen içerikler aracılığıyla doğal (editoryal) bağlantı kazanmaya odaklanır. Guest posting, HARO (Help A Reporter Out) ve kırık link inşası (broken link building) bu yaklaşımı destekleyen tamamlayıcı taktikler arasındadır.' },
    ]
  },
  {
    no: '20', baslik: 'Başlangıç Kılavuzu', kategori: 'Strateji', ikon: '🔍',
    ozet: 'SEO\'ya giriş için kapsamlı başlangıç çerçevesi.',
    icerik: [
      { alt: 'SEO Öncelik Hiyerarşisi', metin: 'SEO\'ya başlarken öncelikleri doğru sıralamak, sınırlı kaynakların en yüksek etkiyi yaratacak alanlara yönlendirilmesini sağlar. Teknik SEO temellerinin (crawlability, indeksleme, hız) sağlamlaştırılması, on-page optimizasyon (başlık, içerik, yapılandırılmış veri) ve ardından off-page otorite inşası (backlink, marka sinyalleri) şeklinde kademeli bir yaklaşım benimsenmelidir.' },
      { alt: 'Araç Seti', metin: 'SEO başlangıcı için temel araçlar: Google Search Console (indeksleme ve performans), Google Analytics 4 (trafik ve davranış), Ahrefs veya SEMrush (anahtar kelime ve backlink), Screaming Frog (teknik denetim) ve PageSpeed Insights (hız analizi). Bu araçların birlikte kullanımı, SEO\'nun farklı boyutlarını kapsamlı biçimde izlemeye ve analiz etmeye olanak tanır.' },
    ]
  },
  {
    no: '21', baslik: 'AI Sözlük', kategori: 'Teknik', ikon: '📚',
    ozet: 'AI ve arama terimleri için hızlı başvuru kaynağı.',
    icerik: [
      { alt: 'Temel AI Terimleri', metin: 'LLM (Large Language Model): Büyük ölçekli metin verisi üzerinde eğitilmiş, insan benzeri metin üreten yapay zekâ modelidir. GPT-4, Claude ve Gemini bu kategorinin öne çıkan örnekleridir. RAG (Retrieval-Augmented Generation): LLM\'lerin gerçek zamanlı veri kaynaklarına erişerek yanıt ürettiği hibrit yaklaşımdır; hem güncel bilgi hem de derin dil anlayışı sağlar. Embedding: Metinlerin anlam bakımından benzerliğini ölçmek için kullanılan vektör temsil yöntemidir.' },
      { alt: 'GEO Terimleri', metin: 'AI Overview: Google\'ın SERP üst kısmına yerleştirdiği LLM tabanlı yanıt kutucuğudur; kaynak siteler sağ panelde listelenir. Answer Engine: Perplexity, You.com ve benzeri, kullanıcı sorgularına doğrudan yanıt üreten yapay zekâ tabanlı arama sistemleridir. Grounding: LLM\'lerin yanıtlarını doğrulanabilir kaynaklara dayandırması sürecidir; GEO optimizasyonunda alıntılanabilirliği artırmak için içeriğin atıf ve kaynak bakımından güçlü olması kritik önem taşır.' },
    ]
  },
];

const KATEGORİLER = ['Tümü', 'Strateji', 'Teknik', 'Ölçüm & İçerik'];
const SIRALA = ['Tarih', 'A–Z', 'Z–A'];

export default function Rehber() {
  const [aktifKat, setAktifKat] = useState('Tümü');
  const [aktifSirala, setAktifSirala] = useState('Tarih');
  const [acik, setAcik] = useState(null);
  const [arama, setArama] = useState('');

  let filtered = aktifKat === 'Tümü' ? REHBERLER : REHBERLER.filter(r => r.kategori === aktifKat);
  if (arama) filtered = filtered.filter(r => r.baslik.toLowerCase().includes(arama.toLowerCase()) || r.ozet.toLowerCase().includes(arama.toLowerCase()));
  if (aktifSirala === 'A–Z') filtered = [...filtered].sort((a, b) => a.baslik.localeCompare(b.baslik));
  if (aktifSirala === 'Z–A') filtered = [...filtered].sort((a, b) => b.baslik.localeCompare(a.baslik));

  const KAT_RENK = { Strateji: { bg: '#f3e8ff', color: '#7c3aed' }, Teknik: { bg: '#e0f2fe', color: '#0369a1' }, 'Ölçüm & İçerik': { bg: '#fce7f3', color: '#be185d' } };

  return (
    <>
      <Helmet>
        <title>SEO Bilgi Rehberleri | Fatih Emin Çakıroğlu</title>
        <meta name="description" content="SEO, GEO ve dijital pazarlama hakkında teknik bilgilerle dolu 21 kapsamlı rehber." />
      </Helmet>

      <div style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh', background: '#f8f7f5' }}>

        {/* Header */}
        <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '48px 32px 32px' }}>
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>REHBERLİK</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#111', lineHeight: 1.1, marginBottom: '12px' }}>
              SEO Bilgi <span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Rehberleri</span>
            </h1>
            <p style={{ color: '#777', fontSize: '16px', maxWidth: '540px', lineHeight: 1.6 }}>
              Teknik SEO, GEO ve dijital pazarlama hakkında derinlemesine teknik bilgiler içeren {REHBERLER.length} rehber.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '32px 32px 96px' }}>

          {/* Kontroller */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', padding: '8px 14px' }}>
              <span style={{ color: '#aaa' }}>🔍</span>
              <input type="text" placeholder="Rehberlerde ara..." value={arama} onChange={e => setArama(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#333', background: 'transparent', fontFamily: 'var(--font-body)', width: '180px' }} />
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {SIRALA.map(s => (
                <button key={s} onClick={() => setAktifSirala(s)} style={{ padding: '7px 14px', borderRadius: '8px', border: aktifSirala === s ? 'none' : '1px solid #eee', background: aktifSirala === s ? '#111' : '#fff', color: aktifSirala === s ? '#fff' : '#555', fontSize: '13px', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>{s}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '6px', marginLeft: 'auto' }}>
              {KATEGORİLER.map(k => (
                <button key={k} onClick={() => setAktifKat(k)} style={{ padding: '7px 14px', borderRadius: '20px', border: 'none', background: aktifKat === k ? 'var(--orange)' : '#fff', color: aktifKat === k ? '#fff' : '#555', fontSize: '13px', fontWeight: aktifKat === k ? 700 : 400, cursor: 'pointer', fontFamily: 'var(--font-body)', border: aktifKat === k ? 'none' : '1px solid #eee' }}>{k}</button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {filtered.map((r, i) => {
              const renk = KAT_RENK[r.kategori] || { bg: '#f5f5f5', color: '#555' };
              const isAcik = acik === r.no;
              return (
                <div key={i} style={{ background: '#fff', borderRadius: '14px', border: '1px solid #eee', overflow: 'hidden', transition: 'box-shadow 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <button onClick={() => setAcik(isAcik ? null : r.no)} style={{ width: '100%', padding: '20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '20px' }}>{r.ikon}</span>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#ccc' }}>{r.no}</span>
                      </div>
                      <span style={{ padding: '3px 8px', borderRadius: '4px', background: renk.bg, color: renk.color, fontSize: '10px', fontWeight: 700 }}>{r.kategori}</span>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '6px', lineHeight: 1.3 }}>{r.baslik}</h3>
                    <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.5 }}>{r.ozet}</p>
                    <div style={{ marginTop: '12px', fontSize: '12px', color: isAcik ? 'var(--orange)' : '#bbb', fontWeight: 600 }}>
                      {isAcik ? '▲ Kapat' : '▼ Detayları gör'}
                    </div>
                  </button>

                  {isAcik && (
                    <div style={{ padding: '0 20px 20px', borderTop: '1px solid #f5f5f5' }}>
                      {r.icerik.map((ic, ii) => (
                        <div key={ii} style={{ marginTop: '16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <span style={{ width: '3px', height: '14px', background: 'var(--orange)', borderRadius: '2px', display: 'inline-block' }}></span>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#333' }}>{ic.alt}</span>
                          </div>
                          <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{ic.metin}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
