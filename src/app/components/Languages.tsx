import { Languages as LanguagesIcon } from 'lucide-react';

const languages = [
  {
    name: 'Dutch',
    level: 'Mother language',
    proficiency: 100
  },
  {
    name: 'English',
    level: 'Very Fluently',
    proficiency: 95
  },
  {
    name: 'French',
    level: 'Basic Understanding / Speaking',
    proficiency: 40
  }
];

export function Languages() {
  return (
    <section id="languages" className="px-4 py-20 bg-accent/30">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-card p-8 md:p-12 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-3 bg-primary/10 rounded-xl">
              <LanguagesIcon className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl">Languages</h2>
          </div>

          <div className="flex flex-col gap-6">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg font-medium">{lang.name}</h3>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
                <div className="h-2.5 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
