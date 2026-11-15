import "../globals.css";
import { RootDocument } from "@/components/root-document";
import { pt } from "@/content/pt";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(pt);

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument dict={pt}>{children}</RootDocument>;
}
