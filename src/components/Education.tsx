import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGraduationCap, FaChalkboardTeacher, FaChevronDown, FaCertificate } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const timeline = [
  {
    icon: <FaGraduationCap size={20} />,
    title: 'MS Artificial Intelligence',
    institution: 'LUMS (Lahore University of Management Sciences)',
    period: '2024 - Present',
    description: 'Pursuing advanced research in AI with focus on LLM safety and quantum machine learning.',
    coursework: ['Advanced Machine Learning', 'Natural Language Processing', 'Quantum Computing', 'Deep Learning Theory'],
    color: 'cyan',
  },
  {
    icon: <FaChalkboardTeacher size={20} />,
    title: 'Junior Lecturer',
    institution: 'University of Lahore',
    period: '2024 - Present',
    description: 'Teaching 300+ students across programming, data science, and machine learning courses.',
    coursework: ['Programming Fundamentals', 'Data Structures', 'Machine Learning', 'Data Science'],
    color: 'purple',
  },
  {
    icon: <FaGraduationCap size={20} />,
    title: 'BSc Computer Science',
    institution: 'University of Management and Technology (UMT)',
    period: '2019 - 2023',
    description: 'Strong foundation in computer science with focus on AI/ML and software development.',
    coursework: ['Artificial Intelligence', 'Database Systems', 'Software Engineering', 'Computer Networks', 'Operating Systems'],
    color: 'gold',
  },
];

const certifications = [
  { name: 'Machine Learning Foundations', issuer: 'Coursera' },
  { name: 'IBM Data Science & SQL', issuer: 'IBM' },
  { name: 'Google Python Crash Course', issuer: 'Google' },
  { name: 'UC Davis SQL for Data Science', issuer: 'UC Davis' },
];

export default function Education() {
  const { ref, inView } = useScrollAnimation();
  const [certsOpen, setCertsOpen] = useState(false);

  const colorMap: Record<string, string> = {
    cyan: 'border-cyan-400 bg-cyan-400/10 text-cyan-400',
    purple: 'border-purple-500 bg-purple-500/10 text-purple-500',
    gold: 'border-gold-400 bg-gold-400/10 text-gold-400',
  };

  return (
    <section id="education" className="py-24 relative bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Academic Credentials"
          subtitle="Education and teaching positions"
        />

        {/* Timeline */}
        <div ref={ref} className="relative max-w-3xl mx-auto mb-16">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-purple-500/50 to-gold-400/50" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                <div className={`w-12 h-12 rounded-full border-2 ${colorMap[item.color]} flex items-center justify-center`}>
                  {item.icon}
                </div>
              </div>

              {/* Mobile dot */}
              <div className="md:hidden flex-shrink-0 z-10">
                <div className={`w-12 h-12 rounded-full border-2 ${colorMap[item.color]} flex items-center justify-center`}>
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 glass rounded-2xl p-6 ${i % 2 === 0 ? 'md:mr-auto md:w-[calc(50%-3rem)]' : 'md:ml-auto md:w-[calc(50%-3rem)]'}`}>
                <span className="text-xs font-medium text-slate-400">{item.period}</span>
                <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                <p className="text-cyan-400/80 text-sm">{item.institution}</p>
                <p className="text-slate-400 text-sm mt-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-1 rounded text-xs bg-white/5 text-slate-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <button
            onClick={() => setCertsOpen(!certsOpen)}
            className="w-full glass rounded-2xl p-5 flex items-center justify-between hover:border-cyan-400/20 transition-all"
          >
            <div className="flex items-center gap-3">
              <FaCertificate className="text-gold-400" />
              <span className="font-semibold text-white">Certifications</span>
            </div>
            <motion.div
              animate={{ rotate: certsOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-slate-400" />
            </motion.div>
          </button>

          <AnimatePresence>
            {certsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="glass rounded-b-2xl rounded-t-none border-t-0 p-5 space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm">{cert.name}</span>
                      <span className="text-slate-500 text-xs">{cert.issuer}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
