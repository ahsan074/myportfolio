import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const profileImg = '/mypicture.jpeg';

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/10"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,217,255,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(124,58,237,0.08)_0%,_transparent_50%)]" />

      <FloatingParticles />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-cyan-400/30 animate-pulse-glow">
              <img
                src={profileImg}
                alt="Muhammad Ahsan Shakeel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 rounded-full border border-cyan-400/20 animate-[spin_12s_linear_infinite]" />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Muhammad </span>
              <span className="gradient-text">Ahsan Shakeel</span>
            </h1>
          </motion.div>

          {/* Animated title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 text-lg md:text-xl font-medium text-slate-300"
          >
            {['AI Researcher', 'Lecturer', 'ML Consultant'].map((title, i) => (
              <span key={title} className="flex items-center gap-3">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.2 }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {title}
                </motion.span>
                {i < 2 && <span className="text-cyan-400/50">|</span>}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Bridging Quantum Computing, LLM Research, and Real-World AI Solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <a
              href="#research"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-navy-900 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 text-center"
            >
              View Research
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border border-cyan-400/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 text-center"
            >
              Hire Me for Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center gap-5 mt-4"
          >
            <a
              href="https://linkedin.com/in/ahsanshakeel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/ahsan074"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-full transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:ahsanshakeel13@gmail.com"
              className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-full transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
