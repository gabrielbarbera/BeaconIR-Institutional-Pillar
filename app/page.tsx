"use client";

import { mockCompany, mockKPIs, mockPillars, mockMarketData, mockFilings, mockEarnings, mockLeaders, mockPressReleases, mockGovernance } from "@/lib/mock-data";
import ComponentComposer from "@/components/ComponentComposer";

export default function DemoPage() {
  const theme = {
    primaryColor: mockCompany.primaryColor,
    accentColor: mockCompany.accentColor,
    backgroundColor: "#FFFFFF",
    textColor: "#1F2937",
  };

  // Institutional Pillar component structure
  // Define as const to ensure it's properly typed during static generation
  const components: Array<{ type: string; props?: any }> = [
    { type: "hero", props: { metrics: { marketCap: mockCompany.marketCap, ticker: mockCompany.tickerSymbol }, marketData: mockMarketData } },
    { type: "pillars", props: { pillars: mockPillars } },
    { type: "kpis", props: { kpis: mockKPIs } },
    { type: "filings", props: { filings: mockFilings } },
    { type: "earnings", props: { earnings: mockEarnings } },
    { type: "governance", props: { governance: mockGovernance } },
    { type: "leadership", props: { leaders: mockLeaders } },
    { type: "press-releases", props: { pressReleases: mockPressReleases } },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.backgroundColor }}>
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white" style={{ borderColor: theme.primaryColor + "20" }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={mockCompany.logoUrl}
                alt={mockCompany.name + " Logo"}
                className="h-12"
              />
              <h1 className="text-2xl font-bold" style={{ color: theme.primaryColor }}>
                {mockCompany.name}
              </h1>
              <span
                className="text-sm px-2 py-1 rounded"
                style={{
                  backgroundColor: theme.accentColor + "20",
                  color: theme.accentColor,
                }}
              >
                {mockCompany.tickerSymbol}
              </span>
            </div>
            <nav>
              <ul className="flex items-center gap-6">
                <li><a href="#about" className="hover:underline" style={{ color: theme.textColor }}>About</a></li>
                <li><a href="#investors" className="hover:underline" style={{ color: theme.textColor }}>Investors</a></li>
                <li><a href="#governance" className="hover:underline" style={{ color: theme.textColor }}>Governance</a></li>
                <li><a href="#contact" className="hover:underline" style={{ color: theme.textColor }}>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Template Components */}
      <ComponentComposer components={components} theme={theme} />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {mockCompany.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              This is a demo of the Institutional Pillar template. Template provided by Beacon IR.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

