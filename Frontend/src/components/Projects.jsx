import { useState, useMemo } from 'react';
import { ExternalLink, FolderGit2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons';

const featuredProject = {
  id: '01',
  title: 'Full-Stack E-Commerce Store',
  tagline: 'Featured Project',
  category: 'fullstack',
  description:
    'A complete online shopping store with product search, category filtering, a responsive shopping cart, user authentication, checkout flow, and an admin dashboard to manage inventory and view customer orders.',
  highlights: ['Product Search & Filter', 'Cart & Order Management', 'Admin Dashboard'],
  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com',
};

const otherProjects = [
  {
    id: '02',
    title: 'Team Task & Project Manager',
    category: 'fullstack',
    description:
      'A simple Kanban-style task management app for organizing team workflows, assigning tasks, setting due dates, and tracking daily progress in real-time.',
    tags: ['React', 'Node.js', 'Tailwind', 'Express', 'WebSockets'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '03',
    title: 'Personal Blog & Writing Platform',
    category: 'frontend',
    description:
      'A fast, readable blog website where writers can create, format, and publish articles with markdown support, reading time estimates, and tag filters.',
    tags: ['Next.js', 'React', 'Tailwind', 'Markdown'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '04',
    title: 'Real-Time Chat Application',
    category: 'fullstack',
    description:
      'A direct messaging web app with group chat rooms, instant message delivery, live online status indicators, and clean message history.',
    tags: ['React', 'Socket.io', 'Express', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '05',
    title: 'Weather & Forecast Tracker',
    category: 'frontend',
    description:
      'Search any city worldwide to get instant live weather details, humidity, wind speeds, and a 7-day temperature forecast with clean charts.',
    tags: ['React', 'Tailwind', 'REST API', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '06',
    title: 'Clean Developer Portfolio Theme',
    category: 'frontend',
    description:
      'A fast, accessible personal portfolio website built with modern React and Tailwind CSS, featuring smooth navigation and zero clutter.',
    tags: ['React 19', 'Tailwind v4', 'Vite', 'Lucide'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
];

function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, var(--color-bg))',
        border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
        boxShadow: '0 4px 16px -2px color-mix(in srgb, var(--color-text) 4%, transparent)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-accent)';
        e.currentTarget.style.boxShadow =
          '0 16px 36px -10px color-mix(in srgb, var(--color-accent) 15%, transparent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-text) 12%, transparent)';
        e.currentTarget.style.boxShadow = '0 4px 16px -2px color-mix(in srgb, var(--color-text) 4%, transparent)';
      }}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-md"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-text) 6%, transparent)',
              color: 'var(--color-accent)',
              border: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
            }}
          >
            {project.id}
          </span>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent)';
                e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 10%, transparent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 65%, transparent)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} Live`}
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent)';
                e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 10%, transparent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 65%, transparent)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <h3
          className="text-xl sm:text-2xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--color-text)' }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm sm:text-base leading-relaxed mb-6"
          style={{
            color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Tech Badges */}
      <div
        className="flex flex-wrap gap-2 pt-5 border-t"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-text) 8%, transparent)',
        }}
      >
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs sm:text-sm px-3 py-1 rounded-md font-medium"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-text) 4%, transparent)',
              color: 'var(--color-text)',
              border: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return otherProjects;
    return otherProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const showFlagship = activeCategory === 'all' || featuredProject.category === activeCategory;

  return (
    <section
      id="projects"
      style={{ scrollMarginTop: '6rem' }}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Clean Cohesive Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-6 border-b"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
        }}
      >
        <div
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          style={{ color: 'var(--color-accent)' }}
        >
          <FolderGit2 className="w-4 h-4" />
          <span>My Work</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--color-text)' }}
        >
          Projects I've Built
        </h2>

        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{
            color: 'color-mix(in srgb, var(--color-text) 65%, transparent)',
          }}
        >
          Here are some of the web applications and projects I have worked on, from full-stack websites to frontend tools.
        </p>
      </motion.div>

      {/* Category Filter Pills (Comfortable readable text) */}
      <div className="flex flex-wrap items-center gap-2.5 mb-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
              style={{
                backgroundColor: isActive
                  ? 'var(--color-text)'
                  : 'color-mix(in srgb, var(--color-text) 4%, var(--color-bg))',
                color: isActive
                  ? 'var(--color-bg)'
                  : 'color-mix(in srgb, var(--color-text) 70%, transparent)',
                border: isActive
                  ? '1px solid var(--color-text)'
                  : '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Flagship Project Card */}
      {showFlagship && (
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-10 mb-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, var(--color-bg))',
            border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
            boxShadow: '0 4px 20px -3px color-mix(in srgb, var(--color-text) 5%, transparent)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-accent)';
            e.currentTarget.style.boxShadow =
              '0 20px 48px -12px color-mix(in srgb, var(--color-accent) 15%, transparent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-text) 12%, transparent)';
            e.currentTarget.style.boxShadow = '0 4px 20px -3px color-mix(in srgb, var(--color-text) 5%, transparent)';
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs sm:text-sm font-bold px-3 py-1 rounded-md"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
                    color: 'var(--color-accent)',
                    border: '1px solid color-mix(in srgb, var(--color-accent) 30%, transparent)',
                  }}
                >
                  Featured Project
                </span>
                <span
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: 'color-mix(in srgb, var(--color-text) 60%, transparent)' }}
                >
                  Full-Stack Web App
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3"
                style={{ color: 'var(--color-text)' }}
              >
                {featuredProject.title}
              </h3>

              <p
                className="text-base sm:text-lg leading-relaxed mb-6 max-w-2xl"
                style={{
                  color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
                }}
              >
                {featuredProject.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-6">
                {featuredProject.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)',
                      color: 'var(--color-text)',
                      border: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
                    }}
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm px-3 py-1 rounded-md font-medium"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-text) 4%, transparent)',
                      color: 'var(--color-text)',
                      border: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-diagonal-primary inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-diagonal-secondary inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide"
              >
                <GithubIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((proj, idx) => (
          <ProjectCard key={proj.id} project={proj} index={idx} />
        ))}
      </div>
    </section>
  );
}
