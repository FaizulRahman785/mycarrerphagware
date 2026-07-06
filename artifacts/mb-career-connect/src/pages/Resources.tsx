import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FileText, Download, Briefcase, MessagesSquare, Target, PenTool, Lightbulb } from 'lucide-react';
import { Link } from 'wouter';

export function Resources() {
  const categories = [
    { title: "Resume Templates", icon: FileText, desc: "ATS-friendly templates for freshers and professionals." },
    { title: "Interview Prep", icon: MessagesSquare, desc: "Common HR and technical questions with answers." },
    { title: "Career Roadmaps", icon: Target, desc: "Step-by-step guides for different tech & non-tech roles." },
    { title: "Salary Guide", icon: Briefcase, desc: "Industry standards for various roles across India." },
    { title: "LinkedIn Optimization", icon: Lightbulb, desc: "Tips to make your profile stand out to recruiters." },
    { title: "Communication Skills", icon: PenTool, desc: "Email templates and workplace communication guides." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Career Resources</h1>
          <p className="text-lg text-slate-600">
            Free guides, templates, and tools to help you succeed in your career journey.
          </p>
        </div>

        <div className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white border rounded-2xl p-6 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-slate-500 mb-4">{cat.desc}</p>
                <div className="flex items-center text-primary font-medium text-sm">
                  <Download className="w-4 h-4 mr-1" /> Download PDF (Coming Soon)
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}