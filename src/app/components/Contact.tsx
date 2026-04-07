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
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-0.5">Email</h4>
                  <a href="mailto:rubenlauwaert1999@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    rubenlauwaert1999@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
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
