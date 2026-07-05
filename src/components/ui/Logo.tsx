import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Logo() {
  return (
    <Link href="#home" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
      <Image src="/logo.svg" alt="" width={36} height={36} priority className="h-9 w-9" />
      <span className="text-lg font-bold tracking-tight text-foreground">
        {siteConfig.shortName}
      </span>
    </Link>
  );
}
