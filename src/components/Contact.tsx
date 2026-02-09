import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaEnvelope, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { ref, inView } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,217,255,0.05)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Let's Connect"
          subtitle="Whether you're looking for a research collaborator or an AI development partner"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - CTAs & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Academic CTA */}
            <div className="glass rounded-2xl p-6 hover:border-cyan-400/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Discuss PhD Collaboration</h3>
              <p className="text-slate-400 mb-4">
                Interested in research collaboration on LLM safety, quantum ML, or healthcare AI?
                Let's explore how we can advance the field together.
              </p>
              <a
                href="mailto:ahsanshakeel13@gmail.com?subject=PhD%20Collaboration%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-purple-500/50 text-purple-400 font-medium rounded-full hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300"
              >
                <FaEnvelope size={14} />
                Academic Inquiry
              </a>
            </div>

            {/* Client CTA */}
            <div className="glass rounded-2xl p-6 hover:border-cyan-400/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Start Your AI Project</h3>
              <p className="text-slate-400 mb-4">
                Need AI/ML consulting, custom model development, or a full-stack AI application?
                Let's discuss your project requirements.
              </p>
              <a
                href="mailto:ahsanshakeel13@gmail.com?subject=AI%20Project%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-navy-900 font-medium rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              >
                <FaEnvelope size={14} />
                Start a Project
              </a>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:ahsanshakeel13@gmail.com"
                className="flex items-center gap-2 px-5 py-3 glass rounded-xl hover:border-cyan-400/20 transition-all text-slate-300 hover:text-cyan-400"
              >
                <FaEnvelope />
                <span className="text-sm">ahsanshakeel13@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/ahsanshakeel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 glass rounded-xl hover:border-cyan-400/20 transition-all text-slate-300 hover:text-cyan-400"
              >
                <FaLinkedin />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-400">Currently accepting select projects</span>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
                >
                  <option value="">Select a project type</option>
                  <option value="ai-consulting">AI/ML Consulting</option>
                  <option value="research">Research Collaboration</option>
                  <option value="full-stack">Full-Stack AI Application</option>
                  <option value="quantum">Quantum ML</option>
                  <option value="phd">PhD Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                  placeholder="Tell me about your project or collaboration idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-navy-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              >
                {submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <FaCheckCircle /> Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
