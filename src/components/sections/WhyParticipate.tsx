"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyParticipateItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function WhyParticipate() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Why Participate" heading="What you'll gain from EIM" />

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {whyParticipateItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={cn(
                "flex gap-5 border-l-2 pl-5",
                index % 2 === 0 ? "border-brand-gold-400" : "border-brand-ink-400"
              )}
            >
              <span
                className={cn(
                  "font-display text-3xl font-semibold tabular-nums",
                  index % 2 === 0 ? "text-brand-gold-100" : "text-stone-300"
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
