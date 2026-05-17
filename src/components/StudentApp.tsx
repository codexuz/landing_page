import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Headphones, Award, Star, Film } from 'lucide-react';

type TabType = 'profile' | 'attendance' | 'podcasts' | 'library';

const imageMapping: Record<TabType, string> = {
  profile: '/mobile/1.png',
  attendance: '/mobile/5.png',
  podcasts: '/mobile/3.png',
  library: '/mobile/2.png',
};

export default function StudentApp() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const autoPlayTimerRef = useRef<any>(null);

  const appFeatures = [
    {
      id: 'profile',
      icon: <Award size={20} />,
      title: "Shaxsiy reyting & Profil",
      desc: "Gamifikatsiya tizimi orqali XP ochkolar yig'ing, guruhda peshqadam bo'ling va sovrinlar yutib oling."
    },
    {
      id: 'attendance',
      icon: <Calendar size={20} />,
      title: "Aqlli Davomat nazorati",
      desc: "Darsga kelgan-ketgan vaqtlaringiz va QR-kod orqali avtomatik clock-in/out hisobotlarini kuzatib boring."
    },
    {
      id: 'podcasts',
      icon: <Headphones size={20} />,
      title: "Podkastlar & Maqolalar",
      desc: "Qiziqarli inglizcha podkastlarni tinglang va foydali ilmiy-badiiy maqolalarni o'qib, lug'atingizni boyiting."
    },
    {
      id: 'library',
      icon: <Film size={20} />,
      title: "Kino & Kitoblar kutubxonasi",
      desc: "Ingliz tilidagi kinolar, subtitrlar, badiiy audio-kitoblar va o'quv materiallari kutubxonasiga bepul kirish."
    }
  ];

  // Helper to start the auto-play carousel
  const startAutoPlay = () => {
    stopAutoPlay();
    const tabs: TabType[] = ['profile', 'attendance', 'podcasts', 'library'];
    autoPlayTimerRef.current = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4000); // changes every 4 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  // Start auto-play on mount
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // Handle manual tab changes: immediately switch tab and reset the auto-play timer
  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    startAutoPlay(); // resets the timer so it doesn't jump immediately
  };

  return (
    <section id="student-app" className="section student-app-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob glow-blob-4"></div>
      
      <div className="container student-app-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
        
        {/* Left Side: Dynamic Text & Feature triggers */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="app-text-content"
        >
          <span className="section-tag">Impulse Digital Ecosystem</span>
          <h2 className="section-title">Impulse Student Ilovasi</h2>
          <p className="section-desc" style={{ marginBottom: '30px' }}>
            Biz ta'lim jarayonini to'liq raqamlashtirdik! Smartfoningiz orqali davomat, to'lovlar, mock testlar natijalari va shaxsiy reytingingizni real vaqtda kuzating.
          </p>

          {/* Interactive Feature Selectors */}
          <div className="app-selectors-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '35px' }}>
            {appFeatures.map((feature) => (
              <div 
                key={feature.id}
                onClick={() => handleTabClick(feature.id as TabType)}
                className={`app-selector-card glass ${activeTab === feature.id ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: activeTab === feature.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  background: activeTab === feature.id ? 'rgba(0, 122, 255, 0.06)' : 'var(--glass-bg)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div 
                  className="selector-icon-wrap" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: activeTab === feature.id ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                    color: activeTab === feature.id ? 'white' : 'var(--primary)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {feature.icon}
                </div>
                <div className="selector-texts">
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>{feature.title}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Download badges block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="app-download-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {/* App Store Button */}
              <a 
                href="https://apps.apple.com/kz/app/impulse-student-app/id6757120304" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-download-store-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#09090B',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  transition: 'all var(--transition-fast)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <svg viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48-20.1-83.3-19.4-46.6.7-89.3 27.3-113.1 68.8-48.7 84.8-12.4 209.6 34.6 277.5 23 33.3 50.1 70.3 86.1 69 34.8-1.3 48-22.4 89.9-22.4 41.1 0 53 22.4 89.3 21.6 36.9-.7 60.9-33.3 83.7-66.8 26.2-38.5 37.1-75.8 37.4-77.7-.8-.4-72.3-27.8-72.4-110.1zM290.4 86.1c16.2-20 26.9-47.8 23.9-75.6-23.9 1-53 16-70.1 36-15.1 17.5-28.2 45.5-24.4 72.8 26.6 2 54.4-13.2 70.6-33.2z"/>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.2' }}>
                  <span style={{ fontSize: '9px', textTransform: 'uppercase', color: '#888888', letterSpacing: '0.05em' }}>Yuklab oling</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#FFFFFF' }}>App Store</span>
                </div>
              </a>

              {/* Play Market Button */}
              <a 
                href="https://play.google.com/store/apps/details?id=edu.impulse.uz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-download-store-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#09090B',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  transition: 'all var(--transition-fast)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <svg viewBox="0 0 512 512" width="18" height="18" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 62.5-35.8c13-7.5 28.3-7.5 41.3 0 13.1 7.5 21.7 20 21.7 35.8 0 15.8-8.6 28.3-21.7 35.8c-1.9 1.1-3.8 2.1-5.7 3.2zm-127.1 52.1L104.6 499l220.7-126.7 60.1-60.1-60.3-34.5z"/>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.2' }}>
                  <span style={{ fontSize: '9px', textTransform: 'uppercase', color: '#888888', letterSpacing: '0.05em' }}>Yuklab oling</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#FFFFFF' }}>Google Play</span>
                </div>
              </a>
            </div>
            
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ display: 'flex', color: 'var(--primary)' }}>
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>5.0 ★ Real talabalar reytingi</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: High-fidelity Image Showcase with indicators below */}
        <div 
          className="app-carousel-container"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', position: 'relative', justifySelf: 'center' }}
        >
          {/* Decorative radial gradients */}
          <div style={{ position: 'absolute', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(0,122,255,0.15) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 0, top: '10%' }}></div>

          {/* Screenshot Presentation Card */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              width: '280px',
              height: '560px',
              borderRadius: '24px',
              background: '#09090B',
              border: '1px solid var(--border-color)',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={imageMapping[activeTab]}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                alt={activeTab}
              />
            </AnimatePresence>
          </motion.div>

          {/* Carousel Indicators (Dots) */}
          <div 
            className="carousel-indicators" 
            style={{ 
              display: 'flex', 
              gap: '8px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              zIndex: 2
            }}
          >
            {appFeatures.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => handleTabClick(feature.id as TabType)}
                style={{
                  width: activeTab === feature.id ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: activeTab === feature.id ? 'var(--primary)' : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all var(--transition-fast)'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Decorative circles */}
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0,122,255,0.1)', filter: 'blur(20px)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: '40px', right: '-30px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(168,85,247,0.08)', filter: 'blur(30px)', zIndex: 0 }}></div>
        </div>

      </div>
    </section>
  );
}
