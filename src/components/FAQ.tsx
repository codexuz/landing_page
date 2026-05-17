import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Darslar haftasiga necha marta va necha soatdan bo'lib o'tadi?",
      answer: "Standart darslarimiz haftada 3 marta, har bir dars 1.5 soatdan tashkil etiladi. IELTS, Matematika, SAT darslarimiz haftada 3 marta 2 soatdan o'tiladi. Darslar o'quvchi xohishiga ko'ra haftaning toq (Dush/Chor/Jum) yoki juft (Sesh/Pay/Shan) kunlarida, ertalabki, tushlikdan keyingi va kechki smenalarda bo'ladi."
    },
    {
      question: "Birinchi dars bepulmi va darajani aniqlash qanday amalga oshiriladi?",
      answer: "Ha, birinchi 3 ta darsimiz 100% mutlaqo bepul! Siz o'quv markazimizga kelganingizda, tajribali metodistlarimiz Cambridge standarti asosidagi maxsus yozma va og'zaki (Speaking) testlar orqali til bilish darajangizni aniqlashadi. Shundan so'ng, sizga eng mos bo'lgan guruh va sinov darsini belgilaymiz."
    },
    {
      question: "IELTS va SAT imtihonlaridan yuqori ball olishga kafolat bormi?",
      answer: "Bizning IELTS va SAT kurslarimiz xalqaro metodika bo'yicha eng ilg'or o'qituvchilar tomonidan o'tiladi. O'quvchi darslarni qoldirmasa, uy vazifalarini to'liq bajarsa va har haftalik bepul Mock IELTS testlarida faol qatnashsa, biz uning maqsadli ballga (IELTS 7.0+ yoki SAT 1400+) erishishiga 100% kafolat beramiz. Aks holda, o'quvchi kursni to'lovsiz qayta o'qishi mumkin."
    },
    {
      question: "Bolalar uchun ingliz tili darslari qanday tashkil etilgan?",
      answer: "Kids English yo'nalishimiz 6 yoshdan 12 yoshgacha bo'lgan bolalar uchun mo'ljallangan. Darslar quruq yodlash emas, balki interaktiv o'yinlar, inglizcha multfilmlar, qo'shiqlar va amaliy muloqot orqali o'tiladi. Bu bolada til o'rganishga bo'lgan muhabbatni kuchaytiradi va tabiiy gapirish ko'nikmalarini shakllantiradi."
    },
    {
      question: "Dasturlash (IT) kursini tugatgach, amaliyot yoki ish topish imkoniyati bormi?",
      answer: "Ha, dasturlash kursimiz to'liq amaliy loyihalarga (Portfolio) asoslangan. Kurs davomida har bir talaba shaxsiy 4-5 ta web-sayt va dasturlarni yaratadi. Eng yuqori ko'rsatkichlar bilan bitirgan o'quvchilarimizga hamkor IT kompaniyalarda bepul amaliyot o'tash va kelgusida ishga joylashish uchun tavsiyanomalar taqdim etiladi."
    },
    {
      question: "O'quv to'lovlari va chegirmalar tizimi qanday?",
      answer: "O'quv markazimizga to'lovlar juda qulay va moslashuvchan. Bir oiladan ikki va undan ortiq farzand o'qisa, shuningdek, bir vaqtning o'zida ikkita fandan tahsil olayotgan o'quvchilarga maxsus 10% dan 20% gacha chegirmalar mavjud. Shuningdek, to'liq kurs uchun oldindan amalga oshirilgan to'lovlarga ham alohida chegirma taqdim etiladi."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">

        {/* Title */}
        <div className="section-header-center">
          <span className="section-tag">Tez-tez beriladigan savollar</span>
          <h2 className="section-title">Yana Savollaringiz Bormi?</h2>
          <p className="section-desc">
            O'quv jarayonlari, to'lovlar, ustozlar va dars sharoitlari haqida tez-tez beriladigan savollarga javoblar.
          </p>
        </div>

        {/* FAQ Accordions Grid */}
        <div className="faq-accordions-wrapper">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`faq-item-card glass ${isOpen ? 'active-faq-card' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <div className="question-wrap-text">
                    <HelpCircle size={18} className={`question-icon ${isOpen ? 'color-orange' : 'text-tertiary'}`} />
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="faq-arrow-wrap"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-answer-container"
                    >
                      <div className="faq-answer-inner-content">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
