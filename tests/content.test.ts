import { describe, expect, it } from "vitest";
import {
  capabilities,
  educationsData,
  experiencesData,
  impactMetrics,
  practice,
  projectsData,
  skillGroups,
} from "@/lib/data";
import { navLinks, site, socialLinks } from "@/lib/site";
import { splitByTerms } from "@/lib/utils/text";
import { toSpans } from "@/lib/utils/chart";

const SITE_AS_OF_YEAR = 2026;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const unique = <T>(values: readonly T[]) =>
  new Set(values).size === values.length;

describe("data sets are populated", () => {
  it.each([
    ["capabilities", capabilities.length, 3],
    ["experiences", experiencesData.length, 5],
    ["education", educationsData.length, 8],
    ["impact metrics", impactMetrics.length, 4],
    ["projects", projectsData.length, 7],
    ["skill groups", skillGroups.length, 6],
    ["nav links", navLinks.length, 5],
    ["social links", socialLinks.length, 6],
  ])("%s is non-empty and the expected size", (_label, actual, expected) => {
    expect(actual).toBeGreaterThan(0);
    expect(actual).toBe(expected);
  });
});

describe("site config", () => {
  it("exposes a contactable email", () => {
    expect(site.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it("states years of experience that the record actually supports", () => {
    const earliest = Math.min(
      ...experiencesData.map((role) => Number(role.year)),
    );
    const claimed = Number(site.yearsOfExperience.replace("+", ""));

    expect(earliest).toBe(2019);
    expect(claimed).toBe(6);

    const elapsed = SITE_AS_OF_YEAR - earliest;
    expect(claimed).toBeLessThanOrEqual(elapsed);
    expect(claimed).toBeGreaterThanOrEqual(elapsed - 1);
  });

  it("has unique nav destinations", () => {
    expect(unique(navLinks.map((link) => link.href))).toBe(true);
  });

  it("points every social link at an absolute https URL", () => {
    for (const link of socialLinks) {
      expect(link.href.startsWith("https://")).toBe(true);
    }
  });
});

describe("experience", () => {
  it("is ordered most recent first", () => {
    const years = experiencesData.map((role) => Number(role.year));
    expect([...years].sort((a, b) => b - a)).toEqual(years);
  });

  it("gives every role a summary, highlights, and a stack", () => {
    for (const role of experiencesData) {
      expect(role.summary.length).toBeGreaterThan(40);
      expect(role.highlights.length).toBeGreaterThan(0);
      expect(role.stack.length).toBeGreaterThan(0);
    }
  });

  it("uses unique company/period pairs as React keys", () => {
    const keys = experiencesData.map((r) => `${r.company}-${r.period}`);
    expect(unique(keys)).toBe(true);
  });
});

describe("education", () => {
  it("is ordered most recent first, down to the month", () => {
    const stamps = educationsData.map((item) => {
      const month = MONTHS.findIndex((m) => item.date.includes(m));
      return item.year * 12 + (month === -1 ? 0 : month);
    });
    expect([...stamps].sort((a, b) => b - a)).toEqual(stamps);
  });

  it("leads with the BCIT technical writing program", () => {
    const [first] = educationsData;
    expect(first.issuer).toBe("BCIT");
    expect(first.year).toBe(2026);
    expect(first.location).toBe("Vancouver, BC");
    expect(first.title).toContain("Technical Writing");
  });

  it("has titles that actually contain their highlighted focus terms", () => {
    for (const item of educationsData) {
      const matched = splitByTerms(item.title, item.focus).some((c) => c.match);
      expect(matched, `no focus term found in "${item.title}"`).toBe(true);
    }
  });

  it("has unique titles, which are used as React keys", () => {
    expect(unique(educationsData.map((item) => item.title))).toBe(true);
  });
});

describe("impact metrics", () => {
  it("keeps every value in a percentage range the chart can draw", () => {
    for (const metric of impactMetrics) {
      expect(metric.value).toBeGreaterThan(0);
      expect(metric.value).toBeLessThanOrEqual(100);
    }
  });

  it("attributes each figure to an organization", () => {
    for (const metric of impactMetrics) {
      expect(metric.org.length).toBeGreaterThan(0);
    }
  });
});

describe("capabilities and practice", () => {
  it("numbers the capabilities sequentially", () => {
    expect(capabilities.map((c) => c.index)).toEqual(["01", "02", "03"]);
  });

  it("states how the work is done with other disciplines", () => {
    expect(practice.statement).toMatch(/product managers/i);
    expect(practice.statement).toMatch(/designers/i);
    expect(practice.statement).toMatch(/best practices/i);
    expect(practice.pillars.length).toBeGreaterThan(0);
  });
});

describe("projects", () => {
  it("gives every project absolute links", () => {
    for (const project of projectsData) {
      expect(project.projectUrl.startsWith("https://")).toBe(true);
      expect(project.githubUrl.startsWith("https://")).toBe(true);
    }
  });

  it("only highlights keywords that appear in the description", () => {
    for (const project of projectsData) {
      for (const keyword of project.keywords) {
        expect(
          project.description.toLowerCase(),
          `"${keyword}" missing from ${project.title}`,
        ).toContain(keyword.toLowerCase());
      }
    }
  });

  it("has unique titles, which are used as React keys", () => {
    expect(unique(projectsData.map((p) => p.title))).toBe(true);
  });
});

describe("skills", () => {
  it("has no duplicate technology inside a group", () => {
    for (const group of skillGroups) {
      expect(unique(group.items), `duplicate in ${group.name}`).toBe(true);
    }
  });

  it("has no empty group, so no chart segment collapses", () => {
    for (const group of skillGroups) {
      expect(group.items.length).toBeGreaterThan(0);
    }
  });

  it("produces distribution spans the chart can actually render", () => {
    const spans = toSpans(skillGroups.map((group) => group.items.length));

    expect(spans).toHaveLength(skillGroups.length);
    expect(spans.every((span) => span > 0)).toBe(true);
    expect(spans.reduce((a, b) => a + b, 0)).toBeCloseTo(100);
  });
});
