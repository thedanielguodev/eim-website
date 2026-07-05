function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name, className = "h-16 w-16" }: { name: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold-500 to-brand-ink-600 font-semibold text-white ${className}`}
    >
      {getInitials(name)}
    </div>
  );
}
