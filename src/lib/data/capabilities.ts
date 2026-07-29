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
