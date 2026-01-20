// ABOUTME: State-wise operational intensity visualization as a bar chart
// ABOUTME: Shows normalized activity levels across different states

'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { STATE_DATA, formatNumber } from '@/lib/data';

// Sort by total updates and take top 12
const topStates = [...STATE_DATA]
  .sort((a, b) => b.totalBioUpdates - a.totalBioUpdates)
  .slice(0, 12);

// Color gradient based on value
const getBarColor = (index: number) => {
  const colors = [
    '#0d7a91',
    '#0e8ba3',
    '#109cb5',
    '#12adc7',
    '#14b8a6',
    '#16c2af',
    '#1eccb8',
    '#26d6c1',
    '#2ee0ca',
    '#36ead3',
    '#3ef4dc',
    '#46fee5',
  ];
  return colors[index] || colors[colors.length - 1];
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: (typeof topStates)[0];
  }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="text-sm font-medium text-white mb-2">{data.state}</p>
        <p className="text-sm text-teal-400">
          Bio Updates: {formatNumber(data.totalBioUpdates)}
        </p>
        <p className="text-sm text-blue-400">
          Enrolments: {formatNumber(data.totalEnrolments)}
        </p>
        <p className="text-sm text-amber-400">
          Demo Updates: {formatNumber(data.totalDemoUpdates)}
        </p>
        <p className="text-sm text-slate-400 mt-1">Zone: {data.zone}</p>
      </div>
    );
  }
  return null;
}

export default function StateHeatmap() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={topStates}
        layout="vertical"
        margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255, 255, 255, 0.05)"
          horizontal={false}
        />
        <XAxis
          type="number"
          tickFormatter={formatNumber}
          tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
          axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="state"
          tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 11 }}
          axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
          tickLine={false}
          width={75}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="totalBioUpdates" radius={[0, 6, 6, 0]}>
          {topStates.map((_, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(index)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
