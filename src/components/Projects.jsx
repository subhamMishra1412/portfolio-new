const projects = [
  {
    title: "DevSphere",
    subtitle: "Full-Stack Project Management Platform",
    description:
      "Architected and deployed a responsive, full-stack project management platform supporting multi-user CRUD workflows, achieving a 90+ Lighthouse performance score through Vite code-splitting and optimized Tailwind styling. Built with JWT authentication and Zod schema validation across all API inputs.",
    tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "JWT", "Zod"],
    github: "https://github.com/subhamMishra1412/DevSphere",
    live: "https://dev-sphere-pearl.vercel.app/login",
  },
  {
    title: "Marvel Maniacs",
    subtitle: "Interactive Media Catalogue",
    description:
      "A dynamic Marvel cinematic catalogue featuring chronological phase tracking, real-time news feeds, and embedded media streaming, built with a highly responsive UI using core web technologies and deployed live on Vercel.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Vercel"],
    github: "https://github.com/subhamMishra1412/marvel-maniacs",
    live: "https://marvel-maniacs.vercel.app/",
  },
  {
    title: "Smart Learning Platform",
    subtitle: "Front-End Web Development Internship — CodTech IT Solutions",
    description:
      "Engineered and deployed a responsive online learning platform end-to-end with video lessons, interactive quizzes, and automated HTML-to-PDF certificate generation. Integrated Firebase auth and real-time NoSQL sync for student progress tracking across concurrent sessions.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "html2pdf.js"],
    github: "https://github.com/subhamMishra1412/smart-learning-platform",
    live: "https://smart-learning-platform-gamma.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        <span className="text-blue-500 font-mono text-xl">03.</span>
        Projects
        <span className="flex-1 h-px bg-white/10" />
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-white/10 rounded-lg p-6 hover:border-blue-500/50 transition bg-white/5"
          >
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-blue-400 text-xs font-mono mb-3">{project.subtitle}</p>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition">
                GitHub →
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition">
                Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}