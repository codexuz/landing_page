import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z"/>
          <path d="M22 2 11 13"/>
        </svg>
      ), 
      href: "https://t.me/impulse_lc", 
      color: "#229ED9", 
      name: "Telegram" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ), 
      href: "https://instagram.com/impulsestudy_lc", 
      color: "#E1306C", 
      name: "Instagram" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
          <polygon points="10 15 15 12 10 9 10 15"/>
        </svg>
      ), 
      href: "https://youtube.com/@impulse_lc", 
      color: "#FF0000", 
      name: "YouTube" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ), 
      href: "https://facebook.com/impulse_lc", 
      color: "#1877F2", 
      name: "Facebook" 
    }
  ];

  return (
    <footer className="footer-container">
      {/* Upper Footer section */}
      <div className="container footer-upper-grid">
        {/* Brand Information */}
        <div className="footer-brand-column">
          <a href="#home" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/logo.png" alt="Impulse Study Logo" style={{ height: '32px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            <span className="logo-prefix" style={{ color: 'white', marginLeft: '4px' }}>Impulse</span>
            <span className="logo-suffix" style={{ color: 'var(--primary)', fontWeight: '800' }}>Study</span>
          </a>
          <p className="footer-summary">
            Xalqaro standartlar asosida chet tillari, maktab fanlari va zamonaviy IT kasblarini mukammal o'rgatuvchi yetakchi ta'lim markazi. Biz bilan kelajagingizni bugundan boshlang!
          </p>
          <div className="footer-socials-row">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-glow-icon"
                style={{ '--glow-color': social.color } as React.CSSProperties}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-column">
          <h3 className="footer-title">Tezkor havolalar</h3>
          <ul className="footer-links-list">
            <li><a href="#home">Bosh sahifa</a></li>
            <li><a href="#courses">O'quv kurslari</a></li>
            <li><a href="#results">O'quvchilar natijalari</a></li>
            <li><a href="#teachers">Bizning ustozlarimiz</a></li>
            <li><a href="#faq">Tez-tez savollar</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact-column">
          <h3 className="footer-title">Bog'lanish</h3>
          <ul className="footer-contact-list">
            <li className="contact-list-item">
              <Phone size={18} className="contact-icon color-orange" />
              <div className="contact-texts">
                <a href="tel:+998712003030" className="contact-phone-link">+998 (95) 5252-99-66</a>
              </div>
            </li>
            <li className="contact-list-item">
              <MapPin size={18} className="contact-icon color-blue" />
              <div className="contact-texts">
                <span>Sergeli-V dahasi, 2A, Sergeli tumani, Toshkent</span>
                <span>Mo'ljal: Sergeli metro bekatlari yaqinida</span>
              </div>
            </li>
            <li className="contact-list-item">
              <Mail size={18} className="contact-icon color-green" />
              <div className="contact-texts">
                <a href="mailto:impulsestudylc@gmail.com" className="contact-email-link">impulsestudylc@gmail.com</a>
                <span>Savollar va hamkorlik uchun</span>
              </div>
            </li>
            <li className="contact-list-item">
              <Clock size={18} className="contact-icon color-purple" />
              <div className="contact-texts">
                <span>Dushanba - Shanba</span>
                <span>09:00 dan 20:00 gacha darslar</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Premium Styled Map Mock */}
        <div className="footer-map-column">
          <h3 className="footer-title">Bizning manzil</h3>
          <div className="footer-map-mock glass">
            {/* Styled interactive SVG Map background */}
            <div className="map-mock-bg">
              <svg width="100%" height="100%" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated streets */}
                <path d="M 0,20 L 200,20" stroke="rgba(255,255,255,0.06)" strokeWidth="4" fill="none" />
                <path d="M 0,80 L 200,80" stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none" /> {/* Bunyodkor highway */}
                <path d="M 60,0 L 60,120" stroke="rgba(255,255,255,0.06)" strokeWidth="5" fill="none" />
                <path d="M 140,0 L 140,120" stroke="rgba(255,255,255,0.06)" strokeWidth="3" fill="none" />
                
                {/* Metro station mock */}
                <rect x="130" y="72" width="20" height="15" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                <text x="140" y="82" fontSize="6" textAnchor="middle" fill="#3B82F6" fontWeight="bold">M</text>
                
                {/* Center HQ pointer */}
                <circle cx="80" cy="50" r="4" fill="#007AFF" />
                <circle cx="80" cy="50" r="12" fill="none" stroke="#007AFF" strokeWidth="1.5" opacity="0.5" className="radar-circle-1" />
                <circle cx="80" cy="50" r="24" fill="none" stroke="#007AFF" strokeWidth="1" opacity="0.3" className="radar-circle-2" />
              </svg>
              {/* Floating radar pulse in CSS */}
              <div className="map-pin-pulse"></div>
            </div>
            
            <div className="map-info-footer">
              <div className="map-info-texts">
                <strong>Impulse Study Filiali</strong>
                <span>Sergeli-V dahasi, 2A</span>
              </div>
              <a 
                href="https://yandex.com/maps/?text=41.223432,69.209021" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-open-link"
              >
                Yandex Xaritada ochish
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer section */}
      <div className="footer-lower-border">
        <div className="container footer-lower-content">
          <p>© {currentYear} IMPULSE STUDY O'quv Markazi. Barcha huquqlar himoyalangan.</p>
          <div className="footer-terms-links">
            <a href="#faq">Foydalanish shartlari</a>
            <span className="terms-separator">|</span>
            <a href="#faq">Maxfiylik siyosati</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
