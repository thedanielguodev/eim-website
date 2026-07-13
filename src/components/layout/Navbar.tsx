"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const showSolid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        showSolid
          ? "bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const className =
              "text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-brand-gold-600";
            return (
              <li key={link.href}>
                {link.href.startsWith("/#") ? (
                  <a href={link.href} className={className}>
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={link.href === "/" ? () => window.scrollTo({ top: 0 }) : undefined}
                    className={className}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/apply" variant="primary">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden bg-white shadow-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => {
                const className =
                  "block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-surface hover:text-brand-gold-600";
                return (
                  <li key={link.href}>
                    {link.href.startsWith("/#") ? (
                      <a href={link.href} onClick={() => setMenuOpen(false)} className={className}>
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => {
                          setMenuOpen(false);
                          if (link.href === "/") window.scrollTo({ top: 0 });
                        }}
                        className={className}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              <li className="pt-2">
                <Button href="/apply" className="w-full">
                  Apply Now
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
