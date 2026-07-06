import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Briefcase, Menu, X, ChevronDown, Sun, Moon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Internships', path: '/internships' },
    { name: 'Courses', path: '/courses' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
  ];

  const moreLinks = [
    { name: 'Events', path: '/events' },
    { name: 'Scholarships', path: '/scholarships' },
    { name: 'Hiring Partners', path: '/hiring-partners' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 relative group" data-cursor="pointer">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Briefcase className="w-6 h-6 relative z-10" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled || location !== '/' ? 'text-foreground' : 'text-foreground lg:text-white'} ${theme === 'emerald' ? 'group-hover:text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]' : ''}`}>
              MB Career Connect
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="relative py-2 text-sm font-medium transition-colors group"
                data-cursor="pointer"
              >
                <span className={`${
                  location === link.path 
                    ? 'text-primary' 
                    : scrolled || location !== '/' ? 'text-muted-foreground hover:text-foreground' : 'text-gray-100 hover:text-white'
                }`}>
                  {link.name}
                </span>
                {location === link.path && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <div className="relative">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors group ${
                  scrolled || location !== '/' ? 'text-muted-foreground hover:text-foreground' : 'text-gray-100 hover:text-white'
                }`}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-controls="more-menu"
                onClick={() => setMoreOpen((v) => !v)}
                onBlur={(e) => {
                  if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                    setMoreOpen(false);
                  }
                }}
                data-cursor="pointer"
              >
                More <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    id="more-menu"
                    role="menu"
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 pt-2 w-48"
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setMoreOpen(false);
                      }
                    }}
                  >
                    <div className="bg-popover rounded-xl shadow-xl border border-border p-2 flex flex-col gap-1 backdrop-blur-xl">
                      {moreLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.path}
                          role="menuitem"
                          className="text-sm font-medium px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                          onClick={() => setMoreOpen(false)}
                          data-cursor="pointer"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleTheme}
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                    theme === 'blue'
                      ? 'bg-white border-2 border-blue-500 text-blue-900 hover:bg-blue-50'
                      : 'bg-[#0d1210] border-2 border-emerald-500 text-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:bg-[#111814]'
                  }`}
                  data-cursor="pointer"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === 'emerald' ? 360 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    {theme === 'blue' ? <Sun className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </motion.div>
                  <span className="text-xs font-bold whitespace-nowrap">
                    {theme === 'blue' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Switch to {theme === 'blue' ? 'Emerald Dark' : 'Professional Blue'}</p>
              </TooltipContent>
            </Tooltip>

            <Link href="/login" data-cursor="pointer">
              <Button variant={scrolled || location !== '/' ? "outline" : "secondary"} className={`hover-elevate transition-all ${!scrolled && location === '/' ? "bg-white/10 text-white border-white/20 hover:bg-white/20" : "hover:border-primary/50"}`}>
                Login
              </Button>
            </Link>
            <Link href="/register" data-cursor="pointer">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-95 border-0">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === 'blue' ? 'bg-white text-blue-600 shadow-sm border' : 'bg-[#111814] text-emerald-400 border border-emerald-900'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'blue' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b shadow-2xl lg:hidden overflow-hidden flex flex-col"
          >
            <div className="p-4 flex flex-col gap-2 flex-grow overflow-y-auto">
              <div className="flex flex-col gap-1">
                {[...navLinks, ...moreLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`text-lg font-semibold px-4 py-4 rounded-xl transition-colors ${
                      location === link.path ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-6 pb-20 flex flex-col gap-3 px-2">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-center h-12 text-base rounded-xl">Login</Button>
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full justify-center h-12 text-base rounded-xl bg-gradient-to-r from-primary to-accent border-0">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}