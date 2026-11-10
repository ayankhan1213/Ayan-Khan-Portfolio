import { User, Code2, Smartphone, HeartHandshake } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Code2,
      title: 'Clean & Readable Code',
      description:
        'I believe good code is simple code. I focus on writing modular, well-organized components that are easy to maintain.',
    },
    {
      icon: Smartphone,
      title: 'Responsive & Fast',
      description:
        'Every web app I build is optimized to load quickly and look great across phones, tablets, and desktop screens.',
    },
    {
      icon: HeartHandshake,
      title: 'User-Friendly Design',
      description:
        'A great app is one that anyone can pick up and use effortlessly without confusion or frustration.',
    },
  ];

  return (
    <section
      id="about"
      style={{ scrollMarginTop: '5rem' }}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Clean Cohesive Header */}
      <div
        className="mb-12 pb-6 border-b"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
        }}
      >
        <div
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          style={{ color: 'var(--color-accent)' }}
        >
          <User className="w-4 h-4" />
          <span>About Me</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--color-text)' }}
        >
          A Little About My Journey
        </h2>

        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{
            color: 'color-mix(in srgb, var(--color-text) 65%, transparent)',
          }}
        >
          Who I am, what I love building, and how I approach writing software.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Narrative Box */}
        <div
          className="lg:col-span-6 rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, var(--color-bg))',
            border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
            boxShadow: '0 4px 20px -3px color-mix(in srgb, var(--color-text) 4%, transparent)',
          }}
        >
          <div>
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-5"
              style={{ color: 'var(--color-text)' }}
            >
              Passionate about creating things on the web.
            </h3>

            <div
              className="space-y-4 text-base sm:text-lg leading-relaxed"
              style={{ color: 'color-mix(in srgb, var(--color-text) 72%, transparent)' }}
            >
              <p>
                My passion for programming started when I created my first simple webpage. Seeing code turn into something visual and interactive felt like magic, and I've been hooked ever since.
              </p>
              <p>
                As a fresher full-stack developer, I have built complete web applications using React, Node.js, Express, and modern CSS. I enjoy sketching out ideas, building backend APIs, and polishing frontend interfaces.
              </p>
              <p>
                I am eager to join a forward-thinking team where I can contribute my energy, learn from experienced engineers, and build high-quality software.
              </p>
            </div>
          </div>

          <div
            className="pt-6 mt-6 border-t flex flex-wrap items-center justify-between gap-2 text-sm font-medium"
            style={{
              borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
            }}
          >
            <span style={{ color: 'var(--color-text)' }}>Based in Pakistan</span>
            <span style={{ color: 'var(--color-accent)' }}>Ready for full-time & remote roles</span>
          </div>
        </div>

        {/* 3 Value Cards */}
        <div className="lg:col-span-6 flex flex-col gap-4 justify-between">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-3xl p-7 flex items-start gap-5 transition-all duration-300 hover:translate-x-1"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, var(--color-bg))',
                  border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
                  boxShadow: '0 4px 16px -2px color-mix(in srgb, var(--color-text) 4%, transparent)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    'color-mix(in srgb, var(--color-text) 12%, transparent)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
                    color: 'var(--color-accent)',
                    border: '1px solid color-mix(in srgb, var(--color-accent) 25%, transparent)',
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h4
                    className="text-lg font-bold mb-1.5"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{
                      color: 'color-mix(in srgb, var(--color-text) 65%, transparent)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
