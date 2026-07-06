import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Briefcase } from 'lucide-react';

export function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-primary text-white p-3 rounded-xl shadow-md">
                <Briefcase className="w-8 h-8" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-center text-slate-500 mb-8">Sign in to continue to your account</p>

            <form onSubmit={e => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                <Input type="email" placeholder="you@example.com" className="h-12 bg-slate-50" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-sm font-medium text-slate-700">Password</label>
                  <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
                </div>
                <Input type="password" placeholder="••••••••" className="h-12 bg-slate-50" />
              </div>

              <Button className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Sign In (Coming Soon)
              </Button>
            </form>

            <div className="mt-8 flex items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="mx-4 text-sm text-slate-400">or continue with</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 border-slate-200 text-slate-600 hover:bg-slate-50" disabled>
                Google
              </Button>
              <Button variant="outline" className="h-12 border-slate-200 text-slate-600 hover:bg-slate-50" disabled>
                LinkedIn
              </Button>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
            <p className="text-slate-600">
              Don't have an account?{' '}
              <Link href="/register" className="font-bold text-primary hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function Register() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Create Your Account</h1>
            <p className="text-center text-slate-500 mb-8">Join thousands of professionals finding their dream roles.</p>

            <form onSubmit={e => e.preventDefault()} className="space-y-5">
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['Student', 'Fresher', 'Professional'].map((role, i) => (
                  <div key={role} className={`border rounded-lg text-center p-3 cursor-pointer transition-colors ${i === 0 ? 'bg-primary/5 border-primary text-primary font-medium' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                    <div className="text-sm">{role}</div>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                <Input type="text" placeholder="John Doe" className="h-12 bg-slate-50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                <Input type="email" placeholder="you@example.com" className="h-12 bg-slate-50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                <Input type="password" placeholder="Create a strong password" className="h-12 bg-slate-50" />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" className="mt-1" id="terms" />
                <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                  I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <Button className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 mt-6">
                Create Account (Coming Soon)
              </Button>
            </form>
          </div>
          
          <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
            <p className="text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="font-bold text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}