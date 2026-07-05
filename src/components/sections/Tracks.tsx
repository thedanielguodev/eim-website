"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  delay,
  accent,
}: {
  icon: string;
  name: string;
  description: string;
  delay: number;
  accent: (typeof accentPalette)[number];
}) {
  const Icon = iconMap[icon as IconName];
  return (
    <Card delay={delay} className="relative flex flex-col overflow-hidden bg-white">
      <div aria-hidden className={cn("absolute inset-x-0 top-0 h-1.5", accent.bar)} />
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", accent.icon)}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <Link
        href="/#requirements"
        className={cn("mt-5 inline-flex items-center gap-1.5 text-sm font-semibold", accent.link)}
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
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
