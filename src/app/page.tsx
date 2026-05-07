"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Background from "./component/background";
import { projects, skillsData, Project, SkillCategory } from "../data/projects";

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  // Logic to split your name for the animation
  const fullName = "JARVIS DUSTIN ";
  const nameArray = fullName.split("");

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-slate-200 antialiased relative">
      <Background />
      {/* Header */}
      <header className="border-b border-slate-200/80 bg-white/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-mono font-bold tracking-tighter text-sm text-slate-800 uppercase">
            J.A.R.V.I.S
          </Link>
          <nav className="space-x-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors font-mono text-xs uppercase font-bold">About()</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors font-mono text-xs uppercase font-bold">Skills()</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors font-mono text-xs uppercase font-bold">Cases()</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-28">
        
        {/* NEW HERO SECTION: Your Animated Name */}
        <section className="py-20 flex flex-col items-start justify-center">
          <div className="overflow-hidden mb-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-[0.3em]">Lead Software Engineer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-none">
            {nameArray.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="inline-block hover:text-blue-600 transition-colors duration-200 cursor-default"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-slate-300"></div>
            <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
              Specializing in Retail Inventory Systems
            </p>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section 
          id="about" 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-4 scroll-mt-24"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
          >
            Backend Systems Architect & Developer
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl"
          >
            Specializing in high-performance C# applications and robust SQL Server database engineering. I design data systems optimized for speed, scalability, and transactional integrity.
          </motion.p>
          <motion.div variants={fadeIn} className="pt-2">
            <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />
              Available for System & Architecture Consultations
            </span>
          </motion.div>
        </motion.section>

   

        {/* Project Section */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-l-4 border-slate-800 pl-3">
              Project Case Studies
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-mono uppercase tracking-tighter text-[10px]">
              Select an architecture card below to execute the full data structure breakdown.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project: Project, idx: number) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-5 bg-slate-950 text-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 block">{project.role}</span>
                    <h3 className="text-lg font-bold tracking-tight mt-0.5">{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech: string, tIdx: number) => (
                      <span key={tIdx} className="text-[10px] bg-slate-800 text-slate-300 font-mono px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <div className="pt-2">
                    <Link 
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center font-mono text-xs font-bold text-slate-950 hover:text-slate-700 tracking-tight transition-colors"
                    >
                      EXECUTE_CASE_STUDY() 
                      <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-xs font-mono text-slate-400">
          © {new Date().getFullYear()} | Optimized for performance and modern layout integrity.
        </div>
      </footer>
    </div>
  );
}