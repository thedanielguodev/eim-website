"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { iconMap, type IconName } from "@/lib/icons";
import { tracks } from "@/data/site";

function TrackCard({
  icon,
  name,
  description,
  delay,
}: {
  icon: string;
  name: string;
  description: string;
  delay: number;
}) {
  const Icon = iconMap[icon as IconName];
  return (
    <Card delay={delay} className="flex flex-col bg-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <a
        href="#requirements"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </a>
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
            <TrackCard key={track.name} delay={index * 0.06} {...track} />
          ))}
        </div>
      </Container>
    </section>
  );
}
