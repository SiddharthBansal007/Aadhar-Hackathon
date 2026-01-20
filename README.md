# Aadhar Analytics Dashboard

An interactive data intelligence dashboard for analyzing Aadhar enrollment and biometric update patterns across India. Built with Next.js 14, TypeScript, Tailwind CSS, and Recharts.

![Dashboard Preview](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)

## 📊 Features

### Key Performance Indicators
- **Total Enrolments**: Track new user registrations across all districts
- **Total Updates**: Monitor biometric and demographic update volumes
- **Update Ratio**: Understand system lifecycle (growth vs maintenance phase)
- **Youth Bio Ratio**: Analyze demographic drivers (children vs adults)

### Interactive Visualizations
- **National Trend Analysis**: Weekly aggregated line chart showing enrolments and updates over time
- **Volume Distribution**: Donut chart displaying district breakdown by activity level
- **State-wise Intensity**: Horizontal bar chart of top 12 states by biometric updates
- **Regional Efficiency**: Comparative analysis of zones (North, South, East, West, Central, North East)
- **Lorenz Curve**: Inequality visualization with Gini coefficients

### Intelligence Reports
- System lifecycle assessment (Expansion/Maturing/Maintenance phase)
- Behavioral link analysis between biometric and demographic updates
- Demographic driver identification (school-driven vs adult-driven)
- Operational cadence insights (weekend lift analysis)

### Anomaly Detection
- Ghost district identification (high enrolment, low updates)
- Pareto concentration risk analysis
- Load distribution status

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the dashboard directory:
```bash
cd dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser


## 📁 Project Structure

```
dashboard/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with fonts and metadata
│   └── page.tsx         # Main dashboard page
├── components/
│   ├── StatCard.tsx     # Key metric display cards
│   ├── InsightCard.tsx  # Intelligence insight cards
│   ├── ChartWrapper.tsx # Reusable chart container
│   └── charts/
│       ├── TrendChart.tsx        # Weekly trend line chart
│       ├── StateHeatmap.tsx      # State-wise bar chart
│       ├── ZoneChart.tsx         # Regional zone comparison
│       ├── VolumeDistribution.tsx # Activity level pie chart
│       └── GiniChart.tsx         # Lorenz curve visualization
├── lib/
│   └── data.ts          # Data types and aggregated sample data
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 📈 Data Insights

Based on analysis of **94,321 records** across **18,655 pincodes**:

| Metric | Value | Interpretation |
|--------|-------|----------------|
| Update Ratio | 69.9:1 | System in Maintenance Phase |
| Bio-Demo Correlation | 0.52 | Moderate behavioral link |
| Avg Youth Ratio | 1.16 | Mixed usage (children + adults) |
| Weekend Lift | -2.88% | Consistent demand across week |
| Enrolment Gini | 0.84 | Highly concentrated |
| Biometric Gini | 0.49 | Decentralized facilities |

### Key Findings

1. **System Lifecycle**: The market is saturated; activity is driven by corrections and mandatory updates (69.9 updates per 1 new enrolment)

2. **Regional Divergence**:
   - **West Zone** = Maintenance Capital (highest updates/district)
   - **Central Zone** = Growth Engine (highest new enrolments/district)

3. **Anomalies**: 128 "ghost" districts detected with high enrolment but suspiciously low biometric updates

4. **Load Distribution**: Balanced - 38.8% of pincodes handle 80% of national load

## 🎨 Design

The dashboard features a modern dark theme with:
- Glass morphism card effects
- Ocean blue primary palette with gold/coral accents
- Smooth fade-in animations
- Custom fonts: Outfit (display), DM Sans (body), JetBrains Mono (numbers)
- Responsive grid layout

## 🛠 Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## 📝 License

This project is part of the Aadhar Datathon analysis.

---
