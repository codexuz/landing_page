import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Quote, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StudentResult {
  name: string;
  avatarText: string;
  avatarColor: string;
  achievement: string;
  subAchievement: string;
  badgeType: 'orange' | 'blue' | 'green';
  subject: string;
  quote: string;
  destination: string;
}

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const results: StudentResult[] = [
    {
      name: "Shahzod Alimov",
      avatarText: "SA",
      avatarColor: "#007AFF",
      achievement: "IELTS 8.5",
      subAchievement: "Reading 9.0, Listening 9.0",
      badgeType: "orange",
      subject: "IELTS",
      quote: "Impulse Study darslari shunchaki dars emas, bu butun boshli muhit! O'qituvchilarning qo'llab-quvvatlashi va IELTS Mock imtihonlari menga shu natijani berdi.",
      destination: "Harvard University admission"
    },
    {
      name: "Bobur Yuldashev",
      avatarText: "BY",
      avatarColor: "#3B82F6",
      achievement: "SAT 1540",
      subAchievement: "Math: 800 / English: 740",
      badgeType: "blue",
      subject: "SAT",
      quote: "Matematika va ingliz tilidagi barcha yashirin metodlarni shu yerda o'rgandim. SAT bo'yicha to'liq qo'llanmalar juda yordam berdi.",
      destination: "MIT admission scholarship"
    },
    {
      name: "Sabina Rustamova",
      avatarText: "SR",
      avatarColor: "#10B981",
      achievement: "CEFR C1",
      subAchievement: "National Certificate 92%",
      badgeType: "green",
      subject: "CEFR English",
      quote: "Milliy sertifikatga tayyorlanish jarayonida grammatika va yozish ko'nikmalarimni aqlbovar qilmas darajada kuchaytirdim. Rahmat Impulse Study!",
      destination: "State University, Grant"
    },
    {
      name: "Jasur Bekzodov",
      avatarText: "JB",
      avatarColor: "#8B5CF6",
      achievement: "IT Placement",
      subAchievement: "Junior Web Developer",
      badgeType: "blue",
      subject: "Dasturlash",
      quote: "Dasturlash darslari juda amaliy va loyihalarga boy bo'ldi. Kursni tugatishim bilanoq EPAM tizimida amaliyot boshladim.",
      destination: "EPAM Systems Intern Developer"
    },
    {
      name: "Dilnoza Karimova",
      avatarText: "DK",
      avatarColor: "#EC4899",
      achievement: "IELTS 8.0",
      subAchievement: "Speaking 8.5, Writing 7.5",
      badgeType: "orange",
      subject: "IELTS Premium",
      quote: "English Speaking Club va doimiy suhbatlar natijasida ingliz tilida erkin so'zlashishni boshladim. Natija esa IELTS 8.0!",
      destination: "Westminster University (WIUT)"
    },
    {
      name: "Doniyor Olimov",
      avatarText: "DO",
      avatarColor: "#F59E0B",
      achievement: "SAT Math 800",
      subAchievement: "Perfect Math Score",
      badgeType: "blue",
      subject: "Matematika",
      quote: "Matematikadagi murakkab masalalarni soniyalar ichida yechish usullari darslarimizda batafsil ko'rsatiladi. SAT Matematika ideal!",
      destination: "KAIST University Grant"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + results.length) % results.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Autoplay every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="results" className="section results-section">
      <div className="glow-blob glow-blob-3"></div>
      
      <div className="container">
        <div className="results-header">
          <span className="section-tag">O'quvchilarimiz Muvaffaqiyati</span>
          <h2 className="section-title">O'quvchilarimiz Natijalari</h2>
          <p className="section-desc">
            Impulse Study o'quvchilarining eng yuqori natijalari va ularning taassurotlari. Navbatdagi muvaffaqiyat egasi siz bo'ling!
          </p>
        </div>

        {/* Dynamic Carousel Container */}
        <div className="carousel-outer-wrapper">
          <button onClick={handlePrev} className="carousel-control-btn prev glass" aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-main-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 80, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="carousel-active-card glass"
              >
                {/* Visual side */}
                <div className="student-profile-side">
                  <div className="avatar-big-wrap" style={{ backgroundColor: results[currentIndex].avatarColor + '15' }}>
                    <div className="avatar-big" style={{ backgroundColor: results[currentIndex].avatarColor }}>
                      {results[currentIndex].avatarText}
                    </div>
                    <div className="achievement-stamp">
                      <Trophy size={16} className="stamp-icon" />
                      <span>{results[currentIndex].subject}</span>
                    </div>
                  </div>
                  <h3 className="student-name">{results[currentIndex].name}</h3>
                  <span className="student-destination">{results[currentIndex].destination}</span>
                </div>

                {/* Content side */}
                <div className="student-content-side">
                  <div className="quote-icon-wrap">
                    <Quote size={40} className="quote-icon" />
                  </div>
                  
                  <div className="score-badge-wrap">
                    <span className={`score-badge score-badge-${results[currentIndex].badgeType}`}>
                      {results[currentIndex].achievement}
                    </span>
                    <span className="score-details">{results[currentIndex].subAchievement}</span>
                  </div>

                  <p className="student-testimonial">
                    "{results[currentIndex].quote}"
                  </p>

                  <div className="student-meta">
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} size={16} className="rating-star" />
                      ))}
                    </div>
                    <span className="verified-text">Tasdiqlangan natija</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={handleNext} className="carousel-control-btn next glass" aria-label="Next slide">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="carousel-pagination">
          {results.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
