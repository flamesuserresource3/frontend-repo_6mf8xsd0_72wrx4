import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#08080c] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Let’s build something great
        </motion.h2>

        <motion.form
          action="#"
          className="mx-auto mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70">Name</label>
            <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400/60" placeholder="Jane Developer" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400/60" placeholder="jane@studio.dev" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400/60" placeholder="Tell me about your idea…" />
          </div>
          <div className="sm:col-span-2 mt-2 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4" /> Response within 24h
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-fuchsia-600/20 transition hover:shadow-fuchsia-600/30">
              Send
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
