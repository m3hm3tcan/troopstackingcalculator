import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./index.css";

const DOWNLOAD_URL =
  "https://www.dropbox.com/scl/fi/2qn6s38zonzr7odoik75v/HunililerChestTracker-Setup-1.0.0.zip?rlkey=5xlj5j7z753liqra6m7yow87k&st=u4p29e85&dl=1";
const CONTACT_URL = "mailto:tarkanandthewolf@outlook.com";

const englishCopy = {
  "Windows için klan otomasyonu": "Clan automation for Windows",
  "Sandık takibini otomatiğe bağla,": "Automate chest tracking,",
  "klanına odaklan.": "focus on your clan.",
  "Clan Chest Collector, sandık bilgilerini ekran üzerinden otomatik algılar, kayıtları güvenle buluta aktarır ve klan katkılarını tek bir sistemde toplar.":
    "Clan Chest Collector automatically detects chest information on screen, securely syncs records to the cloud, and brings clan contributions together in one system.",
  "Uygulamayı İndir": "Download the App",
  "Nasıl Çalışır?": "How It Works",
  "Yerel kayıt güvencesi": "Reliable local storage",
  "Klan bazlı senkronizasyon": "Clan-based sync",
  "DAHA AZ TAKİP, DAHA ÇOK OYUN": "LESS TRACKING, MORE PLAYING",
  "Manuel sandık takibi artık geçmişte kaldı.":
    "Manual chest tracking is a thing of the past.",
  "Ekran başında beklemek, eksik kayıtları aramak ve dağınık tablolarla uğraşmak yerine süreci otomasyona bırakın.":
    "Let automation handle the process instead of waiting at the screen, chasing missing records, and managing scattered spreadsheets.",
  "MANUEL TAKİP": "MANUAL TRACKING",
  "Sürekli kontrol, eksik kayıtlar": "Constant checks, missing records",
  "Ekran başında bekleme": "Waiting at the screen",
  "Tekrarlayan veri girişi": "Repetitive data entry",
  "Belirsiz üye katkıları": "Unclear member contributions",
  "CLAN CHEST COLLECTOR": "CLAN CHEST COLLECTOR",
  "Tek akışta düzenli veriler": "Organized data in one flow",
  "Otomatik algılama ve açma": "Automatic detection and opening",
  "Güvenli bulut aktarımı": "Secure cloud transfer",
  "Görünür klan katkıları": "Visible clan contributions",
  ÖZELLİKLER: "FEATURES",
  "Sandık operasyonunuz için gereken her şey.":
    "Everything you need for your chest operation.",
  "Akıllı OCR algılama": "Smart OCR Detection",
  "Sandık sahibi ve türü gibi bilgileri oyun ekranından otomatik olarak okur.":
    "Automatically reads information such as the chest owner and type from the game screen.",
  "Otomatik sandık açma": "Automatic Chest Opening",
  "Belirlediğiniz alanı tarar ve sandıkları sizin yerinize kontrollü şekilde açar.":
    "Scans the selected area and opens chests for you in a controlled flow.",
  "Bulut senkronizasyonu": "Cloud Synchronization",
  "Toplanan kayıtları düzenli gruplar halinde klanınıza özel veritabanına aktarır.":
    "Transfers collected records in organized batches to your clan's dedicated database.",
  "Kesintiye dayanıklı kayıt": "Resilient Records",
  "Bağlantı kesilirse verileri yerelde tutar ve uygun olduğunda yeniden gönderir.":
    "Keeps data locally if the connection drops and retries when available.",
  "Üye yönetimi": "Member Management",
  "Klan üyelerini ekleyin, durumlarını yönetin ve katkıları doğru kişilerle eşleştirin.":
    "Add clan members, manage their status, and match contributions with the right people.",
  "Esnek puan sistemi": "Flexible Scoring",
  "Sandık türlerine özel puanlar ve dönemsel skor aralıkları belirleyin.":
    "Set custom points for chest types and define scoring periods.",
  "BİRKAÇ DAKİKADA HAZIR": "READY IN MINUTES",
  "Bir kez ayarla, gerisini otomasyona bırak.":
    "Set it once and let automation do the rest.",
  "Clan Key ile bağlan": "Connect with Clan Key",
  "Klanınıza özel anahtar ile güvenli bağlantıyı kurun.":
    "Create a secure connection with your clan-specific key.",
  "Alanları belirle": "Select the Areas",
  "Sandık bilgisini ve açma düğmesini ekrandan seçin.":
    "Select the chest information area and open button on screen.",
  "Otomasyonu başlat": "Start Automation",
  "Tarama hızını ayarlayın ve Start düğmesine basın.":
    "Set the scan speed and press Start.",
  "Katkıları takip et": "Track Contributions",
  "Kayıtları, üyeleri ve puanları düzenli takip edin.":
    "Track records, members, and points in an organized way.",
  "DAYANIKLI VERİ AKIŞI": "RESILIENT DATA FLOW",
  "Bağlantı kesilse bile kayıtlarınız güvende.":
    "Your records stay safe even when the connection drops.",
  "Gönderilemeyen kayıtlar cihazınızda sıraya alınır. Sistem uygun olduğunda kontrollü gruplar halinde tekrar gönderilir.":
    "Records that cannot be sent are queued on your device and retried in controlled batches when possible.",
  "Yerel bekleme sırası": "Local pending queue",
  "Otomatik yeniden deneme": "Automatic retry",
  "50 kayıtlık kontrollü gruplar": "Controlled batches of 50",
  "Klana özel yapılandırma": "Clan-specific configuration",
  "OCR Tarama": "OCR Scan",
  "Sandık algılandı": "Chest detected",
  "Güvenli Sıra": "Secure Queue",
  "Veri koruma altında": "Data protected",
  "Senkronize edildi": "Synchronized",
  "KLAN YÖNETİMİ": "CLAN MANAGEMENT",
  "Katkıları adil ve anlaşılır hale getirin.":
    "Make contributions fair and easy to understand.",
  "Üyelerinizi yönetin, sandık türlerine puan verin ve skor dönemlerini klan düzeninize göre belirleyin.":
    "Manage members, assign points to chest types, and set scoring periods for your clan.",
  "Üye durumu": "Member status",
  "Özel puanlar": "Custom points",
  "Dönemsel skor": "Periodic scoring",
  "Klan Üyeleri": "Clan Members",
  "+ Üye Ekle": "+ Add Member",
  sandık: "chests",
  Aktif: "Active",
  "SIK SORULAN SORULAR": "FREQUENTLY ASKED QUESTIONS",
  "Merak ettikleriniz.": "What you need to know.",
  "Kurulum ve çalışma biçimi hakkında temel bilgiler.":
    "Essential information about setup and operation.",
  "Clan Chest Collector nasıl çalışır?": "How does Clan Chest Collector work?",
  "Belirlediğiniz ekran alanını OCR ile tarar, sandık bilgisini okur, sandığı açar ve kaydı klanınıza ait bulut alanına gönderir.":
    "It scans the selected screen area with OCR, reads the chest information, opens the chest, and sends the record to your clan's cloud space.",
  "Program hangi bilgileri algılar?": "What information does the app detect?",
  "Ekranda görünen sandık kaynağı, sandık türü ve ilişkili üye bilgilerini algılayıp kayıt altına alır.":
    "It detects and records the chest source, chest type, and related member information shown on screen.",
  "İnternet kesilirse kayıtlar kaybolur mu?":
    "Are records lost if the internet disconnects?",
  "Hayır. Gönderilemeyen kayıtlar yerel sırada saklanır ve bağlantı uygun olduğunda otomatik olarak yeniden denenir.":
    "No. Unsent records are stored in a local queue and retried automatically when the connection is available.",
  "Her klan için ayrı ayar yapılabilir mi?":
    "Can each clan have separate settings?",
  "Evet. Bağlantı ve çalışma ayarları Clan Key üzerinden ilgili klanla eşleştirilir.":
    "Yes. Connection and operation settings are matched to the relevant clan through its Clan Key.",
  "Sandık puanlarını özelleştirebilir miyim?": "Can I customize chest points?",
  "Evet. Her sandık kaynağına ayrı puan verebilir, skor başlangıcını ve dönem uzunluğunu ayarlayabilirsiniz.":
    "Yes. You can assign different points to each chest source and configure score start dates and period lengths.",
  "Kurulum için teknik bilgi gerekir mi?":
    "Does setup require technical knowledge?",
  "İlk kullanımda sandık alanını ve açma düğmesini ekrandan seçmeniz yeterlidir. Uygulama kalan adımlarda size rehberlik eder.":
    "On first use, simply select the chest area and open button on screen. The app guides you through the remaining steps.",
  "Hangi işletim sisteminde çalışır?": "Which operating system is supported?",
  "Clan Chest Collector bir Windows masaüstü uygulamasıdır.":
    "Clan Chest Collector is a Windows desktop application.",
  "OTOMASYONA GEÇMEYE HAZIR MISINIZ?": "READY TO AUTOMATE?",
  "Klan yönetiminde saatlerini değil,": "Use automation—not hours—",
  "otomasyonu kullan.": "to manage your clan.",
  "Sandık kayıtlarını otomatikleştirin ve klan katkılarını tek merkezde toplayın.":
    "Automate chest records and bring clan contributions together in one place.",
  "İletişime Geç": "Contact Us",
  "Otomatik sandık takibi ve klan katkı yönetimi.":
    "Automated chest tracking and clan contribution management.",
  "Nasıl Çalışır": "How It Works",
  SSS: "FAQ",
  "Clan Chest Collector. İlgili oyun şirketleriyle bağlantılı değildir.":
    "Clan Chest Collector. Not affiliated with the relevant game companies.",
  "Klan Puanlarını Görüntüle": "View Clan Scores",
  "Toplanan veriler Klan Panelinde": "Collected data in the Clan Dashboard",
  "Chest Collector tarafından toplanan sandıkları, üye katkılarını ve puanları Clan Web UI Key ile Klan Panelinden görüntüleyin.":
    "Use your Clan Web UI Key to view the chests, member contributions, and scores collected by Chest Collector in the Clan Dashboard.",
  "Clan Key doğrulandı": "Clan Key verified",
  "Son tarama · şimdi": "Last scan · now",
  "Bekleyen yüklemeler otomatik denenir": "Pending uploads retry automatically",
  "Sandık algılandı · Epic": "Chest detected · Epic",
  "Kayıt buluta gönderildi": "Record uploaded to the cloud",
  "Sonraki tarama hazır": "Ready for the next scan",
  "✓ Yerel kayıt güvencesi": "✓ Reliable local storage",
  "✓ Klan bazlı senkronizasyon": "✓ Clan-based sync",
  "✓ Yerel bekleme sırası": "✓ Local pending queue",
  "✓ Otomatik yeniden deneme": "✓ Automatic retry",
  "✓ 50 kayıtlık kontrollü gruplar": "✓ Controlled batches of 50",
  "✓ Klana özel yapılandırma": "✓ Clan-specific configuration",
  Özellikler: "Features",
  "Klan Sandığı Bilgisi": "Clan Chest Info",
  "Sandık Otomasyonu": "Chest Automation",
  "Clan Chest Collector uygulama önizlemesi":
    "Clan Chest Collector app preview",
  BAĞLI: "CONNECTED",
  "Kontrol Paneli": "Dashboard",
  "Sandık Yapılandırması": "Chest Configuration",
  "Aktivite Günlüğü": "Activity Log",
  BAĞLANTI: "CONNECTION",
  "BULUNAN SANDIK": "CHESTS FOUND",
  OTOMASYON: "AUTOMATION",
  "AKTİVİTE GÜNLÜĞÜ": "ACTIVITY LOG",
  Başlat: "Start",
  Durdur: "Stop",
};

const Icon = ({ name }) => {
  const paths = {
    scan: (
      <>
        <path d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3" />
        <path d="M7 12h10M9 9h6M9 15h6" />
      </>
    ),
    click: (
      <>
        <path d="m9 9 8 3-4 2 3 5-2 1-3-5-2 2Z" />
        <path d="M5 3v3M2.8 5.8 5 8M8 3.8 6.5 6" />
      </>
    ),
    cloud: (
      <>
        <path d="M17.5 19H6a4 4 0 0 1-.6-7.95A7 7 0 0 1 19 9a5 5 0 0 1-1.5 10Z" />
        <path d="m9 14 3-3 3 3M12 11v6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.5 2.8 7.8 7 10 4.2-2.2 7-5.5 7-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
        <path d="m4 7 6-4 6 6 5-4" />
      </>
    ),
  };
  return (
    <svg
      className="cc-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
};

const features = [
  [
    "scan",
    "Akıllı OCR algılama",
    "Sandık sahibi ve türü gibi bilgileri oyun ekranından otomatik olarak okur.",
  ],
  [
    "click",
    "Otomatik sandık açma",
    "Belirlediğiniz alanı tarar ve sandıkları sizin yerinize kontrollü şekilde açar.",
  ],
  [
    "cloud",
    "Bulut senkronizasyonu",
    "Toplanan kayıtları düzenli gruplar halinde klanınıza özel veritabanına aktarır.",
  ],
  [
    "shield",
    "Kesintiye dayanıklı kayıt",
    "Bağlantı kesilirse verileri yerelde tutar ve uygun olduğunda yeniden gönderir.",
  ],
  [
    "users",
    "Üye yönetimi",
    "Klan üyelerini ekleyin, durumlarını yönetin ve katkıları doğru kişilerle eşleştirin.",
  ],
  [
    "chart",
    "Esnek puan sistemi",
    "Sandık türlerine özel puanlar ve dönemsel skor aralıkları belirleyin.",
  ],
];

const faqs = [
  [
    "Clan Chest Collector nasıl çalışır?",
    "Belirlediğiniz ekran alanını OCR ile tarar, sandık bilgisini okur, sandığı açar ve kaydı klanınıza ait bulut alanına gönderir.",
  ],
  [
    "Program hangi bilgileri algılar?",
    "Ekranda görünen sandık kaynağı, sandık türü ve ilişkili üye bilgilerini algılayıp kayıt altına alır.",
  ],
  [
    "İnternet kesilirse kayıtlar kaybolur mu?",
    "Hayır. Gönderilemeyen kayıtlar yerel sırada saklanır ve bağlantı uygun olduğunda otomatik olarak yeniden denenir.",
  ],
  [
    "Her klan için ayrı ayar yapılabilir mi?",
    "Evet. Bağlantı ve çalışma ayarları Clan Key üzerinden ilgili klanla eşleştirilir.",
  ],
  [
    "Sandık puanlarını özelleştirebilir miyim?",
    "Evet. Her sandık kaynağına ayrı puan verebilir, skor başlangıcını ve dönem uzunluğunu ayarlayabilirsiniz.",
  ],
  [
    "Kurulum için teknik bilgi gerekir mi?",
    "İlk kullanımda sandık alanını ve açma düğmesini ekrandan seçmeniz yeterlidir. Uygulama kalan adımlarda size rehberlik eder.",
  ],
  [
    "Hangi işletim sisteminde çalışır?",
    "Clan Chest Collector bir Windows masaüstü uygulamasıdır.",
  ],
];

function DashboardPreview() {
  return (
    <div
      className="cc-window"
      aria-label="Clan Chest Collector uygulama önizlemesi"
    >
      <div className="cc-windowbar">
        <span />
        <span />
        <span />
        <b>Clan Chest Collector</b>
        <em>BAĞLI</em>
      </div>
      <div className="cc-tabs">
        <strong>Kontrol Paneli</strong>
        <span>Sandık Yapılandırması</span>
        <span>Klan Üyeleri</span>
        <span>Aktivite Günlüğü</span>
      </div>
      <div className="cc-dashboard">
        <div className="cc-panel cc-connection">
          <small>BAĞLANTI</small>
          <b>Hun Warriors</b>
          <span>Clan Key doğrulandı</span>
        </div>
        <div className="cc-panel cc-metric">
          <small>BULUNAN SANDIK</small>
          <b>1,284</b>
          <span>Son tarama · şimdi</span>
        </div>
        <div className="cc-panel cc-controls">
          <small>OTOMASYON</small>
          <div>
            <button>Başlat</button>
            <button>Durdur</button>
          </div>
          <span>Bekleyen yüklemeler otomatik denenir</span>
        </div>
        <div className="cc-panel cc-log">
          <small>AKTİVİTE GÜNLÜĞÜ</small>
          <code>
            <i>22:14:08</i> Sandık algılandı · Epic
            <br />
            <i>22:14:09</i> Kayıt buluta gönderildi
            <br />
            <i>22:14:10</i> Sonraki tarama hazır
          </code>
        </div>
      </div>
    </div>
  );
}

function ProductShowcase() {
  return (
    <div className="cc-product-showcase">
      <figure className="cc-product-shot cc-hero-shot">
        <img
          src="/chestTracker/userinterface.png"
          alt="Clan Chest Collector kontrol paneli"
        />
      </figure>
      <figure className="cc-product-shot cc-login-shot">
        <img
          src="/chestTracker/tracker_login.png"
          alt="Clan Key giriş ekranı"
          loading="lazy"
        />
      </figure>
      <figure className="cc-product-shot cc-members-shot">
        <img
          src="/chestTracker/clanmembers.png"
          alt="Klan üyeleri yönetim ekranı"
          loading="lazy"
        />
      </figure>
      <figure className="cc-product-shot cc-points-shot">
        <img
          src="/chestTracker/chestpoints.png"
          alt="Sandık puanları yapılandırma ekranı"
          loading="lazy"
        />
      </figure>
      <figure className="cc-product-shot cc-compact-shot">
        <img
          src="/chestTracker/chest_tracker_compact_mode.png"
          alt="Clan Chest Tracker kompakt mod görünümü"
          loading="lazy"
        />
      </figure>
    </div>
  );
}

export default function ChestCollector() {
  const { i18n } = useTranslation();
  const pageRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);
  const isEnglish = (i18n.resolvedLanguage || i18n.language).startsWith("en");

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const original = node.__ccOriginalText ?? node.textContent;
      node.__ccOriginalText = original;
      const trimmed = original.trim();
      const translated = isEnglish ? englishCopy[trimmed] : trimmed;
      if (translated) {
        node.textContent = original.replace(trimmed, translated);
      }
      node = walker.nextNode();
    }
  }, [isEnglish, openFaq]);

  useEffect(() => {
    const oldTitle = document.title;
    document.title = isEnglish
      ? "Clan Chest Collector | Automated Clan Chest Tracking"
      : "Clan Chest Collector | Otomatik Klan Sandığı Takibi";
    let meta = document.querySelector('meta[name="description"]');
    const oldDescription = meta?.content;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = isEnglish
      ? "Automatically detect and open chests, then securely track clan contributions."
      : "Sandıkları otomatik algılayın, açın ve klan katkılarını güvenle takip edin.";
    return () => {
      document.title = oldTitle;
      if (oldDescription) meta.content = oldDescription;
    };
  }, [isEnglish]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const download = (event) => {
    if (!DOWNLOAD_URL) {
      event.preventDefault();
      scrollToSection("contact");
    }
  };

  return (
    <main className="cc-page" ref={pageRef} lang={isEnglish ? "en" : "tr"}>
      <section className="cc-hero">
        <div className="cc-glow" />
        <div className="cc-wrap cc-hero-grid">
          <div className="cc-hero-copy">
            <div className="cc-eyebrow">
              <span /> Windows için klan otomasyonu
            </div>
            <h1>
              Sandık takibini otomatiğe bağla, <em>klanına odaklan.</em>
            </h1>
            <p>
              Clan Chest Collector, sandık bilgilerini ekran üzerinden otomatik
              algılar, kayıtları güvenle buluta aktarır ve klan katkılarını tek
              bir sistemde toplar.
            </p>
            <div className="cc-actions">
              <a
                className="cc-btn cc-btn-primary"
                href={DOWNLOAD_URL || "#contact"}
                onClick={download}
              >
                Uygulamayı İndir <span>→</span>
              </a>
              <button
                className="cc-btn cc-btn-ghost"
                type="button"
                onClick={() => scrollToSection("nasil-calisir")}
              >
                Nasıl Çalışır?
              </button>
              <Link className="cc-btn cc-btn-dashboard" to="/clan-chest-info">
                Klan Puanlarını Görüntüle
              </Link>
            </div>
            <p className="cc-dashboard-note">
              <strong>Toplanan veriler Klan Panelinde</strong>
              <br />
              Chest Collector tarafından toplanan sandıkları, üye katkılarını ve
              puanları Clan Web UI Key ile Klan Panelinden görüntüleyin.
            </p>
            <div className="cc-trust">
              <span>✓ Yerel kayıt güvencesi</span>
              <span>✓ Klan bazlı senkronizasyon</span>
            </div>
          </div>
          <ProductShowcase />
        </div>
      </section>

      <section className="cc-section cc-problem">
        <div className="cc-wrap">
          <div className="cc-section-head">
            <span>DAHA AZ TAKİP, DAHA ÇOK OYUN</span>
            <h2>Manuel sandık takibi artık geçmişte kaldı.</h2>
            <p>
              Ekran başında beklemek, eksik kayıtları aramak ve dağınık
              tablolarla uğraşmak yerine süreci otomasyona bırakın.
            </p>
          </div>
          <div className="cc-compare">
            <div>
              <small>MANUEL TAKİP</small>
              <h3>Sürekli kontrol, eksik kayıtlar</h3>
              <ul>
                <li>Ekran başında bekleme</li>
                <li>Tekrarlayan veri girişi</li>
                <li>Belirsiz üye katkıları</li>
              </ul>
            </div>
            <div className="active">
              <small>CLAN CHEST COLLECTOR</small>
              <h3>Tek akışta düzenli veriler</h3>
              <ul>
                <li>Otomatik algılama ve açma</li>
                <li>Güvenli bulut aktarımı</li>
                <li>Görünür klan katkıları</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cc-section" id="ozellikler">
        <div className="cc-wrap">
          <div className="cc-section-head">
            <span>ÖZELLİKLER</span>
            <h2>Sandık operasyonunuz için gereken her şey.</h2>
          </div>
          <div className="cc-features">
            {features.map(([icon, title, text]) => (
              <article key={title}>
                <div className="cc-iconbox">
                  <Icon name={icon} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cc-section cc-how" id="nasil-calisir">
        <div className="cc-wrap">
          <div className="cc-section-head">
            <span>BİRKAÇ DAKİKADA HAZIR</span>
            <h2>Bir kez ayarla, gerisini otomasyona bırak.</h2>
          </div>
          <div className="cc-steps">
            {[
              [
                "01",
                "Clan Key ile bağlan",
                "Klanınıza özel anahtar ile güvenli bağlantıyı kurun.",
              ],
              [
                "02",
                "Alanları belirle",
                "Sandık bilgisini ve açma düğmesini ekrandan seçin.",
              ],
              [
                "03",
                "Otomasyonu başlat",
                "Tarama hızını ayarlayın ve Start düğmesine basın.",
              ],
              [
                "04",
                "Katkıları takip et",
                "Kayıtları, üyeleri ve puanları düzenli takip edin.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <b>{n}</b>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cc-section cc-reliable">
        <div className="cc-wrap cc-reliable-grid">
          <div>
            <div className="cc-section-head left">
              <span>DAYANIKLI VERİ AKIŞI</span>
              <h2>Bağlantı kesilse bile kayıtlarınız güvende.</h2>
              <p>
                Gönderilemeyen kayıtlar cihazınızda sıraya alınır. Sistem uygun
                olduğunda kontrollü gruplar halinde tekrar gönderilir.
              </p>
            </div>
            <div className="cc-checks">
              <span>✓ Yerel bekleme sırası</span>
              <span>✓ Otomatik yeniden deneme</span>
              <span>✓ 50 kayıtlık kontrollü gruplar</span>
              <span>✓ Klana özel yapılandırma</span>
            </div>
          </div>
          <div className="cc-flow">
            <div>
              <Icon name="scan" />
              <span>OCR Tarama</span>
              <small>Sandık algılandı</small>
            </div>
            <i>→</i>
            <div>
              <Icon name="shield" />
              <span>Güvenli Sıra</span>
              <small>Veri koruma altında</small>
            </div>
            <i>→</i>
            <div>
              <Icon name="cloud" />
              <span>Supabase</span>
              <small>Senkronize edildi</small>
            </div>
          </div>
        </div>
      </section>

      <section className="cc-section">
        <div className="cc-wrap cc-manage">
          <div className="cc-section-head left">
            <span>KLAN YÖNETİMİ</span>
            <h2>Katkıları adil ve anlaşılır hale getirin.</h2>
            <p>
              Üyelerinizi yönetin, sandık türlerine puan verin ve skor
              dönemlerini klan düzeninize göre belirleyin.
            </p>
            <div className="cc-tags">
              <span>Üye durumu</span>
              <span>Özel puanlar</span>
              <span>Dönemsel skor</span>
            </div>
          </div>
          <div className="cc-member-card">
            <header>
              <b>Klan Üyeleri</b>
              <span>+ Üye Ekle</span>
            </header>
            {[
              ["Tarkan", "128", "Aktif"],
              ["Kurt", "94", "Aktif"],
              ["Alp", "71", "Aktif"],
            ].map((x) => (
              <div className="cc-member" key={x[0]}>
                <i>{x[0][0]}</i>
                <b>{x[0]}</b>
                <span>{x[1]} sandık</span>
                <em>{x[2]}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cc-section cc-faq" id="sss">
        <div className="cc-wrap cc-faq-grid">
          <div className="cc-section-head left">
            <span>SIK SORULAN SORULAR</span>
            <h2>Merak ettikleriniz.</h2>
            <p>Kurulum ve çalışma biçimi hakkında temel bilgiler.</p>
          </div>
          <div>
            {faqs.map(([q, a], i) => (
              <article key={q} className={openFaq === i ? "open" : ""}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {q}
                  <span>+</span>
                </button>
                <div>
                  <p>{a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cc-cta" id="contact">
        <div className="cc-wrap">
          <small>OTOMASYONA GEÇMEYE HAZIR MISINIZ?</small>
          <h2>
            Klan yönetiminde saatlerini değil,
            <br />
            <em>otomasyonu kullan.</em>
          </h2>
          <p>
            Sandık kayıtlarını otomatikleştirin ve klan katkılarını tek merkezde
            toplayın.
          </p>
          <div className="cc-actions">
            <a
              className="cc-btn cc-btn-primary"
              href={DOWNLOAD_URL || CONTACT_URL}
            >
              Uygulamayı İndir <span>→</span>
            </a>
            <Link className="cc-btn cc-btn-dashboard" to="/clan-chest-info">
              Klan Puanlarını Görüntüle
            </Link>
            <a className="cc-btn cc-btn-ghost" href={CONTACT_URL}>
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
      <footer className="cc-footer">
        <div className="cc-wrap">
          <div>
            <b>
              <span>◆</span> Clan Chest Collector
            </b>
            <p>Otomatik sandık takibi ve klan katkı yönetimi.</p>
          </div>
          <nav>
            <button type="button" onClick={() => scrollToSection("ozellikler")}>
              Özellikler
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("nasil-calisir")}
            >
              Nasıl Çalışır?
            </button>
            <button type="button" onClick={() => scrollToSection("sss")}>
              SSS
            </button>
          </nav>
          <small>
            © {new Date().getFullYear()} Clan Chest Collector. İlgili oyun
            şirketleriyle bağlantılı değildir.
          </small>
        </div>
      </footer>
    </main>
  );
}
