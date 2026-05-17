import { useState } from 'react';
import { Send, CheckCircle, Phone, User, BookOpen, AlertCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998 ',
    course: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const courses = [
    { value: "kids-english", label: "Kids English (Bolalar uchun)" },
    { value: "general-english", label: "General English (Umumiy ingliz tili)" },
    { value: "ielts", label: "IELTS Prep (Intensiv ball olish)" },
    { value: "cefr", label: "CEFR Certificate (Milliy sertifikat)" },
    { value: "matematika", label: "Matematika (Maktab & Abituriyent)" },
    { value: "sat", label: "SAT Prep (AQSH va xalqaro grantlar)" },
    { value: "rus-tili", label: "Rus tili (Erkin so'zlashuv)" },
    { value: "dasturlash", label: "Dasturlash / IT (Frontend & Python)" }
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    
    // Ensure the prefix +998 remains
    if (!val.startsWith('+998 ')) {
      val = '+998 ';
    }
    
    // Allow only digits and spaces after prefix
    const cleanPart = val.substring(5).replace(/[^\d]/g, '');
    let formatted = '+998 ';
    
    // Format: +998 (90) 123 45 67 -> +998 90 123 45 67
    if (cleanPart.length > 0) {
      formatted += cleanPart.substring(0, 2);
    }
    if (cleanPart.length > 2) {
      formatted += ' ' + cleanPart.substring(2, 5);
    }
    if (cleanPart.length > 5) {
      formatted += ' ' + cleanPart.substring(5, 7);
    }
    if (cleanPart.length > 7) {
      formatted += ' ' + cleanPart.substring(7, 9);
    }
    
    setFormData({ ...formData, phone: formatted.substring(0, 17) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (formData.name.trim().length < 3) {
      setError("Iltimos, to'liq ismingizni kiriting.");
      return;
    }
    if (formData.phone.trim().length < 17) {
      setError("Iltimos, telefon raqamingizni to'liq kiriting (+998 XX XXX XX XX).");
      return;
    }
    if (!formData.course) {
      setError("Iltimos, o'rganmoqchi bo'lgan kursingizni tanlang.");
      return;
    }

    setLoading(true);

    // Mock API Call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '+998 ',
        course: ''
      });
    }, 1800);
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="glow-blob glow-blob-5"></div>
      
      <div className="container booking-grid">
        {/* Left Side: Value propositions */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="booking-info-panel"
        >
          <span className="section-tag">Joyingizni band qiling</span>
          <h2 className="section-title booking-title">Bepul Darsga Ro'yxatdan O'ting</h2>
          <p className="booking-desc">
            Impulse Study o'quv tizimini bevosita sinab ko'rish imkoniyatini boy bermang! Formani to'ldiring va bepul sinov darsi hamda professional diagnostik testga ega bo'ling.
          </p>

          <div className="booking-perks-list">
            <div className="perk-item">
              <div className="perk-icon-wrap bg-orange-light">
                <CheckCircle size={20} className="color-orange" />
              </div>
              <div className="perk-texts">
                <h4>100% Bepul Sinov Darsi</h4>
                <p>O'quv muhiti, o'qitish metodikasi va dars sifatini o'zingiz baholang.</p>
              </div>
            </div>

            <div className="perk-item">
              <div className="perk-icon-wrap bg-blue-light">
                <Calendar size={20} className="color-blue" />
              </div>
              <div className="perk-texts">
                <h4>Darajani Aniqlash Testi</h4>
                <p>Cambridge standardlariga mos ravishda bilim darajangiz aniqlanadi.</p>
              </div>
            </div>

            <div className="perk-item">
              <div className="perk-icon-wrap bg-green-light">
                <BookOpen size={20} className="color-green" />
              </div>
              <div className="perk-texts">
                <h4>Shaxsiy O'quv Rejasi</h4>
                <p>Tajribali metodistlarimiz tomonidan maqsadlaringizga mos yo'llanma beriladi.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: High-End Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="booking-form-panel glass"
        >
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form 
                key="booking-form"
                onSubmit={handleSubmit}
                className="booking-form"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="form-heading">Sinfda a'zo bo'ling</h3>
                <p className="form-subheading">Ma'lumotlaringizni qoldiring, administrator 15 daqiqada bog'lanadi.</p>

                {error && (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="form-error-banner"
                  >
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* Name Input */}
                <div className="input-group">
                  <label htmlFor="form-name" className="input-label">To'liq ismingiz (F.I.SH.)</label>
                  <div className="input-field-wrap">
                    <User size={18} className="input-icon" />
                    <input 
                      id="form-name"
                      type="text" 
                      placeholder="Masalan: Shahzod Alimov" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="input-group">
                  <label htmlFor="form-phone" className="input-label">Telefon raqamingiz</label>
                  <div className="input-field-wrap">
                    <Phone size={18} className="input-icon" />
                    <input 
                      id="form-phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="form-input"
                      placeholder="+998 90 123 45 67"
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div className="input-group">
                  <label htmlFor="form-course" className="input-label">O'rganmoqchi bo'lgan kursingiz</label>
                  <div className="input-field-wrap">
                    <BookOpen size={18} className="input-icon" />
                    <select
                      id="form-course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="form-input form-select"
                      disabled={loading}
                    >
                      <option value="" disabled hidden>Kursni tanlang...</option>
                      {courses.map((course, idx) => (
                        <option key={idx} value={course.value}>{course.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="glow-btn submit-btn"
                >
                  {loading ? (
                    <span className="spinner-wrap">
                      <span className="loading-spinner"></span>
                      Yuborilmoqda...
                    </span>
                  ) : (
                    <>
                      <span>Joyni band qilish</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success Anim state */
              <motion.div 
                key="booking-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="booking-success-container"
              >
                <div className="success-icon-animation">
                  <CheckCircle size={72} className="success-checkmark color-green" />
                  <div className="success-pulse"></div>
                </div>
                
                <h3 className="success-title">Muvaffaqiyatli band qilindi!</h3>
                <p className="success-desc">
                  Hurmatli <strong>o'quvchi</strong>, darsimizga a'zo bo'lganingiz uchun rahmat! Mutaxassislarimiz qisqa vaqt ichida siz bilan bog'lanishadi va darajangizga mos dars jadvalini belgilashadi.
                </p>

                <button 
                  onClick={() => setSuccess(false)}
                  className="hero-btn-secondary glass success-reset-btn"
                >
                  Yangi ro'yxatdan o'tish
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
