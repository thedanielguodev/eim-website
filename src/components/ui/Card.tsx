"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  delay = 0,
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border border-border bg-white p-6 transition-shadow duration-300",
        hover && "hover:shadow-lg hover:shadow-slate-900/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
