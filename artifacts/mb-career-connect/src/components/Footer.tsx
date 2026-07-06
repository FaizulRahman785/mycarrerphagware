import { Link } from 'wouter';
import { Briefcase, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="py-20 mt-auto relative overflow-hidden bg-card text-card-foreground border-t border-border transition-colors duration-500">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                MB Career Connect
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Empowering Careers Through Jobs, Internships, Skill Development, and Professional Connections. Your trusted career launchpad.
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Subscribe to our newsletter</h4>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={e => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 h-12 bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary transition-colors"
                />
                <Button type="submit" className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 shrink-0">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-foreground">For Job Seekers</h4>
            <ul className="space-y-4">
              <li><Link href="/jobs" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Browse Jobs</Link></li>
              <li><Link href="/internships" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Internships</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Courses</Link></li>
              <li><Link href="/mentors" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Mentors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-foreground">For Employers</h4>
            <ul className="space-y-4">
              <li><Link href="/hiring-partners" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Hiring Partners</Link></li>
              <li><Link href="/login" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Post a Job</Link></li>
              <li><Link href="/login" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Employer Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-foreground">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Blog</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Events</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-foreground">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Resources</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">FAQ</Link></li>
              <li><Link href="/scholarships" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Scholarships</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Privacy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-medium flex flex-wrap gap-x-4 gap-y-2 items-center">
            <span>© {new Date().getFullYear()} MB Career Connect. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </p>
          <div className="flex items-center gap-5">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Linkedin, label: 'LinkedIn' }
            ].map(({ Icon, label }, i) => (
              <a 
                key={i} 
                href="#" 
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all border border-border hover:border-primary/50 group"
              >
                <Icon className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_var(--glow-color)]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
