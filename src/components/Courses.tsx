import { useState } from 'react';
import { Award, Calculator, Calendar, Code, Smile, Languages, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Course {
  id: string;
  title: string;
  category: 'languages' | 'subjects' | 'it';
  icon: React.ReactNode;
  duration: string;
  intensity: string;
  description: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export default function Courses() {
  const [filter, setFilter] = useState<'all' | 'languages' | 'subjects' | 'it'>('all');

  const coursesList: Course[] = [
    {
      id: "kids-english",
      title: "Kids English",
      category: "languages",
      icon: <Smile size={28} className="course-icon-pink" />,
      duration: "9 oy",
      intensity: "Haftada 3 marta / 1.5 soat",
      description: "Bolalar uchun maxsus ishlab chiqilgan qiziqarli va interaktiv darsliklar. O'yinlar, qo'shiqlar va amaliy suhbatlar orqali til o'rganish.",
      features: ["O'yinlar va animatsiyalar", "Multfilmlar orqali o'rganish", "Kichik guruhlar (8-10 bola)", "Rang-barang o'quv materiallari"],
      badge: "Bolalar uchun"
    },
    {
      id: "general-english",
      title: "General English",
      category: "languages",
      icon: <Languages size={28} className="course-icon-blue" />,
      duration: "6-8 oy",
      intensity: "Haftada 3 marta / 2 soat",
      description: "Boshlang'ichdan yuqori darajagacha (Beginner to Advanced). Gapirish (Speaking) va eshitish (Listening) ko'nikmalarini 100% rivojlantirish.",
      features: ["Har darsda interaktiv Speaking", "Uy vazifalarini online tekshirish", "Speaking Club bepul", "CEFR imtihoniga tayyorgarlik"],
      popular: true
    },
    {
      id: "ielts",
      title: "IELTS Prep",
      category: "languages",
      icon: <Award size={28} className="course-icon-orange" />,
      duration: "3-5 oy",
      intensity: "Haftada 3 marta / 2 soat",
      description: "IELTS imtihonidan yuqori ball (7.0+) olishni istaganlar uchun intensiv kurs. Writing va Speaking uchun professional baholash.",
      features: ["Tajribali IELTS master ustozlar", "Har haftalik bepul Mock IELTS", "Band 8.0+ darajadagi resurslar", "Writing insholarining chuqur tahlili"],
      badge: "Intensiv",
      popular: true
    },
    {
      id: "cefr",
      title: "CEFR Certificate",
      category: "languages",
      icon: <ShieldCheck size={28} className="course-icon-green" />,
      duration: "4-6 oy",
      intensity: "Haftada 3 marta / 2 soat",
      description: "Milliy sertifikat (CEFR B2/C1) imtihoniga yo'naltirilgan darslar. Davlat OTMlariga imtiyozli kirish ballarini qo'lga kiriting.",
      features: ["DTM andozasidagi testlar", "Listening va Reading sirlari", "Yozma ishlarni tahlil qilish", "Har oylik rasmiy darajadagi test"],
    },
    {
      id: "matematika",
      title: "Matematika",
      category: "subjects",
      icon: <Calculator size={28} className="course-icon-purple" />,
      duration: "9 oy",
      intensity: "Haftada 3 marta / 2 soat",
      description: "Maktab dasturi, abituriyentlar va xalqaro universitetlarga tayyorlov. Mantiqiy fikrlash va masalalarni tezkor yechish uslublari.",
      features: ["Mental arifmetika metodlari", "Milliy sertifikatga tayyorgarlik", "Olimpiada masalalari tahlili", "Haftalik mukammal testlar"],
    },
    {
      id: "sat",
      title: "SAT Prep",
      category: "subjects",
      icon: <Calculator size={28} className="course-icon-cyan" />, // Changed Compass to Calculator for safety, or we can use BookOpen
      duration: "3-4 oy",
      intensity: "Haftada 3 marta / 2 soat",
      description: "Amerika va xalqaro oliygohlarda grant asosida o'qish uchun SAT imtihoniga tayyorgarlik (Math & Evidence-Based Reading).",
      features: ["SAT Math 800 kafolatli strategiyalar", "EBRW bo'limi uchun chuqur tahlillar", "Haqiqiy raqamli Digital SAT mock testlar", "Qabul komissiyasi bilan ishlash bo'yicha maslahatlar"],
      badge: "Xalqaro daraja"
    },
    {
      id: "rus-tili",
      title: "Rus tili",
      category: "languages",
      icon: <Languages size={28} className="course-icon-red" />,
      duration: "6 oy",
      intensity: "Haftada 3 marta / 1.5 soat",
      description: "Rus tilida erkin va toza gapirishni (Razgovorniy russkiy) istaganlar uchun. Grammatika va faol muloqot muvozanati.",
      features: ["Muloqotga to'liq urg'u berish", "Filmlar va audio eshitish", "Aktiv so'z boyligini kengaytirish", "Biznes rus tili moduli bepul"],
    },
    {
      id: "dasturlash",
      title: "Dasturlash (IT)",
      category: "it",
      icon: <Code size={28} className="course-icon-emerald" />,
      duration: "6-8 oy",
      intensity: "Haftada 3 marta / 2 soat",
      description: "Frontend (HTML, CSS, JavaScript, React) va Backend (Python) tillarida dasturlashni boshidan professional darajagacha o'rganing.",
      features: ["Amaliy loyihalar ustida ishlash", "Portfolio yaratishga yordam", "Mentorlar bilan bevosita aloqa", "Eng yaxshi bitiruvchilarga ish imkoniyati"],
      badge: "Kasb-hunar",
      popular: true
    }
  ];

  const filteredCourses = filter === 'all' 
    ? coursesList 
    : coursesList.filter(c => c.category === filter);

  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        
        {/* Courses Section Title */}
        <div className="section-header-center">
          <span className="section-tag">Kurslarimiz bilan tanishing</span>
          <h2 className="section-title">O'quv Dasturlarimiz</h2>
          <p className="section-desc">
            Kelajakdagi orzularingizga yetaklaydigan eng zamonaviy va sifatli o'quv yo'nalishlarini tanlang. Har bir yo'nalish uchun bepul sinov darsi mavjud.
          </p>
        </div>

        {/* Dynamic Category Filtering Buttons */}
        <div className="filter-buttons-container">
          <button 
            onClick={() => setFilter('all')} 
            className={`filter-btn ${filter === 'all' ? 'active' : 'glass'}`}
          >
            Barchasi
          </button>
          <button 
            onClick={() => setFilter('languages')} 
            className={`filter-btn ${filter === 'languages' ? 'active' : 'glass'}`}
          >
            Chet tillari
          </button>
          <button 
            onClick={() => setFilter('subjects')} 
            className={`filter-btn ${filter === 'subjects' ? 'active' : 'glass'}`}
          >
            Fanlar (SAT & Math)
          </button>
          <button 
            onClick={() => setFilter('it')} 
            className={`filter-btn ${filter === 'it' ? 'active' : 'glass'}`}
          >
            IT / Dasturlash
          </button>
        </div>

        {/* Interactive Courses Grid */}
        <motion.div 
          layout 
          className="courses-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={course.id}
                className={`course-card glass ${course.popular ? 'popular-card' : ''}`}
              >
                {/* Popular Card Glowing Border/Banner */}
                {course.popular && (
                  <div className="popular-badge">Eng ommabop</div>
                )}

                <div className="course-card-header">
                  <div className="course-icon-wrap">
                    {course.icon}
                  </div>
                  {course.badge && (
                    <span className="course-badge">{course.badge}</span>
                  )}
                </div>

                <h3 className="course-card-title">{course.title}</h3>
                
                {/* Course Details stats */}
                <div className="course-meta-details">
                  <div className="course-meta-item">
                    <Clock size={14} className="meta-icon" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="course-meta-item">
                    <Calendar size={14} className="meta-icon" />
                    <span>{course.intensity}</span>
                  </div>
                </div>

                <p className="course-card-description">{course.description}</p>

                {/* Bullets List */}
                <ul className="course-bullets-list">
                  {course.features.map((feature, index) => (
                    <li key={index} className="bullet-item">
                      <span className="bullet-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Enroll button */}
                <div className="course-card-footer">
                  <a href="#booking" className="course-card-enroll-btn">
                    <span>Darsga yozilish</span>
                    <ArrowRight size={16} className="arrow-icon" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
