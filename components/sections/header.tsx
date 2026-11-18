import Link from "next/link";
import { FsMark } from "@/components/brand/fs-mark";
import { ContactButton } from "@/components/contact-button";
import type { Dictionary } from "@/content/types";
import { routes, site } from "@/lib/site";

export function Header({ dict }: { dict: Dictionary }) {
  const otherLocale = dict.locale === "pt" ? "en" : "pt";
  const links = [
    { href: "#cases", label: dict.nav.cases },
    { href: "#sobre", label: dict.nav.about },
    { href: "#servicos", label: dict.nav.services },
    { href: "#agentes", label: dict.nav.agents },
    { href: "#processo", label: dict.nav.process },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={routes[dict.locale]}
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight whitespace-nowrap"
        >
          <FsMark draw className="size-6" strokeWidth={6.5} />
          {site.shortName}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-neutral-400 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href={routes[otherLocale]}
            hrefLang={otherLocale === "pt" ? "pt-BR" : "en"}
            aria-label={dict.nav.switchLanguageLabel}
            className="hidden font-mono text-xs text-neutral-400 transition-colors hover:text-white sm:inline"
          >
            {dict.nav.switchLanguage}
          </Link>
          <ContactButton message={dict.contact.whatsappMessage} size="sm">{dict.nav.cta}</ContactButton>
        </div>
      </div>
    </header>
  );
}
