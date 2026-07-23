export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-blue-500 font-mono mb-4">04. What's Next?</p>
      <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-gray-400 mb-8">
        I'm currently looking for developer opportunities in Kathmandu.
        Whether you have a question or just want to say hi, my inbox is
        open.
      </p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=subhammishra1412@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 border border-blue-500 text-blue-500 rounded hover:bg-blue-500/10 transition font-mono"
      >
        Say Hello
      </a>
      <p className="mt-6 text-gray-500 text-sm">+977 9747250426 · Kathmandu, Nepal</p>
      <footer className="mt-24 text-gray-600 text-sm">
        Built by Subham Mishra
      </footer>
    </section>
  );
}