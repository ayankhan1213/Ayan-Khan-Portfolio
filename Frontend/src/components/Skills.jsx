import { Wrench, Layout, Server, Terminal } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Building clean, interactive user interfaces with modern React and Tailwind CSS.',
    skills: [
      'React 19',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'Tailwind CSS',
      'HTML5 & Modern CSS',
      'Responsive Web Design',
      'State Management',
    ],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    description: 'Creating backend logic, RESTful APIs, and connecting databases for real-time web apps.',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
      'User Authentication (JWT)',
      'Database Queries',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Terminal,
    description: 'My daily tools for writing code, version control, testing, and shipping projects.',
    skills: [
      'Git & GitHub',
      'VS Code',
      'Vite',
      'Postman',
      'Linux Terminal',
      'npm & package management',
      'Docker Basics',
      'Browser DevTools',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ scrollMarginTop: '5rem' }}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
        }}
      >
        <div>
          <div
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-accent)' }}
          >
            <Wrench className="w-4 h-4" />
            <span>Tech Stack</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Skills & Technologies
          </h2>
        </div>

        <p
          className="text-sm sm:text-base max-w-md mt-3 md:mt-0"
          style={{
            color: 'color-mix(in srgb, var(--color-text) 65%, transparent)',
          }}
        >
          The programming languages, frameworks, and tools I use to build full-stack web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <div
              key={index}
              className="rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, var(--color-bg))',
                border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
                boxShadow: '0 4px 16px -2px color-mix(in srgb, var(--color-text) 4%, transparent)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.boxShadow =
                  '0 16px 36px -8px color-mix(in srgb, var(--color-accent) 12%, transparent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  'color-mix(in srgb, var(--color-text) 12%, transparent)';
                e.currentTarget.style.boxShadow =
                  '0 4px 16px -2px color-mix(in srgb, var(--color-text) 4%, transparent)';
              }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
                    color: 'var(--color-accent)',
                    border: '1px solid color-mix(in srgb, var(--color-accent) 25%, transparent)',
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3
                  className="text-xl font-bold tracking-tight mb-2"
                  style={{ color: 'var(--color-text)' }}
                >
                  {group.title}
                </h3>

                <p
                  className="text-sm sm:text-base leading-relaxed mb-6"
                  style={{
                    color: 'color-mix(in srgb, var(--color-text) 65%, transparent)',
                  }}
                >
                  {group.description}
                </p>
              </div>

              <div
                className="flex flex-wrap gap-2 pt-6 border-t"
                style={{
                  borderColor: 'color-mix(in srgb, var(--color-text) 8%, transparent)',
                }}
              >
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-lg font-medium transition-colors"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-text) 4%, transparent)',
                      color: 'var(--color-text)',
                      border: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.color = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        'color-mix(in srgb, var(--color-text) 10%, transparent)';
                      e.currentTarget.style.color = 'var(--color-text)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
