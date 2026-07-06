import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { OpportunityCard } from '@/components/OpportunityCard';
import { internships } from '@/data/jobs';
import { Search, Filter, MapPin, Briefcase, IndianRupee } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export function Internships() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="bg-indigo-600 py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Launch Your Career with Internships</h1>
            <p className="text-indigo-100 text-lg max-w-2xl">
              Gain practical experience, learn from industry experts, and get a head start on your career.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white border rounded-2xl p-6 sticky top-28 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-lg font-bold text-slate-900 border-b pb-4">
                  <Filter className="w-5 h-5" /> Filters
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm">Duration</h3>
                    <div className="space-y-3">
                      {['1-2 Months', '3-4 Months', '6 Months'].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`dur-${type}`} />
                          <label htmlFor={`dur-${type}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm">Preferences</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ppo" />
                        <label htmlFor="ppo" className="text-sm font-medium text-slate-600">PPO Available</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="paid" defaultChecked />
                        <label htmlFor="paid" className="text-sm font-medium text-slate-600">Paid Internship</label>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              
              <div className="bg-white p-2 rounded-2xl shadow-sm border mb-6 flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input placeholder="Search internship roles" className="pl-9 border-0 shadow-none focus-visible:ring-0 h-12" />
                </div>
                <div className="w-px bg-slate-200 hidden sm:block"></div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input placeholder="Location" className="pl-9 border-0 shadow-none focus-visible:ring-0 h-12" />
                </div>
                <Button className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-xl">Search</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {internships.map((job) => (
                  <OpportunityCard key={job.id} {...job} isInternship />
                ))}
                {internships.map((job) => (
                  <OpportunityCard key={`${job.id}-dup`} {...job} id={`${job.id}-dup`} isInternship />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}