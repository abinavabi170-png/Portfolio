import { Phone, Mail, Github, Linkedin, Send, MapPin, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "8778296779",
    href: "tel:8778296779",
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    hoverBorder: "hover:border-blue-500/40",
  },
  {
    icon: Mail,
    label: "Email",
    value: "abinavabi170@gmail.com",
    href: "mailto:abinavabi170@gmail.com",
    color: "from-purple-500 to-pink-400",
    glow: "shadow-purple-500/20",
    hoverBorder: "hover:border-purple-500/40",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Abinav238",
    href: "https://github.com/Abinav238",
    color: "from-gray-500 to-slate-400",
    glow: "shadow-gray-500/20",
    hoverBorder: "hover:border-gray-500/40",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abinav-abi-492771320",
    href: "https://linkedin.com/in/abinav-abi-492771320",
    color: "from-blue-600 to-blue-400",
    glow: "shadow-blue-600/20",
    hoverBorder: "hover:border-blue-600/40",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-500 hover:text-gray-300"
    >
      {copied ? <CheckCheck size={13} className="text-green-400" /> : <Copy size={13} />}
    </button>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #050c1a 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-3 block">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Touch
            </span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            I'm actively looking for internship opportunities. Whether you have a question, opportunity, or just want to say hello — I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Availability banner */}
          <div
            className="mb-10 p-5 rounded-2xl border border-green-500/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
            style={{ background: "rgba(34,197,94,0.05)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center shrink-0">
              <Send size={20} className="text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Available for Internship</p>
              <p className="text-gray-400 text-sm">Currently seeking software developer internship opportunities — full-time or part-time.</p>
            </div>
            <div className="sm:ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/25 shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium">Open to Work</span>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map(({ icon: Icon, label, value, href, color, glow, hoverBorder }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-5 rounded-2xl border border-white/8 ${hoverBorder} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${glow}`}
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg ${glow} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={20} className="text-white" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium truncate group-hover:text-blue-300 transition-colors">
                    {value}
                  </p>
                </div>

                {/* Copy button for email/phone */}
                {(label === "Email" || label === "Phone") && (
                  <CopyButton text={value} />
                )}

                {/* Arrow for links */}
                {label !== "Email" && label !== "Phone" && (
                  <svg
                    className="w-4 h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Location */}
          <div
            className="mt-5 p-5 rounded-2xl border border-white/8 flex items-center gap-4"
            style={{ background: "rgba(255,255,255,0.025)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center shadow-lg shrink-0">
              <MapPin size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
              <p className="text-white text-sm font-medium">Coimbatore, Tamil Nadu, India</p>
              <p className="text-gray-500 text-xs">Open to remote opportunities as well</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
