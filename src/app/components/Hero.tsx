import { Linkedin, Mail, ArrowDown, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-0 relative">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="text-center md:text-left space-y-5">
          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Mechelen, Belgium</span>
            <span className="w-5 h-5 rounded-full overflow-hidden inline-flex shrink-0">
              <svg viewBox="0 0 30 20" className="w-full h-full">
                <rect x="0" y="0" width="10" height="20" fill="#000" />
                <rect x="10" y="0" width="10" height="20" fill="#FAE042" />
                <rect x="20" y="0" width="10" height="20" fill="#ED2939" />
              </svg>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl">
              <span className="text-primary">Ruben Lauwaert</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Software Engineer / Quant Researcher
            </h2>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Software engineer with a strong foundation in computer science and mathematics,
            specializing in backend/big-data systems, AI pipelines, and financial technology.
            Passionate about the convergence of Bitcoin and traditional finance, with a
            particular interest in Bitcoin as a store-of-value reserve asset and the growing
            adoption of digital assets within corporate and institutional finance. Driven by
            how technology is reshaping our understanding of money, value, and financial systems.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              View work
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5 pt-2">
            <a href="https://www.linkedin.com/in/rubenlauwaert/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/LauwaertRuben" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="mailto:rubenlauwaert1999@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="shrink-0 order-first md:order-last">
          <div className="w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src="/profile-pic-slack.jpg"
              alt="Ruben Lauwaert"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <a href="#experience" className="hidden md:block absolute bottom-8 animate-bounce text-muted-foreground">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
