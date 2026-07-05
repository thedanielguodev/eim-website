// Central content config for the EIM website.
// This is a TEMPLATE — replace the placeholder text/values below with real content.

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder copy to be replaced with real content.";
const loremShort = "Placeholder copy — replace with real content.";

export const siteConfig = {
  name: "Entrepreneurs Impact Marathon",
  shortName: "EIM",
  tagline: "Turn Ideas Into Impact.",
  description: loremShort,
  url: "https://www.example.com",
  email: "hello@example.com",
  applyUrl: "/apply",
  social: {
    instagram: "https://instagram.com/example",
    linkedin: "https://linkedin.com/company/example",
    twitter: "https://twitter.com/example",
    youtube: "https://youtube.com/@example",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Competition", href: "#competition" },
  { label: "Timeline", href: "#timeline" },
  { label: "Tracks", href: "#tracks" },
  { label: "Requirements", href: "#requirements" },
  { label: "Judging", href: "#judging" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "Placeholder Badge Text",
  headline: "Turn Ideas Into Impact.",
  subheadline: loremShort,
  primaryCta: { label: "Apply Now", href: "/apply" },
  secondaryCta: { label: "Learn More", href: "#about" },
};

export const stats = [
  { label: "Student Participants", value: 1000, suffix: "+" },
  { label: "Schools Represented", value: 100, suffix: "+" },
  { label: "Teams", value: 250, suffix: "+" },
  { label: "Judges", value: 50, suffix: "+" },
  { label: "Prize Pool", value: 10000, prefix: "$", suffix: "+" },
];

export const aboutContent = {
  eyebrow: "About EIM",
  heading: "Placeholder Section Heading",
  paragraphs: [lorem, lorem],
  who: {
    heading: "Who can participate",
    body: loremShort,
  },
  why: {
    heading: "Why EIM exists",
    body: loremShort,
  },
  gains: {
    heading: "What students gain",
    body: loremShort,
  },
};

export const whyParticipateItems = [
  { icon: "Rocket", title: "Entrepreneurial Experience", description: loremShort },
  { icon: "Users", title: "Mentorship", description: loremShort },
  { icon: "Share2", title: "Networking", description: loremShort },
  { icon: "Compass", title: "Leadership Development", description: loremShort },
  { icon: "Globe2", title: "Real-World Impact", description: loremShort },
  { icon: "GraduationCap", title: "College & Career Preparation", description: loremShort },
];

export const competitionOverview = [
  { icon: "Layers", title: "Competition Format", description: loremShort },
  { icon: "UsersRound", title: "Team Structure", description: loremShort },
  { icon: "FileUp", title: "Submission Process", description: loremShort },
  { icon: "Presentation", title: "Pitch Process", description: loremShort },
  { icon: "Trophy", title: "Awards", description: loremShort },
];

export const requirements = {
  eligibility: ["Placeholder eligibility item 1", "Placeholder eligibility item 2", "Placeholder eligibility item 3"],
  teamStructure: ["Placeholder team requirement 1", "Placeholder team requirement 2", "Placeholder team requirement 3"],
  submission: ["Placeholder submission item 1", "Placeholder submission item 2", "Placeholder submission item 3"],
  deadlines: [
    { label: "Registration Opens", date: "TBD" },
    { label: "Submission Deadline", date: "TBD" },
    { label: "Finalist Announcement", date: "TBD" },
    { label: "Pitch Day", date: "TBD" },
  ],
  documents: ["Placeholder document 1", "Placeholder document 2", "Placeholder document 3"],
  codeOfConduct: ["Placeholder conduct item 1", "Placeholder conduct item 2", "Placeholder conduct item 3"],
};

export const timelineMilestones = [
  { title: "Registration Opens", date: "TBD", description: loremShort },
  { title: "Team Formation", date: "TBD", description: loremShort },
  { title: "Workshops", date: "TBD", description: loremShort },
  { title: "Submission Deadline", date: "TBD", description: loremShort },
  { title: "Finalist Announcement", date: "TBD", description: loremShort },
  { title: "Pitch Day", date: "TBD", description: loremShort },
  { title: "Awards Ceremony", date: "TBD", description: loremShort },
];

export const tracks = [
  { icon: "Leaf", name: "Track Name 1", description: loremShort },
  { icon: "HeartPulse", name: "Track Name 2", description: loremShort },
  { icon: "Landmark", name: "Track Name 3", description: loremShort },
  { icon: "Cpu", name: "Track Name 4", description: loremShort },
  { icon: "Wallet", name: "Track Name 5", description: loremShort },
  { icon: "ShoppingBag", name: "Track Name 6", description: loremShort },
];

export const judgingRubric = [
  { category: "Innovation", weight: 20, description: loremShort },
  { category: "Problem Significance", weight: 15, description: loremShort },
  { category: "Feasibility", weight: 20, description: loremShort },
  { category: "Business Model", weight: 20, description: loremShort },
  { category: "Impact", weight: 15, description: loremShort },
  { category: "Presentation", weight: 10, description: loremShort },
];

export const judges = [
  { name: "Judge Name 1", title: "Placeholder Title", organization: "Placeholder Organization", photo: "/judges/placeholder-1.svg", bio: loremShort },
  { name: "Judge Name 2", title: "Placeholder Title", organization: "Placeholder Organization", photo: "/judges/placeholder-2.svg", bio: loremShort },
  { name: "Judge Name 3", title: "Placeholder Title", organization: "Placeholder Organization", photo: "/judges/placeholder-3.svg", bio: loremShort },
  { name: "Judge Name 4", title: "Placeholder Title", organization: "Placeholder Organization", photo: "/judges/placeholder-4.svg", bio: loremShort },
];

export const sponsorTiers = [
  {
    tier: "Presenting Sponsors",
    sponsors: [
      { name: "Sponsor Name 1", logo: "/sponsors/placeholder-1.svg" },
      { name: "Sponsor Name 2", logo: "/sponsors/placeholder-2.svg" },
    ],
  },
  {
    tier: "Gold Sponsors",
    sponsors: [
      { name: "Sponsor Name 3", logo: "/sponsors/placeholder-3.svg" },
      { name: "Sponsor Name 4", logo: "/sponsors/placeholder-4.svg" },
      { name: "Sponsor Name 5", logo: "/sponsors/placeholder-5.svg" },
    ],
  },
  {
    tier: "Community Partners",
    sponsors: [
      { name: "Sponsor Name 6", logo: "/sponsors/placeholder-6.svg" },
      { name: "Sponsor Name 7", logo: "/sponsors/placeholder-7.svg" },
      { name: "Sponsor Name 8", logo: "/sponsors/placeholder-8.svg" },
      { name: "Sponsor Name 9", logo: "/sponsors/placeholder-9.svg" },
    ],
  },
];

export const testimonials = [
  { name: "Student Name 1", school: "Placeholder School", photo: "/testimonials/placeholder-1.svg", quote: loremShort },
  { name: "Student Name 2", school: "Placeholder School", photo: "/testimonials/placeholder-2.svg", quote: loremShort },
  { name: "Student Name 3", school: "Placeholder School", photo: "/testimonials/placeholder-3.svg", quote: loremShort },
];

export const faqItems = [
  { question: "Placeholder question 1?", answer: loremShort },
  { question: "Placeholder question 2?", answer: loremShort },
  { question: "Placeholder question 3?", answer: loremShort },
  { question: "Placeholder question 4?", answer: loremShort },
  { question: "Placeholder question 5?", answer: loremShort },
];

export const disclaimers = [
  { title: "Competition Rules", body: loremShort },
  { title: "Intellectual Property Policy", body: loremShort },
  { title: "Privacy Notice", body: loremShort },
  { title: "Liability Disclaimer", body: loremShort },
  { title: "Organizer Rights", body: loremShort },
  { title: "Terms of Participation", body: loremShort },
];

export const footerLinks = {
  quickLinks: navLinks.slice(0, 8),
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};
