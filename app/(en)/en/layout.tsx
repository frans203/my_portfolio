import "../../globals.css";
import { RootDocument } from "@/components/root-document";
import { en } from "@/content/en";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(en);

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument dict={en}>{children}</RootDocument>;
}
