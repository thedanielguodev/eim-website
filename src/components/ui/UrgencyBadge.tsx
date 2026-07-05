import { applyUrgency } from "@/data/site";
import { cn } from "@/lib/utils";

export function UrgencyBadge({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium",
        tone === "light" ? "text-muted" : "text-white/80",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green-500" />
      </span>
      {applyUrgency}
    </div>
  );
}
