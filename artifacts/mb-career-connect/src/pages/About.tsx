import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Target, Heart, Award, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 mb-20 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Empowering Careers, Changing Lives</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            MB Career Connect is a trusted career launchpad for students, fresh graduates, and professionals in India. We bridge the gap between talent and opportunity.
          </p>
        </div>

        <div className="bg-white py-20 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  To democratize access to quality career opportunities and professional education across India, ensuring every ambitious individual has the tools, connections, and guidance they need to succeed.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We don't just act as a job board; we act as a career partner. From your first resume draft to negotiating your senior-level salary, MB Career Connect is built to support every phase of your professional journey.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Focus</h3>
                  <p className="text-sm text-slate-500">Curated opportunities over massive noise.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border text-center mt-8">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Trust</h3>
                  <p className="text-sm text-slate-500">100% manually verified listings.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border text-center -mt-8">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Quality</h3>
                  <p className="text-sm text-slate-500">Industry-led skill development.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border text-center">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Empathy</h3>
                  <p className="text-sm text-slate-500">Human-first career guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}