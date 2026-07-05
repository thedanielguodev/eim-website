"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sponsorTiers } from "@/data/site";

export function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Sponsors & Partners"
          heading="Backed by founders and organizations who believe in students"
        />

        <div className="mt-14 space-y-14">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier}>
              <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
                {tier.tier}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                {tier.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="flex h-16 w-40 items-center justify-center rounded-xl border border-border bg-white px-4 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  >
                    <span className="text-sm font-semibold text-foreground">{sponsor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
