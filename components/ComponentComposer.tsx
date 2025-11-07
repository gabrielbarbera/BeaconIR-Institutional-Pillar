/**
 * Simplified Component for Demo Pages
 *
 * A minimal component composer that renders basic HTML/CSS versions
 * of IR components for demonstration purposes
 */

interface Component {
  type: string;
  props?: any;
}

interface ComponentComposerProps {
  components: Component[];
  theme?: any;
}

export default function ComponentComposer({
  components,
  theme,
}: ComponentComposerProps) {
  // Defensive check: ensure components is an array
  if (!components || !Array.isArray(components)) {
    console.warn("ComponentComposer: components must be an array", components);
    return null;
  }

  return (
    <div className="components-container">
      {components.map((component, index) => (
        <ComponentRenderer key={index} component={component} theme={theme} />
      ))}
    </div>
  );
}

function ComponentRenderer({
  component,
  theme,
}: {
  component: Component;
  theme?: any;
}) {
  if (!component || typeof component !== 'object') {
    return null;
  }
  
  const { type, props } = component;

  switch (type) {
    case "hero":
      return <HeroComponent {...props} theme={theme} />;
    case "kpis":
      return <KPIsComponent {...props} theme={theme} />;
    case "pillars":
      return <PillarsComponent {...props} theme={theme} />;
    case "filings":
      return <FilingsComponent {...props} theme={theme} />;
    case "earnings":
      return <EarningsComponent {...props} theme={theme} />;
    case "leadership":
      return <LeadershipComponent {...props} theme={theme} />;
    case "press-releases":
      return <PressReleasesComponent {...props} theme={theme} />;
    case "governance":
      return <GovernanceComponent {...props} theme={theme} />;
    default:
      return null;
  }
}

function HeroComponent({ metrics, marketData, theme }: any) {
  return (
    <section className="hero-section py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: theme?.primaryColor || "#0F172A" }}
            >
              Investor Relations
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Welcome to our investor relations portal. Stay informed about our
              financial performance, corporate governance, and strategic
              initiatives.
            </p>
            {marketData && (
              <div className="flex items-center gap-4">
                <div>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: theme?.accentColor || "#3B82F6" }}
                  >
                    {marketData.price}
                  </div>
                  <div className="text-sm text-green-600">
                    {marketData.change} ({marketData.changePercent})
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>Market Cap: {marketData.marketCap}</div>
                  <div>Volume: {marketData.volume}</div>
                </div>
              </div>
            )}
          </div>
          {metrics && (
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric: any, idx: number) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-lg shadow-sm border"
                >
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function KPIsComponent({ kpis, theme }: any) {
  if (!kpis || kpis.length === 0) return null;

  return (
    <section className="kpis-section py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: theme?.primaryColor || "#0F172A" }}
        >
          Key Performance Indicators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi: any, idx: number) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-lg border shadow-sm"
            >
              <div className="text-sm text-gray-600 mb-2">{kpi.label}</div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: theme?.primaryColor || "#0F172A" }}
              >
                {kpi.gaapValue}
              </div>
              {kpi.nonGaapValue && (
                <div className="text-sm text-gray-500 mb-2">
                  Non-GAAP: {kpi.nonGaapValue}
                </div>
              )}
              {kpi.change && (
                <div
                  className={`text-sm font-medium ${kpi.trend === "up" ? "text-green-600" : kpi.trend === "down" ? "text-red-600" : "text-gray-600"}`}
                >
                  {kpi.change} ({kpi.changePercent}%)
                </div>
              )}
              {kpi.period && (
                <div className="text-xs text-gray-500 mt-1">{kpi.period}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsComponent({ pillars, theme }: any) {
  if (!pillars || pillars.length === 0) return null;

  return (
    <section className="pillars-section py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: theme?.primaryColor || "#0F172A" }}
        >
          Our Foundation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar: any) => (
            <div
              key={pillar.id}
              className="p-8 bg-white rounded-lg shadow-sm border"
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: theme?.accentColor || "#3B82F6" }}
              >
                {pillar.title}
              </h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilingsComponent({ filings, theme }: any) {
  if (!filings || filings.length === 0) return null;

  return (
    <section className="filings-section py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: theme?.primaryColor || "#0F172A" }}
        >
          SEC Filings
        </h2>
        <div className="space-y-4">
          {filings.map((filing: any) => (
            <div
              key={filing.id}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{filing.title}</h3>
                  <div className="text-sm text-gray-600 mt-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      {filing.type}
                    </span>
                    <span className="ml-4">
                      {new Date(filing.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <a
                  href={filing.url || "#"}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarningsComponent({ earnings, theme }: any) {
  if (!earnings || earnings.length === 0) return null;

  return (
    <section className="earnings-section py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: theme?.primaryColor || "#0F172A" }}
        >
          Earnings Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {earnings.map((earning: any) => (
            <div
              key={earning.id}
              className="p-6 bg-white rounded-lg border shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  {earning.quarter} {earning.year}
                </h3>
                <span className="text-sm text-gray-600">
                  {new Date(earning.date).toLocaleDateString()}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">Revenue</div>
                  <div className="text-xl font-semibold">{earning.revenue}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">EPS</div>
                  <div className="text-xl font-semibold">{earning.eps}</div>
                </div>
              </div>
              {earning.earningsCallUrl && (
                <a
                  href={earning.earningsCallUrl}
                  className="text-blue-600 hover:underline"
                >
                  View Earnings Call →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipComponent({ leaders, theme }: any) {
  if (!leaders || leaders.length === 0) return null;

  return (
    <section className="leadership-section py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: theme?.primaryColor || "#0F172A" }}
        >
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader: any) => (
            <div key={leader.id} className="text-center">
              <img
                src={leader.imageUrl || "https://via.placeholder.com/200x200"}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{leader.name}</h3>
              <p className="text-gray-600 mb-2">{leader.title}</p>
              {leader.bio && (
                <p className="text-sm text-gray-500">{leader.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PressReleasesComponent({ pressReleases, theme }: any) {
  if (!pressReleases || pressReleases.length === 0) return null;

  return (
    <section className="press-releases-section py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: theme?.primaryColor || "#0F172A" }}
        >
          Press Releases
        </h2>
        <div className="space-y-4">
          {pressReleases.map((release: any) => (
            <div
              key={release.id}
              className="p-6 bg-white rounded-lg border shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{release.summary}</p>
                  <div className="text-sm text-gray-500">
                    {new Date(release.date).toLocaleDateString()}
                  </div>
                </div>
                <a
                  href={release.url || "#"}
                  className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GovernanceComponent({ governance, theme }: any) {
  if (!governance) return null;

  return (
    <section className="governance-section py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: theme?.primaryColor || "#0F172A" }}
        >
          Corporate Governance
        </h2>
        {governance.boardMembers && governance.boardMembers.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Board of Directors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {governance.boardMembers.map((member: any) => (
                <div key={member.id} className="text-center">
                  <img
                    src={
                      member.imageUrl || "https://via.placeholder.com/150x150"
                    }
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {governance.committees && governance.committees.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Board Committees</h3>
            <ul className="space-y-2">
              {governance.committees.map((committee: any) => (
                <li key={committee.id} className="text-gray-700">
                  {committee.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
