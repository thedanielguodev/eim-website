"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { requirements } from "@/data/site";
import { cn } from "@/lib/utils";

type ChecklistGroup = { heading: string; type: "checklist"; items: string[] };
type DeadlineGroup = {
  heading: string;
  type: "deadlines";
  items: typeof requirements.deadlines;
};
type Group = ChecklistGroup | DeadlineGroup;

const groups: Group[] = [
  { heading: "Eligibility", type: "checklist", items: requirements.eligibility },
  { heading: "Team Structure", type: "checklist", items: requirements.teamStructure },
  { heading: "Submission Requirements", type: "checklist", items: requirements.submission },
  { heading: "Required Documents", type: "checklist", items: requirements.documents },
  { heading: "Code of Conduct", type: "checklist", items: requirements.codeOfConduct },
  { heading: "Key Deadlines", type: "deadlines", items: requirements.deadlines },
];

export function Requirements() {
  const [active, setActive] = useState(0);
  const activeGroup = groups[active];

  return (
    <section id="requirements" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Requirements"
          heading="Eligibility & requirements"
          description="Everything your team needs to know before applying."
        />

        <div className="mt-14 grid gap-2 rounded-2xl border border-border bg-white p-2 lg:grid-cols-[240px_1fr] lg:gap-0 lg:p-0">
          <div className="flex gap-2 overflow-x-auto p-2 lg:flex-col lg:overflow-visible lg:border-r lg:border-border lg:p-4">
            {groups.map((group, index) => (
              <button
                key={group.heading}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "shrink-0 rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors lg:w-full",
                  active === index
                    ? "bg-brand-gold-50 text-brand-gold-700"
                    : "text-muted hover:bg-surface hover:text-foreground"
                )}
              >
                {group.heading}
              </button>
            ))}
          </div>

          <div className="overflow-hidden p-6 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.heading}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-foreground">{activeGroup.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {activeGroup.type === "checklist"
                    ? activeGroup.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))
                    : activeGroup.items.map((deadline) => (
                        <li
                          key={deadline.label}
                          className="flex items-start gap-2.5 text-sm text-muted"
                        >
                          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-600" />
                          <span>
                            <span className="font-medium text-foreground">
                              {deadline.label}:
                            </span>{" "}
                            {deadline.date}
                          </span>
                        </li>
                      ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
