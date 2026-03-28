import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "MSc Software Systems",
    institution: "Currently Pursuing",
    period: "2024 – Present",
    location: "Coimbatore, Tamil Nadu",
    status: "Pursuing",
    description:
      "Pursuing a Master's degree in Software Systems with focus on programming languages, software engineering, database management, and problem-solving techniques.",
    highlights: ["Software Engineering", "Database Management", "Programming Concepts", "Problem Solving"],
    color: "from-blue-500 to-purple-500",
    dotColor: "bg-blue-500",
    borderColor: "border-blue-500/30 hover:border-blue-400/50",
    badgeStyle: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #060d1f 0%, #0a1628 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3 block">
            My Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Education
            </span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-6 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/20 to-transparent hidden sm:block" />

          {educationData.map((edu, index) => (
            <div key={edu.id} className="relative flex gap-6 sm:gap-8">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center">
                <div className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0`}>
                  <GraduationCap size={20} className="text-white" />
                </div>
              </div>

              {/* Card */}
              <div
                className={`flex-1 mb-8 rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 ${edu.borderColor}`}
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="sm:hidden flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center`}>
                        <GraduationCap size={14} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-300 font-medium mt-0.5">{edu.institution}</p>
                  </div>
                  <span className={`self-start px-3 py-1.5 rounded-full text-xs font-semibold border ${edu.badgeStyle} shrink-0`}>
                    ● {edu.status}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <Calendar size={13} className="text-blue-400" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <MapPin size={13} className="text-purple-400" />
                    {edu.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{edu.description}</p>

                {/* Highlights */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={13} className="text-gray-500" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Key Areas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 rounded-lg text-xs font-medium text-gray-300 border border-white/8 bg-white/5 hover:border-blue-500/30 hover:text-blue-300 transition-colors"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Future placeholder */}
          <div className="relative flex gap-6 sm:gap-8">
            <div className="hidden sm:flex flex-col items-center">
              <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 border-2 border-dashed border-white/15 flex items-center justify-center shrink-0">
                <span className="text-gray-600 text-lg">+</span>
              </div>
            </div>
            <div
              className="flex-1 mb-8 rounded-2xl border border-dashed border-white/10 p-6 sm:p-8 flex items-center gap-4"
              style={{ background: "rgba(255,255,255,0.015)" }}
            >
              <div className="text-gray-600">
                <span className="block text-sm font-medium text-gray-500">Future Milestones</span>
                <span className="text-xs text-gray-600">Internship, Full-time role, and more...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
