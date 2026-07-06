import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComingSoon } from '@/components/ComingSoon';

export function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-white border-b py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Career Advice Blog</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insights, tips, and stories to help you navigate your professional life.
            </p>
          </div>
        </div>
        <ComingSoon 
          title="Blog Launching Soon" 
          description="We're currently writing high-quality articles on interview prep, career transitions, and industry trends. Subscribe to get notified when we publish our first post!"
        />
      </main>
      <Footer />
    </div>
  );
}

export function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <ComingSoon 
          title="Career Events & Webinars" 
          description="Join virtual career fairs, company spotlight sessions, and expert webinars. Our events calendar is launching soon."
        />
      </main>
      <Footer />
    </div>
  );
}

export function Scholarships() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <ComingSoon 
          title="Scholarship Programs" 
          description="We believe financial constraints shouldn't hold back talent. Our scholarship programs for premium courses and certifications are being finalized."
        />
      </main>
      <Footer />
    </div>
  );
}