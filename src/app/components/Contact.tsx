import { Mail, MapPin, Calendar } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-accent/30">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Get In Touch</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities, collaborations, or just having a conversation about Bitcoin & Digital credit, financial topics or AI/ML.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-xl border border-border flex flex-col justify-center space-y-6">
            <h3 className="text-xl">Contact Information</h3>
            <div className="space-y-2">
              <a
                href="mailto:rubenlauwaert1999@gmail.com"
                className="group flex items-center gap-4 -mx-3 px-3 py-2 rounded-lg hover:bg-accent/60 transition-colors"
              >
                <div className="p-2.5 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-0.5">Email</h4>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    rubenlauwaert1999@gmail.com
                  </span>
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=32473798237&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 -mx-3 px-3 py-2 rounded-lg hover:bg-accent/60 transition-colors"
              >
                <div className="p-2.5 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-0.5">WhatsApp</h4>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    +32 473 79 82 37
                  </span>
                </div>
              </a>
              <a
                href="https://x.com/LauwaertRuben"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 -mx-3 px-3 py-2 rounded-lg hover:bg-accent/60 transition-colors"
              >
                <div className="p-2.5 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-0.5">X</h4>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    @LauwaertRuben
                  </span>
                </div>
              </a>
              <div className="flex items-center gap-4 -mx-3 px-3 py-2">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-0.5">Location</h4>
                  <p className="text-sm text-muted-foreground">Mechelen, Belgium</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border flex flex-col items-center justify-center text-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl">Book a Meeting</h3>
            <p className="text-sm text-muted-foreground">
              Pick a time that works for you and let's have a conversation.
            </p>
            <a
              href="https://calendar.app.google/BUXjvJLTUNUe9PLL9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
