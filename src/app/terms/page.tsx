import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for participating in the Entrepreneur's Impact Marathon (EIM).",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-32 sm:py-40">
      <Container className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">Placeholder text.</p>
      </Container>
    </section>
  );
}
