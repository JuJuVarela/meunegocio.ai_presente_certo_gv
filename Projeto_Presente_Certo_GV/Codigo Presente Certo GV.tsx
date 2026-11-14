import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardList, MapPin, MessageCircle, Sparkles, Store, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site/SiteHeader";
import heroImg from "@/assets/hero-gift.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Presente Certo GV — o presente certo, nas lojas da cidade" },
      {
        name: "description",
        content:
          "Conte como é a pessoa e receba sugestões de presentes em lojas locais de Governador Valadares. Fechamos tudo pelo WhatsApp.",
      },
      { property: "og:title", content: "Presente Certo GV — o presente certo, nas lojas da cidade" },
      {
        property: "og:description",
        content: "Sugestões de presentes personalizadas em lojas locais de Governador Valadares.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    icon: ClipboardList,
    title: "Conte sobre a pessoa",
    text: "Idade, gostos, hobbies, estilo, ocasião. Quanto mais detalhes, melhor a sugestão.",
  },
  {
    icon: Sparkles,
    title: "Receba sugestões na hora",
    text: "Uma lista de presentes com preço aproximado e a loja de GV onde você encontra.",
  },
  {
    icon: MessageCircle,
    title: "Feche pelo WhatsApp",
    text: "Falamos com você, tiramos dúvidas e cuidamos da compra com a loja.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:pt-16">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
              <MapPin className="size-4" /> Governador Valadares · MG
            </span>
            <h1 className="mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              O presente certo,{" "}
              <span className="text-gradient-warm">nas lojas da nossa cidade.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Descreva quem você quer presentear e a gente sugere ideias que combinam com a pessoa —
              todas encontradas no comércio local de Valadares.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/presente">Descrever a pessoa</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#como-funciona">Como funciona</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Grátis · leva uns 2 minutos</p>
          </div>
          <div className="relative animate-rise [animation-delay:120ms]">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-gradient-warm opacity-25" />
            <img
              src={heroImg}
              alt="Presente embrulhado em papel kraft com laço vermelho no balcão de uma loja local"
              width={1200}
              height={900}
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-lift"
            />
          </div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">Como funciona</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-border bg-card p-7 shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-accent text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <span className="font-display text-3xl font-semibold text-secondary">{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-8 rounded-[2rem] bg-foreground p-8 text-background sm:p-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Por que lojas locais?</h2>
              <p className="mt-4 text-background/80">
                Você compra de quem está perto, recebe mais rápido e ainda fortalece o comércio de
                Valadares. A gente faz a ponte entre você e a loja.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Store className="mt-1 size-5 shrink-0 text-secondary" />
                <span>Lojas de vários bairros: Centro, Esplanada, Grã-Duquesa, Ilha dos Araújos e mais.</span>
              </li>
              <li className="flex gap-3">
                <HeartHandshake className="mt-1 size-5 shrink-0 text-secondary" />
                <span>Atendimento de gente de verdade, pelo WhatsApp, do começo ao fim.</span>
              </li>
              <li className="flex gap-3">
                <Sparkles className="mt-1 size-5 shrink-0 text-secondary" />
                <span>Sugestões pensadas para a pessoa, não um catálogo genérico.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Vamos achar esse presente?</h2>
          <p className="mt-3 text-muted-foreground">
            Responda algumas perguntas sobre a pessoa e veja as sugestões em seguida.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-8">
            <Link to="/presente">Começar agora</Link>
          </Button>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
