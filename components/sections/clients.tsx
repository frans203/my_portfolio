import Image from "next/image";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";

type Client = (typeof site.clients)[number];

function Logo({ client, region }: { client: Client; region?: string }) {
  const wordmark = client.width > client.height * 2;
  return (
    <div className="flex shrink-0 flex-col items-start gap-3 px-10 sm:px-14">
      <div className="flex h-12 items-center gap-3 opacity-70 grayscale transition-opacity hover:opacity-100">
        {wordmark ? (
          <Image src={client.logo} alt="" width={client.width} height={client.height} className="h-7 w-auto" />
        ) : (
          <>
            <Image
              src={client.logo}
              alt=""
              width={client.width}
              height={client.height}
              className="size-10 rounded-md object-cover"
            />
            <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{client.name}</span>
          </>
        )}
      </div>
      {region && (
        <span className="font-mono text-[11px] tracking-wide whitespace-nowrap text-neutral-500 uppercase">{region}</span>
      )}
    </div>
  );
}

// Destaque para "nacionais e internacionais" + slider infinito de logos (marquee).
export function Clients({ dict }: { dict: Dictionary }) {
  const c = dict.clients;
  const regionOf = (name: string) => c.items.find((i) => i.name === name)?.region;
  const row = [...site.clients, ...site.clients, ...site.clients];

  return (
    <section aria-labelledby="clients-title" className="border-t border-white/10 bg-black pt-24 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{c.eyebrow}</p>
        <RevealText
          id="clients-title"
          className="mt-6 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl"
          segments={[{ text: c.title }, { text: c.titleMuted, className: "text-neutral-500" }]}
        />
        <ul className="sr-only">
          {c.items.map((item) => (
            <li key={item.name}>
              {item.name} — {item.role} — {item.region}
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden
        className="group relative mt-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...row, ...row].map((client, i) => (
            <Logo key={`${client.name}-${i}`} client={client} region={regionOf(client.name)} />
          ))}
        </div>
      </div>
    </section>
  );
}
