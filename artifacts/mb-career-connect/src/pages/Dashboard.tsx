import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  LayoutDashboard, User, Briefcase, Bookmark, Award,
  Settings as SettingsIcon, Bell, LogOut, Rocket, UserCog, BellRing, Sliders
} from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function DashboardComingSoon({ title, description, icon: Icon = Rocket }: { title: string; description: string; icon?: React.ElementType }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary relative z-10">
          <Icon className="w-10 h-10" />
        </div>
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-semibold text-secondary-foreground mb-5">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Coming Soon
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">{description}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild variant="outline" className="border-border">
          <Link href="/">← Back to Home</Link>
        </Button>
        <Button asChild className="btn-glow">
          <Link href="/jobs">Browse Jobs</Link>
        </Button>
      </div>
    </div>
  );
}

function DashboardLayout({ children, active }: { children: React.ReactNode; active: string }) {
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard', id: 'overview' },
    { icon: User, label: 'My Profile', path: '/profile', id: 'profile' },
    { icon: Briefcase, label: 'Applied Jobs', path: '/dashboard', id: 'applied' },
    { icon: Bookmark, label: 'Saved Jobs', path: '/dashboard', id: 'saved' },
    { icon: Award, label: 'My Courses', path: '/dashboard', id: 'courses' },
    { icon: Bell, label: 'Notifications', path: '/notifications', id: 'notifications' },
    { icon: SettingsIcon, label: 'Settings', path: '/settings', id: 'settings' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Aurora background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="aurora-orb aurora-orb-1 w-[500px] h-[500px] top-[-20%] left-[-10%] opacity-20" />
        <div className="aurora-orb aurora-orb-2 w-[400px] h-[400px] bottom-[-15%] right-[-10%] opacity-15" />
      </div>

      <main className="flex-grow pt-28 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidebar */}
            <aside className="w-full lg:w-60 shrink-0">
              <div className="bg-card border border-border rounded-2xl p-4 sticky top-28 shadow-sm">
                {/* User Avatar */}
                <div className="flex items-center gap-3 p-2 mb-5 border-b border-border pb-5">
                  <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    JD
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-foreground text-sm truncate">John Doe</h3>
                    <p className="text-xs text-muted-foreground truncate">Software Developer</p>
                  </div>
                </div>

                <nav className="space-y-0.5">
                  {navItems.map((item) => (
                    <Link key={item.id} href={item.path}>
                      <span
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                          active === item.id
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-3 mt-3 border-t border-border">
                    <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors cursor-pointer">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </span>
                  </div>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-2xl shadow-sm min-h-[600px] flex items-center justify-center"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function Dashboard() {
  return (
    <DashboardLayout active="overview">
      <DashboardComingSoon
        title="Your Dashboard"
        description="Track your job applications, saved listings, course progress, and more — all in one place. Launching soon."
        icon={LayoutDashboard}
      />
    </DashboardLayout>
  );
}

export function Profile() {
  return (
    <DashboardLayout active="profile">
      <DashboardComingSoon
        title="My Profile"
        description="Build and manage your professional profile, upload your resume, and let employers find you."
        icon={UserCog}
      />
    </DashboardLayout>
  );
}

export function Notifications() {
  return (
    <DashboardLayout active="notifications">
      <DashboardComingSoon
        title="Notifications"
        description="Stay updated with job matches, application status changes, course reminders, and more."
        icon={BellRing}
      />
    </DashboardLayout>
  );
}

export function Settings() {
  return (
    <DashboardLayout active="settings">
      <DashboardComingSoon
        title="Account Settings"
        description="Manage your account preferences, notification settings, privacy, and security options."
        icon={Sliders}
      />
    </DashboardLayout>
  );
}
