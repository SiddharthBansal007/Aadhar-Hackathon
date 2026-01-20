// ABOUTME: Volume category distribution pie/donut chart
// ABOUTME: Shows breakdown of districts by activity level

'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { VOLUME_CATEGORIES } from '@/lib/data';

const COLORS = ['#64748b', '#3b82f6', '#14b8a6', '#f59e0b'];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: (typeof VOLUME_CATEGORIES)[0];
  }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="text-sm font-medium text-white mb-1">{data.category} Volume</p>
        <p className="text-sm text-slate-300">
          Districts: {data.count.toLocaleString('en-IN')}
        </p>
        <p className="text-sm text-slate-400">
          Avg Youth Ratio: {data.avgYouthRatio.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
}

export default function VolumeDistribution() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={VOLUME_CATEGORIES}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={4}
          dataKey="count"
          nameKey="category"
          stroke="none"
        >
          {VOLUME_CATEGORIES.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="bottom"
          iconType="circle"
          formatter={(value) => (
            <span className="text-sm text-slate-400">{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
