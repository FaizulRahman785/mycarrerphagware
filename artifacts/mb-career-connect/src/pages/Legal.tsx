import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-slate-500 mb-8 pb-8 border-b">Last Updated: May 1, 2024</p>
            
            <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-primary">
              <p>
                At MB Career Connect, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We collect information that you provide directly to us when you:</p>
              <ul>
                <li>Register for an account</li>
                <li>Create or update your professional profile</li>
                <li>Apply for jobs or internships</li>
                <li>Enroll in courses</li>
                <li>Contact our support team</li>
              </ul>
              <p>This may include your name, email address, phone number, resume details, educational background, and employment history.</p>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Match you with relevant job opportunities</li>
                <li>Share your profile with employers (only when you apply or opt-in)</li>
                <li>Process payments for courses</li>
                <li>Send you technical notices, updates, and support messages</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>With Employers:</strong> When you apply for a job, your profile and resume are shared with that specific employer.</li>
                <li><strong>Service Providers:</strong> We share info with vendors who perform services on our behalf (like payment processing).</li>
                <li><strong>Legal Requirements:</strong> If required by law or subpoena.</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement reasonable security measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet is 100% secure.
              </p>

              <h2>5. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at: privacy@mbcareerconnect.com
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms & Conditions</h1>
            <p className="text-slate-500 mb-8 pb-8 border-b">Last Updated: May 1, 2024</p>
            
            <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-primary">
              <p>
                Welcome to MB Career Connect. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
              </p>

              <h2>1. User Accounts</h2>
              <ul>
                <li>You must provide accurate and complete information when creating an account.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree not to create false profiles or impersonate others.</li>
              </ul>

              <h2>2. Job Seekers</h2>
              <p>
                MB Career Connect provides a platform to connect with employers. We do not guarantee employment, interviews, or specific outcomes. You are responsible for verifying the details of any job offer before accepting.
              </p>

              <h2>3. Employers</h2>
              <p>
                Employers must post accurate job descriptions and comply with all applicable labor laws. We reserve the right to remove any job posting that violates our guidelines or is deemed fraudulent.
              </p>

              <h2>4. Courses and Payments</h2>
              <p>
                Fees for paid courses are non-refundable unless specifically stated otherwise in the course description. Course access is granted only to the registered user and cannot be shared.
              </p>

              <h2>5. Prohibited Conduct</h2>
              <p>Users agree not to:</p>
              <ul>
                <li>Scrape or collect data from our site automatically.</li>
                <li>Post spam, pyramid schemes, or unauthorized advertising.</li>
                <li>Harass or abuse other users or staff.</li>
                <li>Attempt to bypass our security measures.</li>
              </ul>

              <h2>6. Limitation of Liability</h2>
              <p>
                MB Career Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}