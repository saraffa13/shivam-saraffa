import { motion } from 'framer-motion';
import {
  FaCode,
  FaDatabase,
  FaDocker,
  FaFlask,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaLink,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRobot,
  FaServer,
  FaShieldAlt,
} from 'react-icons/fa';
import {
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
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

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-low py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Expertise</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="rounded-lg border border-outline-variant bg-surface-container p-5 transition-all duration-300 hover:border-primary-bright"
            >
              <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="text-base text-primary-bright">{skill.icon}</span>
                        <span className="truncate text-sm text-on-surface-variant">{skill.name}</span>
                      </div>
                      <span className="font-mono text-xs text-outline">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-surface-high">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
