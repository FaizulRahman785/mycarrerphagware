import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-600">
              Have questions about our platform? We're here to help you succeed.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border overflow-hidden flex flex-col lg:flex-row">
            {/* Contact Info Sidebar */}
            <div className="bg-primary text-white p-10 lg:w-1/3 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <div className="font-medium text-lg">+91 98765 43210</div>
                      <div className="text-primary-foreground/70 text-sm">Mon-Fri 9am to 6pm</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <div className="font-medium text-lg">info@mbcareerconnect.com</div>
                      <div className="text-primary-foreground/70 text-sm">Online support</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <div className="font-medium text-lg">+91 98765 43210</div>
                      <div className="text-primary-foreground/70 text-sm">WhatsApp Chat</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <div className="font-medium">MB Tech Park, Block C</div>
                      <div className="text-primary-foreground/70 text-sm leading-relaxed">
                        Koramangala, Bangalore<br/>Karnataka, India 560034
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form onSubmit={e => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                    <Input placeholder="John" className="bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                    <Input placeholder="Doe" className="bg-slate-50" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                    <Input type="tel" placeholder="+91" className="bg-slate-50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                  <Input placeholder="How can we help you?" className="bg-slate-50" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <Textarea placeholder="Tell us more about your inquiry..." className="bg-slate-50 min-h-[120px]" />
                </div>

                <Button className="w-full md:w-auto h-12 px-8 font-bold bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-12 bg-slate-200 h-[400px] rounded-3xl overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-300"></div>
            <div className="relative z-10 bg-white px-6 py-3 rounded-lg shadow-md font-medium text-slate-600 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Map Integration Coming Soon
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}