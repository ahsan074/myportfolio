import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript/TypeScript', level: 80 },
    ],
  },
  {
    title: 'ML/AI Frameworks',
    skills: [
      { name: 'PyTorch', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Qiskit', level: 75 },
      { name: 'Hugging Face', level: 85 },
    ],
  },
  {
    title: 'Data Science',
    skills: [
      { name: 'Pandas', level: 95 },
      { name: 'NumPy', level: 95 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Jupyter', level: 90 },
      { name: 'Seaborn', level: 80 },
    ],
  },
  {
    title: 'Big Data',
    skills: [
      { name: 'Hadoop', level: 75 },
      { name: 'Hive', level: 70 },
      { name: 'HDFS', level: 70 },
      { name: 'Dask', level: 65 },
      { name: 'Spark', level: 70 },
    ],
  },
  {
    title: 'Web/Mobile',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Flutter', level: 75 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Node.js', level: 75 },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Jira', level: 80 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>
      <div className="h-2 bg-navy-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Expertise"
          subtitle="A comprehensive toolkit for building intelligent systems"
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-cyan-400/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-5">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.1 + skillIdx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
