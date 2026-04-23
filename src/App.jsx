import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Wrench, ShieldCheck, ThumbsUp, Smartphone, Battery, Cpu, Phone, MapPin, ArrowRight, Menu, X,
  Plug, Volume2, Droplets, ToggleRight, Unlock, Camera, ChevronLeft, ChevronRight
} from 'lucide-react';
import { content } from './content';
import './App.css';
import logo from './assets/logo.png';
import heroBg from './assets/hero-bg.png';

// ==== BRAND ICONS (โลโก้แอพจริง) ====
const FacebookIcon = ({ size = 24, color = "#1877F2" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 24, color = "#25D366" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LineIcon = ({ size = 24, color = "#06C755" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596a.626.626 0 01-.199.031c-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595a.62.62 0 01.194-.033c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
  </svg>
);

// ==== ERROR BOUNDARY ====
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: "'Kanit', sans-serif",
          textAlign: 'center',
          padding: '40px 20px',
          background: '#FAFAFA'
        }}>
          <h1 style={{ fontSize: '2rem', color: '#FF7A00', marginBottom: '20px' }}>
            ⚠️ เกิดข้อผิดพลาดบางอย่าง
          </h1>
          <p style={{ color: '#777', marginBottom: '30px', maxWidth: '500px' }}>
            กรุณารีเฟรชหน้าเว็บใหม่อีกครั้ง หากปัญหายังไม่หาย กรุณาติดต่อเราผ่านช่องทางอื่น
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#FF7A00',
              color: '#fff',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'Kanit', sans-serif"
            }}
          >
            รีเฟรชหน้าเว็บ
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// ==== HOME PAGE COMPONENT ====
function Home({ t }) {
  const location = useLocation();

  // === LIGHTBOX GALLERY STATE (ลบตรงนี้ถ้าไม่ต้องการ Lightbox) ===
  const [lightbox, setLightbox] = useState({ images: [], index: 0, open: false });
  const openLightbox = (images, index = 0) => setLightbox({ images: Array.isArray(images) ? images : [images], index, open: true });
  const closeLightbox = () => setLightbox({ images: [], index: 0, open: false });
  const nextImage = (e) => { e && e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index + 1) % prev.images.length })); };
  const prevImage = (e) => { e && e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length })); };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox.open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox.open]);

  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is ready after navigation
      const timer = setTimeout(() => {
        const elem = document.getElementById(location.hash.slice(1));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.68)), url(${heroBg})` }}>
        <div className="container">
          <h1>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a href="tel:0930989951" className="btn-primary" aria-label={t.hero.callBtn}>
              {t.hero.callBtn} <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn-secondary" aria-label={t.hero.serviceBtn}>{t.hero.serviceBtn}</a>
          </div>
        </div>
      </section>

      <section id="features" className="section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">{t.features.title}</h2>
            <p className="section-subtitle">{t.features.subtitle}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><ThumbsUp size={32} /></div>
              <h3>{t.features.card1.title}</h3>
              <p>{t.features.card1.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Wrench size={32} /></div>
              <h3>{t.features.card2.title}</h3>
              <p>{t.features.card2.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><ShieldCheck size={32} /></div>
              <h3>{t.features.card3.title}</h3>
              <p>{t.features.card3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>
          <div className="services-grid">
            {t.services.items.map((srv, idx) => {
              const icons = [Smartphone, Battery, Cpu, Plug, Volume2, Droplets, ToggleRight, Unlock, Camera];
              const IconComp = icons[idx] || Wrench;
              return (
                <div key={idx} className="service-card">
                  <IconComp size={40} className="service-icon" aria-hidden="true" />
                  <div>
                    <h4>{srv.title}</h4>
                    <p className="text-light">{srv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">{t.portfolio.title}</h2>
            <p className="section-subtitle">{t.portfolio.subtitle}</p>
          </div>
          <div className="portfolio-grid">
            {t.portfolio.items.map((item) => (
              <div key={item.id} className="portfolio-card">
                {item.images && item.images.length > 0 ? (
                  <div className={`portfolio-images-grid grid-${item.images.length}`}>
                    {item.images.map((url, i) => (
                      <img key={i} src={url} alt={`${item.title} ${i + 1}`} className="portfolio-img" onClick={() => openLightbox(item.images, i)} style={{ cursor: 'pointer' }} />
                    ))}
                  </div>
                ) : item.img ? (
                  <img src={item.img} alt={item.title} className="portfolio-img" onClick={() => openLightbox(item.img)} style={{ cursor: 'pointer' }} />
                ) : (
                  <div className="portfolio-img-placeholder">
                    [ กล่องสำหรับใส่รูปรีวิวงานซ่อม รูปที่ {item.id} ]
                  </div>
                )}
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding services">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info-wrap">
              <h2 className="section-title" style={{ color: 'var(--white)' }}>{t.contact.title}</h2>
              <p style={{ marginBottom: '30px' }}>{t.contact.subtitle}</p>

              <div className="contact-item">
                <Phone size={24} aria-hidden="true" style={{ color: 'var(--primary)' }} />
                <div>
                  <strong>{t.contact.phone}</strong>
                  <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                    <a href="tel:0930989951" style={{ color: 'inherit' }} aria-label="โทร 093-0989951">093-0989951</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <LineIcon size={24} />
                <div>
                  <strong>{t.contact.line}</strong>
                  <div>0930989951 (แอดจากเบอร์โทร)</div>
                  <div>
                    <a href="https://line.me/ti/p/eflE6CVl86" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', fontSize: '0.95rem' }}>
                      {t.contact.lineLink}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <WhatsAppIcon size={24} />
                <div>
                  <strong>{t.contact.whatsapp}</strong>
                  <div>
                    <a href="https://wa.me/66930989951" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      0930989951
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <FacebookIcon size={24} />
                <div>
                  <strong>{t.contact.facebook}</strong>
                  <div>
                    <a href="https://www.facebook.com/MaewsomPhone" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }} aria-label="Facebook Page แมวส้มซ่อมมือถือ">
                      {t.contact.fbName}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={24} aria-hidden="true" style={{ color: 'var(--primary)' }} />
                <div>
                  <strong>{t.contact.map}</strong>
                  <div>
                    <a href="https://maps.app.goo.gl/Y9kCcuR7SFgDsDRL7" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }} aria-label="ดูตำแหน่งร้านบน Google Maps">
                      {t.contact.mapLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="map-container"
              role="region"
              aria-label="แผนที่ตำแหน่งร้านแมวส้มซ่อมมือถือ"
            >
              <iframe
                src="https://maps.google.com/maps?q=%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B8%8B%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%96%E0%B8%B7%E0%B8%AD&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - แมวส้มซ่อมมือถือ Location">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* === LIGHTBOX GALLERY MODAL (ลบ block นี้ทั้งหมดถ้าไม่ต้องการ Lightbox) === */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}
          onTouchStart={(e) => { e.currentTarget._touchStartX = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = e.currentTarget._touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) { diff > 0 ? nextImage() : prevImage(); }
          }}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="ปิดรูปภาพ">
            <X size={24} />
          </button>

          {lightbox.images.length > 1 && (
            <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="รูปก่อนหน้า">
              <ChevronLeft size={32} />
            </button>
          )}

          <img src={lightbox.images[lightbox.index]} alt="ภาพขยาย" className="lightbox-content" onClick={(e) => e.stopPropagation()} />

          {lightbox.images.length > 1 && (
            <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="รูปถัดไป">
              <ChevronRight size={32} />
            </button>
          )}

          {lightbox.images.length > 1 && (
            <div className="lightbox-counter">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}

// ==== ARTICLES PAGE COMPONENT ====
function Articles({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="articles-page container">
      <div className="text-center">
        <h2 className="section-title">{t.articles.title}</h2>
        <p className="section-subtitle">{t.articles.subtitle}</p>
      </div>

      <div className="article-list">
        {t.articles.items.map(art => (
          <article key={art.id} className="article-card">
            <div className="article-img-placeholder">
              [ รูปประกอบบทความที่ {art.id} ]
            </div>
            <div className="article-content">
              <span className="article-date">{art.date}</span>
              <h3>{art.title}</h3>
              <p>{art.content}</p>
              <span className="read-more read-more-disabled" aria-label={t.articles.readMore}>
                {t.articles.readMore} <ArrowRight size={16} />
              </span>
            </div>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Link to="/" className="btn-secondary" aria-label={t.articles.backBtn}>{t.articles.backBtn}</Link>
      </div>
    </section>
  );
}

// ==== MAIN LAYOUT ====
function MainLayout() {
  const [lang, setLang] = useState('th');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang];

  // Update document lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang === 'th' ? 'th' : 'en';
  }, [lang]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navigate = useNavigate();

  const handleNavClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // SPA-friendly hash navigation: ไม่ให้เกิด full reload เมื่อกดลิงก์จาก /articles
  const handleHashNavClick = useCallback((e, hash) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const isHome = window.location.pathname === '/';
    if (isHome) {
      const elem = document.getElementById(hash);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + hash);
    }
  }, [navigate]);

  const toggleLang = () => {
    setLang(lang === 'th' ? 'en' : 'th');
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="container nav-container">
          <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }} aria-label="หน้าแรก แมวส้มซ่อมมือถือ">
            <img src={logo} alt="แมวส้มซ่อมมือถือ Logo" width="40" height="40" />
            <span style={{ color: 'var(--primary)' }}>
              {lang === 'th' ? "แมวส้มซ่อมมือถือ" : "Orange Cat PhoneFix"}
            </span>
          </Link>

          {/* Hamburger Button (mobile only) */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Overlay (mobile only) */}
          {mobileMenuOpen && (
            <div
              className="nav-overlay"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Navigation Links */}
          <div className={`nav-links ${mobileMenuOpen ? 'nav-links--open' : ''}`}>
            <a href="/#home" onClick={(e) => handleHashNavClick(e, 'home')}>{t.nav.home}</a>
            <a href="/#features" onClick={(e) => handleHashNavClick(e, 'features')}>{t.nav.features}</a>
            <a href="/#services" onClick={(e) => handleHashNavClick(e, 'services')}>{t.nav.services}</a>
            <a href="/#portfolio" onClick={(e) => handleHashNavClick(e, 'portfolio')}>{t.nav.portfolio}</a>
            {/* บทความ — ซ่อนไว้ก่อน เปิดใช้งานโดยลบ comment ออก */}
            {/* <Link to="/articles" onClick={handleNavClick}>{t.nav.articles}</Link> */}
            <a href="/#contact" className="contact-btn" onClick={(e) => handleHashNavClick(e, 'contact')}>{t.nav.contact}</a>

            <button
              onClick={toggleLang}
              className="lang-switch-btn"
              aria-label={lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
            >
              {t.nav.langSwitch}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/articles" element={<Articles t={t} />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {t.footer}</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
