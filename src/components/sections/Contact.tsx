"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsappIcon, WechatIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: WhatsappIcon, label: "WhatsApp", value: "Placeholder text.", href: undefined },
  { icon: WechatIcon, label: "WeChat", value: "Placeholder text.", href: undefined },
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
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold-50 text-brand-gold-600 sm:mx-0">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
              {href ? (
                <a href={href} className="text-sm text-muted hover:text-brand-gold-600">
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
