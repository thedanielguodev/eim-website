"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: "(000) 000-0000", href: "tel:+10000000000" },
  { icon: MapPin, label: "Address", value: "Placeholder Address, City, State", href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          heading="Get in touch"
          description="Questions about EIM? Reach out to our team."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-6 rounded-2xl border border-border bg-white p-8 sm:grid-cols-3"
        >
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="text-center sm:text-left">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-600 sm:mx-0">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
              {href ? (
                <a href={href} className="text-sm text-muted hover:text-brand-blue-600">
                  {value}
                </a>
              ) : (
                <p className="text-sm text-muted">{value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
