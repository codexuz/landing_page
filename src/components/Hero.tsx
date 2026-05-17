import { ArrowRight, Play, BookOpen, Star, Award, Code } from 'lucide-react';
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

  const floatVariants = (duration: number, delay: number, yRange: number = 15): any => ({
    animate: {
      y: [0, -yRange, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay: delay,
      },
    },
  });

  return (
    <section id="home" className="hero-section">
      {/* Decorative Glow Blobs */}
      <div className="glow-blob glow-blob-1"></div>
      <div className="glow-blob glow-blob-2"></div>
      <div className="grid-overlay"></div>

      <div className="container hero-grid">
        {/* Hero Left: Animated Text & CTAs */}
        <motion.div 
          className="hero-text-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge-wrap" variants={itemVariants}>
            <span className="badge badge-premium">
              <Star size={12} className="star-icon" />
              Toshkentdagi Eng Premium Markaz
            </span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            IMPULSE STUDY - <br />
            <span className="gradient-text">WHERE A BRIGHT FUTURE STARTS</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Chet tillari, Xalqaro sertifikatlar (IELTS, SAT, CEFR) va zamonaviy IT fanlarini mukammal o'rganing. Kelajak yetakchilarini biz tarbiyalaymiz!
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants}>
            <a href="#courses" className="glow-btn hero-btn-primary">
              Kurslarni Ko'rish
              <ArrowRight size={18} />
            </a>
            <a href="#booking" className="hero-btn-secondary glass">
              <Play size={16} fill="currentColor" />
              Bepul Darsga Yozilish
            </a>
          </motion.div>

          {/* Quick trust proofs */}
          <motion.div className="hero-trust-proofs" variants={itemVariants}>
            <div className="trust-item">
              <div className="avatar-group">
                <div className="avatar">A</div>
                <div className="avatar">B</div>
                <div className="avatar">C</div>
                <div className="avatar-plus">+9k</div>
              </div>
              <p className="trust-text">
                <strong>11,590+</strong> muvaffaqiyatli talabalar
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Right: Interactive Animations with floating elements */}
        <div className="hero-visual-content">
          <div className="hero-main-circle">
            {/* Inner rotating gradient orbit */}
            <motion.div 
              className="hero-circle-orbit"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" as const }}
            ></motion.div>
            
            {/* Center Visual: premium abstract book or student model mock */}
            <div className="hero-circle-center glass">
              <BookOpen size={64} className="center-icon" />
              <div className="pulse-ring"></div>
              <div className="pulse-ring ring-2"></div>
            </div>

            {/* Floating Course Badges */}
            <motion.div 
              className="float-badge float-badge-1 glass"
              variants={floatVariants(6, 0)}
              animate="animate"
            >
              <span className="badge-icon badge-orange">IELTS</span>
              <div className="badge-info">
                <span className="badge-name">IELTS 8.5</span>
                <span className="badge-desc">Xalqaro daraja</span>
              </div>
            </motion.div>

            <motion.div 
              className="float-badge float-badge-2 glass"
              variants={floatVariants(8, 1, 20)}
              animate="animate"
            >
              <Code size={18} className="badge-icon badge-blue-icon" />
              <div className="badge-info">
                <span className="badge-name">Dasturlash</span>
                <span className="badge-desc">Frontend & Python</span>
              </div>
            </motion.div>

            <motion.div 
              className="float-badge float-badge-3 glass"
              variants={floatVariants(7, 2, 12)}
              animate="animate"
            >
              <Award size={18} className="badge-icon badge-green-icon" />
              <div className="badge-info">
                <span className="badge-name">SAT & CEFR</span>
                <span className="badge-desc">C1 & 1500+</span>
              </div>
            </motion.div>

            <motion.div 
              className="float-badge float-badge-4 glass"
              variants={floatVariants(9, 0.5, 18)}
              animate="animate"
            >
              <span className="badge-icon badge-pink">KIDS</span>
              <div className="badge-info">
                <span className="badge-name">Kids English</span>
                <span className="badge-desc">O'yin orqali</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
