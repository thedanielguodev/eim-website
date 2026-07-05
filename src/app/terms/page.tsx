import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <section className="py-32 sm:py-40">
      <Container className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">Placeholder text.</p>
      </Container>
    </section>
  );
}
