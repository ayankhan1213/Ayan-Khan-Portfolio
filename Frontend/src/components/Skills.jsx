import { Wrench, Layout, Server, Terminal } from 'lucide-react';
import {
  Html5Logo,
  Css3Logo,
  JavaScriptLogo,
  TypeScriptLogo,
  ReactLogo,
  NextjsLogo,
  TailwindLogo,
  ReduxLogo,
  NodejsLogo,
  ExpressLogo,
  PythonLogo,
  PostgreSqlLogo,
  MongoDbLogo,
  RestApiLogo,
  GitLogo,
  VsCodeLogo,
  ViteLogo,
  PostmanLogo,
  DockerLogo,
  LinuxLogo,
  NpmLogo,
} from './TechLogos';
import { GithubIcon } from './Icons';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Building fast, accessible, and reactive user interfaces with modern React and CSS.',
    skills: [
      { name: 'React 19', Logo: ReactLogo },
      { name: 'Next.js', Logo: NextjsLogo },
      { name: 'TypeScript', Logo: TypeScriptLogo },
      { name: 'JavaScript', Logo: JavaScriptLogo },
      { name: 'Tailwind CSS', Logo: TailwindLogo },
      { name: 'HTML5', Logo: Html5Logo },
      { name: 'CSS3', Logo: Css3Logo },
      { name: 'Redux / State', Logo: ReduxLogo },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    description: 'Developing server-side architectures, secure APIs, and relational/document databases.',
    skills: [
      { name: 'Node.js', Logo: NodejsLogo },
      { name: 'Express.js', Logo: ExpressLogo },
      { name: 'Python', Logo: PythonLogo },
      { name: 'PostgreSQL', Logo: PostgreSqlLogo },
      { name: 'MongoDB', Logo: MongoDbLogo },
      { name: 'REST APIs', Logo: RestApiLogo },
      { name: 'JWT Auth', Logo: RestApiLogo },
      { name: 'Database Queries', Logo: PostgreSqlLogo },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Terminal,
    description: 'Everyday developer utilities for version control, local tooling, containers, and deployment.',
    skills: [
      { name: 'Git', Logo: GitLogo },
      { name: 'GitHub', Logo: GithubIcon },
      { name: 'VS Code', Logo: VsCodeLogo },
      { name: 'Vite', Logo: ViteLogo },
      { name: 'Postman', Logo: PostmanLogo },
      { name: 'Docker', Logo: DockerLogo },
      { name: 'Linux Terminal', Logo: LinuxLogo },
      { name: 'npm', Logo: NpmLogo },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ scrollMarginTop: '6rem' }}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Clean Cohesive Section Header */}
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
          <Wrench className="w-4 h-4" />
          <span>Tech Stack</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--color-text)' }}
        >
          Skills & Technologies
        </h2>

        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{
            color: 'color-mix(in srgb, var(--color-text) 65%, transparent)',
          }}
        >
          The programming languages, frameworks, and developer tools I use to build full-stack web applications.
        </p>
      </div>

      {/* 3 Balanced Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <div
              key={index}
              className="rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
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
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
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
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    color: 'color-mix(in srgb, var(--color-text) 65%, transparent)',
                  }}
                >
                  {group.description}
                </p>
              </div>

              {/* Symmetrical 2-Column Grid of Skill Tiles with Official Logos */}
              <div
                className="grid grid-cols-2 gap-2.5 pt-6 border-t mt-auto"
                style={{
                  borderColor: 'color-mix(in srgb, var(--color-text) 8%, transparent)',
                }}
              >
                {group.skills.map((skill, sIdx) => {
                  const SkillLogo = skill.Logo;
                  return (
                    <div
                      key={sIdx}
                      className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer"
                      style={{
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                        border: '1px solid color-mix(in srgb, var(--color-text) 10%, transparent)',
                        boxShadow: '0 1px 3px color-mix(in srgb, var(--color-text) 3%, transparent)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow =
                          '0 6px 14px -2px color-mix(in srgb, var(--color-accent) 15%, transparent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          'color-mix(in srgb, var(--color-text) 10%, transparent)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow =
                          '0 1px 3px color-mix(in srgb, var(--color-text) 3%, transparent)';
                      }}
                    >
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center transition-transform duration-200 group-hover/item:scale-110">
                        <SkillLogo className="w-5 h-5" />
                      </div>
                      <span className="font-semibold truncate tracking-tight">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
