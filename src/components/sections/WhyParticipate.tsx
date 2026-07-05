"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { iconMap, type IconName } from "@/lib/icons";
import { whyParticipateItems } from "@/data/site";

export function WhyParticipate() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Why Participate" heading="What you'll gain from EIM" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyParticipateItems.map((item, index) => {
            const Icon = iconMap[item.icon as IconName];
            return (
              <Card key={item.title} delay={index * 0.08} className="bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
