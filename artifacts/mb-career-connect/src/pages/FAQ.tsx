import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FAQ() {
  const categories = [
    {
      title: "General",
      items: [
        { q: "What is MB Career Connect?", a: "MB Career Connect is a comprehensive career platform that bridges the gap between job seekers and employers in India. We offer job listings, internships, skill development courses, and mentorship." },
        { q: "Is the platform free to use?", a: "Yes, creating a profile and applying for jobs/internships is completely free. We only charge for optional premium skill development courses and advanced mentorship sessions." },
        { q: "How do I contact support?", a: "You can reach us via the Contact Us page, email us at support@mbcareerconnect.com, or use our WhatsApp chat support during business hours." }
      ]
    },
    {
      title: "Jobs & Internships",
      items: [
        { q: "How do I apply for jobs?", a: "Create a free profile, complete your resume details, and browse our Jobs section. Click 'Apply Now' on any job that matches your skills. Our system will send your profile directly to the hiring manager." },
        { q: "Are all jobs verified?", a: "Yes, our team manually verifies every employer and job posting to ensure they are legitimate opportunities. We have a strict zero-tolerance policy for fake listings." },
        { q: "Do you charge placement fees?", a: "No, job seekers never pay a placement fee. The platform is completely free to use for applying to jobs and internships." },
        { q: "Can freshers apply?", a: "Absolutely! We have a dedicated section for internships and entry-level positions specifically meant for students and recent graduates with 0-1 years of experience." }
      ]
    },
    {
      title: "Courses & Skill Development",
      items: [
        { q: "How do I enroll in courses?", a: "Browse our Courses section, select a course that fits your career goals, and click 'Enroll'. You can pay securely online." },
        { q: "Do I get a certificate?", a: "Yes, all our paid courses provide an industry-recognized certificate of completion." },
        { q: "Is there placement assistance with courses?", a: "Selected premium courses come with dedicated placement assistance, where we guarantee a certain number of interview opportunities upon successful completion." }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600">
              Find answers to common questions about using MB Career Connect.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pl-2 border-l-4 border-primary">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border p-4">
                  {category.items.map((item, i) => (
                    <AccordionItem key={i} value={`item-${index}-${i}`}>
                      <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed text-base">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}