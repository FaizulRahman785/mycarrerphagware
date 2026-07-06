import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComingSoon } from '@/components/ComingSoon';
import { 
  LayoutDashboard, User, Briefcase, Bookmark, Award, 
  Settings as SettingsIcon, Bell, LogOut 
} from 'lucide-react';
import { Link, useLocation } from 'wouter';

function DashboardLayout({ children, active }: { children: React.ReactNode, active: string }) {
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
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="bg-white border rounded-2xl p-4 sticky top-24 shadow-sm">
                <div className="flex items-center gap-3 p-2 mb-6 border-b pb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    JD
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">John Doe</h3>
                    <p className="text-xs text-slate-500">Software Developer</p>
                  </div>
                </div>
                
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link key={item.id} href={item.path}>
                      <span className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        active === item.id 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}>
                        <item.icon className="w-5 h-5" />
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t">
                    <span className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                      <LogOut className="w-5 h-5" />
                      Logout
                    </span>
                  </div>
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              <div className="bg-white border rounded-2xl p-8 shadow-sm h-full min-h-[600px] flex items-center justify-center">
                {children}
              </div>
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
      <ComingSoon 
        title="User Dashboard" 
        description="We're building a comprehensive dashboard where you can track applications, access courses, and manage your profile."
        showEmailInput={false}
      />
    </DashboardLayout>
  );
}

export function Profile() {
  return (
    <DashboardLayout active="profile">
      <ComingSoon 
        title="Profile Builder" 
        description="Create a standout professional profile that attracts top recruiters. Resume parsing and auto-fill features coming soon."
        showEmailInput={false}
      />
    </DashboardLayout>
  );
}

export function Notifications() {
  return (
    <DashboardLayout active="notifications">
      <ComingSoon 
        title="Notifications Center" 
        description="Get real-time updates on job applications, interview schedules, and new matching opportunities."
        showEmailInput={false}
      />
    </DashboardLayout>
  );
}

export function Settings() {
  return (
    <DashboardLayout active="settings">
      <ComingSoon 
        title="Account Settings" 
        description="Manage your preferences, privacy settings, and notification frequency."
        showEmailInput={false}
      />
    </DashboardLayout>
  );
}