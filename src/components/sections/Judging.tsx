"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { judgingRubric, judges } from "@/data/site";

export function Judging() {
  return (
    <section id="judging" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Judging"
          heading="How teams are scored"
          description="Submissions and pitches are evaluated against a consistent rubric."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {judgingRubric.map((item, index) => (
            <Card key={item.category} delay={index * 0.06} className="bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{item.category}</h3>
                <span className="rounded-full bg-brand-green-50 px-3 py-1 text-sm font-semibold text-brand-green-600">
                  {item.weight}%
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading heading="Meet the judges" description="A panel of founders, investors, and educators." />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {judges.map((judge, index) => (
              <Card key={judge.name} delay={index * 0.08} className="bg-white text-center">
                <div className="flex justify-center">
                  <Avatar name={judge.name} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{judge.name}</h3>
                <p className="text-sm font-medium text-brand-blue-600">{judge.title}</p>
                <p className="text-sm text-muted">{judge.organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{judge.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
