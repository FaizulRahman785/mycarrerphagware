import React from 'react';
import { ComingSoon } from '@/components/ComingSoon';
import { BookOpen, Calendar, GraduationCap } from 'lucide-react';

export function Blog() {
  return (
    <ComingSoon
      title="Blog Launching Soon"
      description="We're writing high-quality articles on interview prep, career transitions, and industry trends. Subscribe to get notified when we publish our first post!"
      icon={BookOpen}
      expectedDate="Q3 2025"
      relatedFeatures={[
        { label: 'Browse Jobs', href: '/jobs' },
        { label: 'Find Internships', href: '/internships' },
        { label: 'View Courses', href: '/courses' },
        { label: 'Find Mentors', href: '/mentors' },
      ]}
    />
  );
}

export function Events() {
  return (
    <ComingSoon
      title="Career Events & Webinars"
      description="Join virtual career fairs, company spotlight sessions, and expert webinars. Our events calendar is launching soon."
      icon={Calendar}
      expectedDate="Q3 2025"
      relatedFeatures={[
        { label: 'Browse Jobs', href: '/jobs' },
        { label: 'Find Internships', href: '/internships' },
        { label: 'View Courses', href: '/courses' },
        { label: 'Resources', href: '/resources' },
      ]}
    />
  );
}

export function Scholarships() {
  return (
    <ComingSoon
      title="Scholarship Programs"
      description="We believe financial constraints shouldn't hold back talent. Our scholarship programs for premium courses and certifications are being finalized."
      icon={GraduationCap}
      expectedDate="Q4 2025"
      relatedFeatures={[
        { label: 'View Courses', href: '/courses' },
        { label: 'Find Mentors', href: '/mentors' },
        { label: 'Resources', href: '/resources' },
        { label: 'Browse Jobs', href: '/jobs' },
      ]}
    />
  );
}
