// ABOUTME: Regional zone efficiency comparison chart
// ABOUTME: Displays average updates and enrolments per zone

'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ZONE_DATA, formatNumber } from '@/lib/data';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    payload: (typeof ZONE_DATA)[0];
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="text-sm font-medium text-white mb-2">{label} Zone</p>
        <p className="text-sm text-teal-400">
          Avg Updates: {formatNumber(data.avgUpdates)}
        </p>
        <p className="text-sm text-coral-400" style={{ color: '#f97316' }}>
          Avg Enrolments: {formatNumber(data.avgEnrolments)}
        </p>
        <p className="text-sm text-slate-400 mt-1">
          Districts: {data.districts}
        </p>
      </div>
    );
  }
  return null;
}

export default function ZoneChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={ZONE_DATA}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255, 255, 255, 0.05)"
          vertical={false}
        />
        <XAxis
          dataKey="zone"
          tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 11 }}
          axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          tickLine={false}
        />
        <YAxis
          tickFormatter={formatNumber}
          tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
          axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: 15 }}
          iconType="circle"
          formatter={(value) => (
            <span className="text-sm text-slate-400">{value}</span>
          )}
        />
        <Bar
          dataKey="avgUpdates"
          name="Avg Updates/District"
          fill="#14b8a6"
          radius={[6, 6, 0, 0]}
        />
        <Bar
          dataKey="avgEnrolments"
          name="Avg Enrolments/District"
          fill="#f97316"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
