"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { UrgencyBadge } from "@/components/ui/UrgencyBadge";
import { heroContent } from "@/data/site";
import { cn } from "@/lib/utils";

const GRID_COLS = 6;
const GRID_ROWS = 6;
const ACTIVE_CELLS: Record<number, "blue" | "green"> = {
  2: "blue",
  7: "green",
  9: "blue",
  13: "green",
  16: "blue",
  20: "green",
  23: "blue",
  27: "green",
  30: "blue",
  33: "green",
};

export function Hero() {
  const cells = Array.from({ length: GRID_COLS * GRID_ROWS });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-4%] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <div className="grid grid-cols-6 gap-3" style={{ width: 460, height: 460 }}>
          {cells.map((_, i) => {
            const tone = ACTIVE_CELLS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: tone ? [0.35, 1, 0.35] : 0.12,
                  scale: 1,
                }}
                transition={
                  tone
                    ? {
                        opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 },
                        scale: { duration: 0.5, delay: i * 0.02 },
                      }
                    : { duration: 0.5, delay: i * 0.02 }
                }
                className={cn(
                  "rounded-lg",
                  tone === "blue" && "bg-brand-blue-400",
                  tone === "green" && "bg-brand-green-400",
                  !tone && "bg-slate-100"
                )}
              />
            );
          })}
        </div>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6"
        >
          <UrgencyBadge />
        </motion.div>
      </div>
    </section>
  );
}
