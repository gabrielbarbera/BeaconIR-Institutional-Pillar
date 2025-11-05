/**
 * Institutional Pillar Template Layout
 *
 * Fortune 500, conservative, legacy enterprise
 * Structure: CEO credibility + stock ticker, three pillars, compliance-first
 */

import ComponentComposer from "@/components/ir/composition/ComponentComposer";
import { ComponentClusters } from "@/components/ir/composition/component-config";
import {
  getDefaultPillars,
  prepareComponentData,
} from "@/lib/component-data-helpers";
import type { Company } from "@prisma/client";

// Type aliases for Template and Theme (until Prisma Client regenerates)
type Template = any;
type Theme = any;

interface InstitutionalPillarLayoutProps {
  company: Company & {
    pressReleases?: any[];
  };
  template: Template | null;
  theme: Theme | null;
}

export default async function InstitutionalPillarLayout({
  company,
  template,
  theme,
}: InstitutionalPillarLayoutProps) {
  // Prepare base component data from company (with CMS integration)
  const baseData = await prepareComponentData(company, true);

  // Merge with template-specific data
  const componentData = {
    ...baseData,
    pillars: getDefaultPillars(),
    // Use real KPIs from CMS if available, otherwise use defaults
    kpis:
      baseData.kpis && baseData.kpis.length > 0
        ? baseData.kpis
        : [
            {
              label: "Revenue",
              gaapValue: "$31.6B",
              nonGaapValue: "$32.1B",
              change: "+15%",
              changePercent: "15.2",
              period: "FY 2024",
              trend: "up" as const,
            },
            {
              label: "EBITDA",
              gaapValue: "$8.2B",
              change: "+12%",
              changePercent: "12.5",
              period: "FY 2024",
              trend: "up" as const,
            },
            {
              label: "Free Cash Flow",
              gaapValue: "$5.1B",
              change: "+8%",
              changePercent: "8.3",
              period: "FY 2024",
              trend: "up" as const,
            },
            {
              label: "EPS",
              gaapValue: "$2.45",
              nonGaapValue: "$2.58",
              change: "+10%",
              changePercent: "10.2",
              period: "FY 2024",
              trend: "up" as const,
            },
          ],
    // Use real data from CMS (already included in baseData)
    // filings, earnings, leaders, governance are now fetched from CMS
  };

  // Get component configuration for Institutional Pillar template
  const components = ComponentClusters.institutionalPillar(componentData);

  // Apply theme styles
  const primaryColor =
    (theme?.colors as any)?.primary || company.primaryColor || "#0F172A";
  const accentColor =
    (theme?.colors as any)?.accent || company.accentColor || "#3B82F6";
  const backgroundColor = (theme?.colors as any)?.background || "#FFFFFF";
  const textColor = (theme?.colors as any)?.text || "#1F2937";
  const primaryFont =
    (theme?.typography as any)?.primaryFont ||
    (company as any).primaryFontFamily ||
    "Inter";
  const secondaryFont =
    (theme?.typography as any)?.secondaryFont ||
    (company as any).secondaryFontFamily ||
    primaryFont;

  return (
    <div
      className="ir-site institutional-pillar"
      style={{
        backgroundColor,
        color: textColor,
        fontFamily: primaryFont,
        minHeight: "100vh",
      }}
    >
      {/* Theme CSS Variables */}
      <style>{`
        :root {
          --primary-color: ${primaryColor};
          --accent-color: ${accentColor};
          --background-color: ${backgroundColor};
          --text-color: ${textColor};
          --primary-font: ${primaryFont};
          --secondary-font: ${secondaryFont};
        }
      `}</style>

      {/* Header */}
      <header
        className="border-b sticky top-0 z-50 bg-white"
        style={{ borderColor: `${primaryColor}20`, backgroundColor }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {company.logoUrl && (
                <img
                  src={company.logoUrl}
                  alt={`${company.name} Logo`}
                  className="h-12"
                />
              )}
              <h1
                className="text-2xl font-bold"
                style={{ color: primaryColor }}
              >
                {company.name}
              </h1>
              {company.tickerSymbol && (
                <span
                  className="text-sm px-2 py-1 rounded"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                  }}
                >
                  {company.tickerSymbol}
                </span>
              )}
            </div>
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <a
                    href="#about"
                    className="hover:underline"
                    style={{ color: textColor }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#investors"
                    className="hover:underline"
                    style={{ color: textColor }}
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a
                    href="#governance"
                    className="hover:underline"
                    style={{ color: textColor }}
                  >
                    Governance
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:underline"
                    style={{ color: textColor }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Render components using ComponentComposer */}
      <ComponentComposer
        template={template}
        theme={theme}
        company={company}
        components={components}
      />
    </div>
  );
}
