"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 1.2 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-brand-blue-100/70 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, 20, 0] }}
          transition={{
            opacity: { duration: 1.2, delay: 0.2 },
            scale: { duration: 1.2, delay: 0.2 },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-brand-green-100/70 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 6 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute right-[10%] top-1/3 h-40 w-40 rounded-3xl border border-brand-blue-100 bg-white/60 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[14%] top-1/4 h-24 w-24 rounded-2xl bg-brand-blue-50 ring-1 ring-brand-blue-100"
        />
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-28 right-[22%] h-16 w-16 rounded-full bg-brand-green-400/70"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {heroContent.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={heroContent.primaryCta.href} variant="primary">
            {heroContent.primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={heroContent.secondaryCta.href} variant="secondary">
            {heroContent.secondaryCta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
