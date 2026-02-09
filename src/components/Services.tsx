import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaBrain, FaAtom, FaLaptopCode } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const services = [
  {
    icon: <FaBrain size={28} />,
    title: 'AI/ML Consulting & Development',
    description: 'End-to-end machine learning solutions from research to production deployment.',
    features: [
      'Custom LLM integration and fine-tuning',
      'ML model development and deployment',
      'RAG pipeline implementation (FAISS/Chroma)',
      'Deep learning for computer vision and NLP',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face'],
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: <FaAtom size={28} />,
    title: 'Quantum ML Solutions',
    description: 'Cutting-edge quantum computing research and development for next-generation AI.',
    features: [
      'NISQ algorithm development',
      'Quantum-classical hybrid systems',
      'Research collaboration and consulting',
      'Quantum advantage assessment',
    ],
    technologies: ['Qiskit', 'PennyLane'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: 'Full-Stack AI Applications',
    description: 'Production-ready web and mobile applications powered by intelligent AI backends.',
    features: [
      'Web & mobile app development with AI',
      'Voice agents and conversational AI',
      'Cloud deployment (AWS/Azure)',
      'API development and integration',
    ],
    technologies: ['React', 'Python', 'Flutter', 'AWS'],
    gradient: 'from-gold-400 to-orange-500',
  },
];

export default function Services() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(124,58,237,0.04)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Services"
          subtitle="Transforming ideas into intelligent solutions"
        />

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-8 border border-transparent hover:border-cyan-400/20 transition-all duration-500 group flex flex-col"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-navy-900 mb-5 w-fit`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-5">{service.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-cyan-400 mt-0.5">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-navy-900 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
