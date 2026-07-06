import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MentorCard } from '@/components/MentorCard';
import { mentors } from '@/data/mentors';
import { Users, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export function Mentors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="relative pt-28 pb-14 overflow-hidden" style={{ background: 'var(--hero-gradient)' }}>
        <div className="aurora-orb aurora-orb-1 absolute w-96 h-96 top-[-40%] left-[-8%] opacity-50" />
        <div className="aurora-orb aurora-orb-2 absolute w-72 h-72 bottom-[-50%] right-[-5%] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-4 backdrop-blur-sm">
              <Users className="w-3.5 h-3.5" /> 1-on-1 Guidance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Connect with Industry Mentors</h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Get personalized guidance, resume reviews, and mock interviews from professionals at top companies.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow pb-20">
        <div className="container mx-auto px-4 mt-8">
          {/* Filter Bar */}
          <div className="flex items-center justify-between border-b border-border pb-5 mb-8">
            <p className="text-muted-foreground font-medium">
              <span className="font-bold text-foreground">{mentors.length}</span> mentors available
            </p>
            <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-xl border border-border bg-card hover:border-primary/40">
              <SlidersHorizontal className="w-4 h-4" /> Filter by Specialization
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mentors.map((mentor, idx) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (idx % 4) * 0.07 }}
              >
                <MentorCard {...mentor} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
