import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';

const profileImg = '/mypicture.jpeg';

const stats = [
  { value: 300, suffix: '+', label: 'Students Mentored' },
  { value: 2, suffix: '+', label: 'Research Papers' },
  { value: 50, suffix: '+', label: 'ML/AI Projects' },
  { value: 5, suffix: '+', label: 'Years Experience' },
];

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, borderColor: 'rgba(0,217,255,0.3)' }}
      className="glass rounded-2xl p-6 text-center transition-all duration-300"
    >
      <div className="text-3xl md:text-4xl font-bold text-cyan-400">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm mt-2">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,217,255,0.03)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" subtitle="Researcher, educator, and builder of intelligent systems" />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-cyan-400/20">
                <img
                  src={profileImg}
                  alt="Muhammad Ahsan Shakeel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-3 rounded-2xl border border-cyan-400/10 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm an <span className="text-cyan-400 font-medium">AI Researcher</span> pursuing my
              MS in Artificial Intelligence at <span className="text-cyan-400 font-medium">LUMS</span>,
              while simultaneously serving as a Junior Lecturer at the University of Lahore, where I
              mentor <span className="text-cyan-400 font-medium">300+ students</span> in programming,
              data science, and machine learning.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My research focuses on <span className="text-cyan-400 font-medium">LLM hallucination detection</span> and
              <span className="text-cyan-400 font-medium"> Quantum Machine Learning</span> for
              NISQ-era devices. I combine deep academic research with practical experience delivering
              AI solutions for businesses.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              With an entrepreneurial mindset, I'm available for consulting on AI/ML projects,
              research collaborations, and full-stack AI application development. I bring the rigor
              of academic research to real-world problem solving.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
