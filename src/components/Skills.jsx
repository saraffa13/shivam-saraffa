import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt,
  FaDocker, FaJava, FaHtml5, FaShieldAlt, FaRobot,
  FaCode, FaServer, FaFlask, FaLink,
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiRedux,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiNestjs,
  SiExpress, SiJest, SiVercel, SiGithubactions, SiTailwindcss,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'AI / LLM',
    skills: [
      { name: 'RAG Systems', icon: <FaCode />, level: 85 },
      { name: 'LangChain / LangGraph', icon: <FaLink />, level: 78 },
      { name: 'Multi-agent Orchestration', icon: <FaRobot />, level: 82 },
      { name: 'Tool Calling / JSON-mode', icon: <FaCode />, level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 88 },
      { name: 'NestJS', icon: <SiNestjs />, level: 85 },
      { name: 'Express.js', icon: <SiExpress />, level: 82 },
      { name: 'BullMQ', icon: <FaServer />, level: 75 },
      { name: 'REST APIs / WebSockets', icon: <FaDatabase />, level: 88 },
      { name: 'OpenAPI / Swagger', icon: <FaCode />, level: 78 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'Qdrant (Vector DB)', icon: <FaDatabase />, level: 78 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 72 },
      { name: 'MySQL', icon: <SiMysql />, level: 70 },
      { name: 'Firebase', icon: <SiFirebase />, level: 65 },
    ],
  },
  {
    title: 'Auth, Testing & DevOps',
    skills: [
      { name: 'Docker', icon: <FaDocker />, level: 75 },
      { name: 'GitHub Actions / CI/CD', icon: <SiGithubactions />, level: 78 },
      { name: 'JWT / OAuth / Passport', icon: <FaShieldAlt />, level: 85 },
      { name: 'Jest', icon: <SiJest />, level: 75 },
      { name: 'Playwright', icon: <FaFlask />, level: 65 },
      { name: 'Git', icon: <FaGitAlt />, level: 88 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, level: 92 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 82 },
      { name: 'Redux / Context API', icon: <SiRedux />, level: 85 },
      { name: 'TanStack Query', icon: <FaCode />, level: 80 },
      { name: 'Tailwind / SASS', icon: <SiTailwindcss />, level: 88 },
      { name: 'HTML5 / CSS3', icon: <FaHtml5 />, level: 92 },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', icon: <SiJavascript />, level: 95 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 88 },
      { name: 'Python', icon: <FaPython />, level: 78 },
      { name: 'Java', icon: <FaJava />, level: 65 },
      { name: 'SQL', icon: <FaDatabase />, level: 82 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-surface-low">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">Expertise</p>
          <h2 className="font-display font-bold text-3xl text-on-surface tracking-tight">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="bg-surface-container border border-outline-variant rounded-lg p-5 hover:border-primary-bright transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-sm text-primary uppercase tracking-widest mb-5">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-base text-primary-bright">{skill.icon}</span>
                        <span className="font-body text-sm text-on-surface-variant">{skill.name}</span>
                      </div>
                      <span className="font-mono text-xs text-outline">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1 bg-surface-high rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #adc6ff, #4d8eff)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
