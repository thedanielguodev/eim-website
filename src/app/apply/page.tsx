import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Apply",
};

export default function ApplyPage() {
  return (
    <section className="py-32 sm:py-40">
      <Container className="max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-brand-blue-50 px-4 py-1.5 text-sm font-medium text-brand-blue-600">
          Applications
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Apply to {siteConfig.shortName}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Placeholder text. The application form goes here.
        </p>
      </Container>
    </section>
  );
}
