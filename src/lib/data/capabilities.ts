export const capabilities = [
  {
    index: "01",
    kicker: "Manual process",
    title: "Turning manual process into product",
    body: "Quoting, approvals, and reporting workflows that still live in PDFs and spreadsheets get rebuilt as interactive applications. At Wasserstrom that meant replacing a 100-page PDF quoting workflow with a web application used by customers, account managers, and administrators.",
    proof: { value: "100", unit: "pages", label: "PDF workflow replaced" },
  },
  {
    index: "02",
    kicker: "Complex data",
    title: "Making complex data usable under pressure",
    body: "Support agents, clinicians, and field teams work against the clock. I design the data layer and the interface together — a Backend-for-Frontend over GraphQL, then dashboards and wizards that put the right number in front of the right person.",
    proof: { value: "60", unit: "%", label: "Lower call handling time" },
  },
  {
    index: "03",
    kicker: "Team velocity",
    title: "Leaving teams faster than I found them",
    body: "Shared component libraries, technical documentation, and a test suite people trust. I have led onboarding for engineering teams and raised coverage to the point where releases stop being an event.",
    proof: { value: "50", unit: "%", label: "Faster engineer onboarding" },
  },
] as const;

export const teamCapabilities = [
  {
    index: "04",
    kicker: "Unclear requirements",
    title: "Confirming the requirement before writing the code",
    body: "Most rework starts with a ticket that two people read differently. Before I open an editor I run the discovery conversation, write the requirement back in my own words, and get that version confirmed — edge cases included. At Wasserstrom I do this as the primary technical contact with the AutoQuote Revalize team, turning business requests into specifications the whole team can build against.",
    signals: ["Discovery sessions", "Written specs", "Acceptance criteria"],
  },
  {
    index: "05",
    kicker: "Unowned work",
    title: "Owning the outcome, not the ticket",
    body: "A task is not done when the pull request merges; it is done when the feature works in production for the person who asked for it. I follow my work through review, release, and first real use, and I pick up what is blocking the release instead of waiting to be assigned it — environment configuration, authentication, and CI/CD pipelines have all become mine that way.",
    signals: [
      "Owned through release",
      "Blockers raised early",
      "CI/CD and environments",
    ],
  },
  {
    index: "06",
    kicker: "Team handoffs",
    title: "Keeping engineering, product, and vendors talking",
    body: "Delivery slows at the seams — between frontend and backend, between a product team and an external vendor, between the engineer who wrote something and the one who now maintains it. I keep those exchanges short, written down, and open to everyone who needs them, and I make time for teammates: I led onboarding for seven engineers with documentation and training sessions that halved ramp-up.",
    signals: [
      "Cross-team updates",
      "Onboarding and mentoring",
      "Documentation people reuse",
    ],
  },
] as const;
