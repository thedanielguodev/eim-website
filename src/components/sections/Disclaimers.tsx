import { Container } from "@/components/ui/Container";
import { disclaimers } from "@/data/site";

export function Disclaimers() {
  return (
    <section className="py-20">
      <Container className="max-w-4xl">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
          Disclaimers & Policies
        </h2>

        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          {disclaimers.map((item) => (
            <div key={item.title}>
              <dt className="text-sm font-semibold text-foreground">{item.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
