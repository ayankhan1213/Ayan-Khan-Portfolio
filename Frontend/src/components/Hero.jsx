import { Mail, ArrowUpRight, Code, Sparkles, Layers, Zap } from 'lucide-react';
import ayanPhoto from '../assets/AyanKhan.jpeg';

export default function Hero() {
  return (
    <section
      id="home"
      style={{ scrollMarginTop: '6rem' }}
      className="relative pt-4 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col items-start" data-aos="fade-up" data-aos-duration="700">
          <div
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
            style={{ color: 'var(--color-accent)' }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Welcome to my portfolio</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.08] mt-4 mb-5"
            style={{ color: 'var(--color-text)' }}
          >
            Hi, I'm <br /> <span style={{ color: 'var(--color-accent)' }}>Ayan Khan</span>.
            <br />
            Full Stack Developer
          </h1>

          <p
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
            style={{
              color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
            }}
          >
            I am a passionate fresher full-stack developer focused on building modern, responsive websites and web applications. Eager to learn, quick to adapt, and committed to writing clean, maintainable code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10" data-aos="fade-up" data-aos-delay="150">
            <a
              href="#projects"
              className="group btn-diagonal-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base tracking-wide"
            >
              <span>See My Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#contact"
              className="group btn-diagonal-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base tracking-wide"
            >
              <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Fresher Strengths Strip */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t w-full"
            style={{
              borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <Code className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
              <div>
                <div className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
                  React & Node
                </div>
                <div className="text-xs" style={{ color: 'color-mix(in srgb, var(--color-text) 60%, transparent)' }}>
                  Core Stack
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
              <div>
                <div className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
                  Full-Stack
                </div>
                <div className="text-xs" style={{ color: 'color-mix(in srgb, var(--color-text) 60%, transparent)' }}>
                  Frontend & Backend
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
              <div>
                <div className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
                  Fast Learner
                </div>
                <div className="text-xs" style={{ color: 'color-mix(in srgb, var(--color-text) 60%, transparent)' }}>
                  Ready to Grow
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
              <div>
                <div className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
                  Clean Code
                </div>
                <div className="text-xs" style={{ color: 'color-mix(in srgb, var(--color-text) 60%, transparent)' }}>
                  Modern Standards
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Ayan Khan's Real Photo Card */}
        <div className="lg:col-span-5 flex justify-center items-center" data-aos="fade-left" data-aos-delay="200">
          <div
            className="relative w-full max-w-sm rounded-3xl p-5 transition-all duration-300"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, var(--color-bg))',
              border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
              boxShadow: '0 16px 36px -12px color-mix(in srgb, var(--color-text) 8%, transparent)',
            }}
          >
            {/* Real Photo Box */}
            <div
              className="w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center relative transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
              }}
            >
              <img
                src={ayanPhoto}
                alt="Ayan Khan"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Simple Card Footer */}
            <div
              className="mt-4 flex items-center justify-between pt-3 border-t text-sm font-medium"
              style={{
                borderColor: 'color-mix(in srgb, var(--color-text) 8%, transparent)',
              }}
            >
              <span className="font-bold" style={{ color: 'var(--color-text)' }}>Ayan Khan</span>
              <span className="font-semibold" style={{ color: 'var(--color-accent)' }}>Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
