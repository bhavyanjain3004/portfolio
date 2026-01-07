"use client"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "DriveEasy",
      description: "Full-stack vehicle rental application with real-time management",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      github: "https://drive-on-mocha.vercel.app/",
    },
    {
      id: 2,
      title: "Image Analysis Platform",
      description: "AI-driven image analysis tool using AWS Bedrock",
      tech: ["Python", "Streamlit", "AWS", "Claude 3"],
      github: "https://grayappio-main-wmpnfz95eearztjbgeo72e.streamlit.app/",
    },
    {
      id: 3,
      title: "Workflow Automation Platform",
      description: "No-code automation platform integrating 4 major services",
      tech: ["Next.js", "Prisma", "NeonDB", "Clerk"],
      github: "https://github.com/bhavyanjain3004",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Featured</span> Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-primary/20 text-foreground px-3 py-1 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  <span>→</span> View 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
