// ABOUTME: Main dashboard page for Aadhar Analytics Dashboard
// ABOUTME: Displays key metrics, charts, and intelligence insights

'use client';

import {
  Users,
  Fingerprint,
  FileText,
  TrendingUp,
  MapPin,
  Activity,
  AlertTriangle,
  BarChart3,
  PieChart,
  Globe,
} from 'lucide-react';

import StatCard from '@/components/StatCard';
import InsightCard from '@/components/InsightCard';
import ChartWrapper from '@/components/ChartWrapper';
import TrendChart from '@/components/charts/TrendChart';
import StateHeatmap from '@/components/charts/StateHeatmap';
import ZoneChart from '@/components/charts/ZoneChart';
import VolumeDistribution from '@/components/charts/VolumeDistribution';
import GiniChart from '@/components/charts/GiniChart';
import {
  KEY_METRICS,
  SYSTEM_INSIGHTS,
  GHOST_DISTRICTS,
  formatNumber,
  formatNumberFull,
} from '@/lib/data';

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/5 bg-surface-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary-500/20 rounded-xl">
                <Fingerprint className="w-8 h-8 text-primary-300" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-display text-white">
                  Aadhar Analytics
                </h1>
                <p className="text-sm text-slate-400">
                  Data Intelligence Dashboard
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-slate-500">Data Records</p>
                <p className="text-sm font-mono text-slate-300">
                  {formatNumberFull(KEY_METRICS.totalRecords)}
                </p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-right">
                <p className="text-xs text-slate-500">Pincodes</p>
                <p className="text-sm font-mono text-slate-300">
                  {formatNumberFull(KEY_METRICS.totalPincodes)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics Grid */}
        <section className="mb-10">
          <h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-4">
            Key Performance Indicators
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard
              title="Total New Enrolments"
              value={formatNumber(KEY_METRICS.totalEnrolments)}
              subtitle="Across all districts"
              icon={<Users className="w-6 h-6" />}
              trend="stable"
              trendValue="Growth Mode"
              accentColor="primary"
              delay={100}
            />
            <StatCard
              title="Total Updates"
              value={formatNumber(KEY_METRICS.totalUpdates)}
              subtitle="Bio + Demo combined"
              icon={<Fingerprint className="w-6 h-6" />}
              trend="up"
              trendValue="Maintenance Mode"
              accentColor="teal"
              delay={200}
            />
            <StatCard
              title="Update Ratio"
              value={`${KEY_METRICS.updateRatio}:1`}
              subtitle="Updates per new enrolment"
              icon={<Activity className="w-6 h-6" />}
              trend="stable"
              accentColor="gold"
              delay={300}
            />
            <StatCard
              title="Youth Bio Ratio"
              value={KEY_METRICS.avgYouthRatio.toFixed(2)}
              subtitle="Average across districts"
              icon={<TrendingUp className="w-6 h-6" />}
              trend="stable"
              trendValue="Mixed Usage"
              accentColor="coral"
              delay={400}
            />
          </div>
        </section>

        {/* Charts Row 1 */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ChartWrapper
                title="National Trend Analysis"
                subtitle="Weekly aggregation of enrolments and updates"
                delay={500}
              >
                <TrendChart />
              </ChartWrapper>
            </div>
            
            <div>
              <ChartWrapper
                title="Volume Distribution"
                subtitle="Districts by activity level"
                delay={600}
              >
                <VolumeDistribution />
              </ChartWrapper>
            </div>
          </div>
        </section>

        {/* Intelligence Report Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-500/20 rounded-lg">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <h2 className="text-lg font-semibold font-display text-white">
              Data Intelligence Report
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SYSTEM_INSIGHTS.map((insight, index) => (
              <InsightCard
                key={insight.label}
                label={insight.label}
                value={insight.value as string}
                description={insight.description}
                type={index === 0 ? 'success' : 'info'}
                delay={700 + index * 100}
              />
            ))}
          </div>
        </section>

        {/* Charts Row 2 - State & Zone Analysis */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartWrapper
              title="State-wise Operational Intensity"
              subtitle="Top 12 states by biometric update volume"
              delay={1100}
            >
              <StateHeatmap />
            </ChartWrapper>
            
            <ChartWrapper
              title="Regional Efficiency Analysis"
              subtitle="Average updates vs enrolments per district by zone"
              delay={1200}
            >
              <ZoneChart />
            </ChartWrapper>
          </div>
        </section>

        {/* Inequality Analysis */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartWrapper
              title="Service Distribution Inequality"
              subtitle="Lorenz curve showing concentration of operations"
              delay={1300}
            >
              <GiniChart />
            </ChartWrapper>
            
            {/* Anomaly Report */}
            <div
              className="glass-card p-6 opacity-0 animate-slide-up"
              style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-display text-white">
                    Anomaly Detection
                  </h3>
                  <p className="text-sm text-slate-400">
                    Ghost districts and operational risks
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Ghost Districts Alert */}
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-red-400">
                      Ghost Districts Detected
                    </span>
                    <span className="text-2xl font-bold text-red-400 mono-numbers">
                      {KEY_METRICS.ghostDistricts}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">
                    High enrolment but suspiciously low biometric updates
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {GHOST_DISTRICTS.slice(0, 5).map((district) => (
                      <span
                        key={district}
                        className="px-2 py-1 bg-red-500/20 rounded text-xs text-red-300"
                      >
                        {district}
                      </span>
                    ))}
                    <span className="px-2 py-1 bg-slate-500/20 rounded text-xs text-slate-400">
                      +{GHOST_DISTRICTS.length - 5} more
                    </span>
                  </div>
                </div>
                
                {/* Pareto Analysis */}
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-400">
                      Load Distribution Status
                    </span>
                    <span className="text-sm font-medium text-green-400">
                      BALANCED
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    38.8% of pincodes handle 80% of the national load. 
                    The operational load is well-distributed across the country.
                  </p>
                </div>
                
                {/* Correlation Insight */}
                <div className="p-4 bg-primary-400/10 border border-primary-400/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-300">
                      Bio-Demo Correlation
                    </span>
                    <span className="text-lg font-bold text-primary-300 mono-numbers">
                      {KEY_METRICS.bioDemo_Correlation}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Moderate link detected. Some overlap exists, but many users 
                    visit for specific, single-purpose transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Insights Summary */}
        <section className="mb-10">
          <div
            className="glass-card p-6 opacity-0 animate-slide-up"
            style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <Globe className="w-5 h-5 text-primary-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display text-white">
                  Regional Insights Summary
                </h3>
                <p className="text-sm text-slate-400">
                  Key findings from zone-based analysis
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-teal-500/10 border border-teal-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-medium text-teal-400">
                    Maintenance Capital
                  </span>
                </div>
                <p className="text-xl font-bold text-white mb-1">West Zone</p>
                <p className="text-xs text-slate-400">
                  Highest biometric updates per district. Maharashtra & Gujarat 
                  driving the maintenance workload.
                </p>
              </div>
              
              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium text-orange-400">
                    Growth Engine
                  </span>
                </div>
                <p className="text-xl font-bold text-white mb-1">Central Zone</p>
                <p className="text-xs text-slate-400">
                  Highest new enrolments per district. UP & MP leading the 
                  expansion efforts.
                </p>
              </div>
              
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">
                    Key Finding
                  </span>
                </div>
                <p className="text-xl font-bold text-white mb-1">Regional Divergence</p>
                <p className="text-xs text-slate-400">
                  Resource allocation strategies must differ by region based on 
                  growth vs maintenance priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="text-center py-8 border-t border-white/5 opacity-0 animate-fade-in"
          style={{ animationDelay: '1600ms', animationFillMode: 'forwards' }}
        >
          <p className="text-sm text-slate-500">
            Aadhar Analytics Dashboard • Built with Next.js & Recharts
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Data sourced from Aadhar Datathon dataset ({formatNumberFull(KEY_METRICS.totalRecords)} records)
          </p>
        </footer>
      </main>
    </div>
  );
}
