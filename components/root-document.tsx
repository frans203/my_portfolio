import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import type { Dictionary } from "@/content/types";
import { jsonLd } from "@/lib/metadata";

const sans = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

// <html>/<body> compartilhados pelos dois root layouts (PT e EN).
export function RootDocument({ dict, children }: { dict: Dictionary; children: React.ReactNode }) {
  return (
    <html
      lang={dict.htmlLang}
      className={`dark ${sans.variable} ${mono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-dvh bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(dict)) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
