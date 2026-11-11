import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const getInitialSection = () => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const valid = ['home', 'projects', 'about', 'skills', 'contact'];
      if (valid.includes(hashId)) return hashId;
    }
    return 'home';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  // Sync with URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hashId = window.location.hash.replace('#', '');
      const valid = ['home', 'projects', 'about', 'skills', 'contact'];
      if (valid.includes(hashId)) {
        setActiveSection(hashId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Deterministic scroll and scroll-spy handling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 10);

          // If a click navigation is in progress, don't let scroll-spy interfere
          if (isClickScrollingRef.current) {
            ticking = false;
            return;
          }

          // If reached bottom of document, activate contact
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          if (windowHeight + scrollY >= documentHeight - 100) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          // Reference line for scroll-spy (just below fixed 80px navbar)
          const spyLine = 180;
          const sections = ['home', 'projects', 'about', 'skills', 'contact'];

          for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= spyLine && rect.bottom > spyLine) {
                setActiveSection(id);
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
    setActiveSection(targetId);
    window.history.pushState(null, '', href);

    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            className="group btn-diagonal-accent inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold tracking-wide"
          >
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
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
          className="md:hidden p-2.5 rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 5%, transparent)',
            color: 'var(--color-text)',
            border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
          }}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </div>
        </button>
      </nav>

      {/* Mobile Backdrop Overlay (Subtle blur, closes on click) */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 top-20 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-text) 25%, transparent)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
        }}
      />

      {/* Mobile Floating Dropdown Card (Compact & Smooth) */}
      <div
        id="mobile-navigation"
        className={`md:hidden absolute top-full left-4 right-4 sm:left-auto sm:right-6 sm:w-80 mt-2 z-50 rounded-3xl p-4 transition-all duration-300 ease-out origin-top ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
        style={{
          backgroundColor: 'var(--color-bg)',
          border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
          boxShadow: '0 20px 48px -10px color-mix(in srgb, var(--color-text) 18%, transparent)',
        }}
      >
        <div className="flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200 flex items-center justify-between"
                style={{
                  backgroundColor: isActive
                    ? 'var(--color-text)'
                    : 'transparent',
                  color: isActive
                    ? 'var(--color-bg)'
                    : 'color-mix(in srgb, var(--color-text) 80%, transparent)',
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div
          className="pt-3.5 border-t mt-3"
          style={{
            borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
          }}
        >
          <a
            href="/Ayan_Khan_Resume.pdf"
            download="Ayan_Khan_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="group btn-diagonal-accent w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-wide"
          >
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
