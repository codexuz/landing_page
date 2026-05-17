import { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'uz' | 'en'>('uz');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'uz' ? 'Bosh sahifa' : 'Home', href: '#home' },
    { name: lang === 'uz' ? 'Kurslar' : 'Courses', href: '#courses' },
    { name: lang === 'uz' ? 'Ilova' : 'App', href: '#student-app' },
    { name: lang === 'uz' ? 'Natijalar' : 'Results', href: '#results' },
    { name: lang === 'uz' ? 'Ustozlar' : 'Teachers', href: '#teachers' },
    { name: lang === 'uz' ? 'FAQ' : 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`navbar-container ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container navbar-content">
        {/* Logo */}
        <a href="#home" className="logo-area" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.png" alt="Impulse Study Logo" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
          <span className="logo-prefix" style={{ color: 'var(--text-primary)', marginLeft: '4px' }}>Impulse</span>
          <span className="logo-suffix" style={{ color: 'var(--primary)', fontWeight: '800' }}>Study</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-link">
              {link.name}
              <span className="nav-link-dot"></span>
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Language Switcher Dropdown */}
          <div className="lang-dropdown-wrapper hide-on-mobile" style={{ position: 'relative' }}>
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`action-btn ${langDropdownOpen ? 'active' : ''}`}
              style={{ padding: '0 12px', width: 'auto', gap: '6px' }}
              title="Change Language"
            >
              <Globe size={18} />
              <span className="lang-text">{lang === 'uz' ? "UZ" : "EN"}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '2px', transition: 'transform var(--transition-fast)', transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            
            <AnimatePresence>
              {langDropdownOpen && (
                <>
                  <div 
                    onClick={() => setLangDropdownOpen(false)} 
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 998 }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="lang-dropdown-menu glass"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      right: 0,
                      zIndex: 999,
                      minWidth: '120px',
                      borderRadius: '8px',
                      padding: '4px',
                      boxShadow: 'var(--shadow-md)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px'
                    }}
                  >
                    <button
                      onClick={() => {
                        setLang('uz');
                        setLangDropdownOpen(false);
                      }}
                      className={`lang-option-btn ${lang === 'uz' ? 'active' : ''}`}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        textAlign: 'left',
                        fontSize: '14px',
                        fontWeight: lang === 'uz' ? '600' : '400',
                        color: lang === 'uz' ? 'var(--primary)' : 'var(--text-secondary)',
                        background: lang === 'uz' ? 'rgba(0, 122, 255, 0.08)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}
                    >
                      <span>O'zbekcha</span>
                      {lang === 'uz' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>}
                    </button>
                    <button
                      onClick={() => {
                        setLang('en');
                        setLangDropdownOpen(false);
                      }}
                      className={`lang-option-btn ${lang === 'en' ? 'active' : ''}`}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        textAlign: 'left',
                        fontSize: '14px',
                        fontWeight: lang === 'en' ? '600' : '400',
                        color: lang === 'en' ? 'var(--primary)' : 'var(--text-secondary)',
                        background: lang === 'en' ? 'rgba(0, 122, 255, 0.08)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}
                    >
                      <span>English</span>
                      {lang === 'en' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>}
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme} 
            className="action-btn hide-on-mobile"
            title="Toggle Light/Dark Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Call to Action */}
          <a href="#booking" className="glow-btn nav-cta">
            {lang === 'uz' ? "Kursga yozilish" : "Enroll Now"}
            <ArrowRight size={16} />
          </a>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="mobile-trigger"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-drawer"
          >
            <div className="mobile-drawer-content">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mobile-drawer-actions">
                <button 
                  onClick={() => {
                    setLang(lang === 'uz' ? 'en' : 'uz');
                    setIsOpen(false);
                  }}
                  className="mobile-action-btn"
                >
                  <Globe size={18} />
                  <span>{lang === 'uz' ? "English" : "O'zbekcha"}</span>
                </button>

                <button 
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  className="mobile-action-btn"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  <span>{isDark ? "Kunduzgi rejim" : "Tungi rejim"}</span>
                </button>

                <a 
                  href="#booking" 
                  className="glow-btn mobile-cta"
                  onClick={() => setIsOpen(false)}
                >
                  {lang === 'uz' ? "Kursga yozilish" : "Enroll Now"}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
