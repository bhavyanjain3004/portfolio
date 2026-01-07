export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            Full Stack <span className="text-primary">Developer</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Building modern web experiences with React, Next.js, and cloud technologies. Specializing in full-stack
            development and automation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-md transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
