import { useEffect, useState, useRef } from 'react';
import { Award, Users, BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const CountUpNumber = ({ value, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export default function Stats() {
  const statsData = [
    {
      icon: <Award size={32} className="stat-icon-color-orange" />,
      number: 10,
      suffix: "+",
      label: "Yillik Tajriba",
      desc: "Ta'lim sohasidagi ishonch va sifat",
    },
    {
      icon: <Users size={32} className="stat-icon-color-blue" />,
      number: 11590,
      suffix: "+",
      label: "Muvaffaqiyatli Bitiruvchi",
      desc: "Dunyo bo'ylab oliygohlarga kirganlar",
    },
    {
      icon: <BookOpen size={32} className="stat-icon-color-green" />,
      number: 1739,
      suffix: "+",
      label: "7.0+ IELTS Natijalarimiz",
      desc: "Har bir o'quvchidan maksimal ko'rsatkich",
    },
  ];

  const partners = [
    "IELTS British Council Gold",
    "Cambridge Assessment English",
    "CEFR State Testing Center",
    "Pearson VUE Authorized",
    "ETS TOEFL Certified",
    "Oxford Quality School Partner"
  ];

  return (
    <section className="stats-section">
      <div className="container">
        {/* Statistics Grid */}
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="stat-card glass"
            >
              <div className="stat-icon-wrap">{stat.icon}</div>
              <div className="stat-number">
                <CountUpNumber value={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-desc">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Partners Sliding Ticker */}
      <div className="partners-ticker-container">
        <div className="partners-title-wrap container">
          <span className="partners-label">Rasmiy Hamkorlarimiz</span>
          <ChevronRight size={16} className="partners-arrow" />
        </div>
        <div className="ticker-wrap">
          <div className="ticker">
            {/* Double the list for infinite seamless effect */}
            {partners.concat(partners).map((partner, idx) => (
              <span key={idx} className="ticker-item">
                <span className="ticker-bullet"></span>
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
