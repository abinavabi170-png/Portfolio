import { ArrowDown, Mail, Layers } from "lucide-react";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050c1a 0%, #0a1628 50%, #0d1035 100%)" }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-20"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Open to Internship Opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #c4b5fd 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ABINAV D
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-blue-300 font-medium mb-4 tracking-wide">
          MSc Software Systems Student{" "}
          <span className="text-purple-400">|</span>{" "}
          Aspiring Software Developer Intern
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Motivated student eager to apply programming skills and gain real-world experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll("#contact")}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Mail size={18} />
            Contact Me
          </button>
          <button
            onClick={() => handleScroll("#skills")}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
          >
            <Layers size={18} className="text-purple-400" />
            View Skills
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => handleScroll("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px); }
          to { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}
