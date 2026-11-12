import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Site footer"
      className="border-t py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-text) 2%, var(--color-bg))',
        borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">
          <a
            href="#home"
            aria-label="Ayan Khan — Back to homepage"
            className="font-bold text-base tracking-tight transition-colors"
            style={{ color: 'var(--color-text)' }}
          >
            Ayan Khan
          </a>
          <span
            style={{
              color: 'color-mix(in srgb, var(--color-text) 60%, transparent)',
            }}
          >
            &copy; {new Date().getFullYear()} Full Stack Developer. Built with precision.
          </span>
        </div>

        <nav aria-label="Footer navigation" className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href="#home"
              title="Go to Home section"
              aria-label="Go to Home section"
              className="transition-colors"
              style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 70%, transparent)')}
            >
              Home
            </a>
            <a
              href="#projects"
              title="View my projects"
              aria-label="Go to Projects section"
              className="transition-colors"
              style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 70%, transparent)')}
            >
              Projects
            </a>
            <a
              href="#about"
              title="Learn about Ayan Khan"
              aria-label="Go to About section"
              className="transition-colors"
              style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 70%, transparent)')}
            >
              About
            </a>
            <a
              href="#skills"
              title="View skills and tech stack"
              aria-label="Go to Skills section"
              className="transition-colors"
              style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 70%, transparent)')}
            >
              Skills
            </a>
            <a
              href="#contact"
              title="Contact Ayan Khan"
              aria-label="Go to Contact section"
              className="transition-colors"
              style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 70%, transparent)')}
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="group btn-diagonal-secondary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl"
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Top</span>
          </button>
        </nav>
      </div>
    </footer>
  );
}
