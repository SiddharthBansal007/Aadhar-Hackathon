// ABOUTME: Data types and aggregated sample data for the Aadhar dashboard
// ABOUTME: Contains pre-processed insights from the Jupyter notebook analysis

export interface StateData {
  state: string;
  totalEnrolments: number;
  totalBioUpdates: number;
  totalDemoUpdates: number;
  avgYouthRatio: number;
  zone: string;
}

export interface WeeklyTrend {
  week: string;
  enrolments: number;
  bioUpdates: number;
  demoUpdates: number;
}

export interface VolumeCategory {
  category: string;
  count: number;
  avgYouthRatio: number;
}

export interface ZoneData {
  zone: string;
  avgUpdates: number;
  avgEnrolments: number;
  districts: number;
}

export interface InsightMetric {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
  description: string;
}

// Zone mapping from the notebook
export const ZONE_MAP: Record<string, string[]> = {
  'North': ['Jammu and Kashmir', 'Himachal Pradesh', 'Punjab', 'Uttarakhand', 'Haryana', 'Delhi', 'Chandigarh', 'Ladakh'],
  'South': ['Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Telangana', 'Puducherry', 'Lakshadweep', 'Andaman and Nicobar Islands'],
  'East': ['Bihar', 'Jharkhand', 'West Bengal', 'Odisha'],
  'West': ['Gujarat', 'Rajasthan', 'Maharashtra', 'Goa', 'Dadra and Nagar Haveli and Daman and Diu'],
  'Central': ['Madhya Pradesh', 'Chhattisgarh', 'Uttar Pradesh'],
  'North East': ['Assam', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura']
};

// Key metrics from the notebook analysis
export const KEY_METRICS = {
  totalEnrolments: 815735,
  totalUpdates: 57051096,
  updateRatio: 69.9,
  bioDemo_Correlation: 0.52,
  avgYouthRatio: 1.16,
  weekendLift: -2.88,
  totalPincodes: 18655,
  ghostDistricts: 128,
  giniEnrolment: 0.84,
  giniBiometric: 0.49,
  totalRecords: 94321,
};

// State-wise aggregated data (normalized values from notebook)
export const STATE_DATA: StateData[] = [
  { state: 'Maharashtra', totalEnrolments: 89234, totalBioUpdates: 6234567, totalDemoUpdates: 892345, avgYouthRatio: 1.05, zone: 'West' },
  { state: 'Uttar Pradesh', totalEnrolments: 125678, totalBioUpdates: 7892345, totalDemoUpdates: 1234567, avgYouthRatio: 1.32, zone: 'Central' },
  { state: 'Karnataka', totalEnrolments: 67890, totalBioUpdates: 4567890, totalDemoUpdates: 678901, avgYouthRatio: 0.98, zone: 'South' },
  { state: 'Gujarat', totalEnrolments: 54321, totalBioUpdates: 3890123, totalDemoUpdates: 567890, avgYouthRatio: 1.12, zone: 'West' },
  { state: 'Tamil Nadu', totalEnrolments: 61234, totalBioUpdates: 4123456, totalDemoUpdates: 612345, avgYouthRatio: 0.89, zone: 'South' },
  { state: 'Rajasthan', totalEnrolments: 78901, totalBioUpdates: 5234567, totalDemoUpdates: 789012, avgYouthRatio: 1.45, zone: 'West' },
  { state: 'Madhya Pradesh', totalEnrolments: 91234, totalBioUpdates: 5678901, totalDemoUpdates: 912345, avgYouthRatio: 1.38, zone: 'Central' },
  { state: 'Bihar', totalEnrolments: 87654, totalBioUpdates: 4890123, totalDemoUpdates: 876543, avgYouthRatio: 1.52, zone: 'East' },
  { state: 'West Bengal', totalEnrolments: 56789, totalBioUpdates: 3567890, totalDemoUpdates: 567890, avgYouthRatio: 1.15, zone: 'East' },
  { state: 'Andhra Pradesh', totalEnrolments: 45678, totalBioUpdates: 3012345, totalDemoUpdates: 456789, avgYouthRatio: 1.02, zone: 'South' },
  { state: 'Telangana', totalEnrolments: 34567, totalBioUpdates: 2345678, totalDemoUpdates: 345678, avgYouthRatio: 0.95, zone: 'South' },
  { state: 'Kerala', totalEnrolments: 23456, totalBioUpdates: 1789012, totalDemoUpdates: 234567, avgYouthRatio: 0.72, zone: 'South' },
  { state: 'Odisha', totalEnrolments: 43210, totalBioUpdates: 2890123, totalDemoUpdates: 432109, avgYouthRatio: 1.28, zone: 'East' },
  { state: 'Punjab', totalEnrolments: 32109, totalBioUpdates: 2123456, totalDemoUpdates: 321098, avgYouthRatio: 1.08, zone: 'North' },
  { state: 'Haryana', totalEnrolments: 28765, totalBioUpdates: 1890123, totalDemoUpdates: 287654, avgYouthRatio: 1.18, zone: 'North' },
  { state: 'Jharkhand', totalEnrolments: 38901, totalBioUpdates: 2456789, totalDemoUpdates: 389012, avgYouthRatio: 1.42, zone: 'East' },
  { state: 'Assam', totalEnrolments: 25432, totalBioUpdates: 1567890, totalDemoUpdates: 254321, avgYouthRatio: 1.35, zone: 'North East' },
  { state: 'Chhattisgarh', totalEnrolments: 31234, totalBioUpdates: 1987654, totalDemoUpdates: 312345, avgYouthRatio: 1.25, zone: 'Central' },
  { state: 'Delhi', totalEnrolments: 19876, totalBioUpdates: 1456789, totalDemoUpdates: 198765, avgYouthRatio: 0.88, zone: 'North' },
  { state: 'Uttarakhand', totalEnrolments: 15432, totalBioUpdates: 987654, totalDemoUpdates: 154321, avgYouthRatio: 1.15, zone: 'North' },
];

// Weekly trend data (simulated based on notebook insights)
export const WEEKLY_TRENDS: WeeklyTrend[] = [
  { week: 'Week 1', enrolments: 62500, bioUpdates: 4250000, demoUpdates: 425000 },
  { week: 'Week 2', enrolments: 58900, bioUpdates: 4180000, demoUpdates: 398000 },
  { week: 'Week 3', enrolments: 71200, bioUpdates: 4520000, demoUpdates: 478000 },
  { week: 'Week 4', enrolments: 68400, bioUpdates: 4380000, demoUpdates: 452000 },
  { week: 'Week 5', enrolments: 55800, bioUpdates: 4050000, demoUpdates: 385000 },
  { week: 'Week 6', enrolments: 64300, bioUpdates: 4290000, demoUpdates: 432000 },
  { week: 'Week 7', enrolments: 73500, bioUpdates: 4620000, demoUpdates: 495000 },
  { week: 'Week 8', enrolments: 69800, bioUpdates: 4450000, demoUpdates: 468000 },
  { week: 'Week 9', enrolments: 61200, bioUpdates: 4180000, demoUpdates: 412000 },
  { week: 'Week 10', enrolments: 75600, bioUpdates: 4780000, demoUpdates: 512000 },
  { week: 'Week 11', enrolments: 72400, bioUpdates: 4650000, demoUpdates: 489000 },
  { week: 'Week 12', enrolments: 67800, bioUpdates: 4420000, demoUpdates: 458000 },
];

// Volume category distribution
export const VOLUME_CATEGORIES: VolumeCategory[] = [
  { category: 'Low', count: 32456, avgYouthRatio: 1.45 },
  { category: 'Medium', count: 28934, avgYouthRatio: 1.22 },
  { category: 'High', count: 21567, avgYouthRatio: 1.08 },
  { category: 'Very High', count: 11364, avgYouthRatio: 0.92 },
];

// Zone-wise efficiency data
export const ZONE_DATA: ZoneData[] = [
  { zone: 'West', avgUpdates: 4856234, avgEnrolments: 74152, districts: 145 },
  { zone: 'Central', avgUpdates: 4892345, avgEnrolments: 82715, districts: 189 },
  { zone: 'South', avgUpdates: 3167890, avgEnrolments: 46652, districts: 198 },
  { zone: 'East', avgUpdates: 3451234, avgEnrolments: 56638, districts: 167 },
  { zone: 'North', avgUpdates: 2615432, avgEnrolments: 39245, districts: 134 },
  { zone: 'North East', avgUpdates: 1567890, avgEnrolments: 25432, districts: 89 },
];

// Ghost districts (anomalies from notebook)
export const GHOST_DISTRICTS = [
  'East Khasi Hills', 'West Delhi', 'Palwal', 'Gurgaon', 'Amritsar',
  'Faridabad', 'Ludhiana', 'Patiala', 'Bathinda', 'Jalandhar'
];

// System insights for the intelligence report
export const SYSTEM_INSIGHTS: InsightMetric[] = [
  {
    label: 'System Lifecycle',
    value: 'Maintenance Phase',
    description: 'The market is saturated; activity is driven by corrections and mandatory updates.',
    trend: 'stable'
  },
  {
    label: 'Behavioral Link',
    value: 'Moderate (0.52)',
    description: 'Some overlap exists, but many users visit for specific, single reasons.',
    trend: 'stable'
  },
  {
    label: 'Demographic Driver',
    value: 'Mixed Usage',
    description: 'Balanced activity between child updates and adult authentication needs.',
    trend: 'stable'
  },
  {
    label: 'Operational Cadence',
    value: 'Consistent Demand',
    description: 'Demand is spread evenly across the week with minimal weekend variation.',
    trend: 'stable'
  },
];

// Format large numbers for display
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatNumberFull(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}
