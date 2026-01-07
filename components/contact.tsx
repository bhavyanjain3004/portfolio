export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Let's</span> Connect
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in collaborating on interesting projects. Feel free to reach out!
        </p>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:bhavyajain3004@gmail.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-md transition"
            >
              Email Me
            </a>
            <a
              href="https://github.com/bhavyanjain3004"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition"
            >
              GitHub
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://linkedin.com/in/bhavya-jain-2424b0250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition text-sm font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="mailto:bhavyajain3004@gmail.com"
              className="text-muted-foreground hover:text-primary transition text-sm font-semibold"
            >
              Email
            </a>
            <a
              href="https://github.com/bhavyanjain3004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition text-sm font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-muted-foreground text-sm">
          <p>© 2026 Bhavya N Jain. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
