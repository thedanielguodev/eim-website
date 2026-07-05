"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/data/site";

const infoBlocks = [aboutContent.who, aboutContent.why, aboutContent.gains];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          heading={aboutContent.heading}
          align="left"
          className="mx-0"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="space-y-6">
            {infoBlocks.map((block, index) => (
              <motion.div
                key={block.heading}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="text-base font-semibold text-foreground">{block.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{block.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
