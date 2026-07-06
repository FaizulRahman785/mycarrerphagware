import React from 'react';
import { Link } from 'wouter';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-black text-slate-200 tracking-tighter">404</h1>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Page not found</h2>
          <p className="text-slate-500">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="pt-6">
            <Link 
              href="/" 
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
