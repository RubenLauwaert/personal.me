export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">About Me</h2>

        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-primary/20">
            <img
              src="/profile-pic-slack.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="text-center max-w-3xl">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a software engineer with a passion for building secure, scalable applications at the intersection of technology and finance. With a strong foundation in computer science and mathematics, I specialize in developing backend systems, AI pipelines, and exploring innovative solutions in the digital assets space.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My journey combines academic rigor with hands-on experience in distributed systems, machine learning, and financial technology. I'm particularly interested in the convergence of Bitcoin and traditional finance, and how technology can reshape our understanding of money and value.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you'll find me researching market dynamics, analyzing derivative strategies, or diving deep into the latest developments in decentralized systems and digital credit instruments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
