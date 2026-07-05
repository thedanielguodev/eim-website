"use client";

import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" heading="What past participants say" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} delay={index * 0.08} className="bg-white">
              <Quote className="h-6 w-6 text-brand-green-400" />
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={testimonial.name} className="h-11 w-11 text-sm" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.school}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
