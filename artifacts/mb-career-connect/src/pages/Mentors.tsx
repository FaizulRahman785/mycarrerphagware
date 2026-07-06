import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComingSoon } from '@/components/ComingSoon';
import { MentorCard } from '@/components/MentorCard';
import { mentors } from '@/data/mentors';
import { Users, Filter } from 'lucide-react';

export function Mentors() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 mb-12 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Connect with Industry Mentors</h1>
          <p className="text-lg text-slate-600">
            Get personalized guidance, resume reviews, and mock interviews from professionals working at top companies.
          </p>
        </div>

        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="font-medium text-slate-500">{mentors.length} Mentors Available</div>
            <button className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              <Filter className="w-4 h-4" /> Filter by Specialization
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} {...mentor} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}