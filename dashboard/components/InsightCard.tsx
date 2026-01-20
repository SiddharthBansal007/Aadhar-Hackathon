// ABOUTME: Card component displaying intelligence insights with status indicators
// ABOUTME: Used in the Data Intelligence Report section

'use client';

import { Lightbulb, CheckCircle, AlertTriangle, Info } from 'lucide-react';

interface InsightCardProps {
  label: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'stable';
  type?: 'success' | 'warning' | 'info';
  delay?: number;
}

const typeConfig = {
  success: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    icon: CheckCircle,
    iconColor: 'text-green-400',
  },
  warning: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    icon: AlertTriangle,
    iconColor: 'text-amber-400',
  },
  info: {
    bg: 'bg-primary-400/10',
    border: 'border-primary-400/20',
    icon: Info,
    iconColor: 'text-primary-300',
  },
};

export default function InsightCard({
  label,
  value,
  description,
  type = 'info',
  delay = 0,
}: InsightCardProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`${config.bg} border ${config.border} rounded-xl p-5 opacity-0 animate-slide-up`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${config.bg}`}>
          <Icon className={`w-5 h-5 ${config.iconColor}`} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {label}
            </span>
          </div>
          
          <p className="text-lg font-semibold text-white mb-2">{value}</p>
          
          <p className="text-sm text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
