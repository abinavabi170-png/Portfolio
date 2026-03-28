import { MapPin, Languages, GraduationCap, Briefcase, User } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu" },
  { icon: Languages, label: "Languages", value: "Tamil, English" },
  { icon: GraduationCap, label: "Degree", value: "MSc Software Systems" },
  { icon: Briefcase, label: "Status", value: "Seeking Internship" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #060d1f 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3 block">
            Get to Know Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/30">
                {/* Placeholder profile with initials */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0f1f45 0%, #1a0d40 100%)" }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/40">
                    <User size={40} className="text-white" />
                  </div>
                  <p className="text-white font-bold text-xl tracking-widest">ABINAV D</p>
                  <p className="text-blue-400 text-sm mt-1">MSc Software Systems</p>
                  <div className="mt-4 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                    <span className="text-blue-300 text-xs font-medium">Available for Internship</span>
                  </div>
                </div>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-blue-400 rounded-tl-sm" />
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-purple-400 rounded-tr-sm" />
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-purple-400 rounded-bl-sm" />
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-blue-400 rounded-br-sm" />
            </div>
          </div>

          {/* Right: Bio & Highlights */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Hello! I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Abinav D
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-base mb-4">
                I am currently pursuing{" "}
                <span className="text-blue-300 font-medium">MSc Software Systems</span> and have a
                strong interest in programming and problem-solving. I am eager to learn, grow, and
                contribute to real-world projects through internship opportunities.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                With a solid foundation in{" "}
                <span className="text-purple-300 font-medium">C++, Java, and SQL</span>, I am
                actively developing my technical skills and looking for opportunities to apply what
                I've learned in a professional environment.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-white/8 hover:border-blue-500/30 transition-colors duration-200 group"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={14} className="text-blue-400 group-hover:text-purple-400 transition-colors" />
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</span>
                  </div>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
