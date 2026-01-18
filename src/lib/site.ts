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

  url: "https://advdharmendradang.com",
} as const;

export type FAQ = { q: string; a: string };

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;

  seoTitle: string;
  seoDescription: string;

  whoItsFor: string[];
  howWeHelp: string[];
  whatToBring: string[];
  nextSteps: string[];
  faqs: FAQ[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-law",
    title: "Criminal Law",
    short: "Defense and representation in criminal matters.",
    seoTitle: "Criminal Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Criminal law representation in Rudrapur and Nainital High Court including bail matters, complaints, trials and court representation.",
    whoItsFor: ["Bail matters and urgent hearings", "Criminal complaints and defence", "Trial-stage representation"],
    howWeHelp: ["Case assessment and strategy", "Representation before court", "Drafting and filing support"],
    whatToBring: ["FIR / complaint copy (if available)", "Court notices/summons", "Any bail order/previous case papers"],
    nextSteps: ["Share basic facts in consultation", "Document review and legal route", "Court filing/representation as required"],
    faqs: [
      { q: "Do you provide free initial consultation?", a: "Yes. The initial consultation is free." },
      { q: "Do you handle matters in Nainital High Court?", a: "Yes. Regular appearances in Nainital High Court as required." },
      { q: "Can consultation happen online?", a: "Yes. Video consultation is available, especially for clients outside 50 km." },
    ],
  },
  {
    slug: "cheque-bounce",
    title: "Cheque Bounce (NI Act 138)",
    short: "Handling cheque dishonour cases under Section 138.",
    seoTitle: "Cheque Bounce Advocate in Rudrapur | NI Act 138",
    seoDescription:
      "Cheque bounce (Section 138 NI Act) case handling in Rudrapur including legal notice drafting, filings and court representation.",
    whoItsFor: ["Businesses and individuals facing cheque dishonour", "Recovery-related cheque bounce matters", "Notice and court process guidance"],
    howWeHelp: ["Legal notice drafting", "Filing and representation in court", "Step-by-step guidance on process and documents"],
    whatToBring: ["Original cheque (or copy)", "Bank return memo", "Any messages/emails or agreement related to payment"],
    nextSteps: ["Document check in consultation", "Notice drafting and service", "Court filing and representation"],
    faqs: [
      { q: "Do you handle a high number of cheque bounce cases?", a: "Yes. Cheque bounce matters are a major part of practice." },
      { q: "Do you help with legal notice drafting?", a: "Yes. Legal notices can be drafted as per case requirement." },
      { q: "Can I consult online if I’m not in Rudrapur?", a: "Yes. Video consultation is available for clients outside 50 km." },
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    short: "Family disputes, divorce and related matters.",
    seoTitle: "Family Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Family matters in Rudrapur including divorce, maintenance, domestic disputes and family litigation with court representation.",
    whoItsFor: ["Divorce and matrimonial disputes", "Maintenance matters", "Family disputes requiring court process"],
    howWeHelp: ["Practical guidance and documentation", "Representation in court", "Resolution-focused approach"],
    whatToBring: ["Marriage documents (if applicable)", "Any notices/orders", "Basic timeline of events"],
    nextSteps: ["Consultation and issue mapping", "Document plan and filing", "Court representation as required"],
    faqs: [
      { q: "Do you provide confidential consultation?", a: "Yes. Client discussions are treated with confidentiality." },
      { q: "Is initial consultation free?", a: "Yes. The initial consultation is free." },
      { q: "Do you support video consultation?", a: "Yes. Video consultation is available outside 50 km range." },
    ],
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial",
    short: "Support for commercial and business legal matters.",
    seoTitle: "Corporate Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Corporate and commercial legal support in Rudrapur including disputes, notices and representation.",
    whoItsFor: ["Small businesses and local enterprises", "Commercial disputes and notices", "Documentation and representation needs"],
    howWeHelp: ["Notice drafting and replies", "Court representation where required", "Practical documentation guidance"],
    whatToBring: ["Agreements/contracts", "Invoices/payment records", "Any notices or correspondence"],
    nextSteps: ["Consultation and document review", "Notice/response drafting", "Representation and follow-up"],
    faqs: [
      { q: "Do you draft and respond to legal notices?", a: "Yes. Drafting and replies are supported as per requirement." },
      { q: "Can consultation be online?", a: "Yes. Video consultation is available for clients outside 50 km." },
    ],
  },
  {
    slug: "consumer-court",
    title: "Consumer Court",
    short: "Consumer disputes and representation.",
    seoTitle: "Consumer Court Lawyer in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Consumer dispute support in Rudrapur including filing, representation and practical guidance.",
    whoItsFor: ["Service deficiency complaints", "Product-related disputes", "Consumer forum filings and representation"],
    howWeHelp: ["Complaint drafting and filing", "Representation and hearings", "Guidance on documents and process"],
    whatToBring: ["Bills/invoices", "Warranty/communication proof", "Any complaint/reference number"],
    nextSteps: ["Consultation and document check", "Draft complaint and file", "Representation in hearings"],
    faqs: [{ q: "Do you assist in filing consumer complaints?", a: "Yes. Filing and representation can be handled." }],
  },
  {
    slug: "arbitration",
    title: "Arbitration",
    short: "Arbitration-related representation and support.",
    seoTitle: "Arbitration Advocate in Rudrapur | Advocate Dharmendra Singh Dang",
    seoDescription:
      "Arbitration matters in Rudrapur including documentation, representation and dispute support.",
    whoItsFor: ["Commercial contract disputes with arbitration clause", "Arbitration notices and responses", "Representation support"],
    howWeHelp: ["Clause/document review", "Notice/response drafting", "Representation as required"],
    whatToBring: ["Agreement with arbitration clause", "Notices/correspondence", "Payment records/documents"],
    nextSteps: ["Consultation and clause review", "Notice/response plan", "Proceed with arbitration route"],
    faqs: [{ q: "Do you review arbitration clauses?", a: "Yes. Agreements and arbitration clauses can be reviewed." }],
  },
  {
    slug: "motor-accident-claims",
    title: "Motor Accident Claim Cases",
    short: "MACT-related claim support and representation.",
    seoTitle: "Motor Accident Claim Lawyer in Rudrapur | MACT",
    seoDescription:
      "Motor accident claim cases (MACT) in Rudrapur including filing support and court representation.",
    whoItsFor: ["Injury and accident compensation claims", "MACT filings and hearings", "Documentation and representation needs"],
    howWeHelp: ["Guidance for claim filing", "Documentation checklist", "Representation as required"],
    whatToBring: ["FIR/accident report", "Medical records", "Insurance documents and vehicle papers"],
    nextSteps: ["Consultation and document review", "Prepare claim filing", "Representation in hearings"],
    faqs: [{ q: "Do you assist with MACT claim process?", a: "Yes. Claim filing guidance and representation are available." }],
  },
];
