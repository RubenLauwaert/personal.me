import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Co-Founder & Lead Developer',
    company: 'HodlBase',
    period: 'Jun 2025 – Present',
    current: true,
    achievements: [
      'Built an institutional data platform for tracking Bitcoin treasury companies & digital credit instruments',
      'Developed a reliable REST & Websocket API, used by multiple companies in the Bitcoin space',
      'Educated companies and individuals on Bitcoin, Bitcoin treasury companies & digital credit instruments'
    ]
  },
  {
    title: 'Optimization & AI Consultant',
    company: 'Sopra Steria',
    period: 'Feb 2024 – Jan 2025',
    current: false,
    achievements: [
      'Developed and enhanced secure, high-performance logistics systems, improving system reliability and scalability',
      'Maintained and extended critical production codebases using GitLab, ensuring code quality and operational stability',
      'Designed and implemented AI-driven chatbot pipelines in Python using LangChain'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Experience</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Building secure systems and exploring the future of finance
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-1">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground md:ml-auto">
                  <Calendar className="w-4 h-4" />
                  <span className="whitespace-nowrap">{exp.period}</span>
                  {exp.current && (
                    <span className="ml-2 bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 ml-0 md:ml-16">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
