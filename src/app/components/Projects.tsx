import { Globe } from 'lucide-react';
import { useTheme } from './ThemeProvider';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  website?: string;
};

const projects: Project[] = [
  {
    title: 'HodlBase',
    description: 'Institutional data platform for tracking Bitcoin treasury companies and their digital credit instruments. Built with a reliable REST & Websocket API serving multiple companies in the Bitcoin space.',
    tags: ['Python', 'TypeScript', 'REST API', 'WebSocket', 'Bitcoin', 'PostgreSQL'],
    image: '₿',
    website: 'https://hodlbase.io'
  },
  {
    title: 'LevelHub Platform',
    description: 'Digitized a sales assessment platform where sales professionals can discover their strengths, take personalized assessments, and get actionable insights to improve their performance.',
    tags: ['Python', 'TypeScript', 'LangChain', 'LLM', 'RAG', 'AI/ML'],
    image: '/levelhub-hero02.png',
    website: 'https://levelhub.app'
  },
  {
    title: 'TradingView Indicator Suite',
    description: 'Actively maintained suite of TradingView indicators for in-depth analysis of Bitcoin treasury companies and digital credit instruments.',
    tags: ['Pine Script', 'TradingView', 'Bitcoin', 'Digital Credit', 'Quant'],
    image: '₿',
    website: 'https://www.tradingview.com/u/HodlBase/#published-scripts'
  },
];

export function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Featured Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A selection of projects I've worked on recently
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group flex flex-col">
              <div className="h-52 bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center text-6xl">
                {project.title === 'HodlBase' ? (
                  <img
                    src={theme === 'dark' ? '/hodlbase-light.png' : '/hodlbase-dark.png'}
                    alt="HodlBase"
                    className="w-full h-full object-cover object-left"
                  />
                ) : project.title === 'TradingView Indicator Suite' ? (
                  <img
                    src={theme === 'dark' ? '/tradingview-white.png' : '/tradingview-black.png'}
                    alt="TradingView Indicator Suite"
                    className="w-full h-full object-cover object-top"
                  />
                ) : project.image.startsWith('/') ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-bottom"
                  />
                ) : (
                  project.image
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-accent rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.website && (
                  <div className="flex gap-3 mt-auto pt-2">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
