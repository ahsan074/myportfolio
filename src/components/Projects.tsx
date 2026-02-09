import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'AI-Powered Real Estate Voice Agent',
    description:
      'Built an intelligent voice agent for real estate inquiries using RAG architecture and agentic AI, enabling natural conversational property search and recommendations.',
    tags: ['RAG', 'Agentic AI', 'Voice AI', 'Python'],
    gradient: 'from-cyan-400/20 to-blue-500/20',
    icon: '🏠',
  },
  {
    title: 'Deep Learning Melanoma Detection',
    description:
      'Developed a deep learning system for early melanoma detection from dermoscopic images, achieving high accuracy using transfer learning and custom CNN architectures.',
    tags: ['Healthcare AI', 'Computer Vision', 'PyTorch', 'CNN'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: '🔬',
  },
  {
    title: 'AR E-Commerce Application',
    description:
      'Created an augmented reality mobile application for e-commerce, allowing users to visualize products in their space before purchasing.',
    tags: ['Mobile', 'AR', 'Flutter', 'Firebase'],
    gradient: 'from-gold-400/20 to-orange-500/20',
    icon: '📱',
  },
  {
    title: 'Bankruptcy Prediction ML System',
    description:
      'Built a machine learning system for predicting corporate bankruptcy using financial indicators, ensemble methods, and XGBoost optimization.',
    tags: ['Financial ML', 'XGBoost', 'Scikit-learn', 'Data Analysis'],
    gradient: 'from-green-400/20 to-emerald-500/20',
    icon: '📊',
  },
  {
    title: 'Big Data Pipeline with Hadoop & Hive',
    description:
      'Designed and implemented a scalable big data processing pipeline using Hadoop ecosystem for ETL operations on large-scale datasets.',
    tags: ['Hadoop', 'Hive', 'HDFS', 'Big Data'],
    gradient: 'from-red-400/20 to-rose-500/20',
    icon: '⚙️',
  },
  {
    title: 'AWS Cloud Infrastructure Deployment',
    description:
      'Architected and deployed scalable cloud infrastructure on AWS, implementing CI/CD pipelines, containerized services, and auto-scaling configurations.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Cloud'],
    gradient: 'from-amber-400/20 to-yellow-500/20',
    icon: '☁️',
  },
];

export default function Projects() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,217,255,0.03)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of impactful AI and software engineering projects"
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden border border-transparent hover:border-cyan-400/20 transition-all duration-500 group flex flex-col"
            >
              {/* Thumbnail area */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-5xl">{project.icon}</span>
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <FaExternalLinkAlt size={14} />
                    </span>
                    <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <FaGithub size={14} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-400/10 text-cyan-400/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
