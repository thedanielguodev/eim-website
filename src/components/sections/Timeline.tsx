"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timelineMilestones } from "@/data/site";

export function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Timeline"
          heading="Competition timeline"
          description="Key milestones from registration to awards."
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div
            aria-hidden
            className="absolute left-[11px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-ml-px"
          />

          <ol className="space-y-10">
            {timelineMilestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.li
                  key={milestone.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative pl-9 sm:w-1/2 sm:pl-0 ${
                    isLeft ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-white bg-brand-blue-500 shadow-sm sm:top-1 ${
                      isLeft ? "sm:left-auto sm:-right-[13px]" : "sm:-left-[13px]"
                    }`}
                  />
                  <p className="text-sm font-semibold text-brand-blue-600">{milestone.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{milestone.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {milestone.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
