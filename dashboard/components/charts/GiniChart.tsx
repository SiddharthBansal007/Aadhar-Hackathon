// ABOUTME: Lorenz curve visualization showing inequality in service distribution
// ABOUTME: Displays Gini coefficients for enrolment vs biometric updates

'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from 'recharts';
import { KEY_METRICS } from '@/lib/data';

// Generate Lorenz curve data points
function generateLorenzData() {
  const points = [];
  for (let i = 0; i <= 100; i += 5) {
    const pop = i / 100;
    
    // Simulate Lorenz curve based on Gini coefficients
    // Using approximation: L(p) = p^((1+G)/(1-G)) for simple cases
    const giniEnrol = KEY_METRICS.giniEnrolment;
    const giniBio = KEY_METRICS.giniBiometric;
    
    // More accurate approximation using power law
    const enrolShare = Math.pow(pop, 1 + giniEnrol * 2);
    const bioShare = Math.pow(pop, 1 + giniBio * 1.2);
    
    points.push({
      population: i,
      equality: i,
      enrolments: Math.round(enrolShare * 100),
      biometrics: Math.round(bioShare * 100),
    });
  }
  return points;
}

const lorenzData = generateLorenzData();

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: number;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="text-sm font-medium text-white mb-2">
          {label}% of Districts
        </p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}% of volume
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function GiniChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={lorenzData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255, 255, 255, 0.05)"
          />
          <XAxis
            dataKey="population"
            tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
            tickLine={false}
            label={{
              value: 'Cumulative % of Districts',
              position: 'insideBottom',
              offset: -5,
              fill: 'rgba(255, 255, 255, 0.4)',
              fontSize: 11,
            }}
          />
          <YAxis
            tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
            tickLine={false}
            label={{
              value: 'Cumulative % of Volume',
              angle: -90,
              position: 'insideLeft',
              fill: 'rgba(255, 255, 255, 0.4)',
              fontSize: 11,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: 15 }}
            formatter={(value) => (
              <span className="text-sm text-slate-400">{value}</span>
            )}
          />
          
          {/* Perfect equality line */}
          <ReferenceLine
            segment={[
              { x: 0, y: 0 },
              { x: 100, y: 100 },
            ]}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeDasharray="5 5"
          />
          
          <Area
            type="monotone"
            dataKey="enrolments"
            name={`Enrolments (Gini: ${KEY_METRICS.giniEnrolment})`}
            stroke="#f97316"
            fill="rgba(249, 115, 22, 0.2)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="biometrics"
            name={`Biometrics (Gini: ${KEY_METRICS.giniBiometric})`}
            stroke="#14b8a6"
            fill="rgba(20, 184, 166, 0.2)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-4 p-4 bg-primary-400/10 rounded-lg border border-primary-400/20">
        <p className="text-sm text-slate-300">
          <span className="text-primary-300 font-medium">Insight:</span>{' '}
          Biometric facilities are more widespread than enrolment stations. 
          Enrolments are highly concentrated (Gini: 0.84) while biometric updates 
          are decentralized (Gini: 0.49).
        </p>
      </div>
    </div>
  );
}
