import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    text: "Ahsan's ability to explain complex AI concepts made machine learning accessible to our entire class. His teaching style bridges theory and practice seamlessly.",
    name: 'Graduate Student',
    role: 'University of Lahore',
  },
  {
    text: 'Working with Ahsan on our AI integration project was transformative. He delivered a production-ready RAG pipeline that exceeded our performance expectations.',
    name: 'Tech Startup Founder',
    role: 'Client Project',
  },
  {
    text: "His research on quantum ML is pioneering. Ahsan combines deep theoretical understanding with practical engineering skills — a rare combination in the field.",
    name: 'Research Collaborator',
    role: 'LUMS',
  },
];

const metrics = [
  { value: '300+', label: 'Students Taught' },
  { value: '10+', label: 'Client Projects Delivered' },
  { value: '4.8/5', label: 'Average Rating' },
];

export default function Testimonials() {
  const { ref, inView } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Impact & Testimonials"
          subtitle="What collaborators and students say"
        />

        <div ref={ref} className="max-w-3xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8 md:p-12 relative min-h-[220px]">
            <FaQuoteLeft className="text-cyan-400/20 absolute top-6 left-6" size={32} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-slate-300 text-lg leading-relaxed italic mb-6">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-cyan-400/70 text-sm">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-cyan-400 w-6' : 'bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">{metric.value}</div>
              <div className="text-slate-400 text-sm mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
