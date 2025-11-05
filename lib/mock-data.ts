/**
 * Mock Data for Template Demos
 *
 * Provides sample data for standalone template demonstrations
 */

export const mockCompany = {
  id: 1,
  name: "Acme Corporation",
  legalEntityName: "Acme Corporation Inc.",
  tickerSymbol: "ACME",
  exchange: "NYSE",
  website: "https://acme.example.com",
  description: "A leading technology company focused on innovation and growth.",
  industry: "Technology",
  foundedYear: 2010,
  logoUrl: "https://via.placeholder.com/200x60?text=ACME",
  primaryColor: "#0F172A",
  accentColor: "#3B82F6",
  primaryFontFamily: "Inter",
  secondaryFontFamily: "Inter",
  marketCap: "$45.2B",
  headquartersAddress: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};

export const mockKPIs = [
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
];

export const mockPillars = [
  {
    id: "strategy",
    title: "Strategy",
    description:
      "Our long-term strategy focuses on sustainable growth and market leadership. We are committed to delivering value to our shareholders through innovation and operational excellence.",
  },
  {
    id: "governance",
    title: "Governance",
    description:
      "Strong corporate governance is at the core of our operations. We adhere to the highest standards of ethics and transparency to ensure accountability and trust.",
  },
  {
    id: "results",
    title: "Results",
    description:
      "We consistently strive for strong financial performance, driven by our strategic initiatives and dedicated team. View our latest earnings reports and financial filings.",
  },
];

export const mockMarketData = {
  price: "$245.50",
  change: "+$2.30",
  changePercent: "+0.95%",
  volume: "2.4M",
  marketCap: "$45.2B",
};

export const mockFilings = [
  {
    id: "1",
    title: "Annual Report on Form 10-K",
    type: "10-K",
    date: "2024-03-15",
    url: "#",
  },
  {
    id: "2",
    title: "Quarterly Report on Form 10-Q",
    type: "10-Q",
    date: "2024-11-05",
    url: "#",
  },
  {
    id: "3",
    title: "Current Report on Form 8-K",
    type: "8-K",
    date: "2024-10-20",
    url: "#",
  },
];

export const mockEarnings = [
  {
    id: "1",
    quarter: "Q3",
    year: 2024,
    date: "2024-11-05",
    revenue: "$8.2B",
    eps: "$0.65",
    earningsCallUrl: "#",
  },
  {
    id: "2",
    quarter: "Q2",
    year: 2024,
    date: "2024-08-05",
    revenue: "$7.8B",
    eps: "$0.58",
    earningsCallUrl: "#",
  },
];

export const mockLeaders = [
  {
    id: "1",
    name: "John Smith",
    title: "Chief Executive Officer",
    bio: "John has over 20 years of experience in technology and leadership.",
    imageUrl: "https://via.placeholder.com/200x200?text=JS",
  },
  {
    id: "2",
    name: "Jane Doe",
    title: "Chief Financial Officer",
    bio: "Jane brings extensive financial expertise to the executive team.",
    imageUrl: "https://via.placeholder.com/200x200?text=JD",
  },
];

export const mockPressReleases = [
  {
    id: "1",
    title: "Company Announces Record Quarterly Earnings",
    date: "2024-11-05",
    summary: "Strong performance across all business segments.",
    url: "#",
  },
  {
    id: "2",
    title: "New Product Launch Sets Industry Standards",
    date: "2024-10-15",
    summary: "Innovative solution addresses market needs.",
    url: "#",
  },
];

export const mockMilestones = [
  {
    id: "1",
    year: 2010,
    title: "Company Founded",
    description: "Acme Corporation was founded with a vision to innovate.",
    type: "founding" as const,
  },
  {
    id: "2",
    year: 2015,
    title: "Series B Funding",
    description: "Raised $50M in Series B funding round.",
    type: "funding" as const,
  },
  {
    id: "3",
    year: 2020,
    title: "IPO",
    description: "Successfully went public on NYSE.",
    type: "ipo" as const,
  },
];

export const mockGovernance = {
  boardMembers: [
    {
      id: "1",
      name: "Robert Johnson",
      title: "Independent Director",
      bio: "Board member with extensive governance experience.",
      imageUrl: "https://via.placeholder.com/200x200?text=RJ",
    },
    {
      id: "2",
      name: "Sarah Williams",
      title: "Independent Director",
      bio: "Expert in corporate strategy and finance.",
      imageUrl: "https://via.placeholder.com/200x200?text=SW",
    },
  ],
  committees: [
    { id: "1", name: "Audit Committee" },
    { id: "2", name: "Compensation Committee" },
    { id: "3", name: "Nominating Committee" },
  ],
  policies: [
    { id: "1", name: "Code of Conduct", url: "#" },
    { id: "2", name: "Corporate Governance Guidelines", url: "#" },
  ],
};
