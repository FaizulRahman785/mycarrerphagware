import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollProgress, BackToTop } from '@/components/ScrollEffects';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Jobs } from '@/pages/Jobs';
import { Internships } from '@/pages/Internships';
import { Courses } from '@/pages/Courses';
import { Mentors } from '@/pages/Mentors';
import { HiringPartners } from '@/pages/HiringPartners';
import { Resources } from '@/pages/Resources';
import { Blog, Events, Scholarships } from '@/pages/BlogAndEvents';
import { Dashboard, Profile, Notifications, Settings } from '@/pages/Dashboard';
import { Login, Register } from '@/pages/Auth';
import { Contact } from '@/pages/Contact';
import { FAQ } from '@/pages/FAQ';
import { Privacy, Terms } from '@/pages/Legal';
import { NotFound } from '@/pages/not-found';

const queryClient = new QueryClient();

function AnimatedSwitch() {
  const [location] = useLocation();
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex-grow flex flex-col"
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/internships" component={Internships} />
          <Route path="/courses" component={Courses} />
          <Route path="/mentors" component={Mentors} />
          <Route path="/hiring-partners" component={HiringPartners} />
          <Route path="/resources" component={Resources} />
          <Route path="/blog" component={Blog} />
          <Route path="/events" component={Events} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <CustomCursor />
          <ScrollProgress />
          <BackToTop />
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <div className="min-h-[100dvh] flex flex-col relative overflow-x-hidden">
              <AnimatedSwitch />
            </div>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;