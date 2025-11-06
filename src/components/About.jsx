import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Sparkles } from 'lucide-react';

const About = () => {
  const items = [
    { icon: Code2, title: 'Full‑Stack Engineering', desc: 'TypeScript, React, Node, Python. Scalable systems with delightful UX.' },
    { icon: Rocket, title: 'Performance & DX', desc: 'Edge-ready apps, CI/CD pipelines, and fearless refactors.' },
    { icon: Sparkles, title: 'Motion & 3D', desc: 'Framer Motion, Spline, GLSL; craft memorable, interactive experiences.' },
  ];

  return (
    <section id="about" className="relative bg-[#0a0a0f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-center text-white/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I build fast, accessible, and visually rich products. I love marrying robust engineering
          with bold aesthetics, translating complex ideas into elegant interfaces.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-3 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
