import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'Headless e‑commerce with edge caching, realtime inventory, and fluid motion.',
    tags: ['Next.js', 'tRPC', 'Stripe', 'Tailwind'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Synthwave Studio',
    desc: 'Creative coding playground—GLSL shaders, audio‑reactive visuals, and 3D scenes.',
    tags: ['React', 'WebGL', 'Framer Motion', 'Spline'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Ops Dashboard',
    desc: 'Observability suite with alerts, role‑based access, and self‑healing tasks.',
    tags: ['FastAPI', 'Postgres', 'Docker', 'Charts'],
    href: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#090911] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-2xl backdrop-blur transition hover:from-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.href} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
