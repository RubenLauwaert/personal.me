import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Education</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Academic foundation in computer science and engineering
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Master's Degree */}
          <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl mb-1">M.Sc. in Computer Science</h3>
                    <p className="text-muted-foreground">KU Leuven</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium bg-accent px-3 py-1 rounded-full">2023</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Deep Focus on AI/ML & Distributed Systems</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Thesis:</span> Design of an Efficient Decentralized Authorization Protocol Leveraging Macaroons
                </p>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl mb-1">B.Sc. in Civil Engineering</h3>
                    <p className="text-muted-foreground">KU Leuven</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium bg-accent px-3 py-1 rounded-full">2020</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Strong mathematical background</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Computer Science & Electrical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
