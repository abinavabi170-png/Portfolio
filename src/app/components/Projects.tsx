import { Clock, Sparkles, GitBranch } from "lucide-react";

const placeholderProjects = [
  {
    id: 1,
    title: "Upcoming Project",
    subtitle: "Academic Project",
    description: "Currently working on academic and real-time projects as part of my MSc coursework. Details will be updated soon.",
    tags: ["C++", "Java"],
    gradient: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/20 hover:border-blue-400/40",
    glow: "hover:shadow-blue-500/10",
    iconColor: "text-blue-400",
    tagStyle: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  },
  {
    id: 2,
    title: "Upcoming Project",
    subtitle: "Real-Time Project",
    description: "Planning to work on real-world problem-solving projects that combine SQL and programming concepts learned during the program.",
    tags: ["SQL", "Problem Solving"],
    gradient: "from-purple-600/20 to-violet-600/20",
    border: "border-purple-500/20 hover:border-purple-400/40",
    glow: "hover:shadow-purple-500/10",
    iconColor: "text-purple-400",
    tagStyle: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  },
  {
    id: 3,
    title: "Upcoming Project",
    subtitle: "Internship Project",
    description: "Eagerly looking forward to contributing to internship projects that will help me apply and expand my programming knowledge in a professional setting.",
    tags: ["Internship", "Learning"],
    gradient: "from-pink-600/20 to-rose-600/20",
    border: "border-pink-500/20 hover:border-pink-400/40",
    glow: "hover:shadow-pink-500/10",
    iconColor: "text-pink-400",
    tagStyle: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0a1225 0%, #060d1f 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-pink-400 uppercase mb-3 block">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
            Projects are in progress. I'm actively working on building my portfolio with real-world and academic work.
          </p>
        </div>

        {/* Coming Soon banner */}
        <div className="mb-10 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-yellow-500/25 bg-yellow-500/8">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium">Projects coming soon — stay tuned!</span>
            <Sparkles size={16} className="text-yellow-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${project.border} ${project.glow}`}
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              {/* Gradient top */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.gradient.replace("/20", "")}`} />

              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4">
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  <Clock size={10} />
                  Coming Soon
                </span>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <GitBranch size={22} className={project.iconColor} />
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1 block">
                  {project.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${project.tagStyle}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Placeholder progress dots */}
              <div className="mt-4 flex items-center gap-1.5">
                <div className="h-1 w-8 rounded-full bg-white/10" />
                <div className="h-1 w-4 rounded-full bg-white/5" />
                <div className="h-1 w-6 rounded-full bg-white/5" />
                <span className="text-xs text-gray-600 ml-1">In progress...</span>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational note */}
        <div className="mt-12 text-center p-6 rounded-2xl border border-white/8 max-w-2xl mx-auto" style={{ background: "rgba(255,255,255,0.02)" }}>
          <p className="text-gray-400 text-sm leading-relaxed">
            💡 <span className="text-white font-medium">Every expert was once a beginner.</span>{" "}
            I'm committed to building meaningful projects and gaining hands-on experience through internships and coursework.
          </p>
        </div>
      </div>
    </section>
  );
}
