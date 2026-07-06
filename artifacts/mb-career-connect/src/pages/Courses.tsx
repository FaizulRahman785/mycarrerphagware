import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/data/courses';
import { Search, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Courses() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 mb-12">
          <div className="bg-emerald-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-700/50 rounded-full text-emerald-100 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" /> Professional Skill Development
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Master In-Demand Skills</h1>
              <p className="text-emerald-100 text-lg mb-8">
                Industry-recognized certification courses designed to make you job-ready. Learn from experts and accelerate your career growth.
              </p>
              
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-800" />
                <Input 
                  placeholder="Search for courses (e.g. Data Science, React)" 
                  className="pl-12 h-14 rounded-xl bg-white text-slate-900 border-0 focus-visible:ring-4 focus-visible:ring-emerald-500/30 text-lg placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">All Courses</h2>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {['All', 'Software Development', 'Data Science', 'Design', 'Marketing'].map((cat, i) => (
                <button 
                  key={cat} 
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    i === 0 ? 'bg-slate-900 text-white' : 'bg-white border text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}