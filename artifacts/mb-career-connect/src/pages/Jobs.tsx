import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { OpportunityCard } from '@/components/OpportunityCard';
import { jobs } from '@/data/jobs';
import { Search, Filter, MapPin, Briefcase, IndianRupee } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export function Jobs() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="bg-primary py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Find Your Dream Job</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Browse through thousands of verified job listings from top companies across India.
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
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm">Employment Type</h3>
                    <div className="space-y-3">
                      {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`type-${type}`} />
                          <label htmlFor={`type-${type}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm">Experience Level</h3>
                    <div className="space-y-3">
                      {['Fresher', '1-3 Years', '3-5 Years', '5+ Years'].map((exp) => (
                        <div key={exp} className="flex items-center space-x-2">
                          <Checkbox id={`exp-${exp}`} />
                          <label htmlFor={`exp-${exp}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600">
                            {exp}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm">Salary Range</h3>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Salary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Salary</SelectItem>
                        <SelectItem value="3-5">₹3L - ₹5L</SelectItem>
                        <SelectItem value="5-10">₹5L - ₹10L</SelectItem>
                        <SelectItem value="10-15">₹10L - ₹15L</SelectItem>
                        <SelectItem value="15+">₹15L+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
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
                  <Input placeholder="Search job title or keywords" className="pl-9 border-0 shadow-none focus-visible:ring-0 h-12" />
                </div>
                <div className="w-px bg-slate-200 hidden sm:block"></div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input placeholder="Location" className="pl-9 border-0 shadow-none focus-visible:ring-0 h-12" />
                </div>
                <Button className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-xl">Search</Button>
              </div>

              <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
                <span>Showing <span className="font-bold text-slate-900">{jobs.length}</span> jobs</span>
                <div className="flex items-center gap-2">
                  <span>Sort by:</span>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-32 h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="salary">Highest Salary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((job) => (
                  <OpportunityCard key={job.id} {...job} />
                ))}
                {/* Duplicate to show more items visually for the demo */}
                {jobs.map((job) => (
                  <OpportunityCard key={`${job.id}-dup`} {...job} id={`${job.id}-dup`} />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <div className="flex gap-1">
                  <Button variant="outline" size="icon" disabled>&lt;</Button>
                  <Button variant="default" size="icon" className="bg-primary text-white">1</Button>
                  <Button variant="outline" size="icon">2</Button>
                  <Button variant="outline" size="icon">3</Button>
                  <Button variant="outline" size="icon">&gt;</Button>
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