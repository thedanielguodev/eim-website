import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  className?: string;
};

const variants = {
  primary: "bg-brand-ink-900 text-white hover:bg-brand-ink-600 shadow-sm shadow-black/10",
  secondary:
    "bg-white text-foreground border border-border hover:border-brand-gold-500 hover:text-brand-ink-900",
  ghost: "text-foreground hover:text-brand-gold-600",
  white: "bg-white text-brand-ink-900 hover:bg-white/90 shadow-sm shadow-black/5",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const sharedClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200",
    variants[variant],
    className
  );

  // In-page section anchors use a native <a> so repeated clicks always
  // re-scroll, even when the router's client-side hash navigation would
  // otherwise no-op because the pathname hasn't changed.
  if (href.startsWith("#") || href.startsWith("/#")) {
    return (
      <a href={href} className={sharedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {children}
    </Link>
  );
}
