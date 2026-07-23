export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 max-w-7xl mx-auto pt-24">
      <p className="text-blue-500 font-mono mb-4">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
        Subham Mishra.
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-6">
        I build things for the web.
      </h2>
      <p className="max-w-xl text-gray-400 mb-8">
        Software developer based in Kathmandu, focused on building fast,
        clean, full-stack web applications with React, Node.js, and modern
        tooling.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500/10 transition"
        >
          View My Work
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-black rounded hover:bg-blue-400 transition font-medium"
        >
          Resume
        </a>
      </div>
    </section>
  );
}