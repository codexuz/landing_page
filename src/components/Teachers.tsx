import { Award, Star, Mail, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface Teacher {
  name: string;
  role: string;
  initials: string;
  color: string;
  specialty: string;
  rating: number;
  exp: string;
  certs: string[];
}

export default function Teachers() {
  const teachersList: Teacher[] = [
    {
      name: "Anvar Salayev",
      role: "Senior IELTS Instructor",
      initials: "AS",
      color: "#007AFF",
      specialty: "IELTS & Academic English",
      rating: 5.0,
      exp: "6 yillik tajriba",
      certs: ["IELTS 8.5 Certificate", "TESOL Certified teacher", "Graduated from Westminster"]
    },
    {
      name: "Malika Mirzayeva",
      role: "Head of Kids English Department",
      initials: "MM",
      color: "#EC4899",
      specialty: "Kids & Young Learners English",
      rating: 4.9,
      exp: "5 yillik tajriba",
      certs: ["CELTA Certification", "Young Learners specialist", "Psychology degree"]
    },
    {
      name: "Bobur Turdiyev",
      role: "SAT & Matematika Lead Teacher",
      initials: "BT",
      color: "#3B82F6",
      specialty: "SAT Math & High School Matematika",
      rating: 5.0,
      exp: "8 yillik tajriba",
      certs: ["SAT Math 800 (Perfect Score)", "National Math Olympiad Winner", "TTPU Graduate"]
    },
    {
      name: "Shahzoda Aliyeva",
      role: "Rus Tili Professor",
      initials: "SA",
      color: "#EF4444",
      specialty: "Rus Tili & Razgovorniy Module",
      rating: 4.9,
      exp: "7 yillik tajriba",
      certs: ["Native Russian Speaker", "Russian Language Philology degree", "CEFR C1 certified"]
    },
    {
      name: "Sardor Toshpulatov",
      role: "Dasturlash Lead Mentor",
      initials: "ST",
      color: "#10B981",
      specialty: "Full Stack Coding & Python",
      rating: 5.0,
      exp: "4 yillik tajriba",
      certs: ["EPAM Senior Developer Alumni", "Creator of 10+ active web apps", "B.S. in Computer Science"]
    }
  ];

  return (
    <section id="teachers" className="section teachers-section">
      <div className="glow-blob glow-blob-4"></div>

      <div className="container">
        {/* Section title */}
        <div className="section-header-center">
          <span className="section-tag">Bizning professionallar</span>
          <h2 className="section-title">Malakali Ustozlarimiz</h2>
          <p className="section-desc">
            Impulse Study o'quvchilari xalqaro miqyosdagi eng yuqori malakaga, sertifikatlarga va ko'p yillik amaliy tajribaga ega bo'lgan mutaxassislardan tahsil oladilar.
          </p>
        </div>

        {/* Teachers grid */}
        <div className="teachers-grid">
          {teachersList.map((teacher, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="teacher-card glass"
            >
              {/* Photo area */}
              <div className="teacher-photo-container">
                <div 
                  className="teacher-avatar"
                  style={{ 
                    backgroundColor: teacher.color,
                    boxShadow: `0 10px 30px -5px ${teacher.color}35`
                  }}
                >
                  {teacher.initials}
                </div>
                <div className="teacher-specialty-badge" style={{ backgroundColor: teacher.color + '20', color: teacher.color }}>
                  {teacher.specialty}
                </div>
              </div>

              {/* Card info */}
              <div className="teacher-info">
                <div className="teacher-meta-top">
                  <span className="teacher-role">{teacher.role}</span>
                  <div className="teacher-rating">
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>{teacher.rating}</span>
                  </div>
                </div>
                
                <h3 className="teacher-name">{teacher.name}</h3>
                
                <div className="teacher-exp-tag">
                  <GraduationCap size={16} className="exp-icon" />
                  <span>{teacher.exp}</span>
                </div>

                <div className="teacher-divider"></div>

                {/* Certs bullets */}
                <ul className="teacher-certs-list">
                  {teacher.certs.map((cert, cIdx) => (
                    <li key={cIdx} className="cert-item">
                      <Award size={14} className="cert-icon-color" style={{ color: teacher.color }} />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>

                {/* Teacher contact link / call to action */}
                <div className="teacher-card-footer">
                  <a href="#booking" className="teacher-cta-btn">
                    <Mail size={16} />
                    <span>Darsni band qilish</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
