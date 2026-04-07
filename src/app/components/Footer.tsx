import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Ruben Lauwaert</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer / Quant Researcher building secure, scalable applications with a focus on digital assets and financial infrastructure.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#skills" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
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
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ruben Lauwaert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
