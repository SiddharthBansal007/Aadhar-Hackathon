// ABOUTME: Weekly trend line chart showing enrolments and update volumes
// ABOUTME: Uses Recharts with custom styling for the dashboard theme

'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { WEEKLY_TRENDS, formatNumber } from '@/lib/data';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="text-sm font-medium text-white mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {formatNumber(entry.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function TrendChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={WEEKLY_TRENDS}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255, 255, 255, 0.05)"
          vertical={false}
        />
        <XAxis
          dataKey="week"
          tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}
          axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          tickLine={false}
        />
        <YAxis
          tickFormatter={formatNumber}
          tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}
          axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: 20 }}
          iconType="circle"
          formatter={(value) => (
            <span className="text-sm text-slate-400">{value}</span>
          )}
        />
        <Line
          type="monotone"
          dataKey="bioUpdates"
          name="Biometric Updates"
          stroke="#14b8a6"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6, fill: '#14b8a6' }}
        />
        <Line
          type="monotone"
          dataKey="enrolments"
          name="New Enrolments"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6, fill: '#3b82f6' }}
        />
        <Line
          type="monotone"
          dataKey="demoUpdates"
          name="Demographic Updates"
          stroke="#f59e0b"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
          activeDot={{ r: 5, fill: '#f59e0b' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
