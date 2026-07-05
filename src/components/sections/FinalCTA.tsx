"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { UrgencyBadge } from "@/components/ui/UrgencyBadge";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-ink-900 to-brand-ink-500 px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(201,163,92,0.7) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Build Something That Matters?
          </h2>
          <div className="relative mt-8 flex flex-col items-center gap-4">
            <Button href="/apply" variant="white">
              Apply Today
              <ArrowRight className="h-4 w-4" />
            </Button>
            <UrgencyBadge tone="dark" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
