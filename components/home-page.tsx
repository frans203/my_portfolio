import { AgentFlow } from "@/components/sections/agent-flow";
import { Cases } from "@/components/sections/cases";
import { Clients } from "@/components/sections/clients";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Founder } from "@/components/sections/founder";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Versatility } from "@/components/sections/versatility";
import type { Dictionary } from "@/content/types";

export function HomePage({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Header dict={dict} />
      <main>
        <Hero dict={dict} />
        <Clients dict={dict} />
        <Cases dict={dict} />
        <Founder dict={dict} />
        <Services dict={dict} />
        <AgentFlow dict={dict} />
        <Versatility dict={dict} />
        <Process dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
