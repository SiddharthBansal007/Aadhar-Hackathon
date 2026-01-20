// ABOUTME: Reusable stat card component with icon, value, and trend indicator
// ABOUTME: Features glass morphism styling and animated glow effects

'use client';

import { ReactNode } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  accentColor?: 'teal' | 'gold' | 'coral' | 'primary';
  delay?: number;
}

const accentColors = {
  teal: 'from-teal-500/20 to-teal-600/5',
  gold: 'from-amber-500/20 to-amber-600/5',
  coral: 'from-orange-500/20 to-orange-600/5',
  primary: 'from-primary-400/20 to-primary-600/5',
};

const iconBgColors = {
  teal: 'bg-teal-500/20 text-teal-400',
  gold: 'bg-amber-500/20 text-amber-400',
  coral: 'bg-orange-500/20 text-orange-400',
  primary: 'bg-primary-400/20 text-primary-300',
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  accentColor = 'primary',
  delay = 0,
}: StatCardProps) {
  return (
    <div
      className={`glass-card stat-card-glow p-6 relative overflow-hidden opacity-0 animate-slide-up`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Background gradient accent */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentColors[accentColor]} pointer-events-none`}
      />

      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${iconBgColors[accentColor]}`}>
            {icon}
          </div>
          {trend && (
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                trend === 'up'
                  ? 'bg-green-500/20 text-green-400'
                  : trend === 'down'
                  ? 'bg-red-500/20 text-red-400'
                  : 'bg-slate-500/20 text-slate-400'
              }`}
            >
              {trend === 'up' && <TrendingUp className="w-3 h-3" />}
              {trend === 'down' && <TrendingDown className="w-3 h-3" />}
              {trend === 'stable' && <Minus className="w-3 h-3" />}
              {trendValue && <span>{trendValue}</span>}
            </div>
          )}
        </div>

        {/* Value */}
        <div className="mb-1">
          <span className="text-3xl font-bold font-display tracking-tight text-white mono-numbers">
            {value}
          </span>
        </div>

        {/* Title */}
        <p className="text-sm font-medium text-slate-400 mb-1">{title}</p>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-slate-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
