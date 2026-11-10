import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-text) 2%, var(--color-bg))',
        borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">
          <span className="font-bold text-base tracking-tight" style={{ color: 'var(--color-text)' }}>
            Ayan Khan
          </span>
          <span
            style={{
              color: 'color-mix(in srgb, var(--color-text) 60%, transparent)',
            }}
          >
            &copy; {new Date().getFullYear()} Full Stack Developer. Built with precision.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href="#home"
              className="transition-colors"
              style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 70%, transparent)')}
            >
              Home
            </a>
            <a
              href="#projects"
              className="transition-colors"
              style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--color-text) 70%, transparent)')}
            >
              Projects
            </a>
            <a
              href="#contact"
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
            aria-label="Back to top"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.borderColor = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text)';
              e.currentTarget.style.borderColor =
                'color-mix(in srgb, var(--color-text) 12%, transparent)';
            }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
