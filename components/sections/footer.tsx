import Link from "next/link";
import { FsMark } from "@/components/brand/fs-mark";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";
import { routes, site, whatsappUrl } from "@/lib/site";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  const linkClass = "transition-colors hover:text-white";
  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div>
            <FsMark className="size-10" title="FS" />
            <p className="mt-6 text-2xl font-semibold tracking-tight">{site.name}</p>
            <p className="mt-3 max-w-sm text-neutral-400">{dict.footer.tagline}</p>
          </div>
          <div className="flex gap-16 text-sm">
            <div>
              <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{dict.footer.contact}</p>
              <ul className="mt-4 space-y-3 text-neutral-300">
                <li>
                  <a href={`mailto:${site.email}`} className={linkClass}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl(dict.contact.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    WhatsApp {site.whatsapp.display}
                  </a>
                </li>
                <li>
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={site.social.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">Idioma / Language</p>
              <ul className="mt-4 space-y-3 text-neutral-300">
                <li>
                  <Link href={routes.pt} hrefLang="pt-BR" className={linkClass}>
                    Português
                  </Link>
                </li>
                <li>
                  <Link href={routes.en} hrefLang="en" className={linkClass}>
                    English
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Assinatura gigante com o nome */}
        <RevealText
          as="p"
          stagger={0.08}
          className="mt-24 text-[17vw] leading-[0.85] font-semibold tracking-[-0.05em] text-neutral-800 select-none lg:text-[13.5rem]"
          segments={[{ text: "Francisco Santana" }]}
        />
        <p className="mt-10 border-t border-white/10 pt-8 text-xs text-neutral-500">
          © {year} {site.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
