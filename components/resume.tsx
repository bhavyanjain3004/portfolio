export function Resume() {
  const education = [
    {
      school: "Vellore Institute of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "Cloud Computing and Automation",
      gpa: "8.6/10",
      year: "May 2026",
    },
  ]

  const experience = [
    {
      role: "CTDP Trainee",
      company: "PwC",
      period: "july 2025 – august 2025",
    },
  ]

  const skills = {
    "Web Technologies": ["HTML", "CSS", "JavaScript"],
    Frameworks: ["React.js", "Next.js", "Node", "Tailwind CSS"],
    Tools: [
      "Git",
      "GitHub",
      "UI/UX Design",
      "VS Code",
      "AWS (Basic)",
      "Salesforce (Admin)",
    ],
    "Soft Skills": ["Communication", "Teamwork", "Problem Solving"],
  }

  return (
    <section id="resume" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-12">
          <span className="text-primary">Resume</span>
        </h2>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-black text-primary mb-6">
                <span className="text-2xl mr-2">🎓</span> Education
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-bold text-foreground">{edu.school}</h4>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    Specialization: {edu.specialization}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    GPA: {edu.gpa} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-black text-primary mb-6">
                <span className="text-2xl mr-2">💼</span> Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-4">
                    <h4 className="font-bold text-foreground">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {exp.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Languages & Certificates */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-black text-primary mb-6">
              <span className="text-2xl mr-2">🌍</span> Languages
            </h3>
            <p>
              <span className="font-semibold">English:</span>{" "}
              <span className="text-muted-foreground">Professional</span>
            </p>
            <p>
              <span className="font-semibold">Hindi:</span>{" "}
              <span className="text-muted-foreground">Native</span>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black text-primary mb-6">
              <span className="text-2xl mr-2">🏆</span> Certificates
            </h3>
            <ul className="space-y-2 text-sm">
              <li>AWS Academy Graduate – Cloud Architecting</li>
              <li>AWS Academy Graduate – Cloud Foundations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
