const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "GSAP", "React Hook Form", "Recharts", "Zod"],
  },
  {
    label: "Backend & DB",
    items: ["Node.js", "Express.js", "PostgreSQL", "SQL", "Firebase", "RESTful APIs", "JWT Auth"],
  },
  {
    label: "Cloud & Tools",
    items: ["Git", "GitHub", "Vercel", "Render", "Neon DB", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
        <span className="text-blue-500 font-mono text-xl">02.</span>
        Skills
        <span className="flex-1 h-px bg-white/10" />
      </h2>
      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-gray-300 font-mono text-sm mb-3">
              {group.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {group.items.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="text-blue-500">▹</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}