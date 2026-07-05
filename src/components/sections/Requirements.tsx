"use client";

import { CheckCircle2, CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { requirements } from "@/data/site";

const checklistGroups = [
  { heading: "Eligibility", items: requirements.eligibility },
  { heading: "Team Structure", items: requirements.teamStructure },
  { heading: "Submission Requirements", items: requirements.submission },
  { heading: "Required Documents", items: requirements.documents },
  { heading: "Code of Conduct", items: requirements.codeOfConduct },
];

export function Requirements() {
  return (
    <section id="requirements" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Requirements"
          heading="Eligibility & requirements"
          description="Everything your team needs to know before applying."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {checklistGroups.map((group, index) => (
            <Card key={group.heading} delay={index * 0.06} className="bg-white">
              <h3 className="text-lg font-semibold text-foreground">{group.heading}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}

          <Card delay={checklistGroups.length * 0.06} className="bg-white">
            <h3 className="text-lg font-semibold text-foreground">Key Deadlines</h3>
            <ul className="mt-4 space-y-3">
              {requirements.deadlines.map((deadline) => (
                <li key={deadline.label} className="flex items-start gap-2.5 text-sm text-muted">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-500" />
                  <span>
                    <span className="font-medium text-foreground">{deadline.label}:</span>{" "}
                    {deadline.date}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
