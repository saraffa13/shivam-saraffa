import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const projects = [
  {
    title: 'AI Engineering - Autonomous Agents & RAG',
    description:
      'Built autonomous LLM agents for recruitment, travel, sales, finance, and e-commerce using a master orchestrator plus sub-agent pattern with parallel tool calls. Includes multi-turn RAG with hybrid retrieval, reranking, and citation-grounded answers.',
    technologies: ['Python', 'Claude', 'OpenRouter', 'Haystack v2', 'Qdrant', 'FastAPI'],
    github: '#',
    live: '#',
    image: Project1,
  },
  {
    title: 'LabReport Pro',
    description:
      'Multi-tenant pathology-lab SaaS replacing manual Word workflows with test catalogs, report templates, health checkups, PDF rendering, JWT refresh, and a patient self-service portal deployed on GCP Cloud Run.',
    technologies: ['Django 5', 'DRF', 'React 18', 'TypeScript', 'PostgreSQL', 'GCP Cloud Run'],
    github: '#',
    live: '#',
    image: Project2,
    prod: true,
  },
  {
    title: 'Sarkari Naukri',
    description:
      'Bilingual government job aggregation portal on Next.js App Router serving listings across categories. Cheerio-based crawlers normalize external HTML into structured JSON with automated ingestion and SEO-first pages.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Cheerio'],
    github: '#',
    live: '#',
    image: Project3,
    prod: true,
  },
];

const moreProjects = [
  {
    title: 'Medicart',
    description:
      'E-commerce platform for medical supplies and equipment, including authentication, shopping cart flows, and payment-oriented checkout UX.',
    technologies: ['React', 'Redux', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/saraffa13/project',
    live: 'https://prodmedicart.vercel.app/',
    image: Project1,
  },
  {
    title: 'Placement Tracking App',
    description:
      'Placement process platform with student workflows, company updates, and real-time placement statistics.',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/saraffa13/placement23',
    live: 'https://placement2023-f08ce.web.app/home',
    image: Project2,
  },
  {
    title: 'Duke',
    description: 'B2B manufacturing website with customizable product displays and secure authentication features.',
    technologies: ['React', 'Redux', 'TypeScript', 'Magento'],
    github: '#',
    live: '#',
    image: Project3,
  },
];

const face = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  borderRadius: '0.5rem',
  overflow: 'hidden',
};

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative h-[400px] cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.6 }}
        style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
      >
        <div style={face} className="flex flex-col border border-outline-variant bg-surface-container">
          <div className="relative h-[55%] shrink-0 overflow-hidden bg-surface-high">
            <img src={project.image} alt="" className="h-full w-full object-cover" />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
              style={{ background: 'linear-gradient(to top, #171f33, transparent)' }}
            />
            {project.prod && (
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md border border-red-500/40 bg-surface/80 px-2 py-1 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
                </span>
                <span className="font-mono text-[10px] tracking-wider text-red-400">Live in prod</span>
              </div>
            )}
            <div className="absolute right-3 top-3 flex gap-2">
              <ProjectLink href={project.github} label="View source">
                <FaGithub size={13} />
              </ProjectLink>
              <ProjectLink href={project.live} label="Open live project">
                <ExternalLink size={13} />
              </ProjectLink>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-4">
            <h3 className="line-clamp-2 font-display text-sm font-semibold leading-snug text-on-surface">
              {project.title}
            </h3>
            <TechList items={project.technologies} />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-outline">Hover to see details</p>
          </div>
        </div>

        <div style={{ ...face, transform: 'rotateY(180deg)' }} className="flex flex-col border border-primary-bright/40 bg-surface-high p-5">
          <h3 className="mb-3 font-display text-base font-semibold leading-snug text-on-surface">{project.title}</h3>
          <p className="flex-1 overflow-y-auto text-sm leading-relaxed text-on-surface-variant">{project.description}</p>
          <TechList items={project.technologies} compact />
          <div className="mt-4 flex gap-4 border-t border-outline-variant pt-4">
            <TextLink href={project.github} icon={<FaGithub size={13} />}>Code</TextLink>
            <TextLink href={project.live} icon={<ExternalLink size={13} />}>Live Demo</TextLink>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

function ProjectLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => event.stopPropagation()}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-outline-variant bg-surface/80 text-on-surface-variant backdrop-blur-sm transition-all duration-200 hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}

function TextLink({ href, icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 font-mono text-xs text-on-surface-variant transition-colors duration-200 hover:text-primary"
    >
      {icon}
      {children}
    </a>
  );
}

function TechList({ items, compact = false }) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${compact ? 'mt-4' : 'mt-3'}`}>
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded border border-outline-variant bg-surface-high px-2 py-0.5 font-mono text-[10px] text-on-surface-variant"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="bg-surface py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Portfolio</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface">My Projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {moreProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((current) => !current)}
            className="rounded-lg border border-outline-variant px-6 py-2.5 text-sm font-semibold text-on-surface-variant transition-all duration-200 hover:border-primary hover:text-primary"
          >
            {showMore ? 'Show Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
}
