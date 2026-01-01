export const site = {
  name: "Advocate Dharmendra Singh Dang",
  city: "Rudrapur",
  state: "Uttarakhand",
  courts: ["District & Sessions Court, Rudrapur", "High Court, Nainital"],
  barEnrollment: "UA402/06",
  practicingSince: 2009,
  chamber: "Chamber No. 27, District & Sessions Court, Rudrapur",
  hours: "10:00 AM – 5:00 PM",
  phones: ["9927262555", "9927362555"],
  whatsapp: "9927262555",
  email: "ds4justice@gmail.com",
  languages: ["Hindi", "Punjabi"],
  consultation: {
    initial: "Free initial consultation",
    inPersonRule: "In-person consultation within 50 km; otherwise video consultation.",
  },
  highlights: ["1300+ cases handled", "Practicing since 2009"],
  leadership: {
    role: "Treasurer, District Bar Association, Rudrapur (Udham Singh Nagar)",
    tenure: "2019–2021",
    note: "Unopposed",
  },
  education: {
    college: "Soban Singh Jeena Campus, Almora",
    degrees: ["LLB", "LLM"],
    graduationYear: 2000,
  },
  // TODO: update after domain goes live
  url: "https://example.com",
} as const;

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  bullets: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-law",
    title: "Criminal Law",
    short: "Defense and representation in criminal matters.",
    seoTitle: "Criminal Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Criminal law representation in Rudrapur and Nainital High Court. Bail matters, complaints, trials and court representation.",
    bullets: ["Bail matters", "Court representation", "Criminal complaints & defense"],
  },
  {
    slug: "cheque-bounce",
    title: "Cheque Bounce (NI Act 138)",
    short: "Handling cheque dishonour cases under Section 138.",
    seoTitle: "Cheque Bounce Advocate in Rudrapur | NI Act 138",
    seoDescription:
      "Cheque bounce (Section 138 NI Act) case handling in Rudrapur. Legal notices, filings and court representation.",
    bullets: ["Legal notice drafting", "Court filings & representation", "Practical, time-bound approach"],
  },
  {
    slug: "family-law",
    title: "Family Law",
    short: "Family disputes, divorce and related matters.",
    seoTitle: "Family Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Family matters in Rudrapur: divorce, maintenance, domestic disputes and family litigation with court representation.",
    bullets: ["Divorce & matrimonial disputes", "Maintenance matters", "Family litigation support"],
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial",
    short: "Support for commercial and business legal matters.",
    seoTitle: "Corporate Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Corporate and commercial legal support in Rudrapur including disputes, notices and representation.",
    bullets: ["Commercial disputes", "Legal notices", "Representation & advisory"],
  },
  {
    slug: "consumer-court",
    title: "Consumer Court",
    short: "Consumer disputes and representation.",
    seoTitle: "Consumer Court Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Consumer dispute support in Rudrapur: filing, representation and practical guidance.",
    bullets: ["Consumer complaints", "Representation", "Resolution-focused guidance"],
  },
  {
    slug: "arbitration",
    title: "Arbitration",
    short: "Arbitration-related representation and support.",
    seoTitle: "Arbitration Advocate in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Arbitration matters in Rudrapur: representation, documentation and dispute support.",
    bullets: ["Arbitration support", "Representation", "Dispute documentation"],
  },
  {
    slug: "motor-accident-claims",
    title: "Motor Accident Claim Cases",
    short: "MACT-related claim support and representation.",
    seoTitle: "Motor Accident Claim Lawyer in Rudrapur | MACT",
    seoDescription:
      "Motor accident claim cases (MACT) in Rudrapur: filing support and court representation.",
    bullets: ["MACT claim support", "Documentation guidance", "Court representation"],
  },
];
