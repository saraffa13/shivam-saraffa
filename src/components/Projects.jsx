import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Project1 from '../assets/project1.png';
import AiAgents from '../assets/ai_agents.png'
import LabReport from '../assets/lab_report.png'
import Digidukaan from '../assets/digidukaan.png'
import SarkariPrivateJob from '../assets/sarkariprivatejob.png'
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const projects = [
  {
    title: 'LabReport Pro',
    description:
    'Multi-tenant pathology-lab SaaS replacing manual Word workflows with test catalogs, report templates, health checkups, PDF rendering, JWT refresh, and a patient self-service portal deployed on GCP Cloud Run.',
    technologies: ['Django 5', 'DRF', 'React 18', 'TypeScript', 'PostgreSQL', 'GCP Cloud Run'],
    github: 'https://github.com/saraffa13/lab-report',
    live: 'https://lab-report-swart.vercel.app/login',
    image: LabReport,
    prod: true,
  },
  {
    title: 'DigiDukan — QR-Based Digital Storefront SaaS',
    description:
    'Multi-tenant SaaS letting small Indian businesses spin up a branded digital catalog in under 5 minutes via a printable QR code. Features a cart-to-WhatsApp checkout flow, 3-layer plan enforcement, soft-delete integrity, a super-admin panel with impersonation and audit logs, a 7-step onboarding wizard, and per-shop branding across three distinct surfaces — public storefront, owner dashboard, and admin panel.',
    technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js v5', 'Tailwind v4', 'Cloudinary', 'Vercel', 'Neon'],
    github: 'https://github.com/saraffa13/shop',
    live: 'https://digidukaan.innovgeist.com/',
    image: Digidukaan,
    prod: true,
  },
  {
    title: 'AI Engineering - Autonomous Agents & RAG',
    description:
    'Built autonomous LLM agents for recruitment, travel, sales, finance, and e-commerce using a master orchestrator plus sub-agent pattern with parallel tool calls. Includes multi-turn RAG with hybrid retrieval, reranking, and citation-grounded answers.',
    technologies: ['Python', 'Claude', 'OpenRouter', 'Haystack v2', 'Qdrant', 'FastAPI'],
    github: '#',
    live: 'https://www.zynd.ai/registry?q=in',
    image: AiAgents,
  },
  {
    title: 'Sarkari Naukri',
    description:
      'Bilingual government job aggregation portal on Next.js App Router serving listings across categories. Cheerio-based crawlers normalize external HTML into structured JSON with automated ingestion and SEO-first pages.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Cheerio'],
    github: '#',
    live: 'https://sarkariprivatejob.com',
    image: SarkariPrivateJob,
    prod: true,
  },
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
];

const moreProjects = [
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
      onPointerEnter={() => setFlipped(true)}
      onPointerLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.6 }}
        style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
      >
        {/* ── FRONT ── */}
        <div style={face} className="flex flex-col border border-outline-variant bg-surface-container">
          <div className="relative h-[55%] shrink-0 overflow-hidden bg-surface-high">
            <img src={project.image} alt="" className="h-full w-full object-cover" />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
              style={{ background: 'linear-gradient(to top, #171f33, transparent)' }}
            />
            {project.prod && (
              <div
                className="absolute left-3 top-3 flex items-center gap-2 rounded-md border border-red-500/60 bg-red-950/80 px-2.5 py-1.5 backdrop-blur-sm"
                style={{ boxShadow: '0 0 12px rgba(239,68,68,0.35)' }}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
                </span>
                <span className="font-mono text-[11px] font-semibold tracking-wider text-red-300">Live in prod</span>
              </div>
            )}
            {/* Link buttons — stop pointer propagation so hovering them doesn't flip the card */}
            <div
              className="absolute right-3 top-3 flex gap-2"
              onPointerEnter={(e) => e.stopPropagation()}
              onPointerLeave={(e) => e.stopPropagation()}
            >
              <FrontLink href={project.github} label="GitHub">
                <FaGithub size={13} />
              </FrontLink>
              <FrontLink href={project.live} label="Live Demo">
                <ExternalLink size={13} />
              </FrontLink>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-4">
            <h3 className="line-clamp-2 font-display text-sm font-semibold leading-snug text-on-surface">
              {project.title}
            </h3>
            <TechList items={project.technologies} />
            <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
              Hover to see details →
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div style={{ ...face, transform: 'rotateY(180deg)' }} className="flex flex-col border border-primary-bright/40 bg-surface-high p-5">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h3 className="font-display text-base font-semibold leading-snug text-on-surface">{project.title}</h3>
            {project.prod && (
              <div
                className="flex shrink-0 items-center gap-1.5 rounded-md border border-red-500/60 bg-red-950/80 px-2 py-1"
                style={{ boxShadow: '0 0 10px rgba(239,68,68,0.3)' }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-80" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
                </span>
                <span className="font-mono text-[10px] font-semibold text-red-300">Live</span>
              </div>
            )}
          </div>
          <p className="flex-1 overflow-y-auto text-sm leading-relaxed text-on-surface-variant">{project.description}</p>
          <TechList items={project.technologies} compact />
          <div className="mt-4 flex gap-3 border-t border-outline-variant pt-4">
            <BackLink href={project.github} onClick={(e) => e.stopPropagation()}>
              <FaGithub size={13} /> GitHub
            </BackLink>
            <BackLink href={project.live} onClick={(e) => e.stopPropagation()}>
              <ExternalLink size={13} /> Live Demo
            </BackLink>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

function FrontLink({ href, label, children }) {
  if (!href || href === '#') return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-outline-variant bg-surface/80 text-on-surface-variant backdrop-blur-sm transition-all duration-200 hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}

function BackLink({ href, onClick, children }) {
  if (!href || href === '#') return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline-variant bg-surface-container py-2 font-mono text-xs text-on-surface-variant transition-all duration-200 hover:border-primary hover:text-primary"
    >
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

        {/* <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((current) => !current)}
            className="rounded-lg border border-outline-variant px-6 py-2.5 text-sm font-semibold text-on-surface-variant transition-all duration-200 hover:border-primary hover:text-primary"
          >
            {showMore ? 'Show Less' : 'View More'}
          </button>
        </div> */}
      </div>
    </section>
  );
}
