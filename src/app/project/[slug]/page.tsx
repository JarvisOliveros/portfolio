"use client";

import { useParams, useRouter } from "next/navigation";
import { projects, Project } from "../../../data/projects";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  
  // Locate the specific project from your data layer based on the URL parameter slug
  const project = projects.find((p: Project) => p.slug === params.slug);

  // Fallback protection state if an invalid URL parameter is typed
  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-mono text-sm text-slate-500">
        <div>[CRITICAL ERROR]: Project node sequence not found.</div>
        <button onClick={() => router.push("/")} className="mt-4 text-slate-900 underline hover:text-slate-600">
          Return to Master Node
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased selection:bg-slate-200">
      
      {/* Refined Navigation Bar */}
      <nav className="border-b border-slate-200/60 bg-white/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => router.push("/")}
            className="group inline-flex items-center font-mono text-xs font-bold text-slate-500 hover:text-slate-950 transition-colors"
          >
            <span className="mr-1.5 transform group-hover:-translate-x-1 transition-transform duration-200">←</span> 
            SYS.RETURN_TO_DASHBOARD()
          </button>
          <span className="font-mono text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/40">
            {project.slug}.cfg
          </span>
        </div>
      </nav>

      {/* Main Case Study Core Container */}
      <motion.main 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-6 py-16 space-y-12"
      >
        {/* Project Technical Header Block */}
        <header className="space-y-4 pb-8 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono tracking-wider uppercase bg-slate-900 text-slate-100 px-2.5 py-0.5 rounded font-medium">
              {project.role}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-normal italic pl-4 border-l-2 border-slate-300">
            &ldquo;{project.summary}&rdquo;
          </p>

          {/* Technology Badges */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((tech: string, idx: number) => (
              <span key={idx} className="text-xs bg-white text-slate-700 font-mono border border-slate-200 shadow-sm px-2.5 py-0.5 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </header>
        

        {/* Structured STAR Matrix Section */}
        <section className="space-y-10">
          
          {/* Situation Layout Card */}
          <div className="grid md:grid-cols-4 gap-2 md:gap-6 pt-2">
            <div className="md:col-span-1">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 md:sticky md:top-24">
                01 // Situation
              </h2>
            </div>
            <div className="md:col-span-3 text-slate-700 text-base leading-relaxed font-normal">
              {project.star.situation}
            </div>
          </div>

          <hr className="border-slate-200/60" />

          {/* Task Layout Card */}
          <div className="grid md:grid-cols-4 gap-2 md:gap-6">
            <div className="md:col-span-1">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 md:sticky md:top-24">
                02 // Task
              </h2>
            </div>
            <div className="md:col-span-3 text-slate-700 text-base leading-relaxed font-normal">
              {project.star.task}
            </div>
          </div>

          <hr className="border-slate-200/60" />

          {/* Action Layout Card */}
          <div className="grid md:grid-cols-4 gap-2 md:gap-6">
            <div className="md:col-span-1">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 md:sticky md:top-24">
                03 // Action
              </h2>
            </div>
            <div className="md:col-span-3 text-slate-700 text-base leading-relaxed font-normal space-y-4">
              {project.star.action}
            </div>
          </div>

          <hr className="border-slate-200/60" />

          {/* High-Impact Highlight Result Box */}
          <div className="grid md:grid-cols-4 gap-2 md:gap-6 bg-emerald-50/40 p-6 rounded-xl border border-emerald-100 shadow-sm">
            <div className="md:col-span-1">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700">
                04 // Metrics & Result
              </h2>
            </div>
            <div className="md:col-span-3 text-emerald-900 text-base leading-relaxed font-medium">
              {project.star.result}
            </div>
          </div>

        </section>

      </motion.main>


    </div>
  );
}