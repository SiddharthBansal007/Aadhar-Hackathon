// ABOUTME: Root layout for the Aadhar Analytics Dashboard
// ABOUTME: Sets up fonts, metadata, and global styling wrapper

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aadhar Analytics Dashboard | Data Intelligence Platform',
  description: 'Interactive dashboard for Aadhar enrollment and biometric update analysis across India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-grid antialiased">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
