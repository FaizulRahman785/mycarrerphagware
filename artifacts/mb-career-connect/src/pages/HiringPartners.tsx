import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CompanyCard } from '@/components/CompanyCard';
import { companies } from '@/data/companies';
import { Building2 } from 'lucide-react';

export function HiringPartners() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 mb-12 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Hiring Partners</h1>
          <p className="text-lg text-slate-600">
            We partner with leading companies across India to bring you exclusive, verified job and internship opportunities.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {companies.map((company) => (
              <CompanyCard key={company.id} {...company} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}