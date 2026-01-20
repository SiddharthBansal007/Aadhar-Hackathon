// ABOUTME: Reusable chart container with consistent styling and header
// ABOUTME: Wraps Recharts components with glass morphism card styling

'use client';

import { ReactNode } from 'react';

interface ChartWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ChartWrapper({
  title,
  subtitle,
  children,
  delay = 0,
  className = '',
}: ChartWrapperProps) {
  return (
    <div
      className={`chart-container opacity-0 animate-slide-up ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold font-display text-white">{title}</h3>
        {subtitle && (
          <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
        )}
      </div>
      
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
