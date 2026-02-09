import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaBrain, FaAtom } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const researchProjects = [
  {
    icon: <FaBrain size={32} />,
    title: 'Hallucination Detection in Large Language Models',
    venue: 'LUMS Electrical Engineering Dept',
    status: 'Ongoing Research',
    description:
      'Investigating the CHOKE phenomenon in LLMs and developing methods for prompt sensitivity quantification. This work aims to improve the reliability and trustworthiness of large language models in critical applications.',
    findings: [
      'Discovered CHOKE phenomenon in prompt-response dynamics',
      'Quantified prompt sensitivity across model architectures',
      'Developed novel evaluation metrics for hallucination detection',
    ],
    gradient: 'from-cyan-400/20 to-blue-500/20',
    borderColor: 'hover:border-cyan-400/40',
  },
  {
    icon: <FaAtom size={32} />,
    title: 'Quantum Support Vector Machines for NISQ Deployment',
    venue: 'Under Review for Publication',
    status: 'Paper Under Review',
    description:
      'Designed and implemented quantum-enhanced SVMs optimized for Noisy Intermediate-Scale Quantum (NISQ) devices, achieving a 10x improvement in noise resilience over existing approaches.',
    findings: [
      '10x improvement in noise resilience',
      'Optimized for real NISQ hardware constraints',
      'Novel quantum-classical hybrid architecture',
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/40',
  },
];

const researchInterests = [
  'Healthcare AI Ethics',
  'Explainable AI',
  'Quantum Computing',
  'Privacy-Preserving ML',
  'LLM Safety',
  'Computer Vision',
  'NLP',
  'Federated Learning',
];

export default function Research() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="research" className="py-24 relative bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Research Highlights"
          subtitle="Pushing the boundaries of AI safety and quantum machine learning"
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-12">
          {researchProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`glass rounded-2xl p-8 border border-transparent ${project.borderColor} transition-all duration-500 group`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-cyan-400 mb-5`}>
                {project.icon}
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{project.venue}</p>
              <p className="text-slate-300 leading-relaxed mb-5">{project.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-300">Key Findings:</p>
                {project.findings.map((finding) => (
                  <div key={finding} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-cyan-400 mt-1">&#9656;</span>
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-slate-300 mb-4">Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-full text-sm font-medium glass text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
