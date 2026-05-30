import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const face = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  borderRadius: '0.5rem',
  overflow: 'hidden',
};

const ProjectCard = ({ project, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative h-[400px] cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.6 }}
        style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
      >
        {/* ── FRONT ── */}
        <div
          style={face}
          className="flex flex-col bg-surface-container border border-outline-variant"
        >
          {/* Image — takes upper ~55% */}
          <div className="relative h-[55%] bg-surface-high shrink-0 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={e => { e.target.src = '/placeholder.png'; e.target.onerror = null; }}
            />
            {/* bottom gradient fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #171f33, transparent)' }}
            />
            {/* Live in prod badge — top-left */}
            {project.prod && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface/80 backdrop-blur-sm border border-red-500/40">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-400" />
                </span>
                <span className="font-mono text-[10px] text-red-400 tracking-wider">Live in prod</span>
              </div>
            )}

            {/* link icon buttons — top-right */}
            <div className="absolute top-3 right-3 flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="w-8 h-8 rounded-md border border-outline-variant bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-200"
              >
                <FaGithub size={13} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="w-8 h-8 rounded-md border border-outline-variant bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-200"
              >
                <FaExternalLinkAlt size={11} />
              </a>
            </div>
          </div>

          {/* Lower area — title + tech */}
          <div className="flex flex-col flex-1 p-4 justify-between">
            <h3 className="font-display font-semibold text-sm text-on-surface leading-snug line-clamp-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-high border border-outline-variant text-on-surface-variant"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="font-mono text-[10px] text-outline mt-3 tracking-widest uppercase">Hover to see details</p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{ ...face, transform: 'rotateY(180deg)' }}
          className="flex flex-col bg-surface-high border border-primary-bright/40 p-5"
        >
          <h3 className="font-display font-semibold text-base text-on-surface leading-snug mb-3">
            {project.title}
          </h3>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1 overflow-y-auto">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4 pt-4 border-t border-outline-variant">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              <FaGithub size={13} /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              <FaExternalLinkAlt size={11} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: 'AI Engineering — Autonomous Agents & RAG',
      description: 'Built 10+ autonomous LLM agents (recruitment, travel, sales, finance, e-commerce) using a master orchestrator + sub-agent pattern with ThreadPoolExecutor for parallel tool calls, cutting run time 3–5× over sequential execution. Includes a multi-turn RAG system with hybrid dense+sparse retrieval, cross-encoder reranking, and citation-grounded answers.',
      technologies: ['Python', 'Claude', 'OpenRouter', 'Haystack v2', 'Qdrant', 'FastAPI'],
      github: '#',
      live: '#',
      image: Project1,
    },
    {
      title: 'LabReport Pro',
      description: 'Multi-tenant pathology-lab SaaS replacing manual Word workflows with 50+ tests, 25+ report templates, and 12 health checkups. WeasyPrint PDF renderer, multi-tenant row-level scoping, JWT silent refresh, and a patient self-service portal — deployed on GCP Cloud Run with Cloud Build CI.',
      technologies: ['Django 5', 'DRF', 'React 18', 'TypeScript', 'PostgreSQL', 'WeasyPrint', 'GCP Cloud Run'],
      github: '#',
      live: '#',
      image: Project2,
      prod: true,
    },
    {
      title: 'Sarkari Naukri',
      description: 'Bilingual (English/Hindi) government job aggregation portal on Next.js 16 App Router serving listings across 6 categories. Cheerio-based crawler normalizes external HTML into structured JSON ingested via GitHub Actions and node-cron for near real-time updates, with SEO-first architecture.',
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'Cheerio'],
      github: '#',
      live: '#',
      image: Project3,
      prod: true,
    },
  ];

  const moreProjects = [
    {
      title: 'Medicart',
      description: 'A comprehensive e-commerce platform for medical supplies and equipment, featuring user authentication, shopping cart functionality, and secure payment processing.',
      technologies: ['React', 'Redux', 'TypeScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/saraffa13/project',
      live: 'https://prodmedicart.vercel.app/',
      image: Project1,
    },
    {
      title: 'Placement Tracking App',
      description: 'A comprehensive platform that streamlines the placement process and provides real-time placement statistics.',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com/saraffa13/placement23',
      live: 'https://placement2023-f08ce.web.app/home',
      image: Project2,
    },
    {
      title: 'Duke',
      description: 'A B2B manufacturing website with customizable product displays and secure authentication features.',
      technologies: ['React', 'Redux', 'TypeScript', 'Magento'],
      github: '#',
      live: '#',
      image: Project3,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">Portfolio</p>
          <h2 className="font-display font-bold text-3xl text-on-surface tracking-tight">My Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {moreProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowMore(prev => !prev)}
            className="px-6 py-2.5 rounded-lg font-body font-semibold text-sm border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-200"
          >
            {showMore ? 'Show Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
