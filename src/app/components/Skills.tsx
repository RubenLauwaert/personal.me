import { Code2, TrendingUp, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Technical Skills',
    groups: [
      { label: 'Languages', items: ['Python', 'Java', 'TypeScript', 'Rust'] },
      { label: 'DevOps & Infra', items: ['Docker', 'GitLab CI/CD', 'Azure'] },
      { label: 'AI/ML & Data', items: ['Langchain', 'LLM Pipelines', 'RAG', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'n8n', 'Parquet'] },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Financial Skills',
    groups: [
      { label: 'Digital Assets', items: ['Bitcoin & Digital Credit', 'Reserve-Asset Thesis', 'Corporate Treasury Adoption'] },
      { label: 'Derivatives & Trading', items: ['Options & Greeks', 'IV/RV Analysis', 'Perpetual Futures', 'Option Strategies'] },
      { label: 'Traditional Finance', items: ['Bond Mechanics', 'Fixed Income'] },
    ],
  },
  {
    icon: Users,
    title: 'Social Skills',
    groups: [
      { label: 'Leadership', items: ['Ownership & Accountability', 'Initiative & Team Leadership'] },
      { label: 'Communication', items: ['Audience-Adaptive', 'C-Level to Non-Technical', 'Clear & Direct'] },
      { label: 'Interpersonal', items: ['Active Listening', 'Approachable', 'At Ease in Any Setting'] },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Skills & Expertise</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A broad skill set spanning engineering, finance, and people
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.groups.map((group) => (
                  <div key={group.label}>
                    <h4 className="text-xs font-medium text-foreground/50 uppercase tracking-wider mb-2">
                      {group.label}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="text-xs px-2.5 py-1 bg-accent rounded-full text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
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
