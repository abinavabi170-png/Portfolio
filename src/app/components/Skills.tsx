import { Code2, Database, Coffee, Brain, MessageCircle, Cpu } from "lucide-react";

interface Skill {
  name: string;
  level: string;
  percentage: number;
  icon: React.ElementType;
  color: string;
  glow: string;
  category: string;
}

const skills: Skill[] = [
  {
    name: "C++",
    level: "Basic",
    percentage: 40,
    icon: Cpu,
    color: "from-blue-500 to-blue-400",
    glow: "shadow-blue-500/30",
    category: "Programming",
  },
  {
    name: "Java",
    level: "Basic",
    percentage: 35,
    icon: Coffee,
    color: "from-orange-500 to-yellow-400",
    glow: "shadow-orange-500/30",
    category: "Programming",
  },
  {
    name: "SQL",
    level: "Basic",
    percentage: 40,
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    glow: "shadow-emerald-500/30",
    category: "Database",
  },
  {
    name: "Problem Solving",
    level: "Developing",
    percentage: 55,
    icon: Brain,
    color: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/30",
    category: "Soft Skill",
  },
  {
    name: "Communication",
    level: "Good",
    percentage: 65,
    icon: MessageCircle,
    color: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/30",
    category: "Soft Skill",
  },
  {
    name: "Programming Concepts",
    level: "Learning",
    percentage: 45,
    icon: Code2,
    color: "from-cyan-500 to-blue-400",
    glow: "shadow-cyan-500/30",
    category: "Fundamentals",
  },
];

const levelColors: Record<string, string> = {
  Basic: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  Developing: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  Good: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Learning: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #060d1f 0%, #0a1225 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-3 block">
            What I Know
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Skills
            </span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
            Honest and transparent about my current skill level — committed to continuous learning
            and improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group p-6 rounded-2xl border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${skill.glow}`}
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg ${skill.glow} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base">{skill.name}</h3>
                      <span className="text-xs text-gray-500">{skill.category}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${levelColors[skill.level] || "bg-gray-500/15 text-gray-300 border-gray-500/30"}`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-500">Proficiency</span>
                    <span className="text-gray-400 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-300 text-sm">
            <span className="text-blue-400">✦</span>
            Actively expanding skills through coursework and self-study
          </div>
        </div>
      </div>
    </section>
  );
}
