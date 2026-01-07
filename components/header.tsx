export function Header() {
  return (
    <header className="sticky top-0 z-50 header-striped border-b-4 border-primary py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-primary">Bhavya</span> N Jain
        </h1>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition text-sm font-medium">
            About
          </a>
          <a href="#projects" className="text-foreground hover:text-primary transition text-sm font-medium">
            Projects
          </a>
          <a href="#resume" className="text-foreground hover:text-primary transition text-sm font-medium">
            Resume
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition text-sm font-medium">
            Contact
          </a>
        </nav>
        <div className="flex gap-4">
          <a
            href="https://github.com/bhavyanjain3004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/bhavya-jain-2424b0250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
