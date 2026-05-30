import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, ChevronDown } from 'lucide-react';

const experiences = [
  {
    company: 'Alan Scott UpNUp Life',
    role: 'Software Development Engineer',
    duration: 'Oct 2025 - Present',
    location: 'Remote',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'BullMQ', 'Python', 'Qdrant'],
    highlights: [
      'Designed and shipped asli-samajh, a NestJS + PostgreSQL trust-and-verification microservice for worker skill assessments, with Knex.js, BullMQ workers, Pino structured logging, and a polymorphic ownership model enforced via a DB-level XOR CHECK constraint.',
      'Built a cross-service identity sync pipeline mirroring workers from the Core service into asli-samajh via a BullMQ queue, decoupling the services so assessments remain available during Core downtime.',
      'Modeled the full assessment schema in Knex migrations with cascade rules, partial indexes, and a denormalized JSONB worker_skill_profile column atomically recomputed inside a Knex transaction on every write.',
      'Hardened the API surface with Helmet, an explicit CORS allowlist, ThrottlerGuard, and a strict ValidationPipe with a custom nested error formatter.',
      'Built a bilingual React + TypeScript assessment platform with TanStack Query and shadcn/ui, including resumable assessments, guest sessions, and an employer console with bulk CSV onboarding.',
      'Built an internal documentation RAG chatbot with hybrid dense+sparse retrieval and cross-encoder reranking over private technical docs.',
    ],
  },
  {
    company: 'Dhamm.ai LLP',
    role: 'Executive Full Stack Developer',
    duration: 'Apr 2025 - Oct 2025',
    location: 'Remote',
    stack: ['JavaScript', 'Node.js', 'NestJS', 'React'],
    highlights: [
      'Built responsive, accessible React components and reusable UI libraries, accelerating developer velocity through modular design and standardized patterns.',
      'Applied performance optimizations such as code splitting, lazy loading, and caching that improved page load time and cross-browser stability.',
      'Owned features end-to-end across API contracts, REST integration, Jest tests, PR reviews, and monitoring.',
    ],
  },
  {
    company: 'Joveo Technologies Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    duration: 'Nov 2024 - Feb 2025',
    location: 'Remote',
    stack: ['React', 'AngularJS', 'Redux'],
    highlights: [
      'Developed reusable React components with Redux and Context API to standardize state management across teams.',
      'Contributed to a major Angular version migration, refactoring components and resolving breaking changes to stabilize builds.',
      'Improved frontend reliability by adding CI tests and bundle optimizations, and supported deployment pipelines for production releases.',
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-colors duration-300 hover:border-primary-bright"
    >
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
      >
        <span className="flex items-start gap-4">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-outline-variant bg-surface-high text-primary-bright">
            <Briefcase size={15} />
          </span>
          <span>
            <span className="block font-display text-base font-semibold leading-snug text-on-surface">{exp.role}</span>
            <span className="mt-0.5 block text-sm text-primary-bright">{exp.company}</span>
            <span className="mt-2 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-outline">{exp.duration}</span>
              <span className="font-mono text-xs text-outline">{exp.location}</span>
            </span>
          </span>
        </span>
        <ChevronDown
          size={16}
          className={`mt-1 shrink-0 text-outline transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      <div className="flex flex-wrap gap-2 px-5 pb-4">
        {exp.stack.map((tech) => (
          <span
            key={tech}
            className="rounded bg-surface-high px-2 py-0.5 font-mono text-[11px] text-on-surface-variant ring-1 ring-outline-variant"
          >
            {tech}
          </span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 border-t border-outline-variant px-5 pb-5 pt-4">
              {exp.highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-bright" />
                  <p className="text-sm leading-relaxed text-on-surface-variant">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-low py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Career</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface">Work Experience</h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
