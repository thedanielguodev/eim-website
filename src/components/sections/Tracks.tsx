"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { iconMap, type IconName } from "@/lib/icons";
import { tracks } from "@/data/site";
import { cn } from "@/lib/utils";

const accentPalette = [
  { bar: "bg-brand-gold-500", icon: "bg-brand-gold-50 text-brand-gold-600", link: "text-brand-gold-600 hover:text-brand-gold-700" },
  { bar: "bg-brand-ink-600", icon: "bg-brand-ink-50 text-brand-ink-600", link: "text-brand-ink-600 hover:text-brand-ink-900" },
  { bar: "bg-brand-gold-700", icon: "bg-brand-gold-100 text-brand-gold-700", link: "text-brand-gold-700 hover:text-brand-gold-600" },
];

function TrackCard({
  icon,
  name,
  description,
  details,
  delay,
  accent,
}: {
  icon: string;
  name: string;
  description: string;
  details: string;
  delay: number;
  accent: (typeof accentPalette)[number];
}) {
  const Icon = iconMap[icon as IconName];
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <Card delay={delay} className="relative flex flex-col overflow-hidden bg-white">
      <div aria-hidden className={cn("absolute inset-x-0 top-0 h-1.5", accent.bar)} />
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", accent.icon)}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={cn(
          "mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold",
          accent.link
        )}
      >
        Learn More
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-muted">{details}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Card>
  );
}

export function Tracks() {
  return (
    <section id="tracks" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Tracks"
          heading="Competition tracks"
          description="Choose the track that fits your team's idea."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <TrackCard
              key={track.name}
              delay={index * 0.06}
              accent={accentPalette[index % accentPalette.length]}
              {...track}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
