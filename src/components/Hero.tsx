import { ArrowRight, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        position: 'relative',
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* High-fidelity overlay to keep text extremely crisp & readable */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(9, 9, 11, 0.72) 0%, rgba(9, 9, 11, 0.88) 100%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      {/* Decorative Glow Blobs */}
      <div className="glow-blob glow-blob-1" style={{ zIndex: 1 }}></div>
      <div className="glow-blob glow-blob-2" style={{ zIndex: 1 }}></div>
      <div className="grid-overlay" style={{ zIndex: 1 }}></div>

      <div className="container hero-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '120px 0' }}>
        {/* Hero Left: Animated Text & CTAs */}
        <motion.div
          className="hero-text-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', zIndex: 2 }}
        >
          <motion.div className="hero-badge-wrap" variants={itemVariants} style={{ marginBottom: '16px' }}>
            <span className="badge badge-premium">
              <Star size={12} className="star-icon" />
              Haqiqiy ingliz muhiti
            </span>
          </motion.div>

          <motion.h1 
            className="hero-title" 
            variants={itemVariants}
            style={{ 
              fontSize: 'clamp(32px, 6vw, 64px)', 
              fontWeight: '800', 
              lineHeight: '1.2', 
              color: '#ffffff',
              marginBottom: '20px'
            }}
          >
            IMPULSE STUDY - <br />
            <span className="gradient-text">WHERE A BRIGHT FUTURE STARTS</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle" 
            variants={itemVariants}
            style={{ 
              fontSize: 'clamp(15px, 2.5vw, 18px)', 
              color: 'rgba(255,255,255,0.85)', 
              lineHeight: '1.6', 
              maxWidth: '640px', 
              marginBottom: '32px'
            }}
          >
            Chet tillari, Xalqaro sertifikatlar (IELTS, SAT, CEFR) va zamonaviy IT fanlarini mukammal o'rganing. Kelajak yetakchilarini biz tarbiyalaymiz!
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#courses" className="glow-btn hero-btn-primary" style={{ textDecoration: 'none' }}>
              Kurslarni Ko'rish
              <ArrowRight size={18} />
            </a>
            <a href="#booking" className="hero-btn-secondary glass" style={{ textDecoration: 'none' }}>
              <Play size={16} fill="currentColor" />
              Bepul Darsga Yozilish
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
