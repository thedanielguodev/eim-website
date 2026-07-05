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
      <span className="h-2 w-2 shrink-0 rounded-full bg-brand-blue-400" />
      {applyUrgency}
    </div>
  );
}
