export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
        <span className="text-blue-500 font-mono text-xl">01.</span>
        About Me
        <span className="flex-1 h-px bg-white/10" />
      </h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        I'm a full-stack software developer with hands-on experience
        designing, building, and deploying production-ready web
        applications — backed by a Computer Science and Mathematics
        degree from Kristu Jayanti College, Bengaluru.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        I'm highly proficient in modern JavaScript ecosystems (React,
        Node.js, Express.js) and relational databases (PostgreSQL), with
        proven ability to deliver end-to-end features — RESTful APIs,
        secure JWT authentication, and interactive data visualizations —
        from architecture through live cloud deployment.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Outside of code, I bring a numerical methods and math background
        into how I approach problems — practical, structured, and
        detail-oriented.
      </p>
    </section>
  );
}