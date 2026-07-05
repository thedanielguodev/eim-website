"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-2",
            align === "center" ? "justify-center" : "justify-start"
          )}
        >
          <span className="h-px w-6 bg-brand-gold-500" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-600">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {heading}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </motion.div>
  );
}
