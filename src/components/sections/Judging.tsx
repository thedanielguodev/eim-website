"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { judgingRubric, judges } from "@/data/site";

const maxWeight = Math.max(...judgingRubric.map((item) => item.weight));

export function Judging() {
  return (
    <section id="judging" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Judging"
          heading="How teams are scored"
          description="Submissions and pitches are evaluated against a consistent rubric."
        />

        <div className="mt-14 divide-y divide-border rounded-2xl border border-border bg-white">
          {judgingRubric.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex items-baseline justify-between gap-4 sm:w-56 sm:shrink-0 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                <h3 className="text-base font-semibold text-foreground">{item.category}</h3>
                <span className="text-sm font-semibold text-brand-gold-600">{item.weight}%</span>
              </div>

              <div className="flex-1">
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.weight / maxWeight) * 100}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: index * 0.06 + 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-gold-600 to-brand-gold-400"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            heading="Meet the judges"
            description="A panel of founders, investors, and educators."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {judges.map((judge, index) => (
              <Card key={judge.name} delay={index * 0.08} className="bg-white text-center">
                <div className="flex justify-center">
                  <Avatar name={judge.name} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{judge.name}</h3>
                <p className="text-sm font-medium text-brand-gold-600">{judge.title}</p>
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
