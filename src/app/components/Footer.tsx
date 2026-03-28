import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Abinav238",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/abinav-abi-492771320",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:abinavabi170@gmail.com",
    label: "Email",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-white/8"
      style={{ background: "#050c1a" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg tracking-wider">
                ABINAV<span className="text-blue-400">.</span>D
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left max-w-xs leading-relaxed">
              MSc Software Systems student, aspiring software developer, passionate about building and learning.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8">
          <p className="text-gray-600 text-sm">
            © 2025 Abinav D. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> by Abinav D
          </p>
        </div>
      </div>
    </footer>
  );
}
