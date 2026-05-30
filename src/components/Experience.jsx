import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaChevronDown } from 'react-icons/fa';

const experiences = [
  {
    company: 'Alan Scott UpNUp Life',
    role: 'Software Development Engineer',
    duration: 'Oct 2025 – Present',
    location: 'Remote',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'BullMQ', 'Python', 'Qdrant'],
    highlights: [
      'Designed and shipped asli-samajh, a NestJS + PostgreSQL trust-and-verification microservice for worker skill assessments, with Knex.js, BullMQ workers, Pino structured logging, and a polymorphic ownership model enforced via a DB-level XOR CHECK constraint — enabling a frictionless "try before signup" flow.',
      'Built a cross-service identity sync pipeline mirroring workers from the Core service into asli-samajh via a BullMQ queue, decoupling the two services so assessments remain available during Core downtime.',
      'Modeled the full assessment schema in Knex migrations (categories, questions, attempts, guest sessions, skill profiles) with cascade rules, partial indexes, and a denormalized JSONB worker_skill_profile column atomically recomputed inside a Knex transaction on every write.',
      'Hardened the API surface with Helmet, an explicit CORS allowlist, ThrottlerGuard (100 req/min), and a strict ValidationPipe with a custom nested error formatter; integrated cross-service JWT verification supporting three user roles with per-route enforcement.',
      'Built a bilingual (English/Hindi) React + TypeScript assessment platform with TanStack Query and shadcn/ui — resumable assessments, guest sessions that seamlessly migrate to authenticated accounts, and an employer console with bulk CSV onboarding.',
      'Built an internal documentation RAG chatbot (Python, Haystack, Qdrant) with hybrid dense+sparse retrieval and cross-encoder reranking, delivering multi-turn, citation-grounded answers over private technical docs.',
      'Replaced a brittle html2canvas scorecard pipeline with a programmatic jsPDF + jspdf-autotable generator (Devanagari/Unicode support, multi-page overflow handling), and authored OpenAPI/Swagger docs across all modules.',
    ],
  },
  {
    company: 'Dhamm.ai LLP',
    role: 'Executive Full Stack Developer',
    duration: 'Apr 2025 – Oct 2025',
    location: 'Remote',
    stack: ['JavaScript', 'Node.js', 'NestJS', 'React'],
    highlights: [
      'Built responsive, accessible React components and reusable UI libraries, accelerating developer velocity by ~40% through modular design and standardized patterns.',
      'Applied performance optimizations (code splitting, lazy loading, caching) that cut median page load time by ~35% and stabilized cross-browser behavior on Chrome, Firefox, and Edge.',
      'Owned features end-to-end across API contracts, REST integration, Jest tests, PR reviews, and monitoring — reducing defect escape across sprints and improving UX consistency across devices.',
    ],
  },
  {
    company: 'Joveo Technologies Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    duration: 'Nov 2024 – Feb 2025',
    location: 'Remote',
    stack: ['React', 'AngularJS', 'Redux'],
    highlights: [
      'Developed reusable React components with Redux and Context API to standardize state management across teams.',
      'Contributed to a major Angular version migration — refactored components, updated dependencies, and resolved breaking changes to stabilize builds while preserving functionality.',
      'Improved frontend reliability by adding CI tests and bundle optimizations, and supported deployment pipelines for production releases.',
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden hover:border-primary-bright transition-colors duration-300"
    >
      {/* Card header — always visible */}
      <button
        onClick={() => setExpanded(prev => !prev)}
        className="w-full text-left p-5 flex items-start justify-between gap-4"
      >
        <div className="flex items-start gap-4">
          <div className="mt-0.5 w-9 h-9 rounded-lg border border-outline-variant bg-surface-high flex items-center justify-center text-primary-bright shrink-0">
            <FaBriefcase size={14} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-base text-on-surface leading-snug">{exp.role}</h3>
            <p className="font-body text-sm text-primary-bright mt-0.5">{exp.company}</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="font-mono text-xs text-outline">{exp.duration}</span>
              <span className="font-mono text-xs text-outline">{exp.location}</span>
            </div>
          </div>
        </div>
        <FaChevronDown
          size={13}
          className={`text-outline mt-1 shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Stack tags */}
      <div className="px-5 pb-4 flex flex-wrap gap-2">
        {exp.stack.map((tech, i) => (
          <span key={i} className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-high border border-outline-variant text-on-surface-variant">
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable highlights */}
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
            <ul className="px-5 pb-5 space-y-3 border-t border-outline-variant pt-4">
              {exp.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary-bright shrink-0" />
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-surface-low">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">Career</p>
          <h2 className="font-display font-bold text-3xl text-on-surface tracking-tight">Work Experience</h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
