"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-600 to-brand-blue-500 px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-green-400/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />

          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Build Something That Matters?
          </h2>
          <div className="relative mt-8 flex justify-center">
            <Button href="/apply" variant="white">
              Apply Today
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
