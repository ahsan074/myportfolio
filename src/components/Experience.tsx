import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaChalkboardTeacher, FaCode, FaFlask, FaPaintBrush } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    icon: <FaChalkboardTeacher size={22} />,
    role: 'Junior Lecturer',
    company: 'University of Lahore',
    period: 'Jan 2024 - Present',
    achievements: [
      'Teaching 300+ students across multiple programming and data science courses',
      'Developed comprehensive curriculum for Machine Learning and Data Science courses',
      'Mentoring students on research projects and career development in AI',
      'Introduced hands-on lab sessions with industry-relevant tools and frameworks',
    ],
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: <FaCode size={22} />,
    role: 'AI & Web Projects Associate',
    company: 'Phoenux Design',
    period: '2023 - 2024',
    achievements: [
      'Led development of AI-powered web applications for diverse client projects',
      'Implemented RAG pipelines and LLM integrations for enterprise solutions',
      'Collaborated with cross-functional teams on full-stack development',
      'Delivered 10+ client projects on time with high satisfaction ratings',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaFlask size={22} />,
    role: 'AI Research Intern',
    company: 'Bugsfree Solutions',
    period: '2022 - 2023',
    achievements: [
      'Conducted research on ML model optimization and deployment strategies',
      'Built computer vision pipelines for quality assurance automation',
      'Published internal reports on emerging AI/ML technologies',
      'Contributed to patent-pending ML pipeline architecture',
    ],
    gradient: 'from-gold-400 to-orange-500',
  },
  {
    icon: <FaPaintBrush size={22} />,
    role: 'Web Designer',
    company: 'Phoenux Design',
    period: '2021 - 2022',
    achievements: [
      'Designed responsive, user-centric web interfaces for 15+ projects',
      'Implemented modern design systems using React and CSS frameworks',
      'Improved client website performance and SEO scores by 40%',
      'Established design standards and component libraries for the team',
    ],
    gradient: 'from-green-400 to-emerald-500',
  },
];

export default function Experience() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.03)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Professional Experience"
          subtitle="A track record of impactful work across academia and industry"
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-transparent hover:border-cyan-400/20 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} text-navy-900 flex-shrink-0`}>
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-400/70 text-sm">{exp.company}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-cyan-400/60 mt-1 flex-shrink-0">&#9656;</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
