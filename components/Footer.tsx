import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f1c2e] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

       
        <p className="text-gray-400 text-sm mt-2">
          A simple and secure way to manage your income and expenses.
        </p>

        {/* Contact & GitHub */}
        <div className="flex justify-center items-center gap-6 mt-6 text-gray-400 text-sm">

          {/* GitHub */}
          <span>
          <a
            href="https://github.com/Sanjana-cyber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-10 mt-6hover:text-white transition"
          >
            <Github size={18} />
            GitHub
          </a></span>

          {/* Email */}
          <span>
          <a
            href="mailto:sanjanapandey29256@gmail.com"
            className="flex items-center gap-10 mt-6 hover:text-white transition">
          
            <Mail size={18} />
            Contact 
          </a>
</span>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-6 pt-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} Smart Expense Tracker. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
