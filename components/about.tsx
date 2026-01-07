export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              <span className="text-primary">Skills</span> & Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="vintage-card p-6 text-center">
                <div className="text-3xl mb-3">💻</div>
                <p className="font-semibold text-sm">Frontend</p>
              </div>
              <div className="vintage-card p-6 text-center">
                <div className="text-3xl mb-3">🚀</div>
                <p className="font-semibold text-sm">Backend</p>
              </div>
              <div className="vintage-card p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <p className="font-semibold text-sm">Cloud</p>
              </div>
              <div className="vintage-card p-6 text-center">
                <div className="text-3xl mb-3">🎨</div>
                <p className="font-semibold text-sm">Design</p>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              <span className="text-primary">Hello</span> There
            </h3>
            <p className="text-foreground leading-relaxed">
              I'm a full-stack developer from Udaipur, Rajasthan with a passion for building modern web applications.
              Currently studying at Vellore Institute of Technology specializing in Cloud Computing & Automation.
            </p>
            <p className="text-foreground leading-relaxed">
              I specialize in React, Next.js, and cloud technologies. I've built everything from no-code automation
              platforms to AI-driven applications, always focusing on creating seamless user experiences and scalable
              solutions.
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">Currently interested in:</p>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Building full-stack applications
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> Cloud architecture & automation
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span> AI/ML integration in web apps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
