import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Deterministic scroll and scroll-spy handling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 10);

          // Scroll-spy: find section currently in view
          const sections = ['home', 'projects', 'about', 'skills', 'contact'];
          const offset = 140; // Navbar height + breathing room

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el) {
              const top = el.offsetTop - offset;
              if (scrollY >= top) {
                setActiveSection(sections[i]);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderBottom: isScrolled
          ? '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)'
          : '1px solid transparent',
        boxShadow: isScrolled
          ? '0 4px 20px -2px color-mix(in srgb, var(--color-text) 5%, transparent)'
          : 'none',
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Left: Brand Monogram & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="group flex items-center gap-3 font-bold text-xl sm:text-2xl tracking-tight transition-colors"
          style={{ color: 'var(--color-text)' }}
        >
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-200 group-hover:scale-105"
            style={{
              backgroundColor: 'var(--color-text)',
              color: 'var(--color-bg)',
            }}
          >
            AK
          </span>
          <span className="font-bold tracking-tight">Ayan Khan</span>
        </a>

        {/* Center: Desktop Nav Pills */}
        <div
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 4%, var(--color-bg))',
            border: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="relative px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
                style={{
                  color: isActive
                    ? 'var(--color-bg)'
                    : 'color-mix(in srgb, var(--color-text) 75%, transparent)',
                  backgroundColor: isActive
                    ? 'var(--color-text)'
                    : 'transparent',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right: View Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Ayan_Khan_Resume.pdf"
            download="Ayan_Khan_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-bg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1.5px)';
              e.currentTarget.style.boxShadow =
                '0 8px 20px -4px color-mix(in srgb, var(--color-accent) 35%, transparent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Download className="w-4 h-4" />
            <span>View Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="md:hidden p-2.5 rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)',
            color: 'var(--color-text)',
            border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
          }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer (100% Solid, Clean, Full Coverage) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col justify-between p-6 overflow-y-auto"
          style={{
            backgroundColor: 'var(--color-bg)',
            borderTop: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
            minHeight: 'calc(100vh - 5rem)',
          }}
        >
          <div className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="px-5 py-4 rounded-2xl text-lg font-bold transition-all duration-200 flex items-center justify-between"
                  style={{
                    backgroundColor: isActive
                      ? 'var(--color-text)'
                      : 'color-mix(in srgb, var(--color-text) 5%, transparent)',
                    color: isActive ? 'var(--color-bg)' : 'var(--color-text)',
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div
            className="pt-6 border-t mt-6 pb-6"
            style={{
              borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
            }}
          >
            <a
              href="/Ayan_Khan_Resume.pdf"
              download="Ayan_Khan_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold tracking-wide transition-all shadow-sm"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg)',
              }}
            >
              <Download className="w-5 h-5" />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
